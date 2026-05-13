import Component from './FfmiRechnerCalculator.vue'
import BlogDe from './blog/FfmiBerechnen.vue'
import BlogEn from './blog/en/FfmiCalculatorGuide.vue'

export default {
  key: 'ffmiRechner',
  component: Component,
  slugs: { de: 'ffmi-rechner', en: 'ffmi-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 4.5,
  blog: {
    de: { slug: 'ffmi-berechnen', component: BlogDe },
    en: { slug: 'ffmi-calculator-guide', component: BlogEn },
  },
}
