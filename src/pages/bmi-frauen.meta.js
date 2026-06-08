import Component from './BmiFrauenCalculator.vue'
import BlogDe from './blog/BmiBeiFrauen.vue'
import BlogEn from './blog/en/BmiForWomen.vue'

export default {
  key: 'bmiFrauen',
  component: Component,
  slugs: { de: 'bmi-rechner-frauen', en: 'bmi-calculator-women' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 7,
  blog: {
    de: { slug: 'bmi-bei-frauen', component: BlogDe },
    en: { slug: 'bmi-for-women', component: BlogEn },
  },
}
