import Component from './HeartFailureRiskCalculator.vue'
import BlogDe from './blog/HerzinsuffizienzRisikoBerechnen.vue'
import BlogEn from './blog/en/HeartFailureRiskCalculator.vue'

export default {
  key: 'heartFailureRisk',
  component: Component,
  slugs: { de: 'herzinsuffizienz-risiko-rechner', en: 'heart-failure-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 34,
  blog: {
    de: { slug: 'herzinsuffizienz-risiko-berechnen', component: BlogDe },
    en: { slug: 'heart-failure-risk-calculator', component: BlogEn },
  },
}
