import Component from './BodyTypeCalculator.vue'
import BlogDe from './blog/KoerpertypBestimmen.vue'
import BlogEn from './blog/en/BodyTypeCalculatorBlog.vue'

export default {
  key: 'bodyType',
  component: Component,
  slugs: { de: 'koerpertyp-rechner', en: 'body-type-calculator' },
  group: 'bodyComposition',
  groupOrder: 0,
  order: 6,
  oldRedirect: '/koerpertyp-rechner',
  blog: {
    de: { slug: 'koerpertyp-bestimmen', component: BlogDe },
    en: { slug: 'body-type-calculator', component: BlogEn },
  },
}
