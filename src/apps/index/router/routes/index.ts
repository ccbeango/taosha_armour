import type { AppRouteRecordRaw, AppRouteModule } from '@index/router/types'

import {
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE
} from '@index/router/routes/basic'

import { mainOutRoutes } from './mainOut'
import { t } from '@index/router/utils'

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
  component: () => import('@index/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login')
  }
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
]
