import Component from './HepatitisRiskCalculator.vue'
import BlogDe from './blog/HepatitisRisikoBerechnen.vue'
import BlogEn from './blog/en/HepatitisRiskCalculatorGuide.vue'

export default {
  key: 'hepatitisRisk',
  component: Component,
  slugs: { de: 'hepatitis-risiko-rechner', en: 'hepatitis-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 38,
  blog: {
    de: { slug: 'hepatitis-risiko-berechnen', component: BlogDe },
    en: { slug: 'hepatitis-risk-calculator-guide', component: BlogEn },
  },
}
