<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('hba1c.meta.title'),
  description: t('hba1c.meta.description'),
  routeKey: 'hba1c',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HbA1c Converter',
    url: 'https://healthcalculator.app/hba1c-converter',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// mode: 'hba1c' = enter HbA1c → get eAG | 'glucose' = enter glucose → get HbA1c
const mode = ref('hba1c')
// unit for glucose input/display
const unit = ref('mg')

const hba1cInput = ref(null)
const glucoseInput = ref(null)

function switchMode(m) {
  mode.value = m
  hba1cInput.value = null
  glucoseInput.value = null
}

function switchUnit(u) {
  unit.value = u
  glucoseInput.value = null
}

// HbA1c → eAG (mg/dL)
const eagMg = computed(() => {
  if (mode.value !== 'hba1c' || !hba1cInput.value) return null
  return 28.7 * hba1cInput.value - 46.7
})

const eagMmol = computed(() => {
  if (eagMg.value === null) return null
  return eagMg.value / 18.015
})

// Glucose → HbA1c
const eagMgFromGlucose = computed(() => {
  if (mode.value !== 'glucose' || !glucoseInput.value) return null
  return unit.value === 'mmol' ? glucoseInput.value * 18.015 : glucoseInput.value
})

const eagMmolFromGlucose = computed(() => {
  if (eagMgFromGlucose.value === null) return null
  return eagMgFromGlucose.value / 18.015
})

const hba1cFromGlucose = computed(() => {
  if (eagMgFromGlucose.value === null) return null
  return (eagMgFromGlucose.value + 46.7) / 28.7
})

const effectiveHba1c = computed(() =>
  mode.value === 'hba1c' ? hba1cInput.value : hba1cFromGlucose.value
)

const riskCategory = computed(() => {
  if (!effectiveHba1c.value) return null
  const h = effectiveHba1c.value
  if (h < 5.7) return { key: 'normal', color: 'text-green-600', bg: 'bg-green-600' }
  if (h < 6.5) return { key: 'prediabetes', color: 'text-yellow-500', bg: 'bg-yellow-500' }
  return { key: 'diabetes', color: 'text-red-500', bg: 'bg-red-500' }
})

const hasResult = computed(() =>
  mode.value === 'hba1c' ? eagMg.value !== null : hba1cFromGlucose.value !== null
)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('hba1c.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('hba1c.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Mode + unit toggles -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          data-testid="btn-hba1c-mode"
          @click="switchMode('hba1c')"
          :class="mode === 'hba1c' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('hba1c.modeHbA1c') }}</button>
        <button
          data-testid="btn-glucose-mode"
          @click="switchMode('glucose')"
          :class="mode === 'glucose' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('hba1c.modeGlucose') }}</button>

        <div class="ml-auto flex gap-2">
          <button
            data-testid="btn-mgdl"
            @click="switchUnit('mg')"
            :class="unit === 'mg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >mg/dL</button>
          <button
            data-testid="btn-mmol"
            @click="switchUnit('mmol')"
            :class="unit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >mmol/L</button>
        </div>
      </div>

      <!-- Input -->
      <div v-if="mode === 'hba1c'">
        <label for="input-hba1c" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('hba1c.hba1cLabel') }}
        </label>
        <input
          id="input-hba1c"
          v-model.number="hba1cInput"
          data-testid="input-hba1c"
          type="number"
          step="0.1"
          min="3"
          max="15"
          :placeholder="t('hba1c.hba1cPlaceholder')"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <div v-else>
        <label for="input-glucose" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('hba1c.glucoseLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input
          id="input-glucose"
          v-model.number="glucoseInput"
          data-testid="input-glucose"
          type="number"
          step="0.1"
          :placeholder="unit === 'mg' ? t('hba1c.glucosePlaceholderMg') : t('hba1c.glucosePlaceholderMmol')"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="hasResult" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Risk badge -->
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="risk-badge"
          :class="[riskCategory.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('hba1c.' + riskCategory.key) }}</span>
        <span class="text-sm text-stone-500">{{ t('hba1c.category') }}</span>
      </div>

      <!-- Result values -->
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div class="space-y-5">
          <template v-if="mode === 'hba1c'">
            <div>
              <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hba1c.eagMg') }}</div>
              <div data-testid="result-eag-mg" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">{{ eagMg.toFixed(1) }}</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hba1c.eagMmol') }}</div>
              <div data-testid="result-eag-mmol" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">{{ eagMmol.toFixed(2) }}</div>
            </div>
          </template>
          <template v-else>
            <div>
              <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('hba1c.hba1cResult') }}</div>
              <div data-testid="result-hba1c" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">{{ hba1cFromGlucose.toFixed(1) }} %</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">
                {{ unit === 'mg' ? t('hba1c.eagMmol') : t('hba1c.eagMg') }}
              </div>
              <div class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
                {{ unit === 'mg' ? eagMmolFromGlucose.toFixed(2) : eagMgFromGlucose.toFixed(1) }}
                <span class="text-base font-normal text-stone-500">{{ unit === 'mg' ? 'mmol/L' : 'mg/dL' }}</span>
              </div>
            </div>
          </template>
        </div>

        <!-- Visual risk indicator -->
        <div data-testid="risk-category" class="flex flex-col items-center justify-center">
          <div class="relative w-28 h-28">
            <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#e7e5e4" stroke-width="10"/>
              <circle
                cx="50" cy="50" r="38" fill="none"
                :stroke="riskCategory.key === 'normal' ? '#16a34a' : riskCategory.key === 'prediabetes' ? '#eab308' : '#ef4444'"
                stroke-width="10"
                stroke-linecap="round"
                :stroke-dasharray="`${riskCategory.key === 'normal' ? 79 : riskCategory.key === 'prediabetes' ? 159 : 239} 239`"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span :class="[riskCategory.color, 'text-xs font-bold text-center leading-tight px-2']">
                {{ t('hba1c.' + riskCategory.key) }}
              </span>
            </div>
          </div>
          <div class="text-xs text-stone-400 mt-2 text-center">{{ effectiveHba1c.toFixed(1) }} %</div>
        </div>
      </div>

      <!-- Formula -->
      <div class="border-t border-stone-100 pt-4">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('hba1c.formula') }}</div>
        <div class="bg-stone-50 rounded-lg px-4 py-3 text-sm font-mono text-stone-700">
          {{ mode === 'hba1c' ? t('hba1c.formulaText') : t('hba1c.formulaTextReverse') }}
        </div>
      </div>
    </div>

    <!-- Categories table -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('hba1c.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-green-600 shrink-0"></div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ t('hba1c.normal') }}</span>
              <p class="text-xs text-stone-500">{{ t('hba1c.normalDesc') }}</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums shrink-0 ml-4">{{ t('hba1c.normalRange') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0"></div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ t('hba1c.prediabetes') }}</span>
              <p class="text-xs text-stone-500">{{ t('hba1c.prediabetesDesc') }}</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums shrink-0 ml-4">{{ t('hba1c.prediabetesRange') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ t('hba1c.diabetes') }}</span>
              <p class="text-xs text-stone-500">{{ t('hba1c.diabetesDesc') }}</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums shrink-0 ml-4">{{ t('hba1c.diabetesRange') }}</span>
        </div>
      </div>
    </div>

    <BlogBanner calculator-key="hba1c" />
    <AdSlot class="mt-8" />
  </div>
</template>
