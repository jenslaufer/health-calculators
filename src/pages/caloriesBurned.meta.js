import Component from './CaloriesBurnedCalculator.vue'
import BlogDe from './blog/KalorienverbrauchBerechnen.vue'
import BlogEn from './blog/en/CalculateCaloriesBurned.vue'

export default {
  key: 'caloriesBurned',
  component: Component,
  slugs: { de: 'kalorienverbrauch', en: 'calories-burned' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 6,
  oldRedirect: '/calories-burned',
  blog: {
    de: { slug: 'kalorienverbrauch-berechnen', component: BlogDe },
    en: { slug: 'calculate-calories-burned', component: BlogEn },
  },
}
