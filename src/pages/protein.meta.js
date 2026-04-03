import Component from './ProteinCalculator.vue'
import BlogDe from './blog/ProteinbedarfBerechnen.vue'
import BlogEn from './blog/en/CalculateProteinIntake.vue'

export default {
  key: 'protein',
  component: Component,
  slugs: { de: 'protein-rechner', en: 'protein-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 5,
  oldRedirect: '/protein',
  blog: {
    de: { slug: 'proteinbedarf-berechnen', component: BlogDe },
    en: { slug: 'protein-intake-guide', component: BlogEn },
  },
}
