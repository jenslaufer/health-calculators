import Component from './AnionGapCalculator.vue'
import BlogDe from './blog/AnionenlueckeRechner.vue'
import BlogEn from './blog/en/AnionGapCalculatorBlog.vue'

export default {
  key: 'anionGap',
  component: Component,
  slugs: { de: 'anionenluecke-rechner', en: 'anion-gap-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 23,
  blog: {
    de: { slug: 'anionenluecke-rechner', component: BlogDe },
    en: { slug: 'anion-gap', component: BlogEn },
  },
}
