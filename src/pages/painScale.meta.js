import Component from './PainScaleCalculator.vue'
import BlogDe from './blog/SchmerzskalaBerechnen.vue'
import BlogEn from './blog/en/PainScaleCalculatorGuide.vue'

export default {
  key: 'painScale',
  component: Component,
  slugs: { de: 'schmerzskala-rechner', en: 'pain-scale-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 102,
  blog: {
    de: { slug: 'schmerzskala-berechnen', component: BlogDe },
    en: { slug: 'pain-scale-calculator-guide', component: BlogEn },
  },
}
