import type { App } from 'vue'
import registerGlobalProperties from './registerProperties'

/**
 * 全局注册Vue相关设置
 * - 注册全局属性$filter
 */
export default function setupGlobalRegister(app: App) {
  app.use(registerGlobalProperties)
}
