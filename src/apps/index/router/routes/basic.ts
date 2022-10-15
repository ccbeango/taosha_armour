/*
 * @Author       : ccbean
 * @Date         : 2022-10-15 11:21:54
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-15 16:25:29
 * @Description  :
 */
import type { AppRouteRecordRaw } from '@index//router/types'
import { t } from '@index//router/utils'
import {
  REDIRECT_NAME,
  LAYOUT,
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME
} from '@index//router/constant'

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
    // roles: ['super']
    roles: ['man']
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
}

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@index/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true
      }
    }
  ]
}

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: LAYOUT,
  redirect: '/error-log/list',
  meta: {
    title: 'ErrorLog',
    hideBreadcrumb: true,
    hideChildrenInMenu: true
  },
  children: [
    {
      path: 'list',
      name: 'ErrorLogList',
      component: () => import('@index/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.basic.errorLogList'),
        hideBreadcrumb: true,
        currentActiveMenu: '/error-log'
      }
    }
  ]
}
