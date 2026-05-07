import Component from './OsteoporosisRiskCalculator.vue'
import BlogDe from './blog/OsteoporoseRisikoBerechnen.vue'
import BlogEn from './blog/en/OsteoporosisRiskCalculatorGuide.vue'

export default {
  key: 'osteoporosisRisk',
  component: Component,
  slugs: { de: 'osteoporose-risiko-rechner', en: 'osteoporosis-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 37,
  blog: {
    de: { slug: 'osteoporose-risiko-berechnen', component: BlogDe },
    en: { slug: 'osteoporosis-risk-calculator-guide', component: BlogEn },
  },
}
