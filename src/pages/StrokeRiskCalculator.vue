<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcStrokeRisk } from '../utils/strokeRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('strokeRisk.faq') || [])

useHead(() => ({
  title: t('strokeRisk.meta.title'),
  description: t('strokeRisk.meta.description'),
  routeKey: 'strokeRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Stroke Risk Calculator (CHA2DS2-VASc)',
    url: 'https://healthcalculator.app/stroke-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const sex = ref('male')
const heartFailure = ref(false)
const hypertension = ref(false)
const diabetes = ref(false)
const strokeHistory = ref(false)
const vascularDisease = ref(false)

const factors = [
  { key: 'heartFailure', model: heartFailure, points: 1 },
  { key: 'hypertension', model: hypertension, points: 1 },
  { key: 'diabetes', model: diabetes, points: 1 },
  { key: 'strokeHistory', model: strokeHistory, points: 2 },
  { key: 'vascularDisease', model: vascularDisease, points: 1 },
]

const result = computed(() => calcStrokeRisk({
  age: age.value,
  sex: sex.value,
  heartFailure: heartFailure.value,
  hypertension: hypertension.value,
  diabetes: diabetes.value,
  strokeHistory: strokeHistory.value,
  vascularDisease: vascularDisease.value,
}))

const breakdown = computed(() => {
  if (!result.value) return []
  const items = []
  if (heartFailure.value) items.push({ key: 'heartFailure', points: 1 })
  if (hypertension.value) items.push({ key: 'hypertension', points: 1 })
  if (age.value >= 75) items.push({ key: 'ageOver75', points: 2 })
  else if (age.value >= 65) items.push({ key: 'age65to74', points: 1 })
  if (diabetes.value) items.push({ key: 'diabetes', points: 1 })
  if (strokeHistory.value) items.push({ key: 'strokeHistory', points: 2 })
  if (vascularDisease.value) items.push({ key: 'vascularDisease', points: 1 })
  if (sex.value === 'female') items.push({ key: 'female', points: 1 })
  return items
})

function labelFor(k) {
  return t('strokeRisk.breakdown_' + k)
}

const categoryStyle = computed(() => {
  if (!result.value) return { color: '', bg: '' }
  switch (result.value.category) {
    case 'low': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'borderline': return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200 text-yellow-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'high': return { color: 'text-red-500', bg: 'bg-red-50 border-red-200 text-red-900' }
    case 'veryHigh': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const referenceRows = [
  { score: 0, riskPct: 0.2, rec: 'none' },
  { score: 1, riskPct: 0.6, rec: 'consider' },
  { score: 2, riskPct: 2.2, rec: 'recommended' },
  { score: 3, riskPct: 3.2, rec: 'recommended' },
  { score: 4, riskPct: 4.8, rec: 'recommended' },
  { score: 5, riskPct: 7.2, rec: 'recommended' },
  { score: 6, riskPct: 9.7, rec: 'recommended' },
  { score: 7, riskPct: 11.2, rec: 'recommended' },
  { score: 8, riskPct: 10.8, rec: 'recommended' },
  { score: 9, riskPct: 12.2, rec: 'recommended' },
]
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('strokeRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('strokeRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('strokeRisk.instructionsLabel') }}</p>
    <p class="text-sm text-stone-600 leading-relaxed mb-6">{{ t('strokeRisk.instructions') }}</p>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('strokeRisk.ageLabel') }}</label>
        <input
          v-model.number="age"
          type="number"
          :placeholder="t('strokeRisk.agePlaceholder')"
          data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('strokeRisk.sexLabel') }}</label>
        <div class="flex gap-2">
          <button
            @click="sex = 'male'"
            data-testid="sex-male"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button
            @click="sex = 'female'"
            data-testid="sex-female"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('strokeRisk.factorsLabel') }}</p>
    <div class="space-y-3">
      <label
        v-for="f in factors"
        :key="f.key"
        :data-testid="'factor-' + f.key"
        :class="f.model.value ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="f.model.value"
          type="checkbox"
          :data-testid="'checkbox-' + f.key"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-3">
            <p class="text-sm font-semibold text-stone-900">{{ t('strokeRisk.factor_' + f.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ f.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('strokeRisk.factor_' + f.key + '_desc') }}</p>
        </div>
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('strokeRisk.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="cha2ds2-vasc-score">{{ result.score }}</span>
      <span class="text-lg text-stone-400">{{ t('strokeRisk.scoreOf') }}</span>
      <span :class="categoryStyle.color" class="text-lg font-semibold" data-testid="result-status">{{ t('strokeRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (result.score / 9 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="annual-risk">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('strokeRisk.annualRiskLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.annualRiskPct.toFixed(1) }}<span class="text-lg text-stone-400 font-medium"> %</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="anticoagulation">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('strokeRisk.anticoagulationLabel') }}</p>
        <p class="text-base font-semibold text-stone-900 leading-snug">{{ t('strokeRisk.rec_' + result.anticoagulation) }}</p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="anticoagulation-detail">
      {{ t('strokeRisk.anticoagulation_' + result.anticoagulation) }}
    </div>

    <div v-if="breakdown.length" class="mt-6">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('strokeRisk.scoreSummaryLabel') }}</p>
      <ul class="space-y-1.5">
        <li v-for="item in breakdown" :key="item.key" class="flex justify-between items-baseline text-sm">
          <span class="text-stone-700">{{ labelFor(item.key) }}</span>
          <span class="font-semibold text-stone-900 tabular-nums">+{{ item.points }}</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('strokeRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('strokeRisk.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('strokeRisk.refRisk') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('strokeRisk.refRecommendation') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="row in referenceRows" :key="row.score">
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">{{ row.score }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.riskPct.toFixed(1) }} %</td>
          <td class="px-6 py-3 text-stone-600">{{ t('strokeRisk.rec_' + row.rec) }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('strokeRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('strokeRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('strokeRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="strokeRisk" />
</template>
