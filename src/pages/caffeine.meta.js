import Component from './CaffeineCalculator.vue'
import BlogDe from './blog/KoffeinRechnerSchlafen.vue'
import BlogEn from './blog/en/CaffeineCalculatorSleepGuide.vue'

export default {
  key: 'caffeine',
  component: Component,
  slugs: { de: 'koffein-rechner', en: 'caffeine-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 7,
  blog: {
    de: { slug: 'koffein-rechner-schlafen', component: BlogDe },
    en: { slug: 'caffeine-calculator-sleep-guide', component: BlogEn },
  },
}
