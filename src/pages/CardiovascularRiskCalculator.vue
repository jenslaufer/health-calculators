<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcCardiovascularRisk } from '../utils/cardiovascularRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('cardiovascularRisk.faq') || [])

useHead(() => ({
  title: t('cardiovascularRisk.meta.title'),
  description: t('cardiovascularRisk.meta.description'),
  routeKey: 'cardiovascularRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Cardiovascular Risk Calculator',
    url: 'https://healthcalculator.app/cardiovascular-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const age = ref(null)
const totalChol = ref(null)
const hdl = ref(null)
const systolicBP = ref(null)
const treated = ref(false)
const smoker = ref(false)
const diabetic = ref(false)
const cholUnit = ref('mgdl')

const result = computed(() => calcCardiovascularRisk({
  age: age.value,
  sex: sex.value,
  totalChol: totalChol.value,
  hdl: hdl.value,
  systolicBP: systolicBP.value,
  treated: treated.value,
  smoker: smoker.value,
  diabetic: diabetic.value,
  cholUnit: cholUnit.value,
}))

const categoryColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.category) {
    case 'low': return 'text-green-600'
    case 'borderline': return 'text-yellow-500'
    case 'intermediate': return 'text-orange-500'
    case 'high': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const barPosition = computed(() => {
  if (!result.value) return 0
  return Math.min(100, (result.value.risk / 30) * 100)
})

function reset() {
  age.value = null
  totalChol.value = null
  hdl.value = null
  systolicBP.value = null
  treated.value = false
  smoker.value = false
  diabetic.value = false
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('cardiovascularRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('cardiovascularRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button @click="cholUnit = 'mgdl'" data-testid="unit-mgdl"
        :class="cholUnit === 'mgdl' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mg/dL</button>
      <button @click="cholUnit = 'mmol'" data-testid="unit-mmol"
        :class="cholUnit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mmol/L</button>
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
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('cardiovascularRisk.age') }}</label>
        <input v-model.number="age" type="number" placeholder="50" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cardiovascularRisk.totalChol') }} ({{ cholUnit === 'mgdl' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input v-model.number="totalChol" type="number" step="0.01"
          :placeholder="cholUnit === 'mgdl' ? '200' : '5.2'" data-testid="total-chol"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cardiovascularRisk.hdl') }} ({{ cholUnit === 'mgdl' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input v-model.number="hdl" type="number" step="0.01"
          :placeholder="cholUnit === 'mgdl' ? '50' : '1.3'" data-testid="hdl"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('cardiovascularRisk.sbp') }} (mmHg)</label>
      <input v-model.number="systolicBP" type="number" placeholder="120" data-testid="sbp"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>

    <div class="space-y-3 mb-2">
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="treated" type="checkbox" data-testid="treated"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('cardiovascularRisk.treated') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="smoker" type="checkbox" data-testid="smoker"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('cardiovascularRisk.smoker') }}
      </label>
      <label class="flex items-center gap-3 text-sm text-stone-700 cursor-pointer">
        <input v-model="diabetic" type="checkbox" data-testid="diabetic"
          class="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600" />
        {{ t('cardiovascularRisk.diabetic') }}
      </label>
    </div>

    <button @click="reset"
      class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150 mt-6"
    >&times; {{ t('cardiovascularRisk.reset') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('cardiovascularRisk.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="risk-result">{{ result.risk.toFixed(1) }}</span>
      <span class="text-lg text-stone-400">%</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="result-status">{{ t('cardiovascularRisk.cat_' + result.category) }}</span>
    </div>

    <p class="text-sm text-stone-500 mb-4">{{ t('cardiovascularRisk.tenYearLabel') }}</p>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: barPosition + '%' }"></div>
    </div>

    <div v-if="result.heartAge" class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="heart-age">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cardiovascularRisk.heartAge') }}</p>
      <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.heartAge }} {{ t('cardiovascularRisk.years') }}</p>
      <p v-if="age && result.heartAge > age" class="text-xs text-red-600 mt-1">
        {{ t('cardiovascularRisk.heartAgeOlder', { years: result.heartAge - age }) }}
      </p>
      <p v-else-if="age && result.heartAge < age" class="text-xs text-green-600 mt-1">
        {{ t('cardiovascularRisk.heartAgeYounger', { years: age - result.heartAge }) }}
      </p>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 text-sm text-stone-600 leading-relaxed" data-testid="advice">
      {{ t('cardiovascularRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('cardiovascularRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cardiovascularRisk.refRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cardiovascularRisk.refCategory') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">&lt; 5 %</td><td class="px-6 py-3 text-green-600 font-semibold">{{ t('cardiovascularRisk.cat_low') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7.5 %</td><td class="px-6 py-3 text-yellow-600 font-semibold">{{ t('cardiovascularRisk.cat_borderline') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">7.5 – 20 %</td><td class="px-6 py-3 text-orange-600 font-semibold">{{ t('cardiovascularRisk.cat_intermediate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">&ge; 20 %</td><td class="px-6 py-3 text-red-600 font-semibold">{{ t('cardiovascularRisk.cat_high') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('cardiovascularRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('cardiovascularRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('cardiovascularRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="cardiovascularRisk" />
</template>
