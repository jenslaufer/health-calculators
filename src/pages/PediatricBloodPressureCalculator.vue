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
import { classifyPediatricBp, PEDIATRIC_BP_AGE_RANGE } from '../utils/pediatricBloodPressure.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pediatricBloodPressure.faq') || [])

useHead(() => ({
  title: t('pediatricBloodPressure.meta.title'),
  description: t('pediatricBloodPressure.meta.description'),
  routeKey: 'pediatricBloodPressure',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pediatric Blood Pressure Calculator',
    url: 'https://healthcalculator.app/pediatric-blood-pressure-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const ageYears = ref(null)
const sex = ref('male')
const sbp = ref(null)
const dbp = ref(null)

const result = computed(() =>
  classifyPediatricBp({
    ageYears: ageYears.value,
    sex: sex.value,
    sbp: sbp.value,
    dbp: dbp.value,
  }),
)

const interpretation = computed(() => {
  if (!result.value) return null
  const map = {
    normal: { color: 'text-green-600', bg: 'bg-green-600' },
    elevated: { color: 'text-yellow-500', bg: 'bg-yellow-500' },
    stage1: { color: 'text-orange-500', bg: 'bg-orange-500' },
    stage2: { color: 'text-red-600', bg: 'bg-red-600' },
  }
  return { key: result.value.category, ...map[result.value.category] }
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pediatricBloodPressure.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('pediatricBloodPressure.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBloodPressure.ageYears') }}</label>
          <input
            v-model.number="ageYears"
            type="number"
            :min="PEDIATRIC_BP_AGE_RANGE.min"
            :max="PEDIATRIC_BP_AGE_RANGE.max"
            placeholder="8"
            data-testid="age-years"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1">{{ t('pediatricBloodPressure.ageHint') }}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBloodPressure.sex') }}</label>
          <div class="flex gap-2">
            <button
              type="button"
              @click="sex = 'male'"
              data-testid="sex-male"
              :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pediatricBloodPressure.boy') }}</button>
            <button
              type="button"
              @click="sex = 'female'"
              data-testid="sex-female"
              :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pediatricBloodPressure.girl') }}</button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBloodPressure.sbp') }}</label>
          <input
            v-model.number="sbp"
            type="number"
            min="40"
            max="250"
            placeholder="110"
            data-testid="sbp"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1">{{ t('pediatricBloodPressure.sbpHint') }}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBloodPressure.dbp') }}</label>
          <input
            v-model.number="dbp"
            type="number"
            min="20"
            max="160"
            placeholder="70"
            data-testid="dbp"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1">{{ t('pediatricBloodPressure.dbpHint') }}</p>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('pediatricBloodPressure.categories.' + interpretation.key) }}</span>
      </div>

      <div class="mb-6">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBloodPressure.result') }}</div>
        <div class="flex items-baseline gap-3">
          <span data-testid="result-bp" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.sbp }}/{{ result.dbp }}</span>
          <span class="text-base text-stone-400">mmHg</span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pediatricBloodPressure.p90Label') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-p90">{{ result.thresholds.sbpP90 }}/{{ result.thresholds.dbpP90 }}</p>
        </div>
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pediatricBloodPressure.p95Label') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-p95">{{ result.thresholds.sbpP95 }}/{{ result.thresholds.dbpP95 }}</p>
        </div>
        <div class="bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pediatricBloodPressure.stage2Label') }}</p>
          <p class="text-base font-bold text-stone-900 tabular-nums" data-testid="threshold-stage2">{{ result.thresholds.sbpP95 + 12 }}/{{ result.thresholds.dbpP95 + 12 }}</p>
        </div>
      </div>

      <div class="border border-stone-200 rounded-lg px-4 py-3 bg-stone-50">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('pediatricBloodPressure.hints.' + interpretation.key) }}</p>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('pediatricBloodPressure.incompleteHint') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pediatricBloodPressure.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('pediatricBloodPressure.howItWorksText') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('pediatricBloodPressure.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <RelatedCalculators calc-key="pediatricBloodPressure" class="mt-8" />
    <BlogArticleLink calculator-key="pediatricBloodPressure" />
  </div>
</template>
