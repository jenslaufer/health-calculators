import Component from './Phq9Calculator.vue'
import BlogDe from './blog/Phq9DepressionsTestRechner.vue'
import BlogEn from './blog/en/Phq9DepressionTestCalculator.vue'

export default {
  key: 'phq9',
  component: Component,
  slugs: { de: 'phq-9-depressionstest', en: 'phq-9-depression-test' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 125,
  blog: {
    de: { slug: 'phq-9-depressionstest-rechner', component: BlogDe },
    en: { slug: 'phq-9-depression-test-calculator', component: BlogEn },
  },
}
