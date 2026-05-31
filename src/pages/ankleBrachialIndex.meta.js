import Component from './AnkleBrachialIndexCalculator.vue'
import BlogDe from './blog/KnoechelArmIndexBerechnen.vue'
import BlogEn from './blog/en/AnkleBrachialIndexGuide.vue'

export default {
  key: 'ankleBrachialIndex',
  component: Component,
  slugs: { de: 'knoechel-arm-index-rechner', en: 'ankle-brachial-index' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 26.7,
  blog: {
    de: { slug: 'knoechel-arm-index-berechnen', component: BlogDe },
    en: { slug: 'ankle-brachial-index-guide', component: BlogEn },
  },
}
