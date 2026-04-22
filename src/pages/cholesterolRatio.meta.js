import Component from './CholesterolRatioCalculator.vue'
import BlogDe from './blog/CholesterolVerhaeltnisRechner.vue'
import BlogEn from './blog/en/CholesterolRatio.vue'

export default {
  key: 'cholesterolRatio',
  component: Component,
  slugs: { de: 'cholesterol-verhaeltnis-rechner', en: 'cholesterol-ratio' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 24,
  blog: {
    de: { slug: 'cholesterol-verhaeltnis-rechner', component: BlogDe },
    en: { slug: 'cholesterol-ratio', component: BlogEn },
  },
}
