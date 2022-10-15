import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import { setupStore } from './store'
import setupGlobalRegister from './global'
import { router, setupRouter, setupRouterGuard } from './router'
import setupGlobalDirevtives from './directives'

/**
 * 启动
 */
function fireUp() {
  const app = createApp(App)

  // store
  setupStore(app)

  // Vue全局相关设置
  setupGlobalRegister(app)

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
