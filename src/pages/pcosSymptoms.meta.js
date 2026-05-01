import Component from './PcosSymptomsCalculator.vue'
import BlogDe from './blog/PcosSymptomeErkennen.vue'
import BlogEn from './blog/en/PcosSymptomChecker.vue'

export default {
  key: 'pcosSymptoms',
  component: Component,
  slugs: { de: 'pcos-symptome-rechner', en: 'pcos-symptom-checker' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 6,
  blog: {
    de: { slug: 'pcos-symptome-erkennen', component: BlogDe },
    en: { slug: 'pcos-symptom-checker', component: BlogEn },
  },
}
