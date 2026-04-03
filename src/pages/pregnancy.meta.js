import Component from './PregnancyCalculator.vue'
import BlogDe from './blog/GeburtsterminBerechnen.vue'
import BlogEn from './blog/en/CalculateDueDate.vue'

export default {
  key: 'pregnancy',
  component: Component,
  slugs: { de: 'schwangerschafts-rechner', en: 'pregnancy-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 0,
  oldRedirect: '/pregnancy',
  blog: {
    de: { slug: 'geburtstermin-berechnen', component: BlogDe },
    en: { slug: 'calculate-due-date', component: BlogEn },
  },
}
