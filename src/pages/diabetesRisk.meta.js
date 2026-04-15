import Component from './DiabetesRiskCalculator.vue'
import BlogDe from './blog/DiabetesRisikoBerechnen.vue'
import BlogEn from './blog/en/DiabetesRiskScore.vue'

export default {
  key: 'diabetesRisk',
  component: Component,
  slugs: { de: 'diabetes-risiko-rechner', en: 'diabetes-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 17,
  oldRedirect: '/diabetes-risiko',
  blog: {
    de: { slug: 'diabetes-risiko-berechnen', component: BlogDe },
    en: { slug: 'diabetes-risk-score', component: BlogEn },
  },
}
