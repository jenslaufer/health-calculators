import Component from './CreatinineClearanceCalculator.vue'
import BlogDe from './blog/KreatininClearanceBerechnen.vue'
import BlogEn from './blog/en/CreatinineClearanceCalculatorGuide.vue'

export default {
  key: 'creatinineClearance',
  component: Component,
  slugs: { de: 'kreatinin-clearance-rechner', en: 'creatinine-clearance-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 101,
  blog: {
    de: { slug: 'kreatinin-clearance-berechnen', component: BlogDe },
    en: { slug: 'creatinine-clearance-calculator-guide', component: BlogEn },
  },
}
