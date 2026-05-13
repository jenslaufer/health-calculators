import Component from './BreastCancerRiskCalculator.vue'
import BlogDe from './blog/BrustkrebsRisikoBerechnen.vue'
import BlogEn from './blog/en/BreastCancerRiskCalculatorGuide.vue'

export default {
  key: 'breastCancerRisk',
  component: Component,
  slugs: { de: 'brustkrebs-risiko-rechner', en: 'breast-cancer-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 110,
  blog: {
    de: { slug: 'brustkrebs-risiko-berechnen', component: BlogDe },
    en: { slug: 'breast-cancer-risk-calculator-guide', component: BlogEn },
  },
}
