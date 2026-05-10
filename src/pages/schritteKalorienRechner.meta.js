import Component from './SchritteKalorienRechnerCalculator.vue'
import BlogDe from './blog/SchritteKalorienBerechnen.vue'
import BlogEn from './blog/en/StepsToCaloriesGuide.vue'

export default {
  key: 'schritteKalorienRechner',
  component: Component,
  slugs: { de: 'schritte-kalorien-rechner', en: 'steps-to-calories-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 103,
  blog: {
    de: { slug: 'schritte-kalorien-berechnen', component: BlogDe },
    en: { slug: 'steps-to-calories-guide', component: BlogEn },
  },
}
