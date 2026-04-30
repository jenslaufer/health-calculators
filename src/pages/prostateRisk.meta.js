import Component from './ProstateRiskCalculator.vue'
import BlogDe from './blog/ProstatakrebsRisikoBerechnen.vue'
import BlogEn from './blog/en/ProstateCancerRisk.vue'

export default {
  key: 'prostateRisk',
  component: Component,
  slugs: { de: 'prostatakrebs-risiko-rechner', en: 'prostate-cancer-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 27,
  blog: {
    de: { slug: 'prostatakrebs-risiko-berechnen', component: BlogDe },
    en: { slug: 'prostate-cancer-risk', component: BlogEn },
  },
}
