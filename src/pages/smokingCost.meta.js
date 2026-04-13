import Component from './SmokingCostCalculator.vue'
import BlogDe from './blog/RauchenKostenRechner.vue'
import BlogEn from './blog/en/SmokingCostCalculatorBlog.vue'

export default {
  key: 'smokingCost',
  component: Component,
  slugs: { de: 'rauchen-kosten-rechner', en: 'smoking-cost-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 10,
  oldRedirect: '/rauchen-kosten-rechner',
  blog: {
    de: { slug: 'rauchen-kosten-rechner', component: BlogDe },
    en: { slug: 'smoking-cost-calculator', component: BlogEn },
  },
}
