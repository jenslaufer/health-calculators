<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()
const faqItems = computed(() => tm('cholesterolRatio.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('cholesterolRatio.meta.title'),
  description: t('cholesterolRatio.meta.description'),
  routeKey: 'cholesterolRatio',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Cholesterol Ratio Calculator',
    url: 'https://healthcalculator.app/cholesterol-ratio',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('mg')
const totalInput = ref(null)
const hdlInput = ref(null)
const ldlInput = ref(null)
const trigInput = ref(null)

const CHOL_FACTOR = 38.67
const TRIG_FACTOR = 88.57

function toMgDl(value, type = 'chol') {
  if (!value && value !== 0) return null
  if (unit.value === 'mmol') return value * (type === 'trig' ? TRIG_FACTOR : CHOL_FACTOR)
  return value
}

const totalMg = computed(() => toMgDl(totalInput.value))
const hdlMg = computed(() => toMgDl(hdlInput.value))
const ldlMg = computed(() => toMgDl(ldlInput.value))
const trigMg = computed(() => toMgDl(trigInput.value, 'trig'))

const hasRequired = computed(() =>
  totalMg.value !== null && hdlMg.value !== null && trigMg.value !== null && hdlMg.value > 0
)

const friedewaldLdl = computed(() => {
  if (ldlMg.value !== null) return null
  if (trigMg.value === null || trigMg.value >= 400) return null
  return totalMg.value - hdlMg.value - trigMg.value / 5
})

const effectiveLdl = computed(() => {
  if (ldlMg.value !== null) return ldlMg.value
  return friedewaldLdl.value
})

const totalHdlRatio = computed(() => {
  if (!hasRequired.value) return null
  return totalMg.value / hdlMg.value
})

const ldlHdlRatio = computed(() => {
  if (!hasRequired.value || effectiveLdl.value === null) return null
  return effectiveLdl.value / hdlMg.value
})

const trigHdlRatio = computed(() => {
  if (!hasRequired.value) return null
  return trigMg.value / hdlMg.value
})

const classification = computed(() => {
  if (totalHdlRatio.value === null) return null
  if (totalHdlRatio.value < 3.5) return 'optimal'
  if (totalHdlRatio.value <= 5.0) return 'moderate'
  return 'high'
})

const classificationStyle = computed(() => {
  if (!classification.value) return {}
  return {
    optimal: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    moderate: { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-200' },
    high: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-200' },
  }[classification.value] || {}
})

function classifyLdlHdl(ratio) {
  if (ratio === null) return null
  if (ratio < 2.5) return 'optimal'
  if (ratio <= 3.5) return 'borderline'
  return 'high'
}

function classifyTrigHdl(ratio) {
  if (ratio === null) return null
  if (ratio < 2) return 'optimal'
  if (ratio <= 4) return 'borderline'
  return 'high'
}

const warnings = computed(() => {
  if (!hasRequired.value) return []
  const w = []
  if (totalMg.value < 100 || totalMg.value > 400) w.push('total-range')
  if (hdlMg.value < 20 || hdlMg.value > 120) w.push('hdl-range')
  if (ldlMg.value !== null && (ldlMg.value < 30 || ldlMg.value > 300)) w.push('ldl-range')
  if (trigMg.value < 30 || trigMg.value > 1000) w.push('trig-range')
  if (ldlInput.value === null && trigMg.value >= 400) w.push('trig-too-high-for-ldl')
  return w
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('cholesterolRatio.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('cholesterolRatio.description') }}</p>
  </div>

  <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
    <!-- Unit toggle -->
    <div class="flex gap-2 mb-6">
      <button
        data-testid="unit-mgdl"
        @click="unit = 'mg'"
        :class="unit === 'mg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mg/dL</button>
      <button
        data-testid="unit-mmol"
        @click="unit = 'mmol'"
        :class="unit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mmol/L</button>
    </div>

    <!-- Inputs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
      <div>
        <label for="input-total" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cholesterolRatio.totalLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input
          id="input-total"
          v-model.number="totalInput"
          data-testid="input-total"
          type="number"
          step="0.1"
          min="0"
          :placeholder="unit === 'mg' ? '200' : '5.2'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="input-hdl" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cholesterolRatio.hdlLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input
          id="input-hdl"
          v-model.number="hdlInput"
          data-testid="input-hdl"
          type="number"
          step="0.1"
          min="0"
          :placeholder="unit === 'mg' ? '50' : '1.3'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="input-ldl" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cholesterolRatio.ldlLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }}) — {{ t('cholesterolRatio.optional') }}
        </label>
        <input
          id="input-ldl"
          v-model.number="ldlInput"
          data-testid="input-ldl"
          type="number"
          step="0.1"
          min="0"
          :placeholder="unit === 'mg' ? '130' : '3.4'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
        <p class="text-xs text-stone-400 mt-1.5">{{ t('cholesterolRatio.ldlHint') }}</p>
      </div>
      <div>
        <label for="input-trig" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cholesterolRatio.trigLabel') }} ({{ unit === 'mg' ? 'mg/dL' : 'mmol/L' }})
        </label>
        <input
          id="input-trig"
          v-model.number="trigInput"
          data-testid="input-trig"
          type="number"
          step="0.1"
          min="0"
          :placeholder="unit === 'mg' ? '150' : '1.7'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <!-- Warnings -->
    <div v-if="warnings.length > 0" class="space-y-2 mt-2">
      <div
        v-if="warnings.includes('trig-too-high-for-ldl')"
        data-testid="warning-trig-ldl"
        class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3"
      >
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('cholesterolRatio.warningTrigHighForLdl') }}</p>
      </div>
      <div
        v-if="warnings.some(w => w.endsWith('-range'))"
        data-testid="warning-plausibility"
        class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3"
      >
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('cholesterolRatio.warningPlausibility') }}</p>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="classification !== null" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
    <!-- Classification badge -->
    <div class="flex items-center gap-3 mb-6">
      <span
        data-testid="result-classification"
        :class="[classificationStyle.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
      >{{ t('cholesterolRatio.classification.' + classification) }}</span>
      <span v-if="friedewaldLdl !== null" class="text-xs text-stone-400 italic">{{ t('cholesterolRatio.friedewaldUsed') }}</span>
    </div>

    <!-- Ratio values -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      <div>
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.totalHdlRatio') }}</div>
        <div data-testid="result-total-hdl" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
          {{ totalHdlRatio.toFixed(2) }}
        </div>
        <div class="text-xs text-stone-400 mt-1">{{ t('cholesterolRatio.optimalBelow', { value: '3.5' }) }}</div>
      </div>
      <div v-if="ldlHdlRatio !== null">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.ldlHdlRatio') }}</div>
        <div data-testid="result-ldl-hdl" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
          {{ ldlHdlRatio.toFixed(2) }}
        </div>
        <div :class="[classifyLdlHdl(ldlHdlRatio) === 'optimal' ? 'text-green-600' : classifyLdlHdl(ldlHdlRatio) === 'borderline' ? 'text-yellow-500' : 'text-red-500', 'text-xs font-medium mt-1']">
          {{ t('cholesterolRatio.ldlHdlClass.' + classifyLdlHdl(ldlHdlRatio)) }}
        </div>
      </div>
      <div>
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.trigHdlRatio') }}</div>
        <div data-testid="result-trig-hdl" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
          {{ trigHdlRatio.toFixed(2) }}
        </div>
        <div :class="[classifyTrigHdl(trigHdlRatio) === 'optimal' ? 'text-green-600' : classifyTrigHdl(trigHdlRatio) === 'borderline' ? 'text-yellow-500' : 'text-red-500', 'text-xs font-medium mt-1']">
          {{ t('cholesterolRatio.trigHdlClass.' + classifyTrigHdl(trigHdlRatio)) }}
        </div>
      </div>
    </div>

    <!-- Clinical hint -->
    <div :class="[classificationStyle.border, 'border rounded-lg px-4 py-3 bg-stone-50']">
      <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.clinicalHint') }}</div>
      <p class="text-sm text-stone-700">{{ t('cholesterolRatio.hint.' + classification) }}</p>
    </div>
  </div>

  <!-- Reference table -->
  <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('cholesterolRatio.referenceTitle') }}</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.ratioCol') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.optimalCol') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.moderateCol') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.highCol') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr>
            <td class="px-4 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.totalHdlRatio') }}</td>
            <td class="px-4 py-3 text-green-600">&lt; 3.5</td>
            <td class="px-4 py-3 text-yellow-600">3.5 – 5.0</td>
            <td class="px-4 py-3 text-red-600">&gt; 5.0</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.ldlHdlRatio') }}</td>
            <td class="px-4 py-3 text-green-600">&lt; 2.5</td>
            <td class="px-4 py-3 text-yellow-600">2.5 – 3.5</td>
            <td class="px-4 py-3 text-red-600">&gt; 3.5</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.trigHdlRatio') }}</td>
            <td class="px-4 py-3 text-green-600">&lt; 2.0</td>
            <td class="px-4 py-3 text-yellow-600">2.0 – 4.0</td>
            <td class="px-4 py-3 text-red-600">&gt; 4.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogBanner calculator-key="cholesterolRatio" />
  <AdSlot class="mt-8" />
</template>
