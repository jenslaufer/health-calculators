import Component from './CorrectedCalciumCalculator.vue'
import BlogDe from './blog/KorrigiertesCalciumRechner.vue'
import BlogEn from './blog/en/CorrectedCalciumCalculator.vue'

export default {
  key: 'correctedCalcium',
  component: Component,
  slugs: { de: 'korrigiertes-calcium-rechner', en: 'corrected-calcium-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 99,
  blog: {
    de: { slug: 'korrigiertes-calcium-rechner', component: BlogDe },
    en: { slug: 'corrected-calcium-calculator', component: BlogEn },
  },
}
