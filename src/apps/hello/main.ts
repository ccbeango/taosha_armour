/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-11 09:29:36
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 17:52:02
 * @Description  :
 */
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello/test',
      component: () => import('./HelloTest.vue')
    }
  ]
})

const app = createApp(App).use(router)

app.mount('#app')
