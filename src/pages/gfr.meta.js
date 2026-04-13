import Component from './GfrCalculator.vue'
import BlogDe from './blog/NierenfunktionGFRRechner.vue'
import BlogEn from './blog/en/GfrCalculatorKidneyFunction.vue'

export default {
  key: 'gfr',
  component: Component,
  slugs: { de: 'gfr-rechner', en: 'gfr-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 9,
  oldRedirect: '/gfr-rechner',
  blog: {
    de: { slug: 'gfr-rechner', component: BlogDe },
    en: { slug: 'gfr-calculator-kidney-function', component: BlogEn },
  },
}
