/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 10:01:22
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 14:23:36
 * @Description  : 权限守卫
 */
import type { Router, RouteRecordRaw } from 'vue-router'
import { useUserStore, usePermissionStore } from '@index/store'

import { RootRoute } from '../routes'
import { PageEnum } from '@index/enums/pageEnum'

import { PAGE_NOT_FOUND_ROUTE } from '@index/router/routes/basic'

const ROOT_PATH = RootRoute.path
const LOGIN_PATH = PageEnum.BASE_LOGIN

const whitePathList: PageEnum[] = [LOGIN_PATH]

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  router.beforeEach(async (to, from) => {
    // 访问根路由，如果用户定义了家路由，直接跳转
    if (from.path === ROOT_PATH && userStore.getUserInfo.homePath) {
      return userStore.getUserInfo.homePath
    }

    const token = userStore.getToken

    // 白名单路由可直接跳转
    if (whitePathList.includes(to.path as PageEnum)) {
      // 登录页
      if (token && to.path === LOGIN_PATH) {
        const isSessionTimeout = false
        await userStore.afterLoginAction()
        if (!isSessionTimeout) {
          return { path: to.query.redirect || ROOT_PATH }
        }
      }
      // 其它页
      return true
    }

    // 无token
    if (!token) {
      if (to.meta.auth === false) {
        return true
      }
      // 登录页
      return {
        path: LOGIN_PATH,
        replace: true,
        query: to.path ? { redirect: to.path } : {}
      }
    }

    // 已动态构建路由
    if (permissionStore.isDynamicAddedRoute) {
      return true
    }

    // 未构建动态路由，则构建路由
    const routes = await permissionStore.buildRoutesAction()
    routes.forEach(route => router.addRoute(route as unknown as RouteRecordRaw))

    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw)

    permissionStore.setDynamicAddedRouteAction(true)

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 404
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      return { path: to.fullPath, replace: true, query: to.query }
    } else {
      // 构建路由后
      const redirectPath = (from.query.redirect || to.path) as string
      const redirect = decodeURIComponent(redirectPath)
      return to.path === redirect
        ? { ...to, replace: true }
        : { path: redirect }
    }
  })
}
