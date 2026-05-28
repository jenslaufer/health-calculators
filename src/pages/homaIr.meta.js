import Component from './HomaIrCalculator.vue'
import BlogDe from './blog/HomaIrBerechnen.vue'
import BlogEn from './blog/en/HomaIrInsulinResistanceGuide.vue'

export default {
  key: 'homaIr',
  component: Component,
  slugs: { de: 'homa-ir-rechner', en: 'homa-ir-insulin-resistance' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 7.5,
  blog: {
    de: { slug: 'homa-ir-berechnen', component: BlogDe },
    en: { slug: 'homa-ir-insulin-resistance-guide', component: BlogEn },
  },
}
