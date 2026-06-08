import Component from './BmiMaennerCalculator.vue'
import BlogDe from './blog/BmiBeiMaennern.vue'
import BlogEn from './blog/en/BmiForMen.vue'

export default {
  key: 'bmiMaenner',
  component: Component,
  slugs: { de: 'bmi-rechner-maenner', en: 'bmi-calculator-men' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 8,
  blog: {
    de: { slug: 'bmi-bei-maennern', component: BlogDe },
    en: { slug: 'bmi-for-men', component: BlogEn },
  },
}
