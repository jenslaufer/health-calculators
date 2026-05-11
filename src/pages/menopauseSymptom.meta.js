import Component from './MenopauseSymptomCalculator.vue'
import BlogDe from './blog/MenopauseSymptomeBewerten.vue'
import BlogEn from './blog/en/MenopauseSymptomCalculatorGuide.vue'

export default {
  key: 'menopauseSymptom',
  component: Component,
  slugs: { de: 'menopause-symptome-rechner', en: 'menopause-symptom-calculator' },
  group: 'pregnancy',
  groupOrder: 4,
  order: 200,
  blog: {
    de: { slug: 'menopause-symptome-bewerten', component: BlogDe },
    en: { slug: 'menopause-symptom-calculator-guide', component: BlogEn },
  },
}
