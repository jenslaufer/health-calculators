import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router.js'
import en from './locales/en.json'
import de from './locales/de.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'de',
  fallbackLocale: 'en',
  messages: { en, de },
})

createApp(App).use(router).use(i18n).mount('#app')
