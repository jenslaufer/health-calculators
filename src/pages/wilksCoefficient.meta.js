import Component from './WilksCoefficientCalculator.vue'
import BlogDe from './blog/WilksKoeffizientBerechnen.vue'
import BlogEn from './blog/en/WilksCoefficientGuide.vue'

export default {
  key: 'wilksCoefficient',
  component: Component,
  slugs: { de: 'wilks-coefficient-rechner', en: 'wilks-coefficient' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 26.8,
  blog: {
    de: { slug: 'wilks-koeffizient-berechnen', component: BlogDe },
    en: { slug: 'wilks-coefficient-guide', component: BlogEn },
  },
}
