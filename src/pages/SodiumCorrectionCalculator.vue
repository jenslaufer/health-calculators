<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('sodiumCorrection.faq') || [])

useHead(() => ({
  title: t('sodiumCorrection.meta.title'),
  description: t('sodiumCorrection.meta.description'),
  routeKey: 'sodiumCorrection',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Sodium Correction Calculator',
    url: 'https://healthcalculator.app/sodium-correction-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const measuredNa = ref(null)
const glucose = ref(null)
const glucoseUnit = ref('mgdl')
const formula = ref('hillier')

const MMOL_PER_MGDL_GLUCOSE = 18.0182

const glucoseMgDl = computed(() => {
  if (glucose.value === null || glucose.value === '' || glucose.value === undefined) return null
  return glucoseUnit.value === 'mmol' ? glucose.value * MMOL_PER_MGDL_GLUCOSE : glucose.value
})

const hasAllRequired = computed(() =>
  measuredNa.value !== null && measuredNa.value !== '' && glucoseMgDl.value !== null,
)

const correctedNa = computed(() => {
  if (!hasAllRequired.value) return null
  const factor = formula.value === 'katz' ? 1.6 : 2.4
  return measuredNa.value + factor * ((glucoseMgDl.value - 100) / 100)
})

const correctionDelta = computed(() => {
  if (correctedNa.value === null) return null
  return correctedNa.value - measuredNa.value
})

const classification = computed(() => {
  if (correctedNa.value === null) return null
  const v = correctedNa.value
  if (v < 135) return { key: 'hyponatremia', color: 'text-blue-600', bg: 'bg-blue-600', border: 'border-blue-200' }
  if (v > 145) return { key: 'hypernatremia', color: 'text-red-500', bg: 'bg-red-500', border: 'border-red-200' }
  return { key: 'normal', color: 'text-green-600', bg: 'bg-green-600', border: 'border-green-200' }
})

const measuredClassification = computed(() => {
  if (measuredNa.value === null) return null
  if (measuredNa.value < 135) return 'hyponatremia'
  if (measuredNa.value > 145) return 'hypernatremia'
  return 'normal'
})

const plausibilityWarning = computed(() => {
  if (!hasAllRequired.value) return false
  if (measuredNa.value < 110 || measuredNa.value > 170) return true
  if (glucoseMgDl.value < 30 || glucoseMgDl.value > 1500) return true
  return false
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('sodiumCorrection.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('sodiumCorrection.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Glucose unit toggle -->
      <div class="flex gap-2 mb-6">
        <button
          @click="glucoseUnit = 'mgdl'"
          data-testid="unit-mgdl"
          :class="glucoseUnit === 'mgdl' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >mg/dL</button>
        <button
          @click="glucoseUnit = 'mmol'"
          data-testid="unit-mmol"
          :class="glucoseUnit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >mmol/L</button>
      </div>

      <!-- Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-na" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('sodiumCorrection.naLabel') }} (mEq/L)
          </label>
          <input
            id="input-na"
            v-model.number="measuredNa"
            data-testid="input-na"
            type="number"
            step="0.1"
            min="0"
            :placeholder="t('sodiumCorrection.naPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="input-glucose" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('sodiumCorrection.glucoseLabel') }} ({{ glucoseUnit === 'mgdl' ? 'mg/dL' : 'mmol/L' }})
          </label>
          <input
            id="input-glucose"
            v-model.number="glucose"
            data-testid="input-glucose"
            type="number"
            step="0.1"
            min="0"
            :placeholder="glucoseUnit === 'mgdl' ? '400' : '22.2'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <!-- Formula toggle -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('sodiumCorrection.formulaLabel') }}
        </label>
        <div class="flex gap-2">
          <button
            @click="formula = 'hillier'"
            data-testid="formula-hillier"
            :class="formula === 'hillier' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('sodiumCorrection.formulaHillier') }}</button>
          <button
            @click="formula = 'katz'"
            data-testid="formula-katz"
            :class="formula === 'katz' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('sodiumCorrection.formulaKatz') }}</button>
        </div>
        <p class="text-xs text-stone-400 mt-1.5">{{ t('sodiumCorrection.formulaHint') }}</p>
      </div>

      <!-- Plausibility warning -->
      <div v-if="plausibilityWarning" data-testid="warning-plausibility" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-5">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('sodiumCorrection.warningPlausibility') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="correctedNa !== null" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Classification badge -->
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-classification"
          :class="[classification.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('sodiumCorrection.classification.' + classification.key) }}</span>
      </div>

      <!-- Corrected Na value -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('sodiumCorrection.resultCorrectedNa') }}</div>
          <div data-testid="result-corrected-na" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ correctedNa.toFixed(1) }}
            <span class="text-base font-normal text-stone-500">mEq/L</span>
          </div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('sodiumCorrection.resultDelta') }}</div>
          <div data-testid="result-delta" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ correctionDelta >= 0 ? '+' : '' }}{{ correctionDelta.toFixed(1) }}
            <span class="text-base font-normal text-stone-500">mEq/L</span>
          </div>
        </div>
      </div>

      <!-- Clinical hint -->
      <div :class="[classification.border, 'border rounded-lg px-4 py-3 bg-stone-50 mb-4']">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('sodiumCorrection.clinicalHint') }}</div>
        <p data-testid="result-hint" class="text-sm text-stone-700">{{ t('sodiumCorrection.hint.' + classification.key) }}</p>
      </div>

      <!-- Pseudohyponatremia hint -->
      <div
        v-if="measuredClassification === 'hyponatremia' && classification.key === 'normal'"
        data-testid="result-pseudohyponatremia"
        class="border border-blue-200 bg-blue-50 rounded-lg px-4 py-3 mb-4"
      >
        <div class="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-1">{{ t('sodiumCorrection.pseudohyponatremiaTitle') }}</div>
        <p class="text-sm text-blue-700">{{ t('sodiumCorrection.pseudohyponatremiaHint') }}</p>
      </div>

      <!-- Formula -->
      <div class="border-t border-stone-100 pt-4">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('sodiumCorrection.formula') }}</div>
        <div class="bg-stone-50 rounded-lg px-4 py-3 text-sm font-mono text-stone-700">
          <div v-if="formula === 'hillier'">{{ t('sodiumCorrection.formulaHillierExpr') }}</div>
          <div v-else>{{ t('sodiumCorrection.formulaKatzExpr') }}</div>
        </div>
      </div>
    </div>

    <!-- Reference ranges -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('sodiumCorrection.referenceTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(row, i) in tm('sodiumCorrection.referenceRanges')"
          :key="i"
          class="flex items-start justify-between border-b border-stone-100 pb-3 last:border-0 last:pb-0"
        >
          <div class="flex items-center gap-3">
            <div :class="[
              i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-green-600' : 'bg-red-500',
              'w-2.5 h-2.5 rounded-full shrink-0 mt-0.5',
            ]"></div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ row.label }}</span>
              <p class="text-xs text-stone-500">{{ row.hint }}</p>
            </div>
          </div>
          <div class="text-sm font-medium text-stone-900 tabular-nums shrink-0 ml-4">{{ row.range }}</div>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('sodiumCorrection.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <BlogArticleLink calculator-key="sodiumCorrection" />
    <AdSlot class="mt-8" />
  </div>
</template>
