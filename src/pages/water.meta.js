import Component from './WaterIntakeCalculator.vue'
import BlogDe from './blog/WasserbedarfBerechnen.vue'
import BlogEn from './blog/en/CalculateWaterIntake.vue'

export default {
  key: 'water',
  component: Component,
  slugs: { de: 'wasser-rechner', en: 'water-intake-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 3,
  oldRedirect: '/water',
  blog: {
    de: { slug: 'wasserbedarf-berechnen', component: BlogDe },
    en: { slug: 'calculate-water-intake', component: BlogEn },
  },
}
