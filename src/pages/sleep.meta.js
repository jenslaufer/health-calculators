import Component from './SleepCycleCalculator.vue'
import BlogDe from './blog/SchlafzyklenBerechnen.vue'
import BlogEn from './blog/en/CalculateSleepCycles.vue'

export default {
  key: 'sleep',
  component: Component,
  slugs: { de: 'schlafzyklen-rechner', en: 'sleep-cycle-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 1,
  oldRedirect: '/sleep',
  blog: {
    de: { slug: 'schlafzyklen-berechnen', component: BlogDe },
    en: { slug: 'calculate-sleep-cycles', component: BlogEn },
  },
}
