import Component from './Vo2MaxCalculator.vue'
import BlogDe from './blog/Vo2MaxBerechnen.vue'
import BlogEn from './blog/en/CalculateVo2Max.vue'

export default {
  key: 'vo2Max',
  component: Component,
  slugs: { de: 'vo2max-rechner', en: 'vo2max-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 3,
  oldRedirect: '/vo2max',
  blog: {
    de: { slug: 'vo2max-berechnen', component: BlogDe },
    en: { slug: 'calculate-vo2max', component: BlogEn },
  },
}
