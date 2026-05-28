<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcHomaIr, getRiskBand, bandColor, bandBg } from '../utils/homaIr.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('homaIr.faq') || [])

useHead(() => ({
  title: t('homaIr.meta.title'),
  description: t('homaIr.meta.description'),
  routeKey: 'homaIr',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HOMA-IR Calculator',
    url: 'https://healthcalculator.app/en/homa-ir-insulin-resistance',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// 'imperial' = conventional units (mg/dL + µU/mL); 'metric' = SI (mmol/L + pmol/L)
const unitSystem = ref('imperial')
const glucose = ref(null)
const insulin = ref(null)

function switchUnits(system) {
  if (unitSystem.value === system) return
  unitSystem.value = system
  glucose.value = null
  insulin.value = null
}

const glucoseUnit = computed(() => (unitSystem.value === 'metric' ? 'mmol' : 'mg'))
const insulinUnit = computed(() => (unitSystem.value === 'metric' ? 'pmol' : 'uU'))

const glucoseUnitLabel = computed(() => (glucoseUnit.value === 'mmol' ? 'mmol/L' : 'mg/dL'))
const insulinUnitLabel = computed(() => (insulinUnit.value === 'pmol' ? 'pmol/L' : 'µU/mL'))

const homaIr = computed(() =>
  calcHomaIr({
    glucose: glucose.value,
    insulin: insulin.value,
    glucoseUnit: glucoseUnit.value,
    insulinUnit: insulinUnit.value,
  }),
)

const band = computed(() => getRiskBand(homaIr.value))
const hasResult = computed(() => homaIr.value !== null && band.value !== null)
const homaIrFormatted = computed(() => (homaIr.value !== null ? homaIr.value.toFixed(2) : '—'))

const formulaText = computed(() =>
  glucoseUnit.value === 'mmol' ? t('homaIr.formulaTextMmol') : t('homaIr.formulaTextMg'),
)

const glucosePlaceholder = computed(() =>
  glucoseUnit.value === 'mmol' ? t('homaIr.glucosePlaceholderMmol') : t('homaIr.glucosePlaceholderMg'),
)
const insulinPlaceholder = computed(() =>
  insulinUnit.value === 'pmol' ? t('homaIr.insulinPlaceholderPmol') : t('homaIr.insulinPlaceholderMicroU'),
)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('homaIr.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('homaIr.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span class="text-xs font-semibold text-stone-500 uppercase tracking-widest">{{ t('homaIr.unitsLabel') }}</span>
        <div class="flex gap-2">
          <button
            data-testid="btn-imperial"
            type="button"
            @click="switchUnits('imperial')"
            :class="unitSystem === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('homaIr.unitImperial') }}</button>
          <button
            data-testid="btn-metric"
            type="button"
            @click="switchUnits('metric')"
            :class="unitSystem === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('homaIr.unitMetric') }}</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="glucose-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('homaIr.glucoseLabel') }} ({{ glucoseUnitLabel }})
          </label>
          <input
            id="glucose-input"
            v-model.number="glucose"
            data-testid="glucose-input"
            type="number"
            step="0.1"
            min="0"
            :placeholder="glucosePlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="insulin-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('homaIr.insulinLabel') }} ({{ insulinUnitLabel }})
          </label>
          <input
            id="insulin-input"
            v-model.number="insulin"
            data-testid="insulin-input"
            type="number"
            step="0.1"
            min="0"
            :placeholder="insulinPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', bandBg(band)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('homaIr.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="homa-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ homaIrFormatted }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ t('homaIr.homaIrUnit') }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-1', bandColor(band)]" data-testid="band">{{ t(`homaIr.band.${band}`) }}</p>
      <p class="text-sm text-stone-600 leading-relaxed mb-4" data-testid="band-description">{{ t(`homaIr.bandDescription.${band}`) }}</p>

      <div class="bg-white/60 border border-stone-200 rounded-lg p-4 text-xs text-stone-600 leading-relaxed" data-testid="clinical-note">
        {{ t('homaIr.clinicalNote') }}
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('homaIr.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('homaIr.band.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('homaIr.bandRange.normal') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('homaIr.band.mild') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('homaIr.bandRange.mild') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">{{ t('homaIr.band.resistance') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('homaIr.bandRange.resistance') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('homaIr.band.severe') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('homaIr.bandRange.severe') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('homaIr.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-base text-stone-700 mb-3" data-testid="formula">
        {{ formulaText }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('homaIr.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('homaIr.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="homaIr" class="mt-8" />
    <BlogArticleLink calculator-key="homaIr" />

    <AdSlot class="mt-8" />
  </div>
</template>
