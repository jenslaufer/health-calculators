import Component from './PulsePressureCalculator.vue'
import BlogDe from './blog/PulsdruckBerechnen.vue'
import BlogEn from './blog/en/PulsePressureGuide.vue'

export default {
  key: 'pulsePressure',
  component: Component,
  slugs: { de: 'pulsdruck-rechner', en: 'pulse-pressure' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 2.6,
  blog: {
    de: { slug: 'pulsdruck-berechnen', component: BlogDe },
    en: { slug: 'pulse-pressure-guide', component: BlogEn },
  },
}
