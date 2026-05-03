import Component from './CardiovascularRiskCalculator.vue'
import BlogDe from './blog/HerzInfarktRisikoBerechnen.vue'
import BlogEn from './blog/en/CardiovascularRiskCalculator.vue'

export default {
  key: 'cardiovascularRisk',
  component: Component,
  slugs: { de: 'herz-kreislauf-risiko-rechner', en: 'cardiovascular-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 31,
  blog: {
    de: { slug: 'herz-kreislauf-risiko-berechnen', component: BlogDe },
    en: { slug: 'cardiovascular-risk-framingham', component: BlogEn },
  },
}
