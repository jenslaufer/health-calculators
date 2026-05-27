<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcMap, getCategory, categoryColor, categoryBg } from '../utils/meanArterialPressure.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('meanArterialPressure.faq') || [])

useHead(() => ({
  title: t('meanArterialPressure.meta.title'),
  description: t('meanArterialPressure.meta.description'),
  routeKey: 'meanArterialPressure',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MAP Calculator',
    url: 'https://healthcalculator.app/en/mean-arterial-pressure',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const systolic = ref(null)
const diastolic = ref(null)

const map = computed(() => calcMap(systolic.value, diastolic.value))
const category = computed(() => getCategory(map.value))
const hasResult = computed(() => map.value !== null && category.value !== null)
const mapFormatted = computed(() => map.value !== null ? map.value.toFixed(1) : '—')
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('meanArterialPressure.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('meanArterialPressure.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="systolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('meanArterialPressure.systolic') }}
          </label>
          <input id="systolic" v-model.number="systolic" type="number" min="1" placeholder="120"
            data-testid="systolic-input"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div>
          <label for="diastolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('meanArterialPressure.diastolic') }}
          </label>
          <input id="diastolic" v-model.number="diastolic" type="number" min="1" placeholder="80"
            data-testid="diastolic-input"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', categoryBg(category)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('meanArterialPressure.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="map-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ mapFormatted }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ t('meanArterialPressure.mapUnit') }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-1', categoryColor(category)]" data-testid="category">{{ t(`meanArterialPressure.cat.${category}`) }}</p>
      <p class="text-sm text-stone-600 leading-relaxed mb-4" data-testid="category-description">{{ t(`meanArterialPressure.catDescription.${category}`) }}</p>

      <div class="bg-white/60 border border-stone-200 rounded-lg p-4 text-xs text-stone-600 leading-relaxed" data-testid="older-adults-note">
        {{ t('meanArterialPressure.olderAdultsNote') }}
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('meanArterialPressure.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('meanArterialPressure.cat.low') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('meanArterialPressure.catRange.low') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('meanArterialPressure.cat.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('meanArterialPressure.catRange.normal') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('meanArterialPressure.cat.high') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('meanArterialPressure.catRange.high') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('meanArterialPressure.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-base text-stone-700 mb-3">
        {{ t('meanArterialPressure.formulaText') }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('meanArterialPressure.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('meanArterialPressure.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="meanArterialPressure" class="mt-8" />
    <BlogArticleLink calculator-key="meanArterialPressure" />

    <AdSlot class="mt-8" />
  </div>
</template>
