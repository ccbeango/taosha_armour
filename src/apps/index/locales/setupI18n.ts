/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-17 14:49:48
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-17 21:42:37
 * @Description  :
 */
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'

async function createI18nOptions(): Promise<I18nOptions> {
  const defaultLocale = await import('./lang/zh_CN')
  const message = defaultLocale.default.message ?? {}
  console.log('这时', { ...message })
  console.log('这时2', { message })

  return {
    locale: 'zh_CN',
    fallbackLocale: 'zh_CN',
    messages: { zh_CN: { ...message } },
    availableLocales: ['zh_CN', 'en']
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()

  const i18n = createI18n(options)

  app.use(i18n)
}
