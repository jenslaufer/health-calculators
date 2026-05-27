import Component from './MeanArterialPressureCalculator.vue'
import BlogDe from './blog/MittlererArteriellerDruckBerechnen.vue'
import BlogEn from './blog/en/MeanArterialPressureGuide.vue'

export default {
  key: 'meanArterialPressure',
  component: Component,
  slugs: { de: 'mittlerer-arterieller-druck-rechner', en: 'mean-arterial-pressure' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 2.5,
  blog: {
    de: { slug: 'mittlerer-arterieller-druck-berechnen', component: BlogDe },
    en: { slug: 'mean-arterial-pressure-guide', component: BlogEn },
  },
}
