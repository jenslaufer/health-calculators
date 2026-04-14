import Component from './ChildGrowthCalculator.vue'
import BlogDe from './blog/WachstumsperzentileKinder.vue'
import BlogEn from './blog/en/ChildGrowthPercentileBlog.vue'

export default {
  key: 'childGrowth',
  component: Component,
  slugs: { de: 'wachstumsperzentile-kind', en: 'child-growth-percentile' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 15,
  oldRedirect: '/wachstumsperzentile-kind',
  blog: {
    de: { slug: 'wachstumsperzentile-kinder', component: BlogDe },
    en: { slug: 'child-growth-percentile-chart', component: BlogEn },
  },
}
