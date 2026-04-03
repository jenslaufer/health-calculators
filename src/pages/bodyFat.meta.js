import Component from './BodyFatCalculator.vue'
import BlogDe from './blog/KoerperfettBerechnen.vue'
import BlogEn from './blog/en/CalculateBodyFat.vue'

export default {
  key: 'bodyFat',
  component: Component,
  slugs: { de: 'koerperfett-rechner', en: 'body-fat-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 1,
  oldRedirect: '/body-fat',
  blog: {
    de: { slug: 'koerperfett-berechnen', component: BlogDe },
    en: { slug: 'calculate-body-fat', component: BlogEn },
  },
}
