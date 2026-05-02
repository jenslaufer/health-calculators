import Component from './ErectileDysfunctionCalculator.vue'
import BlogDe from './blog/ErektileDysfunktionTest.vue'
import BlogEn from './blog/en/ErectileDysfunctionIief5.vue'

export default {
  key: 'erectileDysfunction',
  component: Component,
  slugs: { de: 'erektile-dysfunktion-rechner', en: 'erectile-dysfunction-calculator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 29,
  blog: {
    de: { slug: 'erektile-dysfunktion-test', component: BlogDe },
    en: { slug: 'erectile-dysfunction-iief-5', component: BlogEn },
  },
}
