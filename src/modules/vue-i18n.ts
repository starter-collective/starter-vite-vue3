import messages from '@intlify/unplugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

const savedLocale = useStorage('i18n-redirected', 'en')

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale.value,
  messages,
})

export default i18n
