/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-11 09:29:36
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-17 17:17:52
 * @Description  :
 */
import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import { setupStore } from './store'
import setupGlobalRegister from './global'
import { router, setupRouter, setupRouterGuard } from './router'
import setupGlobalDirevtives from './directives'
import { setupI18n } from './locales/setupI18n'
import { createI18n } from 'vue-i18n'

/**
 * 启动
 */
async function fireUp() {
  const app = createApp(App)

  // store
  setupStore(app)

  // Vue全局相关设置
  setupGlobalRegister(app)

  // 注册全局组件

  // 注册多语言配置
  // const i18n = createI18n({
  //   locale: 'en', // 设置地区
  //   messages: {
  //     en: {
  //       message: {
  //         hi: 'hello world'
  //       }
  //     }
  //   } // 设置地区信息
  // })
  // app.use(i18n)
  await setupI18n(app)

  // 路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  // 全局指令
  setupGlobalDirevtives(app)

  // 挂载
  app.mount('#app')
}

fireUp()
