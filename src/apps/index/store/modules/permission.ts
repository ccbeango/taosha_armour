/*
 * @Author       : ccbean
 * @Date         : 2022-10-15 11:36:28
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-15 18:04:37
 * @Description  : 权限控制Store
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Menu, AppRouteRecordRaw } from '@index/router/types'

import { asyncRoutes } from '@index/router/routes'

interface TreeHelperConfig {
  id: string
  pid: string
  children: string
  /**
   * 贪婪模式，默认关闭
   * - 开启，当前item判断为false，但有children，则返回item
   * - 关闭，当前item判断为false，不返回item
   */
  eager: boolean
}

const DEFAULT_CONFIG: TreeHelperConfig = {
  id: 'id',
  children: 'children',
  pid: 'pid',
  eager: false
}

const getConfig = (config: Partial<TreeHelperConfig>) => ({
  ...DEFAULT_CONFIG,
  ...config
})

/**
 * 递归遍历树结构
 * @param {any} tree 树结构
 * @param {function} func 过滤函数
 */

function filter<T = any>(
  tree: T[],
  func: (n: any) => boolean,
  config: Partial<TreeHelperConfig> = {}
) {
  const { children, eager } = getConfig(config)

  const listFilter = (list: T[]) => {
    return list
      .map((node: any) => ({ ...node }))
      .filter(item => {
        const bool = func(item)
        // 遍历children
        if (item[children] && (eager || (!eager && bool))) {
          // 命中条件：有children；开启了贪婪模式 或 关闭贪婪模式自身为true
          item[children] = listFilter(item[children])
        }

        return !eager ? bool : bool || (item[children] && item[children].length)
      })
  }

  return listFilter(tree)
}

/**
 * @description: 路由转换成菜单
 * @param {AppRouteRecordRaw} routeList
 * @return {*}
 */
function transformRouteToMenu(routeList: AppRouteRecordRaw[]) {
  const conversion = (item: AppRouteRecordRaw) => {
    const { meta: { title, hideMenu = false } = {} } = item
    return {
      ...(item.meta || {}),
      meta: item.meta,
      name: title,
      hideMenu,
      path: item.path,
      ...(item.redirect ? { redirect: item.redirect } : {})
    }
  }

  const recuriseMenu = (routeList: AppRouteRecordRaw[]): any[] => {
    return routeList.map(item => {
      if (item.children) {
        return {
          ...conversion(item),
          children: recuriseMenu(item.children)
        }
      } else {
        return conversion(item)
      }
    })
  }

  return recuriseMenu(routeList)
}

export const usePermissionStore = defineStore('permission', () => {
  const menus = ref<Menu[]>([])

  /**
   * @description: 构建路由
   * @return {*}
   */
  async function buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
    let routes: AppRouteRecordRaw[] = []

    const roleList = ['super']

    // 路由角色过滤器
    const routeRoleFilter = (route: AppRouteRecordRaw) => {
      const roles = route.meta?.roles
      if (!roles) return true
      // 需角色判断路由，进行角色判断
      return roleList.some(role => roles.includes(role))
    }

    // 过滤掉特定角色可访问的route
    routes = filter(asyncRoutes, routeRoleFilter)
    // 将路由转换成菜单
    const menuList = transformRouteToMenu(routes)
    menus.value = menuList

    return routes
  }

  return {
    menus,

    buildRoutesAction
  }
})
