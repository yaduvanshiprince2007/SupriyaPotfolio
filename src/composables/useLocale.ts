import { computed, ref } from 'vue'
import languageConfig from '../config/language.json'

export type LocaleKey = 'en' | 'hi'
const locale = ref<LocaleKey>(languageConfig.defaultLocale as LocaleKey)
const translations = computed(() => {
  return languageConfig.translations[locale.value] ?? languageConfig.translations.en
})

export function useLocale() {
  function setLocale(value: LocaleKey) {
    locale.value = value
  }

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'hi' : 'en'
  }

  return {
    locale,
    translations,
    setLocale,
    toggleLocale,
    availableLocales: languageConfig.locales as LocaleKey[]
  }
}
