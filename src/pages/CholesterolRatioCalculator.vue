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

const faqItems = computed(() => tm('cholesterolRatio.faq') || [])

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
const total = ref(null)
const hdl = ref(null)
const ldl = ref(null)
const trig = ref(null)

const MGDL_PER_MMOL_CHOL = 38.67
const MGDL_PER_MMOL_TRIG = 88.57

function toMgDl(value, kind) {
  if (value === null || value === undefined || value === '') return null
  const num = Number(value)
  if (!Number.isFinite(num)) return null
  if (unit.value === 'mmol') {
    const factor = kind === 'triglycerides' ? MGDL_PER_MMOL_TRIG : MGDL_PER_MMOL_CHOL
    return num * factor
  }
  return num
}

const result = computed(() => {
  const t = toMgDl(total.value, 'cholesterol')
  const h = toMgDl(hdl.value, 'cholesterol')
  let l = toMgDl(ldl.value, 'cholesterol')
  const tr = toMgDl(trig.value, 'triglycerides')

  if (t == null || h == null) return null

  if (h === 0) {
    return {
      classification: 'invalid',
      totalHdl: null, ldlHdl: null, trigHdl: null, ldl: null,
      friedewaldUsed: false,
      friedewaldSkipped: false,
      warnings: ['hdlZero'],
    }
  }

  let friedewaldUsed = false
  let friedewaldSkipped = false
  if (l == null && tr != null) {
    if (tr < 400) {
      l = t - h - tr / 5
      friedewaldUsed = true
    } else {
      friedewaldSkipped = true
    }
  }

  const totalHdl = t / h
  const ldlHdl = l != null ? l / h : null
  const trigHdl = tr != null ? tr / h : null

  let classification
  if (totalHdl < 3.5) classification = 'optimal'
  else if (totalHdl <= 5.0) classification = 'moderate'
  else classification = 'high'

  const warnings = []
  if (friedewaldSkipped) warnings.push('friedewaldSkipped')
  if (t < 100 || t > 400) warnings.push('totalOutOfRange')
  if (h < 20 || h > 120) warnings.push('hdlOutOfRange')
  if (l != null && (l < 30 || l > 300)) warnings.push('ldlOutOfRange')
  if (tr != null && (tr < 30 || tr > 1000)) warnings.push('trigOutOfRange')

  return {
    classification,
    totalHdl, ldlHdl, trigHdl,
    ldl: l,
    friedewaldUsed,
    friedewaldSkipped,
    warnings,
  }
})

const classificationColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.classification) {
    case 'optimal': return 'text-green-600'
    case 'moderate': return 'text-yellow-600'
    case 'high': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

function fmt(v, digits = 2) {
  if (v == null || !Number.isFinite(v)) return '—'
  return v.toFixed(digits)
}

function ldlBand(ratio) {
  if (ratio < 2.5) return 'optimal'
  if (ratio <= 3.5) return 'borderline'
  return 'high'
}

function trigBand(ratio) {
  if (ratio < 2) return 'optimal'
  if (ratio <= 4) return 'borderline'
  return 'high'
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('cholesterolRatio.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('cholesterolRatio.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button @click="unit = 'mg'" data-testid="unit-mg"
        :class="unit === 'mg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mg/dL</button>
      <button @click="unit = 'mmol'" data-testid="unit-mmol"
        :class="unit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >mmol/L</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('cholesterolRatio.totalLabel') }}</label>
        <input v-model.number="total" type="number" step="0.01" :placeholder="unit === 'mg' ? '200' : '5.17'" data-testid="total"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('cholesterolRatio.hdlLabel') }}</label>
        <input v-model.number="hdl" type="number" step="0.01" :placeholder="unit === 'mg' ? '50' : '1.3'" data-testid="hdl"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('cholesterolRatio.ldlLabel') }} <span class="text-stone-400 normal-case font-normal">({{ t('cholesterolRatio.optional') }})</span>
        </label>
        <input v-model.number="ldl" type="number" step="0.01" :placeholder="unit === 'mg' ? '120' : '3.1'" data-testid="ldl"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('cholesterolRatio.trigLabel') }}</label>
        <input v-model.number="trig" type="number" step="0.01" :placeholder="unit === 'mg' ? '150' : '1.7'" data-testid="trig"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
    <p class="text-xs text-stone-400 mt-2">{{ t('cholesterolRatio.friedewaldHint') }}</p>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-6">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="result-total-hdl">{{ fmt(result.totalHdl) }}</span>
      <span class="text-lg text-stone-400">{{ t('cholesterolRatio.totalHdlSuffix') }}</span>
      <span :class="classificationColor" class="text-lg font-semibold" data-testid="result-classification">{{ result.classification }}</span>
    </div>

    <div v-if="result.classification !== 'invalid'" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.totalHdlLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ fmt(result.totalHdl) }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('cholesterolRatio.targetTotalHdl') }}</p>
      </div>
      <div v-if="result.ldlHdl != null" class="bg-stone-50 rounded-lg p-4" data-testid="result-ldl-hdl">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.ldlHdlLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ fmt(result.ldlHdl) }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('cholesterolRatio.ldlBand_' + ldlBand(result.ldlHdl)) }}</p>
      </div>
      <div v-if="result.trigHdl != null" class="bg-stone-50 rounded-lg p-4" data-testid="result-trig-hdl">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('cholesterolRatio.trigHdlLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ fmt(result.trigHdl) }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('cholesterolRatio.trigBand_' + trigBand(result.trigHdl)) }}</p>
      </div>
    </div>

    <div v-if="result.friedewaldUsed" class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3 text-sm text-blue-900" data-testid="friedewald-used">
      {{ t('cholesterolRatio.friedewaldUsed', { ldl: fmt(result.ldl, 0) }) }}
    </div>

    <div v-if="result.warnings && result.warnings.length" class="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900" data-testid="warnings">
      <ul class="list-disc list-inside space-y-1">
        <li v-for="w in result.warnings" :key="w">{{ t('cholesterolRatio.warning_' + w) }}</li>
      </ul>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.refRatio') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.refOptimal') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.refModerate') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('cholesterolRatio.refHigh') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.totalHdlLabel') }}</td>
          <td class="px-6 py-3 text-stone-600">&lt; 3.5</td>
          <td class="px-6 py-3 text-stone-600">3.5 – 5.0</td>
          <td class="px-6 py-3 text-stone-600">&gt; 5.0</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.ldlHdlLabel') }}</td>
          <td class="px-6 py-3 text-stone-600">&lt; 2.5</td>
          <td class="px-6 py-3 text-stone-600">2.5 – 3.5</td>
          <td class="px-6 py-3 text-stone-600">&gt; 3.5</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('cholesterolRatio.trigHdlLabel') }}</td>
          <td class="px-6 py-3 text-stone-600">&lt; 2</td>
          <td class="px-6 py-3 text-stone-600">2 – 4</td>
          <td class="px-6 py-3 text-stone-600">&gt; 4</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('cholesterolRatio.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('cholesterolRatio.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="cholesterolRatio" />
</template>
