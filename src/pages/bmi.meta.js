import Component from './BmiCalculator.vue'
import BlogDe from './blog/BmiBerechnen.vue'
import BlogEn from './blog/en/CalculateBmi.vue'

export default {
  key: 'bmi',
  component: Component,
  slugs: { de: 'bmi-rechner', en: 'bmi-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 0,
  oldRedirect: '/bmi',
  blog: {
    de: { slug: 'bmi-berechnen', component: BlogDe },
    en: { slug: 'calculate-bmi', component: BlogEn },
  },
}
