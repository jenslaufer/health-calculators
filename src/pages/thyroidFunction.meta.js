import Component from './ThyroidFunctionCalculator.vue'
import BlogDe from './blog/SchilddruesenfunktionBerechnen.vue'
import BlogEn from './blog/en/ThyroidFunctionCalculator.vue'

export default {
  key: 'thyroidFunction',
  component: Component,
  slugs: { de: 'schilddruesen-rechner', en: 'thyroid-function-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 35,
  blog: {
    de: { slug: 'schilddruesenfunktion-berechnen', component: BlogDe },
    en: { slug: 'thyroid-function-calculator', component: BlogEn },
  },
}
