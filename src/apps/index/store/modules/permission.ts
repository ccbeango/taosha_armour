/*
 * @Author       : ccbean
 * @Date         : 2022-10-15 11:36:28
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 17:50:18
 * @Description  : 权限控制Store
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Menu, AppRouteRecordRaw } from '@/router/types'

import { isUrl } from '@/utils/is'
import { asyncRoutes } from '@/router/routes'

interface TreeHelperConfig {
  id: string
  pid: string
  children: string
}

const DEFAULT_CONFIG: TreeHelperConfig = {
  id: 'id',
  children: 'children',
  pid: 'pid'
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
  const { children } = getConfig(config)

  const listFilter = (list: T[]) => {
    return list
      .map((node: any) => ({ ...node }))
      .filter(item => {
        const bool = func(item)
        // 遍历children
        if (item[children] && bool) {
          item[children] = listFilter(item[children])
        }

        return bool
      })
  }

  return listFilter(tree)
}

/**
 * 修正菜单路径
 *  - 转换route中相对路径为绝对路径
 * @param {Menu} menus
 * @param {*} parentPath
 * @return {*}
 */
function joinParentPath(menus: Menu[], parentPath = '') {
  const res: Menu[] = []
  for (const menu of menus) {
    let item = { ...menu }
    if (!menu.path.startsWith('/') && !isUrl(menu.path)) {
      // 路径不以 / 开头，也不是 url，path属性添加父路径 parentPath
      item = { ...menu, path: `${parentPath}/${menu.path}` }
    }
    res.push(item)

    if (menu?.children?.length) {
      item.children = joinParentPath(menu.children, menu.path)
    }
  }

  return res
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
  /** 前端生成的菜单Tree，前端菜单模式 */ // TODO：后续可扩展后端控制菜单
  const frontMenus = ref<Menu[]>([])
  /** 是否已添加动态路由 */
  const isDynamicAddedRoute = ref(false)

  function setDynamicAddedRouteAction(added: boolean) {
    isDynamicAddedRoute.value = added
  }

  /**
   * 构建路由
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
    frontMenus.value = joinParentPath(menuList)

    return routes
  }

  return {
    frontMenus,
    isDynamicAddedRoute,

    // Actions
    setDynamicAddedRouteAction,
    buildRoutesAction
  }
})
