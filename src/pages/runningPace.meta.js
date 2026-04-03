import Component from './RunningPaceCalculator.vue'
import BlogDe from './blog/LauftempoBerechnen.vue'
import BlogEn from './blog/en/CalculateRunningPace.vue'

export default {
  key: 'runningPace',
  component: Component,
  slugs: { de: 'lauftempo-rechner', en: 'running-pace-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 5,
  oldRedirect: '/running-pace',
  blog: {
    de: { slug: 'lauftempo-berechnen', component: BlogDe },
    en: { slug: 'calculate-running-pace', component: BlogEn },
  },
}
