import Component from './DueDateCalculator.vue'
import BlogDe from './blog/Geburtsterminrechner.vue'
import BlogEn from './blog/en/DueDateCalculatorGuide.vue'

export default {
  key: 'dueDate',
  component: Component,
  slugs: { de: 'geburtstermin-rechner', en: 'due-date-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 3,
  oldRedirect: '/due-date',
  blog: {
    de: { slug: 'geburtsterminrechner', component: BlogDe },
    en: { slug: 'due-date-calculator', component: BlogEn },
  },
}
