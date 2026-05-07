import Component from './WhtrRechnerCalculator.vue'
import BlogDe from './blog/WhtrBerechnen.vue'
import BlogEn from './blog/en/CalculateWaistToHeightRatio.vue'

export default {
  key: 'whtrRechner',
  component: Component,
  slugs: { de: 'whtr-rechner', en: 'waist-to-height-ratio-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 3.5,
  blog: {
    de: { slug: 'whtr-berechnen', component: BlogDe },
    en: { slug: 'calculate-waist-to-height-ratio', component: BlogEn },
  },
}
