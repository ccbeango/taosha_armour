import type { Router } from 'vue-router'
import nProgress from 'nprogress'

import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
  createPageChangeGuard(router)
  createPageLoadingGuard(router)
  createProgressGuard(router)
  createPermissionGuard(router)
}

/**
 * 页面路由变更守卫
 * @param router
 */
function createPageChangeGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>()

  router.beforeEach(async to => {
    // 记录页面是否加载过
    to.meta.loaded = !!loadedPageMap.get(to.path)

    // notify route changes 页面路由变更通知
    // setRouteChange

    return true
  })

  router.afterEach(async to => {
    loadedPageMap.set(to.path, true)
  })
}

/**
 * 页面Loading状态守卫
 * @param router
 */
function createPageLoadingGuard(router: Router) {
  // TODO: 可配置开启、关闭
  router.beforeEach(async to => {
    if (to.meta.loaded) {
      return true
    }
  })

  router.afterEach(async () => {})
}

/**
 * 顶部进度条守卫
 * @param router
 */
function createProgressGuard(router: Router) {
  // TODO: 可配置开启、关闭
  router.beforeEach(async to => {
    if (to.meta.loaded) {
      return true
    }
    nProgress.start()
  })

  router.afterEach(async () => {
    nProgress.done()
    return true
  })
}
