import Component from './IntermittentFastingCalculator.vue'
import BlogDe from './blog/IntervallfastenRechner.vue'
import BlogEn from './blog/en/IntermittentFastingGuide.vue'

export default {
  key: 'intermittentFasting',
  component: Component,
  slugs: { de: 'intervallfasten-rechner', en: 'intermittent-fasting-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 7,
  oldRedirect: '/intermittent-fasting',
  blog: {
    de: { slug: 'intervallfasten-rechner', component: BlogDe },
    en: { slug: 'intermittent-fasting-calculator', component: BlogEn },
  },
}
