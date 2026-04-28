import Component from './ChildDosageCalculator.vue'
import BlogDe from './blog/KinderDosierungRechner.vue'
import BlogEn from './blog/en/ChildDosageCalculator.vue'

export default {
  key: 'childDosage',
  component: Component,
  slugs: { de: 'kinder-dosierung-rechner', en: 'child-dosage-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 25,
  blog: {
    de: { slug: 'kinder-dosierung-rechner', component: BlogDe },
    en: { slug: 'child-dosage-calculator', component: BlogEn },
  },
}
