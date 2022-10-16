/*
 * @Author       : ccbean
 * @Date         : 2022-10-14 21:46:51
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 15:37:17
 * @Description  :
 */
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export { setupRouterGuard } from './guard'

import { basicRoutes } from './routes'

basicRoutes.unshift({
  path: '/',
  name: 'home',
  component: HomeView
} as any)

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: false,
  // 切换页面始终滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: basicRoutes as unknown as RouteRecordRaw[]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})

/**
 * 配置Router
 * @param app
 */
export function setupRouter(app: App) {
  app.use(router)
}
