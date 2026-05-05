<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcHeartFailureRisk, calcBmi } from '../utils/heartFailureRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('heartFailureRisk.faq') || [])

useHead(() => ({
  title: t('heartFailureRisk.meta.title'),
  description: t('heartFailureRisk.meta.description'),
  routeKey: 'heartFailureRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Heart Failure Risk Calculator',
    url: 'https://healthcalculator.app/heart-failure-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const age = ref(null)
const unit = ref('metric')
const weight = ref(null)
const height = ref(null)

const hypertension = ref(false)
const diabetes = ref(false)
const coronaryArteryDisease = ref(false)
const priorHeartAttack = ref(false)
const smoker = ref(false)
const inactive = ref(false)
const ckd = ref(false)

const weightKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const heightCm = computed(() => {
  if (!height.value) return null
  return unit.value === 'imperial' ? height.value * 2.54 : height.value
})

const bmi = computed(() => calcBmi({ weightKg: weightKg.value, heightCm: heightCm.value }))

const result = computed(() => calcHeartFailureRisk({
  age: age.value,
  sex: sex.value,
  hypertension: hypertension.value,
  diabetes: diabetes.value,
  coronaryArteryDisease: coronaryArteryDisease.value,
  priorHeartAttack: priorHeartAttack.value,
  smoker: smoker.value,
  bmi: bmi.value,
  inactive: inactive.value,
  ckd: ckd.value,
}))

const categoryColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.category) {
    case 'low': return 'text-green-600'
    case 'moderate': return 'text-yellow-500'
    case 'high': return 'text-orange-500'
    case 'veryHigh': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const barPosition = computed(() => {
  if (!result.value) return 0
  return Math.min(100, (result.value.score / 20) * 100)
})

function reset() {
  age.value = null
  weight.value = null
  height.value = null
  hypertension.value = false
  diabetes.value = false
  coronaryArteryDisease.value = false
  priorHeartAttack.value = false
  smoker.value = false
  inactive.value = false
  ckd.value = false
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('heartFailureRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('heartFailureRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button @click="unit = 'metric'" data-testid="unit-metric"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.metric') }}</button>
      <button @click="unit = 'imperial'" data-testid="unit-imperial"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.gender') }}</label>
        <div class="flex gap-2">
          <button @click="sex = 'male'" data-testid="sex-male"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button @click="sex = 'female'" data-testid="sex-female"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('heartFailureRisk.age') }}</label>
        <input v-model.number="age" type="number" placeholder="55" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('heartFailureRisk.weight') }} ({{ unit === 'metric' ? t('common.kg') : t('common.lbs') }})
        </label>
        <input v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('heartFailureRisk.height') }} ({{ unit === 'metric' ? t('common.cm') : t('common.inches') }})
        </label>
        <input v-model.number="height" type="number" :placeholder="unit === 'metric' ? '175' : '69'" data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="space-y-3 mb-2">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('heartFailureRisk.factorsTitle') }}</p>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="hypertension" type="checkbox" data-testid="hypertension"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.hypertension') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="diabetes" type="checkbox" data-testid="diabetes"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.diabetes') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="coronaryArteryDisease" type="checkbox" data-testid="cad"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.cad') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="priorHeartAttack" type="checkbox" data-testid="prior-mi"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.priorMi') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="smoker" type="checkbox" data-testid="smoker"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.smoker') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="inactive" type="checkbox" data-testid="inactive"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.inactive') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="ckd" type="checkbox" data-testid="ckd"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('heartFailureRisk.ckd') }}
      </label>
    </div>

    <button @click="reset"
      class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150 mt-6"
    >&times; {{ t('heartFailureRisk.reset') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('heartFailureRisk.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="risk-score">{{ result.score }}</span>
      <span class="text-lg text-stone-400">{{ t('heartFailureRisk.points') }}</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="result-status">{{ t('heartFailureRisk.cat_' + result.category) }}</span>
    </div>

    <p class="text-sm text-stone-500 mb-4">
      <span data-testid="ten-year-risk">{{ t('heartFailureRisk.tenYearLabel', { pct: result.tenYearRiskPct }) }}</span>
    </p>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: barPosition + '%' }"></div>
    </div>

    <div v-if="bmi" class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="bmi-display">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">BMI</p>
      <p class="text-lg font-bold text-stone-900 tabular-nums">{{ bmi.toFixed(1) }} kg/m²</p>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 text-sm text-stone-600 leading-relaxed" data-testid="advice">
      {{ t('heartFailureRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('heartFailureRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('heartFailureRisk.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('heartFailureRisk.refCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('heartFailureRisk.refTenYear') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">0 – 3</td><td class="px-6 py-3 text-green-600 font-semibold">{{ t('heartFailureRisk.cat_low') }}</td><td class="px-6 py-3 text-stone-600">&lt; 5 %</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">4 – 7</td><td class="px-6 py-3 text-yellow-600 font-semibold">{{ t('heartFailureRisk.cat_moderate') }}</td><td class="px-6 py-3 text-stone-600">5 – 15 %</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">8 – 12</td><td class="px-6 py-3 text-orange-600 font-semibold">{{ t('heartFailureRisk.cat_high') }}</td><td class="px-6 py-3 text-stone-600">15 – 30 %</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">&ge; 13</td><td class="px-6 py-3 text-red-600 font-semibold">{{ t('heartFailureRisk.cat_veryHigh') }}</td><td class="px-6 py-3 text-stone-600">&ge; 30 %</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('heartFailureRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('heartFailureRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('heartFailureRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="heartFailureRisk" />
</template>
