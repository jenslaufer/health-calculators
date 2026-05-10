import Component from './PediatricBloodPressureCalculator.vue'
import BlogDe from './blog/KinderBlutdruckPerzentile.vue'
import BlogEn from './blog/en/PediatricBloodPressureGuide.vue'

export default {
  key: 'pediatricBloodPressure',
  component: Component,
  slugs: { de: 'kinder-blutdruck-rechner', en: 'pediatric-blood-pressure-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 103,
  blog: {
    de: { slug: 'kinder-blutdruck-perzentile', component: BlogDe },
    en: { slug: 'pediatric-blood-pressure-guide', component: BlogEn },
  },
}
