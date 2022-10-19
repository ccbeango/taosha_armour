/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-11 09:29:36
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-19 14:43:06
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

/**
 * 启动
 */
async function fireUp() {
  const app = createApp(App)

  // store
  setupStore(app)

  // Vue全局相关设置
  setupGlobalRegister(app)

  // 全局组件

  // 全局指令
  setupGlobalDirevtives(app)

  // 注册多语言配置
  await setupI18n(app)

  // 路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  // 全局错误处理

  // 挂载
  app.mount('#app')
}

fireUp()
