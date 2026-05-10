<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  calcCalories,
  calcDistanceKm,
  classifyActivity,
} from '../utils/schritteKalorienRechner.js'

const { t, tm, locale } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('schritteKalorienRechner.faq') || [])

useHead(() => ({
  title: t('schritteKalorienRechner.meta.title'),
  description: t('schritteKalorienRechner.meta.description'),
  routeKey: 'schritteKalorienRechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Steps to Calories Calculator',
    url: 'https://healthcalculator.app/steps-to-calories-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const steps = ref(null)
const weight = ref(null)
const stride = ref(null)

const effectiveStride = computed(() => stride.value && stride.value > 0 ? stride.value : 75)

const calories = computed(() => calcCalories(steps.value, weight.value))
const distanceKm = computed(() => calcDistanceKm(steps.value, effectiveStride.value))
const activityKey = computed(() => classifyActivity(steps.value))
const activityLabel = computed(() => t(`schritteKalorienRechner.${activityKey.value}`))

const hasResult = computed(() => steps.value && steps.value > 0 && weight.value && weight.value > 0)

const refRows = [
  { steps: 5000 },
  { steps: 7500 },
  { steps: 10000 },
  { steps: 12500 },
].map(r => ({
  steps: r.steps,
  km: (r.steps * 75 / 100000).toFixed(2),
  kcal: Math.round(r.steps * 0.04),
}))

const decimal = computed(() => locale.value === 'de' ? ',' : '.')
function fmt(n, digits = 0) {
  if (n == null) return '—'
  return n.toFixed(digits).replace('.', decimal.value)
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('schritteKalorienRechner.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('schritteKalorienRechner.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.stepsLabel') }}</label>
        <input v-model.number="steps" type="number" :placeholder="t('schritteKalorienRechner.stepsPlaceholder')" data-testid="steps"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.weightLabel') }}</label>
        <input v-model.number="weight" type="number" :placeholder="t('schritteKalorienRechner.weightPlaceholder')" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.strideLabel') }}</label>
        <input v-model.number="stride" type="number" :placeholder="t('schritteKalorienRechner.stridePlaceholder')" data-testid="stride"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResult" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('schritteKalorienRechner.calories') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="calories-result">{{ Math.round(calories) }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('schritteKalorienRechner.kcal') }}</span>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('schritteKalorienRechner.distance') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="distance-result">{{ fmt(distanceKm, 2) }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('schritteKalorienRechner.km') }}</span>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('schritteKalorienRechner.activity') }}</p>
        <span class="text-2xl font-bold text-stone-900 leading-tight" data-testid="activity-result">{{ activityLabel }}</span>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-100">
      <h2 class="text-base font-semibold text-stone-900">{{ t('schritteKalorienRechner.referenceTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.referenceSteps') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.referenceKm') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.referenceKcal') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="row in refRows" :key="row.steps">
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">{{ row.steps.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US') }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.km.replace('.', decimal) }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.kcal }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('schritteKalorienRechner.exampleTitle') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">{{ t('schritteKalorienRechner.exampleText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('schritteKalorienRechner.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('schritteKalorienRechner.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="schritteKalorienRechner" />
</template>
