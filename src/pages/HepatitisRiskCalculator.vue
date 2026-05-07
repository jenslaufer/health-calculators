<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcHepatitisRisk, FACTOR_WEIGHTS } from '../utils/hepatitisRisk.js'

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

const factors = ref({
  bornHighPrevalence: false,
  birthCohort1945to1965: false,
  injectionDrugUse: false,
  transfusionBefore1992: false,
  tattooPiercingUnsterile: false,
  multipleSexPartners: false,
  hivPositive: false,
  healthcareNeedlestick: false,
  householdContactInfected: false,
  hemodialysis: false,
  incarcerated: false,
  maternalInfection: false,
  elevatedLiverEnzymes: false,
  hbvVaccinated: false,
})

const factorList = Object.keys(FACTOR_WEIGHTS).map(key => ({
  key,
  points: FACTOR_WEIGHTS[key],
}))

const result = computed(() => calcHepatitisRisk(factors.value))

const categoryStyle = computed(() => {
  switch (result.value.category) {
    case 'none': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'low': return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200 text-yellow-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'high': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const categoryLevel = computed(() => {
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
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('hepatitisRisk.factorsLabel') }}</p>
    <div class="space-y-3">
      <label
        v-for="f in factorList"
        :key="f.key"
        :data-testid="'factor-' + f.key"
        :class="factors[f.key] ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="factors[f.key]"
          type="checkbox"
          :data-testid="'checkbox-' + f.key"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-3">
            <p class="text-sm font-semibold text-stone-900">{{ t('hepatitisRisk.factor_' + f.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ f.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('hepatitisRisk.factor_' + f.key + '_desc') }}</p>
        </div>
      </label>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mt-8 mb-3">{{ t('hepatitisRisk.protectionLabel') }}</p>
    <label
      data-testid="factor-hbvVaccinated"
      :class="factors.hbvVaccinated ? 'border-green-700 bg-green-50' : 'border-stone-200 hover:border-stone-300'"
      class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
    >
      <input
        v-model="factors.hbvVaccinated"
        type="checkbox"
        data-testid="checkbox-hbvVaccinated"
        class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
      />
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline justify-between gap-3">
          <p class="text-sm font-semibold text-stone-900">{{ t('hepatitisRisk.factor_hbvVaccinated') }}</p>
          <span class="text-xs font-semibold text-green-700 tabular-nums">−2</span>
        </div>
        <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('hepatitisRisk.factor_hbvVaccinated_desc') }}</p>
      </div>
    </label>
  </div>

  <AffiliateBanner class="my-6" />

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('hepatitisRisk.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('hepatitisRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 3 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="risk-score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hepatitisRisk.scoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.score }}<span class="text-lg text-stone-400 font-medium"> / {{ result.maxScore }}</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="risk-band">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hepatitisRisk.bandLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900">{{ t('hepatitisRisk.category_' + result.category) }}</p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('hepatitisRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('hepatitisRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refBand') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('hepatitisRisk.refAction') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_none') }}</td><td class="px-6 py-3 text-stone-600">0</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refAction_none') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_low') }}</td><td class="px-6 py-3 text-stone-600">1–3</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refAction_low') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_moderate') }}</td><td class="px-6 py-3 text-stone-600">4–7</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refAction_moderate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('hepatitisRisk.category_high') }}</td><td class="px-6 py-3 text-stone-600">≥ 8</td><td class="px-6 py-3 text-stone-600">{{ t('hepatitisRisk.refAction_high') }}</td></tr>
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
