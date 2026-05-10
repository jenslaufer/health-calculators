import Component from './PregnancyBMICalculator.vue'
import BlogDe from './blog/BmiSchwangerschaftBerechnen.vue'
import BlogEn from './blog/en/PregnancyBmiGuide.vue'

export default {
  key: 'pregnancyBMI',
  component: Component,
  slugs: { de: 'bmi-schwangerschaft-rechner', en: 'pregnancy-bmi-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 1.5,
  blog: {
    de: { slug: 'bmi-schwangerschaft-berechnen', component: BlogDe },
    en: { slug: 'pregnancy-bmi-guide', component: BlogEn },
  },
}
