import Component from './Gad7Calculator.vue'
import BlogDe from './blog/Gad7AngstTestRechner.vue'
import BlogEn from './blog/en/Gad7AnxietyTestCalculator.vue'

export default {
  key: 'gad7',
  component: Component,
  slugs: { de: 'gad-7-angst-test', en: 'gad-7-anxiety-test' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 120,
  blog: {
    de: { slug: 'gad-7-angst-test-rechner', component: BlogDe },
    en: { slug: 'gad-7-anxiety-test-calculator', component: BlogEn },
  },
}
