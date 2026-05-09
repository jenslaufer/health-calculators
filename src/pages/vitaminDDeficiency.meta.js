import BlogDe from './blog/VitaminDMangel.vue'
import BlogEn from './blog/en/VitaminDDeficiency.vue'

export default {
  key: 'vitaminDDeficiency',
  blogOnly: true,
  blog: {
    de: { slug: 'vitamin-d-mangel', component: BlogDe },
    en: { slug: 'vitamin-d-deficiency', component: BlogEn },
  },
}
