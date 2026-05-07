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
  calcCorrectedCalciumMgDl,
  calcCorrectedCalciumMmol,
  getInterpretationMgDl,
  getInterpretationMmol,
  isPlausibleMgDl,
} from '../utils/correctedCalcium.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('correctedCalcium.faq') || [])

useHead(() => ({
  title: t('correctedCalcium.meta.title'),
  description: t('correctedCalcium.meta.description'),
  routeKey: 'correctedCalcium',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Corrected Calcium Calculator',
    url: 'https://healthcalculator.app/corrected-calcium-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const totalCa = ref(null)
const albumin = ref(null)
const unit = ref('conventional') // 'conventional' = mg/dL + g/dL ; 'si' = mmol/L + g/L

const caUnitLabel = computed(() => unit.value === 'si' ? 'mmol/L' : 'mg/dL')
const albuminUnitLabel = computed(() => unit.value === 'si' ? 'g/L' : 'g/dL')

const caPlaceholder = computed(() => unit.value === 'si' ? '2.30' : '9.0')
const albuminPlaceholder = computed(() => unit.value === 'si' ? '40' : '4.0')

function isFiniteNum(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

const hasTotal = computed(() => isFiniteNum(totalCa.value) && totalCa.value > 0)
const hasAlbumin = computed(() => isFiniteNum(albumin.value) && albumin.value > 0)
const albuminMissingWarning = computed(() => hasTotal.value && !hasAlbumin.value)

const corrected = computed(() => {
  if (!hasTotal.value || !hasAlbumin.value) return null
  return unit.value === 'si'
    ? calcCorrectedCalciumMmol(totalCa.value, albumin.value)
    : calcCorrectedCalciumMgDl(totalCa.value, albumin.value)
})

const delta = computed(() => corrected.value === null ? null : corrected.value - totalCa.value)

const interpretation = computed(() => {
  if (corrected.value === null) return null
  const key = unit.value === 'si'
    ? getInterpretationMmol(corrected.value)
    : getInterpretationMgDl(corrected.value)
  if (key === 'hypocalcemia') return { key, color: 'text-blue-600', bg: 'bg-blue-600', border: 'border-blue-200' }
  if (key === 'hypercalcemia') return { key, color: 'text-red-500', bg: 'bg-red-500', border: 'border-red-200' }
  return { key, color: 'text-green-600', bg: 'bg-green-600', border: 'border-green-200' }
})

const plausibilityWarning = computed(() => {
  if (!hasTotal.value || !hasAlbumin.value) return false
  // Convert SI inputs to conventional for the plausibility check
  const ca = unit.value === 'si' ? totalCa.value * 4.008 : totalCa.value
  const alb = unit.value === 'si' ? albumin.value * 0.1 : albumin.value
  return !isPlausibleMgDl(ca, alb)
})

const decimals = computed(() => unit.value === 'si' ? 2 : 1)
function fmt(v) {
  if (v === null || v === undefined) return ''
  return v.toFixed(decimals.value)
}
function fmtSigned(v) {
  if (v === null || v === undefined) return ''
  const sign = v >= 0 ? '+' : ''
  return sign + v.toFixed(decimals.value)
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('correctedCalcium.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('correctedCalcium.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Unit toggle -->
      <div class="flex gap-2 mb-6">
        <button
          @click="unit = 'conventional'"
          data-testid="unit-conventional"
          :class="unit === 'conventional' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >mg/dL · g/dL</button>
        <button
          @click="unit = 'si'"
          data-testid="unit-si"
          :class="unit === 'si' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >mmol/L · g/L</button>
      </div>

      <!-- Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-total-ca" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('correctedCalcium.totalCaLabel') }} ({{ caUnitLabel }})
          </label>
          <input
            id="input-total-ca"
            v-model.number="totalCa"
            data-testid="input-total-ca"
            type="number"
            step="0.01"
            min="0"
            :placeholder="caPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="input-albumin" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('correctedCalcium.albuminLabel') }} ({{ albuminUnitLabel }})
          </label>
          <input
            id="input-albumin"
            v-model.number="albumin"
            data-testid="input-albumin"
            type="number"
            step="0.1"
            min="0"
            :placeholder="albuminPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('correctedCalcium.albuminHint') }}</p>
        </div>
      </div>

      <!-- Albumin missing warning -->
      <div v-if="albuminMissingWarning" data-testid="warning-albumin-missing" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-2">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('correctedCalcium.warningAlbuminMissing') }}</p>
      </div>

      <!-- Plausibility warning -->
      <div v-if="plausibilityWarning" data-testid="warning-plausibility" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-2">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('correctedCalcium.warningPlausibility') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="corrected !== null" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-interpretation"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('correctedCalcium.interpretation.' + interpretation.key) }}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('correctedCalcium.resultCorrected') }}</div>
          <div data-testid="result-corrected" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmt(corrected) }}
            <span class="text-base font-normal text-stone-500">{{ caUnitLabel }}</span>
          </div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('correctedCalcium.resultDelta') }}</div>
          <div data-testid="result-delta" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmtSigned(delta) }}
            <span class="text-base font-normal text-stone-500">{{ caUnitLabel }}</span>
          </div>
        </div>
      </div>

      <div :class="[interpretation.border, 'border rounded-lg px-4 py-3 bg-stone-50 mb-4']">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('correctedCalcium.clinicalHint') }}</div>
        <p data-testid="result-hint" class="text-sm text-stone-700">{{ t('correctedCalcium.hint.' + interpretation.key) }}</p>
      </div>

      <div class="border-t border-stone-100 pt-4">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('correctedCalcium.formula') }}</div>
        <div class="bg-stone-50 rounded-lg px-4 py-3 text-sm font-mono text-stone-700">
          <div v-if="unit === 'si'">{{ t('correctedCalcium.formulaSi') }}</div>
          <div v-else>{{ t('correctedCalcium.formulaConventional') }}</div>
        </div>
      </div>
    </div>

    <!-- Reference ranges -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('correctedCalcium.referenceTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(row, i) in tm('correctedCalcium.referenceRanges')"
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
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('correctedCalcium.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <BlogArticleLink calculator-key="correctedCalcium" />
    <AdSlot class="mt-8" />
  </div>
</template>
