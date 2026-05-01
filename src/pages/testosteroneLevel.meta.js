import Component from './TestosteroneLevelCalculator.vue'
import BlogDe from './blog/TestosteronwertBerechnen.vue'
import BlogEn from './blog/en/TestosteroneLevelCalculator.vue'

export default {
  key: 'testosteroneLevel',
  component: Component,
  slugs: { de: 'testosteron-rechner', en: 'testosterone-level-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 28,
  blog: {
    de: { slug: 'testosteronwert-berechnen', component: BlogDe },
    en: { slug: 'testosterone-level-calculator', component: BlogEn },
  },
}
