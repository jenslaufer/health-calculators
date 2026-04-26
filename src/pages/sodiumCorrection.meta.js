import Component from './SodiumCorrectionCalculator.vue'
import BlogDe from './blog/NatriumKorrekturRechner.vue'
import BlogEn from './blog/en/SodiumCorrectionCalculator.vue'

export default {
  key: 'sodiumCorrection',
  component: Component,
  slugs: { de: 'natrium-korrektur-rechner', en: 'sodium-correction-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 24,
  blog: {
    de: { slug: 'natrium-korrektur-berechnen', component: BlogDe },
    en: { slug: 'sodium-correction-calculator', component: BlogEn },
  },
}
