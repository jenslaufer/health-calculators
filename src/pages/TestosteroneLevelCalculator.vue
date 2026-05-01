<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcTestosteroneStatus } from '../utils/testosteroneLevel.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('testosteroneLevel.faq') || [])

useHead(() => ({
  title: t('testosteroneLevel.meta.title'),
  description: t('testosteroneLevel.meta.description'),
  routeKey: 'testosteroneLevel',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Testosterone Level Calculator',
    url: 'https://healthcalculator.app/testosterone-level-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const totalT = ref(null)
const totalUnit = ref('nmol/L')
const shbg = ref(null)
const albumin = ref(43)

const result = computed(() =>
  calcTestosteroneStatus({
    totalT: totalT.value,
    totalUnit: totalUnit.value,
    shbg: shbg.value,
    albumin: albumin.value || 43,
  })
)

const totalColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.totalCategory) {
    case 'low': return 'text-red-600'
    case 'borderline': return 'text-orange-500'
    case 'normal': return 'text-green-600'
    case 'high': return 'text-yellow-600'
    default: return 'text-stone-600'
  }
})

const freeColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.freeCategory) {
    case 'low': return 'text-red-600'
    case 'normal': return 'text-green-600'
    case 'high': return 'text-yellow-600'
    default: return 'text-stone-600'
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('testosteroneLevel.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('testosteroneLevel.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="totalUnit = 'nmol/L'"
        data-testid="unit-nmol"
        :class="totalUnit === 'nmol/L' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >nmol/L</button>
      <button
        @click="totalUnit = 'ng/dL'"
        data-testid="unit-ngdl"
        :class="totalUnit === 'ng/dL' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >ng/dL</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('testosteroneLevel.totalLabel', { unit: totalUnit }) }}
        </label>
        <input v-model.number="totalT" type="number" step="0.1" min="0"
          :placeholder="totalUnit === 'nmol/L' ? '18' : '519'"
          data-testid="total-t"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('testosteroneLevel.shbgLabel') }}</label>
        <input v-model.number="shbg" type="number" step="0.1" min="0" placeholder="30" data-testid="shbg"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('testosteroneLevel.albuminLabel') }}</label>
      <input v-model.number="albumin" type="number" step="0.1" min="0" placeholder="43" data-testid="albumin"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      <p class="text-xs text-stone-400 mt-2">{{ t('testosteroneLevel.albuminHint') }}</p>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('testosteroneLevel.results') }}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('testosteroneLevel.totalResult') }}</p>
        <div class="flex items-baseline gap-2">
          <span class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight" data-testid="result-total">{{ result.totalT.toFixed(1) }}</span>
          <span class="text-base text-stone-400">nmol/L</span>
        </div>
        <span :class="totalColor" class="mt-2 inline-block text-sm font-semibold" data-testid="result-total-category">{{ t('testosteroneLevel.category_' + result.totalCategory) }}</span>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('testosteroneLevel.freeResult') }}</p>
        <div class="flex items-baseline gap-2">
          <span class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight" data-testid="result-free">{{ result.freeTpmol }}</span>
          <span class="text-base text-stone-400">pmol/L</span>
        </div>
        <span :class="freeColor" class="mt-2 inline-block text-sm font-semibold" data-testid="result-free-category">{{ t('testosteroneLevel.category_' + result.freeCategory) }}</span>
      </div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium"
      :class="result.hypogonadism ? 'bg-red-50 text-red-900 border border-red-200' : 'bg-green-50 text-green-900 border border-green-200'"
      data-testid="hypogonadism-status"
    >
      {{ result.hypogonadism ? t('testosteroneLevel.hypogonadismLikely') : t('testosteroneLevel.hypogonadismUnlikely') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('testosteroneLevel.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('testosteroneLevel.refMarker') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('testosteroneLevel.refRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('testosteroneLevel.refInterpretation') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('testosteroneLevel.totalResult') }}</td><td class="px-6 py-3 text-stone-600">8.6 – 29.0 nmol/L</td><td class="px-6 py-3 text-stone-600">{{ t('testosteroneLevel.refRangeNormal') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('testosteroneLevel.totalResult') }}</td><td class="px-6 py-3 text-stone-600">&lt; 8 nmol/L</td><td class="px-6 py-3 text-stone-600">{{ t('testosteroneLevel.refRangeLow') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('testosteroneLevel.freeResult') }}</td><td class="px-6 py-3 text-stone-600">200 – 620 pmol/L</td><td class="px-6 py-3 text-stone-600">{{ t('testosteroneLevel.refRangeNormal') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('testosteroneLevel.freeResult') }}</td><td class="px-6 py-3 text-stone-600">&lt; 200 pmol/L</td><td class="px-6 py-3 text-stone-600">{{ t('testosteroneLevel.refRangeLow') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('testosteroneLevel.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('testosteroneLevel.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('testosteroneLevel.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="testosteroneLevel" />
</template>
