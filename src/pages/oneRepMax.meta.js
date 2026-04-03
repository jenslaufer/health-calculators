import Component from './OneRepMaxCalculator.vue'
import BlogDe from './blog/OneRepMaxBerechnen.vue'
import BlogEn from './blog/en/CalculateOneRepMax.vue'

export default {
  key: 'oneRepMax',
  component: Component,
  slugs: { de: 'one-rep-max-rechner', en: 'one-rep-max-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 4,
  oldRedirect: '/one-rep-max',
  blog: {
    de: { slug: 'one-rep-max-berechnen', component: BlogDe },
    en: { slug: 'calculate-one-rep-max', component: BlogEn },
  },
}
