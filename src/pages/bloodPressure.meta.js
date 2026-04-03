import Component from './BloodPressureCalculator.vue'
import BlogDe from './blog/BlutdruckRichtigMessen.vue'
import BlogEn from './blog/en/MeasureBloodPressure.vue'

export default {
  key: 'bloodPressure',
  component: Component,
  slugs: { de: 'blutdruck-rechner', en: 'blood-pressure-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 2,
  oldRedirect: '/blutdruck-rechner',
  blog: {
    de: { slug: 'blutdruck-richtig-messen', component: BlogDe },
    en: { slug: 'measure-blood-pressure', component: BlogEn },
  },
}
