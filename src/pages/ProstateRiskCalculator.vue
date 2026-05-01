<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcProstateRisk } from '../utils/prostateRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('prostateRisk.faq') || [])

useHead(() => ({
  title: t('prostateRisk.meta.title'),
  description: t('prostateRisk.meta.description'),
  routeKey: 'prostateRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Prostate Cancer Risk Calculator',
    url: 'https://healthcalculator.app/prostate-cancer-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const psa = ref(null)
const age = ref(null)
const familyHistory = ref(false)

const result = computed(() =>
  calcProstateRisk({
    psa: psa.value,
    age: age.value,
    familyHistory: familyHistory.value,
  })
)

const categoryColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.category) {
    case 'low': return 'text-green-600'
    case 'moderate': return 'text-yellow-600'
    case 'high': return 'text-orange-600'
    case 'veryHigh': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const categoryBg = computed(() => {
  if (!result.value) return 'bg-stone-300'
  switch (result.value.category) {
    case 'low': return 'bg-green-500'
    case 'moderate': return 'bg-yellow-500'
    case 'high': return 'bg-orange-500'
    case 'veryHigh': return 'bg-red-600'
    default: return 'bg-stone-300'
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('prostateRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('prostateRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('prostateRisk.psaLabel') }}</label>
        <input v-model.number="psa" type="number" step="0.1" min="0" :placeholder="t('prostateRisk.psaPlaceholder')" data-testid="psa"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('prostateRisk.ageLabel') }}</label>
        <input v-model.number="age" type="number" min="0" :placeholder="t('prostateRisk.agePlaceholder')" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('prostateRisk.familyHistoryLabel') }}</label>
      <div class="flex gap-2">
        <button
          @click="familyHistory = false"
          data-testid="family-no"
          :class="!familyHistory ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('prostateRisk.no') }}</button>
        <button
          @click="familyHistory = true"
          data-testid="family-yes"
          :class="familyHistory ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('prostateRisk.yes') }}</button>
      </div>
      <p class="text-xs text-stone-400 mt-2">{{ t('prostateRisk.familyHistoryHint') }}</p>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('prostateRisk.results') }}</p>
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="result-score">{{ result.score }}</span>
      <span class="text-lg text-stone-400">/ 100</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="result-category">{{ t('prostateRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div :class="categoryBg" class="absolute inset-y-0 left-0 transition-all duration-300" :style="{ width: result.score + '%' }"></div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="interpretation">
      <p class="text-sm text-stone-700 leading-relaxed">{{ t('prostateRisk.interpretation_' + result.category) }}</p>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('prostateRisk.thresholdLabel') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ result.threshold }} ng/mL</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('prostateRisk.ratioLabel') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="result-ratio">{{ result.ratio.toFixed(2) }}×</p>
      </div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium"
      :class="result.biopsyRecommended ? 'bg-red-50 text-red-900 border border-red-200' : 'bg-green-50 text-green-900 border border-green-200'"
      data-testid="biopsy-status"
    >
      {{ result.biopsyRecommended ? t('prostateRisk.biopsyRecommended') : t('prostateRisk.biopsyNotRecommended') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('prostateRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('prostateRisk.ageRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('prostateRisk.psaThreshold') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">40–49</td><td class="px-6 py-3 text-stone-600">2.5</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">50–59</td><td class="px-6 py-3 text-stone-600">3.5</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">60–69</td><td class="px-6 py-3 text-stone-600">4.5</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">70–79</td><td class="px-6 py-3 text-stone-600">6.5</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('prostateRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('prostateRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('prostateRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="prostateRisk" />
</template>
