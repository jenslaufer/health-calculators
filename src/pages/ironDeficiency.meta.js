import Component from './IronDeficiencyCalculator.vue'
import BlogDe from './blog/EisenmangelBerechnen.vue'
import BlogEn from './blog/en/IronDeficiencyCalculatorGuide.vue'

export default {
  key: 'ironDeficiency',
  component: Component,
  slugs: { de: 'eisenmangel-rechner', en: 'iron-deficiency-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 104,
  blog: {
    de: { slug: 'eisenmangel-berechnen', component: BlogDe },
    en: { slug: 'iron-deficiency-calculator-guide', component: BlogEn },
  },
}
