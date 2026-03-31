import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import routes from './routes.js'
import en from './locales/en.json'
import de from './locales/de.json'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, isClient }) => {
    const i18n = createI18n({
      legacy: false,
      locale: 'de',
      fallbackLocale: 'en',
      messages: { en, de },
    })
    app.use(i18n)

    router.beforeEach((to) => {
      const locale = to.meta.locale
      if (locale && i18n.global.locale.value !== locale) {
        i18n.global.locale.value = locale
      }
    })

    if (isClient) {
      router.afterEach((to) => {
        const locale = to.meta.locale
        if (locale) {
          document.documentElement.setAttribute('lang', locale)
        }
      })
    }
  }
)
