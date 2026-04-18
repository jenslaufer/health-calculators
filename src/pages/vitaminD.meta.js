import Component from './VitaminDCalculator.vue'
import BlogDe from './blog/VitaminDBerechnen.vue'
import BlogEn from './blog/en/VitaminDCalculatorBlog.vue'

export default {
  key: 'vitaminD',
  component: Component,
  slugs: { de: 'vitamin-d-rechner', en: 'vitamin-d-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 20,
  blog: {
    de: { slug: 'vitamin-d-berechnen', component: BlogDe },
    en: { slug: 'vitamin-d-calculator', component: BlogEn },
  },
}
