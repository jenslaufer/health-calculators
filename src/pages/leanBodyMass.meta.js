import Component from './LeanBodyMassCalculator.vue'
import BlogDe from './blog/MagermassBerechnen.vue'
import BlogEn from './blog/en/CalculateLeanBodyMass.vue'

export default {
  key: 'leanBodyMass',
  component: Component,
  slugs: { de: 'magermasse-rechner', en: 'lean-body-mass-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 4,
  oldRedirect: '/lean-body-mass',
  blog: {
    de: { slug: 'magermasse-berechnen', component: BlogDe },
    en: { slug: 'calculate-lean-body-mass', component: BlogEn },
  },
}
