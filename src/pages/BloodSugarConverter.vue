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
  title: t('bloodSugar.meta.title'),
  description: t('bloodSugar.meta.description'),
  routeKey: 'bloodSugar',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blood Sugar Converter',
    url: 'https://healthcalculator.app/blood-sugar-converter',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const FACTOR = 18.018

// unit: 'mg' = mg/dL input | 'mmol' = mmol/L input
const unit = ref('mg')
// context: 'fasting' | 'postprandial'
const context = ref('fasting')
const inputValue = ref(null)

function switchUnit(u) {
  unit.value = u
  inputValue.value = null
}

function switchContext(c) {
  context.value = c
}

const valueMg = computed(() => {
  if (!inputValue.value) return null
  return unit.value === 'mg' ? inputValue.value : inputValue.value * FACTOR
})

const convertedValue = computed(() => {
  if (valueMg.value === null) return null
  return unit.value === 'mg' ? valueMg.value / FACTOR : valueMg.value
})

const riskCategory = computed(() => {
  if (valueMg.value === null) return null
  const v = valueMg.value
  if (context.value === 'fasting') {
    if (v < 100) return { key: 'normal', color: 'text-green-600', bg: 'bg-green-600' }
    if (v < 126) return { key: 'prediabetes', color: 'text-yellow-500', bg: 'bg-yellow-500' }
    return { key: 'diabetes', color: 'text-red-500', bg: 'bg-red-500' }
  } else {
    if (v < 140) return { key: 'normal', color: 'text-green-600', bg: 'bg-green-600' }
    if (v < 200) return { key: 'prediabetes', color: 'text-yellow-500', bg: 'bg-yellow-500' }
    return { key: 'diabetes', color: 'text-red-500', bg: 'bg-red-500' }
  }
})

const hasResult = computed(() => valueMg.value !== null)

const outputUnit = computed(() => (unit.value === 'mg' ? 'mmol/L' : 'mg/dL'))
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bloodSugar.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bloodSugar.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Unit + context toggles -->
      <div class="flex flex-wrap gap-2 mb-6">
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

        <div class="ml-auto flex gap-2">
          <button
            data-testid="btn-fasting"
            @click="switchContext('fasting')"
            :class="context === 'fasting' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('bloodSugar.fasting') }}</button>
          <button
            data-testid="btn-postprandial"
            @click="switchContext('postprandial')"
            :class="context === 'postprandial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('bloodSugar.postprandial') }}</button>
        </div>
      </div>

      <!-- Input -->
      <label for="input-value" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('bloodSugar.valueLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }})
      </label>
      <input
        id="input-value"
        v-model.number="inputValue"
        data-testid="input-value"
        type="number"
        step="0.1"
        min="0"
        :placeholder="unit === 'mg' ? t('bloodSugar.valuePlaceholderMg') : t('bloodSugar.valuePlaceholderMmol')"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="hasResult" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Risk badge -->
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="risk-badge"
          :class="[riskCategory.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('bloodSugar.' + riskCategory.key) }}</span>
        <span class="text-sm text-stone-500">{{ t('bloodSugar.category') }}</span>
      </div>

      <!-- Result values -->
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div class="space-y-5">
          <div>
            <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bloodSugar.resultLabel') }} ({{ outputUnit }})</div>
            <div data-testid="result-converted" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
              {{ unit === 'mg' ? convertedValue.toFixed(2) : convertedValue.toFixed(1) }}
              <span class="text-base font-normal text-stone-500">{{ outputUnit }}</span>
            </div>
          </div>
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
                {{ t('bloodSugar.' + riskCategory.key) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formula -->
      <div class="border-t border-stone-100 pt-4">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodSugar.formula') }}</div>
        <div class="bg-stone-50 rounded-lg px-4 py-3 text-sm font-mono text-stone-700">
          {{ unit === 'mg' ? t('bloodSugar.formulaMgToMmol') : t('bloodSugar.formulaMmolToMg') }}
        </div>
      </div>
    </div>

    <!-- Reference ranges table -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bloodSugar.categoriesTitle') }}</h2>

      <div class="mb-6">
        <div class="text-sm font-semibold text-stone-700 mb-3">{{ t('bloodSugar.fastingRangesTitle') }}</div>
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-stone-100 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-green-600 shrink-0"></div>
              <div>
                <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.normal') }}</span>
                <p class="text-xs text-stone-500">{{ t('bloodSugar.normalDesc') }}</p>
              </div>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.normalFastingRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.normalFastingRangeMmol') }} mmol/L</div>
            </div>
          </div>
          <div class="flex items-center justify-between border-b border-stone-100 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0"></div>
              <div>
                <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.prediabetes') }}</span>
                <p class="text-xs text-stone-500">{{ t('bloodSugar.prediabetesDesc') }}</p>
              </div>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.prediabeticFastingRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.prediabeticFastingRangeMmol') }} mmol/L</div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></div>
              <div>
                <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.diabetes') }}</span>
                <p class="text-xs text-stone-500">{{ t('bloodSugar.diabetesDesc') }}</p>
              </div>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.diabeticFastingRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.diabeticFastingRangeMmol') }} mmol/L</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-sm font-semibold text-stone-700 mb-3">{{ t('bloodSugar.postprandialRangesTitle') }}</div>
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-stone-100 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-green-600 shrink-0"></div>
              <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.normal') }}</span>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.normalPostprandialRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.normalPostprandialRangeMmol') }} mmol/L</div>
            </div>
          </div>
          <div class="flex items-center justify-between border-b border-stone-100 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0"></div>
              <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.prediabetes') }}</span>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.prediabeticPostprandialRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.prediabeticPostprandialRangeMmol') }} mmol/L</div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></div>
              <span class="text-sm text-stone-900 font-medium">{{ t('bloodSugar.diabetes') }}</span>
            </div>
            <div class="text-right shrink-0 ml-4">
              <div class="text-sm font-medium text-stone-900 tabular-nums">{{ t('bloodSugar.diabeticPostprandialRange') }} mg/dL</div>
              <div class="text-xs text-stone-500 tabular-nums">{{ t('bloodSugar.diabeticPostprandialRangeMmol') }} mmol/L</div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-xs text-stone-400 mt-6 italic">{{ t('bloodSugar.contextNote') }}</p>
    </div>

    <BlogBanner calculator-key="bloodSugar" />
    <AdSlot class="mt-8" />
  </div>
</template>
