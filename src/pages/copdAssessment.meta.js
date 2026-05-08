import Component from './CopdAssessmentCalculator.vue'
import BlogDe from './blog/CopdAssessmentBerechnen.vue'
import BlogEn from './blog/en/CopdAssessmentGuide.vue'

export default {
  key: 'copdAssessment',
  component: Component,
  slugs: { de: 'copd-assessment-rechner', en: 'copd-assessment-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 101,
  blog: {
    de: { slug: 'copd-assessment-berechnen', component: BlogDe },
    en: { slug: 'copd-assessment-guide', component: BlogEn },
  },
}
