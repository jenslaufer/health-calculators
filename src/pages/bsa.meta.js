import Component from './BsaCalculator.vue'
import BlogDe from './blog/KoerperoberflaeheBerechnen.vue'
import BlogEn from './blog/en/BodySurfaceAreaCalculator.vue'

export default {
  key: 'bsa',
  component: Component,
  slugs: { de: 'koerperoberflaeche-rechner', en: 'body-surface-area-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 5,
  oldRedirect: '/koerperoberflaeche-rechner',
  blog: {
    de: { slug: 'koerperoberflaeche-berechnen', component: BlogDe },
    en: { slug: 'body-surface-area-calculator', component: BlogEn },
  },
}
