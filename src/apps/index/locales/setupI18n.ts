/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-17 14:49:48
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 20:01:00
 * @Description  : i18n
 */
import { createI18n } from 'vue-i18n'
import { localeSetting } from '@/constants/localeConstant'

import type { App } from 'vue'
import type { I18nOptions } from 'vue-i18n'
import type { LocaleType } from '#/config'

const { fallback, availableLocales } = localeSetting

let i18n: ReturnType<typeof createI18n>

function setHtmlPageLang(locale: LocaleType) {
  document.querySelector('html')?.setAttribute('lang', locale)
}

function setI18nLanguage(locale: LocaleType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as any).value = locale
  }
  setHtmlPageLang(locale)
}

/**
 * 一次性加载所有语言包
 * @return {*}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function loadLangPackageSync() {
  const messages: Recordable = {}
  const localeModules = import.meta.globEager('./lang/*.ts')
  for (const entryPath of Object.keys(localeModules)) {
    const localeName = entryPath.match(/([^/]+)\.ts$/)![1]
    const message = localeModules[entryPath].default.message ?? {}
    messages[localeName] = message
  }
  return messages
}

/**
 * 已加载语言包
 */
const loadedLangPkgs: LocaleType[] = []
/**
 * 按需加载语言包
 */
async function loadLangPackageAsync(locale: LocaleType) {
  const localeModule = await import(`./lang/${locale}.ts`)
  const message = localeModule.default.message ?? {}

  loadedLangPkgs.push(locale)

  return message
}
/**
 * 切换语言
 * @param {LocaleType} locale
 * @return {*}
 */
export async function changeLocaleLang(locale: LocaleType) {
  const globalI18n = i18n.global

  if (globalI18n.locale === locale) {
    return locale
  }

  if (!loadedLangPkgs.includes(locale)) {
    // 异步加载语言包
    const message = await loadLangPackageAsync(locale)
    globalI18n.setLocaleMessage(locale, message)
  }

  setI18nLanguage(locale)

  return locale
}

/**
 * 生成i18n初始化options
 * @return {*}
 */
async function createI18nOptions(): Promise<I18nOptions> {
  // TODO：读取用户设置的locale
  const locale = 'zh_CN'
  // const messages = loadLangPackageSync()
  const message = await loadLangPackageAsync(locale)
  setHtmlPageLang(locale)

  return {
    locale,
    fallbackLocale: fallback,
    messages: { [locale]: message },
    availableLocales: availableLocales
  }
}

/**
 * 安装i18n
 * @param {App} app
 * @return {*}
 */
export async function setupI18n(app: App) {
  const options = await createI18nOptions()

  i18n = createI18n(options)

  app.use(i18n)
}
