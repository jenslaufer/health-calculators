import Component from './PediatricBMICalculator.vue'
import BlogDe from './blog/PaediatrischenBmiBerechnen.vue'
import BlogEn from './blog/en/PediatricBmiCalculatorGuide.vue'

export default {
  key: 'pediatricBMI',
  component: Component,
  slugs: { de: 'kinder-bmi-rechner', en: 'pediatric-bmi-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 37,
  blog: {
    de: { slug: 'paediatrischen-bmi-berechnen', component: BlogDe },
    en: { slug: 'pediatric-bmi-calculator-guide', component: BlogEn },
  },
}
