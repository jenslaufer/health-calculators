<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  headCircumferencePercentile,
  headCircumferenceCategory,
  totalMonths,
  isAgeInRange,
  HC_MAX_MONTHS,
} from '../utils/headCircumference.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('headCircumference.faq') || [])

useHead(() => ({
  title: t('headCircumference.meta.title'),
  description: t('headCircumference.meta.description'),
  routeKey: 'headCircumference',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Head Circumference Calculator',
    url: 'https://healthcalculator.app/en/head-circumference-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
}))

const sex = ref('male')
const ageYears = ref(null)
const ageMonthsExtra = ref(0)
const headVal = ref(null)
const headUnit = ref('cm')

const ageMonths = computed(() => totalMonths(ageYears.value, ageMonthsExtra.value))

const headCm = computed(() => {
  const v = Number(headVal.value)
  if (!v || v <= 0) return null
  return headUnit.value === 'in' ? v * 2.54 : v
})

const ageInRange = computed(() => isAgeInRange(ageMonths.value))

const percentile = computed(() => {
  if (!ageInRange.value) return null
  return headCircumferencePercentile({
    sex: sex.value,
    ageMonths: ageMonths.value,
    headCm: headCm.value,
  })
})

const category = computed(() => headCircumferenceCategory(percentile.value))

const hasResult = computed(() => percentile.value !== null)
const showRangeError = computed(() =>
  headVal.value && headCm.value && !ageInRange.value && ageMonths.value > HC_MAX_MONTHS,
)

function fmtPct(p) {
  if (p === null || p === undefined) return '—'
  return p.toFixed(1) + '%'
}

function catColor(cat) {
  if (!cat) return 'text-stone-400'
  if (cat === 'normal') return 'text-emerald-600'
  if (cat === 'low' || cat === 'high') return 'text-amber-600'
  return 'text-red-500'
}

function catBg(cat) {
  if (!cat) return 'bg-stone-100'
  if (cat === 'normal') return 'bg-emerald-50 border-emerald-200'
  if (cat === 'low' || cat === 'high') return 'bg-amber-50 border-amber-200'
  return 'bg-red-50 border-red-200'
}

function barWidth(p) {
  if (p === null) return '0%'
  return Math.min(100, Math.max(0, p)) + '%'
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('headCircumference.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('headCircumference.description') }}</p>
  </div>

  <!-- Inputs -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('headCircumference.inputsLabel') }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <!-- Sex -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('headCircumference.sex') }}</label>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="sex"
              type="radio"
              value="male"
              data-testid="sex-male"
              class="accent-stone-800"
            />
            <span class="text-sm font-medium text-stone-700">{{ t('headCircumference.male') }}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="sex"
              type="radio"
              value="female"
              data-testid="sex-female"
              class="accent-stone-800"
            />
            <span class="text-sm font-medium text-stone-700">{{ t('headCircumference.female') }}</span>
          </label>
        </div>
      </div>

      <!-- Age years -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('headCircumference.ageYears') }}</label>
        <input
          v-model.number="ageYears"
          type="number"
          min="0"
          max="3"
          placeholder="1"
          data-testid="age-years"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <!-- Age months -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('headCircumference.ageMonths') }}</label>
        <select
          v-model.number="ageMonthsExtra"
          data-testid="age-months"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option v-for="m in 12" :key="m - 1" :value="m - 1">{{ m - 1 }} {{ t('headCircumference.months') }}</option>
        </select>
      </div>

      <!-- Head circumference + unit -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('headCircumference.headCirc') }}</label>
        <div class="flex gap-2">
          <input
            v-model.number="headVal"
            type="number"
            min="20"
            step="0.1"
            :placeholder="headUnit === 'cm' ? '45' : '17.7'"
            data-testid="head-circ"
            class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <select
            v-model="headUnit"
            data-testid="head-unit"
            class="border border-stone-300 rounded-lg px-3 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 transition-all duration-150"
          >
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
        <p class="mt-2 text-xs text-stone-400">{{ t('headCircumference.rangeNote') }}</p>
      </div>

    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Out-of-range warning -->
  <div v-if="showRangeError" class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6" data-testid="out-of-range">
    <p class="text-sm text-amber-700">{{ t('headCircumference.outOfRange') }}</p>
  </div>

  <!-- Result -->
  <div v-if="hasResult" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('headCircumference.resultsLabel') }}</p>

    <div :class="['border rounded-xl p-5 mb-6', catBg(category)]">
      <div class="flex items-start justify-between mb-3">
        <div>
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('headCircumference.result') }}</p>
          <p :class="['text-4xl font-bold tabular-nums leading-none', catColor(category)]" data-testid="hc-percentile">{{ fmtPct(percentile) }}</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-stone-400 mb-1" data-testid="result-status">{{ t(`headCircumference.cat.${category}`) }}</p>
          <p class="text-sm text-stone-500">{{ headCm?.toFixed(1) }} cm</p>
        </div>
      </div>
      <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
        <div class="h-full bg-current rounded-full transition-all duration-500" :class="catColor(category)" :style="{ width: barWidth(percentile) }" />
      </div>
    </div>

    <div class="pt-2">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('headCircumference.interpretation') }}</p>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('headCircumference.interpretationText') }}</p>
    </div>

    <!-- Legend -->
    <div class="mt-6 pt-6 border-t border-stone-100">
      <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">{{ t('headCircumference.legend') }}</p>
      <div class="flex flex-wrap gap-3 text-xs">
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500 inline-block" />{{ t('headCircumference.cat.veryLow') }} (&lt;3%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 inline-block" />{{ t('headCircumference.cat.low') }} (3–15%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block" />{{ t('headCircumference.cat.normal') }} (15–85%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 inline-block" />{{ t('headCircumference.cat.high') }} (85–97%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500 inline-block" />{{ t('headCircumference.cat.veryHigh') }} (&gt;97%)</span>
      </div>
    </div>
  </div>

  <!-- Disclaimer -->
  <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
    <p class="text-xs text-stone-500 leading-relaxed">{{ t('headCircumference.disclaimer') }}</p>
  </div>

  <!-- How it works -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('headCircumference.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('headCircumference.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="headCircumference" class="mt-8" />
  <BlogArticleLink calculator-key="headCircumference" />
</template>
