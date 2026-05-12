import Component from './HeadCircumferenceCalculator.vue'
import BlogDe from './blog/KopfumfangBaby.vue'
import BlogEn from './blog/en/HeadCircumferenceBabyGuide.vue'

export default {
  key: 'headCircumference',
  component: Component,
  slugs: { de: 'kopfumfang-rechner', en: 'head-circumference-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 15.1,
  blog: {
    de: { slug: 'kopfumfang-baby-perzentile', component: BlogDe },
    en: { slug: 'head-circumference-baby-guide', component: BlogEn },
  },
}
