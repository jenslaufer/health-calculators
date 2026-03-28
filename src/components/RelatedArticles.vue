<script setup>
import { computed } from 'vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { getRelatedArticles } from '../data/articles.js'

const { localeBlogPath } = useLocaleRouter()

const props = defineProps({
  slug: { type: String, required: true },
})

const related = computed(() => getRelatedArticles(props.slug))
</script>

<template>
  <div v-if="related.length" class="mt-10" data-testid="related-articles">
    <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Artikel</h2>
    <div class="space-y-4">
      <router-link
        v-for="article in related"
        :key="article.slug"
        :to="localeBlogPath(article.slug)"
        class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
      >
        <h3 class="text-base font-semibold text-stone-900 mb-1">{{ article.title }}</h3>
        <p class="text-sm text-stone-500 leading-relaxed">{{ article.description }}</p>
        <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Weiterlesen &rarr;</span>
      </router-link>
    </div>
  </div>
</template>
