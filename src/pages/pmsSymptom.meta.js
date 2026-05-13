import Component from './PmsSymptomCalculator.vue'
import BlogDe from './blog/PmsSymptomeBewerten.vue'
import BlogEn from './blog/en/PmsSymptomCalculatorGuide.vue'

export default {
  key: 'pmsSymptom',
  component: Component,
  slugs: { de: 'pms-symptome-rechner', en: 'pms-symptom-calculator' },
  group: 'pregnancy',
  groupOrder: 4,
  order: 201,
  blog: {
    de: { slug: 'pms-symptome-bewerten', component: BlogDe },
    en: { slug: 'pms-symptom-calculator-guide', component: BlogEn },
  },
}
