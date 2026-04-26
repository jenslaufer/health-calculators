<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { getArticleByCalculatorKey } from '../data/articles.js'
import { getEnArticleByCalculatorKey } from '../data/articles-en.js'

const props = defineProps({
  calculatorKey: { type: String, required: true },
})

const { t } = useI18n()
const { localeBlogPath, locale } = useLocaleRouter()

const article = computed(() =>
  locale.value === 'en'
    ? getEnArticleByCalculatorKey(props.calculatorKey)
    : getArticleByCalculatorKey(props.calculatorKey),
)
</script>

<template>
  <router-link
    v-if="article"
    :to="localeBlogPath(article.slug)"
    class="group mt-6 block rounded-xl border border-stone-200 bg-white p-5 transition-all duration-150 hover:border-stone-400 hover:shadow-sm"
    data-testid="blog-article-link"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-stone-500">
          {{ t('blogArticleLink.label') }}
        </p>
        <p class="truncate text-base font-medium text-stone-900 transition-colors group-hover:text-stone-700">
          {{ article.title }}
        </p>
        <p class="mt-1 text-sm text-stone-500">{{ article.readTime }}</p>
      </div>
      <svg
        class="h-5 w-5 flex-shrink-0 text-stone-400 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-stone-600"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </router-link>
</template>
