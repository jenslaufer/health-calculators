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
  classifyThyroidFunction,
  convertT4,
  convertT3,
} from '../utils/thyroidFunction.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('thyroidFunction.faq') || [])

useHead(() => ({
  title: t('thyroidFunction.meta.title'),
  description: t('thyroidFunction.meta.description'),
  routeKey: 'thyroidFunction',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Thyroid Function Calculator',
    url: 'https://healthcalculator.app/thyroid-function-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const tsh = ref(null)
const freeT4 = ref(null)
const freeT3 = ref(null)
const t4Unit = ref('ng/dL')
const t3Unit = ref('pg/mL')

const tshNormalized = computed(() => (Number.isFinite(tsh.value) ? tsh.value : null))

const t4Normalized = computed(() => {
  if (!Number.isFinite(freeT4.value)) return null
  return t4Unit.value === 'ng/dL' ? freeT4.value : convertT4(freeT4.value, 'pmol/L', 'ng/dL')
})

const t3Normalized = computed(() => {
  if (!Number.isFinite(freeT3.value)) return null
  return t3Unit.value === 'pg/mL' ? freeT3.value : convertT3(freeT3.value, 'pmol/L', 'pg/mL')
})

const result = computed(() => classifyThyroidFunction({
  tsh: tshNormalized.value,
  freeT4: t4Normalized.value,
  freeT3: t3Normalized.value,
}))

const statusColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.status) {
    case 'euthyroid': return 'text-green-600'
    case 'subclinicalHypo':
    case 'subclinicalHyper':
    case 'elevatedTsh':
    case 'suppressedTsh': return 'text-yellow-600'
    case 'primaryHypo':
    case 'primaryHyper': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

function categoryColor(cat) {
  if (cat === 'normal') return 'text-green-600'
  if (cat === 'low' || cat === 'high') return 'text-red-600'
  return 'text-stone-400'
}

function reset() {
  tsh.value = null
  freeT4.value = null
  freeT3.value = null
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('thyroidFunction.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('thyroidFunction.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- TSH -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('thyroidFunction.tshLabel') }}
      </label>
      <input v-model.number="tsh" type="number" step="0.01" placeholder="2.5" data-testid="tsh"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      <p class="text-xs text-stone-400 mt-1">{{ t('thyroidFunction.tshRange') }}</p>
    </div>

    <!-- Free T4 -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('thyroidFunction.t4Label') }}
      </label>
      <div class="flex gap-2">
        <input v-model.number="freeT4" type="number" step="0.01" :placeholder="t4Unit === 'ng/dL' ? '1.2' : '15.4'" data-testid="t4"
          class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <div class="flex gap-1">
          <button @click="t4Unit = 'ng/dL'" data-testid="t4-unit-ngdl"
            :class="t4Unit === 'ng/dL' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
          >ng/dL</button>
          <button @click="t4Unit = 'pmol/L'" data-testid="t4-unit-pmol"
            :class="t4Unit === 'pmol/L' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
          >pmol/L</button>
        </div>
      </div>
      <p class="text-xs text-stone-400 mt-1">{{ t4Unit === 'ng/dL' ? t('thyroidFunction.t4RangeNgdl') : t('thyroidFunction.t4RangePmol') }}</p>
    </div>

    <!-- Free T3 -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('thyroidFunction.t3Label') }}
      </label>
      <div class="flex gap-2">
        <input v-model.number="freeT3" type="number" step="0.01" :placeholder="t3Unit === 'pg/mL' ? '3.2' : '4.9'" data-testid="t3"
          class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <div class="flex gap-1">
          <button @click="t3Unit = 'pg/mL'" data-testid="t3-unit-pgml"
            :class="t3Unit === 'pg/mL' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
          >pg/mL</button>
          <button @click="t3Unit = 'pmol/L'" data-testid="t3-unit-pmol"
            :class="t3Unit === 'pmol/L' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
          >pmol/L</button>
        </div>
      </div>
      <p class="text-xs text-stone-400 mt-1">{{ t3Unit === 'pg/mL' ? t('thyroidFunction.t3RangePgml') : t('thyroidFunction.t3RangePmol') }}</p>
    </div>

    <button @click="reset"
      class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150"
    >&times; {{ t('thyroidFunction.reset') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('thyroidFunction.results') }}</p>

    <div class="flex items-baseline gap-3 mb-6">
      <span :class="statusColor" class="text-3xl font-bold tracking-tight" data-testid="result-status">
        {{ t('thyroidFunction.status_' + result.status) }}
      </span>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="tsh-marker">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">TSH</p>
        <p class="text-base font-semibold tabular-nums" :class="categoryColor(result.tshCategory)">
          {{ result.tshCategory ? t('thyroidFunction.cat_' + result.tshCategory) : '—' }}
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="t4-marker">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Free T4</p>
        <p class="text-base font-semibold tabular-nums" :class="categoryColor(result.t4Category)">
          {{ result.t4Category ? t('thyroidFunction.cat_' + result.t4Category) : '—' }}
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="t3-marker">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Free T3</p>
        <p class="text-base font-semibold tabular-nums" :class="categoryColor(result.t3Category)">
          {{ result.t3Category ? t('thyroidFunction.cat_' + result.t3Category) : '—' }}
        </p>
      </div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 text-sm text-stone-600 leading-relaxed" data-testid="advice">
      {{ t('thyroidFunction.advice_' + result.status) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('thyroidFunction.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('thyroidFunction.refMarker') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('thyroidFunction.refRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('thyroidFunction.refMeaning') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">TSH</td><td class="px-6 py-3 text-stone-600">0.4 – 4.0 mIU/L</td><td class="px-6 py-3 text-stone-600">{{ t('thyroidFunction.refTshMeaning') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">Free T4</td><td class="px-6 py-3 text-stone-600">0.8 – 1.8 ng/dL (10.3 – 23.2 pmol/L)</td><td class="px-6 py-3 text-stone-600">{{ t('thyroidFunction.refT4Meaning') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">Free T3</td><td class="px-6 py-3 text-stone-600">2.3 – 4.2 pg/mL (3.5 – 6.5 pmol/L)</td><td class="px-6 py-3 text-stone-600">{{ t('thyroidFunction.refT3Meaning') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('thyroidFunction.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('thyroidFunction.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('thyroidFunction.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="thyroidFunction" />
</template>
