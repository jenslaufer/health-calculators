import Component from './PregnancyWeightGainCalculator.vue'
import BlogDe from './blog/GewichtszunahmeSchwanerschaft.vue'
import BlogEn from './blog/en/PregnancyWeightGainGuide.vue'

export default {
  key: 'pregnancyWeightGain',
  component: Component,
  slugs: { de: 'gewichtszunahme-schwangerschaft', en: 'pregnancy-weight-gain-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 1,
  oldRedirect: '/pregnancy-weight-gain',
  blog: {
    de: { slug: 'gewichtszunahme-schwangerschaft-berechnen', component: BlogDe },
    en: { slug: 'pregnancy-weight-gain-guide', component: BlogEn },
  },
}
