import type { App } from 'vue'

/**
 * 全局属性和方法注册
 * @param app
 */
export default function registerGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      console.log('formatTime', value)
      return `2022-10-14`
    }
  }
}
