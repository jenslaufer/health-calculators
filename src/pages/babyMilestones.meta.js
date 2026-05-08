import Component from './BabyMilestonesCalculator.vue'
import BlogDe from './blog/BabyMeilensteine.vue'
import BlogEn from './blog/en/BabyMilestoneTracker.vue'

export default {
  key: 'babyMilestones',
  component: Component,
  slugs: { de: 'baby-meilensteine-rechner', en: 'baby-milestones-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 8,
  blog: {
    de: { slug: 'baby-meilensteine-tracker', component: BlogDe },
    en: { slug: 'baby-milestone-tracker-guide', component: BlogEn },
  },
}
