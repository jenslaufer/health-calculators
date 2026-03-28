import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router.js'
import en from './locales/en.json'
import de from './locales/de.json'

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: { en, de },
})

router.beforeEach((to) => {
  const locale = to.meta.locale
  if (locale && i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale
  }
})

router.afterEach((to) => {
  const locale = to.meta.locale
  if (locale) {
    document.documentElement.setAttribute('lang', locale)
  }
})

createApp(App).use(router).use(i18n).mount('#app')
