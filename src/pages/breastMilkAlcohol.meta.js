import Component from './BreastMilkAlcoholCalculator.vue'
import BlogDe from './blog/AlkoholStillenBerechnen.vue'
import BlogEn from './blog/en/BreastMilkAlcoholGuide.vue'

export default {
  key: 'breastMilkAlcohol',
  component: Component,
  slugs: { de: 'alkohol-stillen-rechner', en: 'breast-milk-alcohol-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 11.5,
  blog: {
    de: { slug: 'alkohol-stillen-berechnen', component: BlogDe },
    en: { slug: 'breast-milk-alcohol-guide', component: BlogEn },
  },
}
