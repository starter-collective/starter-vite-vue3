import { i18n } from '@/modules/vue-i18n'

/**
 * Locale composable for vue-i18n.
 */
export function useLocale() {
  const { locale, messages, t } = i18n.global

  function toggleLocale(_locale?: string) {
    if (!_locale) {
      const locales = Object.keys(messages.value)
      _locale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

    locale.value = _locale as string
    setLocaleTitle()
  }

  const title = useTitle()

  function setLocaleTitle(locale?: string, isKey: boolean = false) {
    const _t = isKey ? t(locale || 'app.title') : locale || t('app.title')
    title.value = _t === t('app.title') ? _t : `${_t} - ${t('app.title')}`
  }

  return {
    toggleLocale,
    setLocaleTitle,
  }
}
