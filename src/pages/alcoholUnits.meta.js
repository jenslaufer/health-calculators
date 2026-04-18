import Component from './AlcoholUnitsCalculator.vue'
import BlogDe from './blog/AlkoholEinheitenBerechnen.vue'
import BlogEn from './blog/en/AlcoholUnitsCalculatorBlog.vue'

export default {
  key: 'alcoholUnits',
  component: Component,
  slugs: { de: 'alkohol-einheiten-rechner', en: 'alcohol-units-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 21,
  blog: {
    de: { slug: 'alkohol-einheiten-berechnen', component: BlogDe },
    en: { slug: 'alcohol-unit-calculator', component: BlogEn },
  },
}
