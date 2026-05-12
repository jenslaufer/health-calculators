import BlogDe from './blog/DiabetesTyp2Vorbeugen.vue'
import BlogEn from './blog/en/PreventType2Diabetes.vue'

export default {
  key: 'diabetesPrevention',
  blogOnly: true,
  blog: {
    de: { slug: 'diabetes-typ-2-vorbeugen', component: BlogDe },
    en: { slug: 'prevent-type-2-diabetes', component: BlogEn },
  },
}
