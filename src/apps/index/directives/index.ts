/*
 * @Author       : ccbean
 * @Date         : 2022-10-19 19:45:36
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 19:59:37
 * @Description  :
 */
import type { App } from 'vue'

/**
 * 注册全局指令
 */
export default function setupGlobalDirevtives(app: App) {
  // console.log('注册全局指令')
  // 测试
  app.directive('focus', {
    mounted: el => el.focus()
  })
}
