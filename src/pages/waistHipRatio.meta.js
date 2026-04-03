import Component from './WaistHipRatioCalculator.vue'
import BlogDe from './blog/TaillenHueftVerhaeltnis.vue'
import BlogEn from './blog/en/CalculateWaistHipRatio.vue'

export default {
  key: 'waistHipRatio',
  component: Component,
  slugs: { de: 'taille-hueft-verhaeltnis', en: 'waist-hip-ratio-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 3,
  oldRedirect: '/waist-hip-ratio',
  blog: {
    de: { slug: 'taille-hueft-verhaeltnis-berechnen', component: BlogDe },
    en: { slug: 'calculate-waist-hip-ratio', component: BlogEn },
  },
}
