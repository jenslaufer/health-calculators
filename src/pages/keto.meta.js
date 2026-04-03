import Component from './KetoCalculator.vue'
import BlogDe from './blog/KetoRechner.vue'
import BlogEn from './blog/en/KetoCalculatorGuide.vue'

export default {
  key: 'keto',
  component: Component,
  slugs: { de: 'keto-rechner', en: 'keto-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 8,
  oldRedirect: '/keto',
  blog: {
    de: { slug: 'keto-rechner', component: BlogDe },
    en: { slug: 'keto-calculator-guide', component: BlogEn },
  },
}
