import Component from './StrokeRiskCalculator.vue'
import BlogDe from './blog/SchlaganfallRisikoBerechnen.vue'
import BlogEn from './blog/en/StrokeRiskCalculatorChaDsVasc.vue'

export default {
  key: 'strokeRisk',
  component: Component,
  slugs: { de: 'schlaganfall-risiko-rechner', en: 'stroke-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 31,
  blog: {
    de: { slug: 'schlaganfall-risiko-berechnen', component: BlogDe },
    en: { slug: 'stroke-risk-calculator-cha2ds2-vasc', component: BlogEn },
  },
}
