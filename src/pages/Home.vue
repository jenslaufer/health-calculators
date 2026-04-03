<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calculatorGroups } from '../discovery.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('home.meta.title'),
  description: t('home.meta.description'),
  routeKey: 'home',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t('nav.brand'),
    url: 'https://healthcalculator.app/',
    description: t('home.meta.description'),
  },
}))

const groups = computed(() =>
  calculatorGroups.map(group => ({
    label: t(`home.groups.${group.key}`),
    items: group.calculators.map(key => ({
      name: t(`home.calculators.${key}.name`),
      description: t(`home.calculators.${key}.description`),
      path: localePath(key),
    })),
  }))
)
</script>

<template>
  <div>
    <div class="mb-12">
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">{{ t('home.heading') }}</h1>
      <p class="text-base text-stone-500 font-normal leading-relaxed">{{ t('home.subtitle') }}</p>
    </div>

    <div>
      <div v-for="group in groups" :key="group.label" class="mb-10">
        <h2 class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">{{ group.label }}</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link
            v-for="calc in group.items"
            :key="calc.path"
            :to="calc.path"
            class="group block p-8 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-stone-400 hover:shadow-md transition-all duration-200"
          >
            <h2 class="text-base font-semibold text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
              {{ calc.name }}
            </h2>
            <p class="text-sm text-stone-500 leading-relaxed">
              {{ calc.description }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
