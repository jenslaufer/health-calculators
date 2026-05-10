import Component from './ChildCaloriesCalculator.vue'
import BlogDe from './blog/KinderKalorienbedarfBerechnen.vue'
import BlogEn from './blog/en/ChildCalorieNeedsGuide.vue'

export default {
  key: 'childCalories',
  component: Component,
  slugs: { de: 'kinder-kalorienbedarf-rechner', en: 'child-calorie-needs-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 12,
  blog: {
    de: { slug: 'kinder-kalorienbedarf-berechnen', component: BlogDe },
    en: { slug: 'child-calorie-needs-guide', component: BlogEn },
  },
}
