import Component from './IdealWeightCalculator.vue'
import BlogDe from './blog/IdealgewichtBerechnen.vue'
import BlogEn from './blog/en/CalculateIdealWeight.vue'

export default {
  key: 'idealWeight',
  component: Component,
  slugs: { de: 'idealgewicht-rechner', en: 'ideal-weight-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 2,
  oldRedirect: '/ideal-weight',
  blog: {
    de: { slug: 'idealgewicht-berechnen', component: BlogDe },
    en: { slug: 'calculate-ideal-weight', component: BlogEn },
  },
}
