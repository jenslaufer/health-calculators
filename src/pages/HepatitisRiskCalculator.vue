<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcHepatitisRisk } from '../utils/hepatitisRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('hepatitisRisk.faq') || [])

useHead(() => ({
  title: t('hepatitisRisk.meta.title'),
  description: t('hepatitisRisk.meta.description'),
  routeKey: 'hepatitisRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Hepatitis Risk Calculator',
    url: 'https://healthcalculator.app/hepatitis-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const exposures = ref({
  injectionDrugUse: false,
  bornHighPrevalenceCountry: false,
  hivPositive: false,
  hemodialysis: false,
  transfusionBefore1992: false,
  motherInfected: false,
  incarceration: false,
  needlestickExposure: false,
  unregulatedTattooPiercing: false,
  multipleSexualPartners: false,
  sharedRazorsToothbrush: false,
  travelEndemicArea: false,
  chronicLiverDisease: false,
})

const hbvVaccinated = ref(false)

const exposureList = [
  { key: 'injectionDrugUse', points: 4 },
  { key: 'bornHighPrevalenceCountry', points: 3 },
  { key: 'hivPositive', points: 3 },
  { key: 'hemodialysis', points: 3 },
  { key: 'transfusionBefore1992', points: 3 },
  { key: 'motherInfected', points: 3 },
  { key: 'incarceration', points: 2 },
  { key: 'needlestickExposure', points: 2 },
  { key: 'unregulatedTattooPiercing', points: 2 },
  { key: 'multipleSexualPartners', points: 2 },
  { key: 'sharedRazorsToothbrush', points: 1 },
  { key: 'travelEndemicArea', points: 1 },
  { key: 'chronicLiverDisease', points: 1 },
]

const result = computed(() => calcHepatitisRisk({
  exposures: exposures.value,
  hbvVaccinated: hbvVaccinated.value,
}))

const categoryStyle = computed(() => {
  if (!result.value) return { color: '', bg: '' }
  switch (result.value.category) {
    case 'none': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'low': return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200 text-yellow-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'high': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const categoryLevel = computed(() => {
  if (!result.value) return 0
  return { none: 0, low: 1, moderate: 2, high: 3 }[result.value.category] ?? 0
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('hepatitisRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('hepatitisRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('hepatitisRisk.exposuresLabel') }}</p>
    <div class="space-y-3">
      <label
        v-for="e in exposureList"
        :key="e.key"
        :data-testid="'exposure-' + e.key"
        :class="exposures[e.key] ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="exposures[e.key]"
          type="checkbox"
          :data-testid="'checkbox-' + e.key"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-3">
            <p class="text-sm font-semibold text-stone-900">{{ t('hepatitisRisk.exp_' + e.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ e.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('hepatitisRisk.exp_' + e.key + '_desc') }}</p>
        </div>
      </label>
    </div>

    <div class="mt-6 pt-6 border-t border-stone-200">
      <label
        data-testid="hbvVaccinated"
        :class="hbvVaccinated ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="hbvVaccinated"
          type="checkbox"
          data-testid="checkbox-hbvVaccinated"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-stone-900">{{ t('hepatitisRisk.vaccineLabel') }}</p>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('hepatitisRisk.vaccineDesc') }}</p>
        </div>
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('hepatitisRisk.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('hepatitisRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 3 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="exposure-score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hepatitisRisk.scoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.score }}<span class="text-lg text-stone-400 font-medium"> / 30</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="exposure-count">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hepatitisRisk.countLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.exposureCount }}<span class="text-lg text-stone-400 font-medium"> / 13</span></p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('hepatitisRisk.advice_' + result.category) }}
    </div>

    <div v-if="result.screeningRecommended" class="mt-4 bg-stone-900 text-white rounded-lg p-4 text-sm font-medium" data-testid="screening">
      {{ t('hepatitisRisk.screeningCallout') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('hepatitisRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refMeaning') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_none') }}</td><td class="px-6 py-3 text-stone-600">0</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refMeaning_none') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_low') }}</td><td class="px-6 py-3 text-stone-600">1–3</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refMeaning_low') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_moderate') }}</td><td class="px-6 py-3 text-stone-600">4–7</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refMeaning_moderate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_high') }}</td><td class="px-6 py-3 text-stone-600">≥ 8</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refMeaning_high') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('hepatitisRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('hepatitisRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('hepatitisRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="hepatitisRisk" />
</template>
