import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translations from '../i18n/locales'

const i18nConfig = {
  resources: translations,
  fallbackLng: 'en-US',
  defaultNS: 'translations',
  react: {
    useSuspense: false
  }
}

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)

export default i18n
