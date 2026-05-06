import Component from './AnemiaRiskCalculator.vue'
import BlogDe from './blog/AnaemieRisikoBerechnen.vue'
import BlogEn from './blog/en/AnemiaRiskCalculatorGuide.vue'

export default {
  key: 'anemiaRisk',
  component: Component,
  slugs: { de: 'anaemie-risiko-rechner', en: 'anemia-risk-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 36,
  blog: {
    de: { slug: 'anaemie-risiko-berechnen', component: BlogDe },
    en: { slug: 'anemia-risk-calculator-guide', component: BlogEn },
  },
}
