import Component from './CalorieDeficitCalculator.vue'
import BlogDe from './blog/KaloriendefizitBerechnen.vue'
import BlogEn from './blog/en/CalculateCalorieDeficit.vue'

export default {
  key: 'calorieDeficit',
  component: Component,
  slugs: { de: 'kaloriendefizit-rechner', en: 'calorie-deficit-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 4,
  oldRedirect: '/kaloriendefizit-rechner',
  blog: {
    de: { slug: 'kaloriendefizit-berechnen', component: BlogDe },
    en: { slug: 'calculate-calorie-deficit', component: BlogEn },
  },
}
