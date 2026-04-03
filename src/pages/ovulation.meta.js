import Component from './OvulationCalculator.vue'
import BlogDe from './blog/EisprungBerechnen.vue'
import BlogEn from './blog/en/CalculateOvulation.vue'

export default {
  key: 'ovulation',
  component: Component,
  slugs: { de: 'eisprung-rechner', en: 'ovulation-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 1,
  oldRedirect: '/ovulation',
  blog: {
    de: { slug: 'eisprung-berechnen', component: BlogDe },
    en: { slug: 'calculate-ovulation', component: BlogEn },
  },
}
