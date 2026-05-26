import Component from './PediatricBmiCalculator.vue'
import BlogDe from './blog/KinderBmiBerechnen.vue'
import BlogEn from './blog/en/PediatricBmiGuide.vue'

export default {
  key: 'pediatricBmi',
  component: Component,
  slugs: { de: 'kinder-bmi-rechner', en: 'pediatric-bmi' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 15.2,
  blog: {
    de: { slug: 'kinder-bmi-berechnen', component: BlogDe },
    en: { slug: 'pediatric-bmi-guide', component: BlogEn },
  },
}
