import Component from './BiologicalAgeCalculator.vue'
import BlogDe from './blog/BiologischesAlterBerechnen.vue'
import BlogEn from './blog/en/BiologicalAgeCalculatorBlog.vue'

export default {
  key: 'biologicalAge',
  component: Component,
  slugs: { de: 'biologisches-alter-rechner', en: 'biological-age-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 18,
  blog: {
    de: { slug: 'biologisches-alter-berechnen', component: BlogDe },
    en: { slug: 'biological-age-calculator', component: BlogEn },
  },
}
