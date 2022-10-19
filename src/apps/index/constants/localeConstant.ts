/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-18 16:03:07
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-18 16:18:15
 * @Description  : 多语言相关常量定义
 */
import type { LocaleType, LocaleConfig } from '#/config'

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en'
}

/**
 * 多语言配置
 */
export const localeSetting: LocaleConfig = {
  showPicker: true,
  locale: LOCALE.ZH_CN,
  fallback: LOCALE.ZH_CN,
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US]
}

/**
 * 多语言设置列表
 */
export const localeList = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN
  },
  {
    text: 'English',
    event: LOCALE.EN_US
  }
]
