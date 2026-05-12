import Component from './PearlIndexRechnerCalculator.vue'
import BlogDe from './blog/PearlIndexBerechnen.vue'
import BlogEn from './blog/en/PearlIndexCalculatorGuide.vue'

export default {
  key: 'pearlIndexRechner',
  component: Component,
  slugs: { de: 'pearl-index-rechner', en: 'pearl-index-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 1.6,
  blog: {
    de: { slug: 'pearl-index-berechnen', component: BlogDe },
    en: { slug: 'pearl-index-calculator-guide', component: BlogEn },
  },
}
