export type LocaleType = 'zh_CN' | 'en'

export interface LocaleConfig {
  showPicker: boolean
  locale: LocaleType
  fallback: LocaleType
  availableLocales: LocaleType[]
}
