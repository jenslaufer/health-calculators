<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { evaluateBilirubin, BILIRUBIN_AGE_RANGE } from '../utils/newbornBilirubin.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('newbornBilirubin.faq') || [])

useHead(() => ({
  title: t('newbornBilirubin.meta.title'),
  description: t('newbornBilirubin.meta.description'),
  routeKey: 'newbornBilirubin',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Newborn Bilirubin Calculator',
    url: 'https://healthcalculator.app/newborn-bilirubin-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const ageHours = ref(null)
const tsb = ref(null)
const tsbUnit = ref('mg/dL')

const result = computed(() =>
  evaluateBilirubin({
    ageHours: ageHours.value,
    tsb: tsb.value,
    tsbUnit: tsbUnit.value,
  }),
)

const interpretation = computed(() => {
  if (!result.value) return null
  const map = {
    lowRisk: { color: 'text-green-600', bg: 'bg-green-600' },
    lowIntermediate: { color: 'text-green-500', bg: 'bg-green-500' },
    highIntermediate: { color: 'text-orange-500', bg: 'bg-orange-500' },
    highRisk: { color: 'text-red-600', bg: 'bg-red-600' },
  }
  return { key: result.value.zone, ...map[result.value.zone] }
})

// Convert thresholds for display in the chosen unit
function formatThreshold(value) {
  if (value == null) return '—'
  if (tsbUnit.value === 'mg/dL') return value.toFixed(1) + ' mg/dL'
  return (value * 17.1).toFixed(0) + ' µmol/L'
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('newbornBilirubin.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('newbornBilirubin.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('newbornBilirubin.ageHours') }}</label>
          <input
            v-model.number="ageHours"
            type="number"
            :min="BILIRUBIN_AGE_RANGE.min"
            :max="BILIRUBIN_AGE_RANGE.max"
            placeholder="48"
            data-testid="age-hours"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1">{{ t('newbornBilirubin.ageHoursHint') }}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('newbornBilirubin.tsb') }}</label>
          <div class="flex gap-2">
            <input
              v-model.number="tsb"
              type="number"
              step="0.1"
              :placeholder="tsbUnit === 'mg/dL' ? '10.0' : '170'"
              data-testid="tsb"
              class="flex-1 min-w-0 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
            <select
              v-model="tsbUnit"
              data-testid="tsb-unit"
              class="border border-stone-300 rounded-lg px-3 py-3.5 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600"
            >
              <option value="mg/dL">mg/dL</option>
              <option value="umol/L">µmol/L</option>
            </select>
          </div>
          <p class="text-xs text-stone-400 mt-1">{{ t('newbornBilirubin.tsbHint') }}</p>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('newbornBilirubin.zones.' + interpretation.key) }}</span>
      </div>

      <div class="mb-6">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('newbornBilirubin.zoneLabel') }}</div>
        <div class="flex items-baseline gap-3">
          <span data-testid="result-tsb" class="text-6xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.tsbMgDl.toFixed(1) }}</span>
          <span class="text-base text-stone-400">mg/dL</span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('newbornBilirubin.p40') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-p40">{{ formatThreshold(result.thresholds.p40) }}</p>
        </div>
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('newbornBilirubin.p75') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-p75">{{ formatThreshold(result.thresholds.p75) }}</p>
        </div>
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('newbornBilirubin.p95') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-p95">{{ formatThreshold(result.thresholds.p95) }}</p>
        </div>
      </div>

      <div class="border border-stone-200 rounded-lg px-4 py-3 bg-stone-50">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('newbornBilirubin.hints.' + interpretation.key) }}</p>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('newbornBilirubin.incompleteHint') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('newbornBilirubin.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('newbornBilirubin.howItWorksText') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('newbornBilirubin.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="newbornBilirubin" />
  </div>
</template>
