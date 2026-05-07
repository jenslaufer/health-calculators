import Component from './BabyFeedingAmountCalculator.vue'
import BlogDe from './blog/BabyTrinkmengeBerechnen.vue'
import BlogEn from './blog/en/BabyFeedingAmountGuide.vue'

export default {
  key: 'babyFeedingAmount',
  component: Component,
  slugs: { de: 'baby-trinkmenge-rechner', en: 'baby-feeding-amount-calculator' },
  group: 'pregnancy',
  groupOrder: 4,
  order: 99,
  blog: {
    de: { slug: 'baby-trinkmenge-berechnen', component: BlogDe },
    en: { slug: 'baby-feeding-amount-guide', component: BlogEn },
  },
}
