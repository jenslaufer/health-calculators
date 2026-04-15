import Component from './LifeExpectancyCalculator.vue'
import BlogDe from './blog/LebenserwartungBerechnen.vue'
import BlogEn from './blog/en/LifeExpectancyCalculatorBlog.vue'

export default {
  key: 'lifeExpectancy',
  component: Component,
  slugs: { de: 'lebenserwartung-rechner', en: 'life-expectancy-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 16,
  oldRedirect: '/lebenserwartung',
  blog: {
    de: { slug: 'lebenserwartung-berechnen', component: BlogDe },
    en: { slug: 'life-expectancy-calculator', component: BlogEn },
  },
}
