import Component from './MalePatternCalculator.vue'
import BlogDe from './blog/HaarausfallNorwoodSkala.vue'
import BlogEn from './blog/en/MalePatternBaldnessNorwood.vue'

export default {
  key: 'malePattern',
  component: Component,
  slugs: { de: 'haarausfall-rechner-maenner', en: 'male-pattern-baldness-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 30,
  blog: {
    de: { slug: 'haarausfall-norwood-skala', component: BlogDe },
    en: { slug: 'male-pattern-baldness-norwood', component: BlogEn },
  },
}
