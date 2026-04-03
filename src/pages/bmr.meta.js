import Component from './BmrCalculator.vue'
import BlogDe from './blog/GrundumsatzBerechnen.vue'
import BlogEn from './blog/en/CalculateBmr.vue'

export default {
  key: 'bmr',
  component: Component,
  slugs: { de: 'bmr-rechner', en: 'bmr-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 0,
  oldRedirect: '/bmr',
  blog: {
    de: { slug: 'grundumsatz-berechnen', component: BlogDe },
    en: { slug: 'calculate-bmr', component: BlogEn },
  },
}
