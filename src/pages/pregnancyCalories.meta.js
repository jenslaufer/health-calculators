import Component from './PregnancyCaloriesCalculator.vue'
import BlogDe from './blog/KalorienbedarfSchwangerschaftBerechnen.vue'
import BlogEn from './blog/en/PregnancyCalorieNeedsGuide.vue'

export default {
  key: 'pregnancyCalories',
  component: Component,
  slugs: { de: 'kalorienbedarf-schwangerschaft-rechner', en: 'pregnancy-calorie-needs-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 0.5,
  blog: {
    de: { slug: 'kalorienbedarf-schwangerschaft-berechnen', component: BlogDe },
    en: { slug: 'pregnancy-calorie-needs-guide', component: BlogEn },
  },
}
