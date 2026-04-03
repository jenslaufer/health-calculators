import Component from './ProteinNeedCalculator.vue'
import BlogDe from './blog/EiweissbedarfBerechnen.vue'
import BlogEn from './blog/en/ProteinRequirementsGuide.vue'

export default {
  key: 'proteinNeed',
  component: Component,
  slugs: { de: 'eiweissbedarf-rechner', en: 'protein-need-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 6,
  blog: {
    de: { slug: 'eiweissbedarf-berechnen', component: BlogDe },
    en: { slug: 'protein-requirements-guide', component: BlogEn },
  },
}
