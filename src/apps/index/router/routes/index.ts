/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 10:01:22
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-19 12:56:17
 * @Description  :
 */
import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types'

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic'

import { t } from '@/router/utils'

// Vite3: import.meta.glob(path, { eager: true }) 直接引入所有的模块
// const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

// Vite2: import.meta.globEager() 直接引入所有的模块
const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: AppRouteModule[] = []

// 加入到路由集合中
Object.keys(modules).forEach(key => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList]

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root'
  }
}

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/HomeView.vue'),
  meta: {
    title: t('routes.basic.login')
  }
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
]
