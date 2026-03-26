<script setup>
import { computed } from 'vue'
import { getArticleByCalculator } from '../data/articles.js'

const props = defineProps({
  calculatorPath: { type: String, required: true },
})

const article = computed(() => getArticleByCalculator(props.calculatorPath))
</script>

<template>
  <div v-if="article" class="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-6" data-testid="blog-banner">
    <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">Zum Nachlesen</p>
    <router-link
      :to="`/blog/${article.slug}`"
      class="text-base font-semibold text-stone-900 hover:text-stone-600 transition-colors"
    >{{ article.title }} &rarr;</router-link>
    <p class="text-sm text-stone-500 mt-1">{{ article.description }}</p>
  </div>
</template>
