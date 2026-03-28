<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { getArticleByCalculatorKey } from '../data/articles.js'

const { t } = useI18n()
const { localeBlogPath } = useLocaleRouter()

const props = defineProps({
  calculatorKey: { type: String, required: true },
})

const article = computed(() => getArticleByCalculatorKey(props.calculatorKey))
</script>

<template>
  <div v-if="article" class="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-6" data-testid="blog-banner">
    <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">{{ t('blogBanner.label') }}</p>
    <router-link
      :to="localeBlogPath(article.slug)"
      class="text-base font-semibold text-stone-900 hover:text-stone-600 transition-colors"
    >{{ article.title }} &rarr;</router-link>
    <p class="text-sm text-stone-500 mt-1">{{ article.description }}</p>
  </div>
</template>
