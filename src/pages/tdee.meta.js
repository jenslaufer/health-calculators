import Component from './TdeeCalculator.vue'
import BlogDe from './blog/TdeeBerechnen.vue'
import BlogEn from './blog/en/CalculateTdee.vue'

export default {
  key: 'tdee',
  component: Component,
  slugs: { de: 'tdee-rechner', en: 'tdee-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 1,
  oldRedirect: '/tdee',
  blog: {
    de: { slug: 'tdee-berechnen', component: BlogDe },
    en: { slug: 'calculate-tdee', component: BlogEn },
  },
}
