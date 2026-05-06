<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { evaluatePediatricBMI } from '../utils/pediatricBMI.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pediatricBMI.faq') || [])

useHead(() => ({
  title: t('pediatricBMI.meta.title'),
  description: t('pediatricBMI.meta.description'),
  routeKey: 'pediatricBMI',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pediatric BMI Calculator',
    url: 'https://healthcalculator.app/pediatric-bmi-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const ageYears = ref(null)
const ageMonthsExtra = ref(0)
const heightVal = ref(null)
const weightVal = ref(null)
const unit = ref('metric')

const totalMonths = computed(() => {
  const y = Number(ageYears.value)
  if (!Number.isFinite(y) || y <= 0) return null
  const m = Number(ageMonthsExtra.value) || 0
  return y * 12 + m
})

const heightCm = computed(() => {
  const v = Number(heightVal.value)
  if (!Number.isFinite(v) || v <= 0) return null
  return unit.value === 'imperial' ? v * 2.54 : v
})

const weightKg = computed(() => {
  const v = Number(weightVal.value)
  if (!Number.isFinite(v) || v <= 0) return null
  return unit.value === 'imperial' ? v * 0.453592 : v
})

const result = computed(() =>
  evaluatePediatricBMI({
    ageMonths: totalMonths.value,
    sex: sex.value,
    heightCm: heightCm.value,
    weightKg: weightKg.value,
  }),
)

const hasResult = computed(() => result.value.percentile !== null)

function categoryStyle(cat) {
  switch (cat) {
    case 'healthy':
      return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'underweight':
      return { color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200 text-amber-900' }
    case 'overweight':
      return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'obesity':
      return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default:
      return { color: 'text-stone-400', bg: '' }
  }
}

function fmtBmi(b) {
  if (b === null) return '—'
  return b.toFixed(1)
}

function fmtPct(p) {
  if (p === null) return '—'
  return p.toFixed(1) + '%'
}

function barWidth(p) {
  if (p === null) return '0%'
  return Math.min(100, Math.max(0, p)) + '%'
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pediatricBMI.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pediatricBMI.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        data-testid="unit-metric"
      >{{ t('common.metric') }}</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        data-testid="unit-imperial"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBMI.sex') }}</label>
        <div class="flex gap-2">
          <button @click="sex = 'male'" data-testid="sex-male"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('pediatricBMI.boy') }}</button>
          <button @click="sex = 'female'" data-testid="sex-female"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('pediatricBMI.girl') }}</button>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBMI.ageYears') }}</label>
        <input v-model.number="ageYears" type="number" min="2" max="20" placeholder="8" data-testid="age-years"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBMI.ageMonths') }}</label>
        <input v-model.number="ageMonthsExtra" type="number" min="0" max="11" placeholder="0" data-testid="age-months"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ unit === 'metric' ? t('pediatricBMI.heightCm') : t('pediatricBMI.heightIn') }}
        </label>
        <input v-model.number="heightVal" type="number" step="0.1" :placeholder="unit === 'metric' ? '130' : '51'" data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ unit === 'metric' ? t('pediatricBMI.weightKg') : t('pediatricBMI.weightLb') }}
        </label>
        <input v-model.number="weightVal" type="number" step="0.1" :placeholder="unit === 'metric' ? '28' : '62'" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResult" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pediatricBMI.resultsLabel') }}</p>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-5">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pediatricBMI.bmi') }}</p>
        <p class="text-3xl font-bold text-stone-900 tabular-nums" data-testid="bmi-result">{{ fmtBmi(result.bmi) }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-5">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pediatricBMI.percentile') }}</p>
        <p class="text-3xl font-bold text-stone-900 tabular-nums" data-testid="percentile-result">{{ fmtPct(result.percentile) }}</p>
      </div>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-green-500 via-orange-500 to-red-600 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: barWidth(result.percentile) }"></div>
    </div>

    <div :class="categoryStyle(result.category).bg"
      class="rounded-lg border p-5 mb-4" data-testid="category-result">
      <p class="text-xs font-semibold uppercase tracking-widest mb-1 opacity-70">{{ t('pediatricBMI.categoryLabel') }}</p>
      <p class="text-2xl font-bold" data-testid="category-name">{{ t('pediatricBMI.category_' + result.category) }}</p>
      <p class="text-sm mt-2 leading-relaxed">{{ t('pediatricBMI.advice_' + result.category) }}</p>
    </div>

    <p class="text-xs text-stone-400 leading-relaxed">{{ t('pediatricBMI.disclaimer') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pediatricBMI.percentileRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pediatricBMI.categoryLabel') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">&lt; 5%</td>
          <td class="px-6 py-3 text-amber-600">{{ t('pediatricBMI.category_underweight') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">5% – &lt; 85%</td>
          <td class="px-6 py-3 text-green-600">{{ t('pediatricBMI.category_healthy') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">85% – &lt; 95%</td>
          <td class="px-6 py-3 text-orange-500">{{ t('pediatricBMI.category_overweight') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">&ge; 95%</td>
          <td class="px-6 py-3 text-red-700">{{ t('pediatricBMI.category_obesity') }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pediatricBMI.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('pediatricBMI.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="pediatricBMI" />
</template>
