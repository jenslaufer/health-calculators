import Component from './DehydrationRiskCalculator.vue'
import BlogDe from './blog/DehydrationsRisikoBerechnen.vue'
import BlogEn from './blog/en/DehydrationRiskCalculatorGuide.vue'

export default {
  key: 'dehydrationRisk',
  component: Component,
  slugs: { de: 'dehydrations-risiko-rechner', en: 'dehydration-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 33,
  blog: {
    de: { slug: 'dehydrations-risiko-berechnen', component: BlogDe },
    en: { slug: 'dehydration-risk-calculator-guide', component: BlogEn },
  },
}
