import Component from './NewbornBilirubinCalculator.vue'
import BlogDe from './blog/NeugeborenenGelbsuchtRisiko.vue'
import BlogEn from './blog/en/NewbornJaundiceCalculatorGuide.vue'

export default {
  key: 'newbornBilirubin',
  component: Component,
  slugs: { de: 'neugeborenen-bilirubin-rechner', en: 'newborn-bilirubin-calculator' },
  group: 'pregnancy',
  groupOrder: 4,
  order: 102,
  blog: {
    de: { slug: 'neugeborenen-gelbsucht-risiko', component: BlogDe },
    en: { slug: 'newborn-jaundice-calculator-guide', component: BlogEn },
  },
}
