import Component from './BodyTemperatureCalculator.vue'
import BlogDe from './blog/KoerpertemperaturRechner.vue'
import BlogEn from './blog/en/BodyTemperatureCalculatorBlog.vue'

export default {
  key: 'bodyTemperature',
  component: Component,
  slugs: { de: 'koerpertemperatur-rechner', en: 'body-temperature-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 22,
  blog: {
    de: { slug: 'koerpertemperatur-berechnen', component: BlogDe },
    en: { slug: 'body-temperature-calculator', component: BlogEn },
  },
}
