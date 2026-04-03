import Component from './PeriodCalculator.vue'
import BlogDe from './blog/ZyklusrechnerGuide.vue'
import BlogEn from './blog/PeriodCalculatorGuide.vue'

export default {
  key: 'period',
  component: Component,
  slugs: { de: 'zyklusrechner', en: 'period-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 2,
  oldRedirect: '/period',
  blog: {
    de: { slug: 'zyklusrechner-guide', component: BlogDe },
    en: { slug: 'period-calculator-guide', component: BlogEn },
  },
}
