import Component from './ApgarScoreCalculator.vue'
import BlogDe from './blog/ApgarScoreBewerten.vue'
import BlogEn from './blog/en/ApgarScoreCalculatorGuide.vue'

export default {
  key: 'apgarScore',
  component: Component,
  slugs: { de: 'apgar-score-rechner', en: 'apgar-score-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 7,
  blog: {
    de: { slug: 'apgar-score-bewerten', component: BlogDe },
    en: { slug: 'apgar-score-calculator-guide', component: BlogEn },
  },
}
