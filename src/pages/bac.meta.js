import Component from './BacCalculator.vue'
import BlogDe from './blog/PromilleBerechnen.vue'
import BlogEn from './blog/en/BloodAlcoholCalculator.vue'

export default {
  key: 'bac',
  component: Component,
  slugs: { de: 'promillerechner', en: 'blood-alcohol-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 6,
  oldRedirect: '/bac',
  blog: {
    de: { slug: 'promille-berechnen', component: BlogDe },
    en: { slug: 'blood-alcohol-calculator', component: BlogEn },
  },
}
