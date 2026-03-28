<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { articles } from '../data/articles.js'

const { t } = useI18n()
const { localePath, localeBlogPath } = useLocaleRouter()

useHead(() => ({
  title: t('blogHome.meta.title'),
  description: t('blogHome.meta.description'),
  routeKey: 'blog',
}))
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('blogHome.heading') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('blogHome.subtitle') }}</p>
    </div>

    <div class="space-y-4">
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="localeBlogPath(article.slug)"
        class="block bg-white border border-stone-200 rounded-xl shadow-sm p-8 hover:border-stone-300 hover:shadow transition-all duration-150"
      >
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs font-medium text-stone-400 tabular-nums">{{ article.date }}</span>
          <span class="text-xs text-stone-300">&middot;</span>
          <span class="text-xs font-medium text-stone-400">{{ article.readTime }}</span>
        </div>
        <h2 class="text-xl font-semibold text-stone-900 mb-2">{{ article.title }}</h2>
        <p class="text-sm text-stone-500 leading-relaxed">{{ article.description }}</p>
      </router-link>
    </div>
  </div>
</template>
