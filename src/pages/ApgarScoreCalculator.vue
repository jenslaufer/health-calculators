<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { evaluateApgar, APGAR_COMPONENTS } from '../utils/apgarScore.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('apgarScore.faq') || [])

useHead(() => ({
  title: t('apgarScore.meta.title'),
  description: t('apgarScore.meta.description'),
  routeKey: 'apgarScore',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'APGAR Score Calculator',
    url: 'https://healthcalculator.app/apgar-score-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const emptyScores = () => ({
  appearance: null, pulse: null, grimace: null, activity: null, respiration: null,
})

const oneMinute = ref(emptyScores())
const fiveMinute = ref(emptyScores())

const result = computed(() => evaluateApgar({
  oneMinute: oneMinute.value,
  fiveMinute: fiveMinute.value,
}))

function categoryStyle(cat) {
  switch (cat) {
    case 'reassuring': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'critical': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: 'text-stone-400', bg: '' }
  }
}

function categoryLevel(cat) {
  return { critical: 0, moderate: 1, reassuring: 2 }[cat] ?? 0
}

const componentList = APGAR_COMPONENTS
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('apgarScore.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('apgarScore.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="(timing, key) in { oneMinute, fiveMinute }" :key="key">
        <h2 class="text-base font-semibold text-stone-900 mb-4">
          {{ t('apgarScore.' + (key === 'oneMinute' ? 'oneMinuteTitle' : 'fiveMinuteTitle')) }}
        </h2>
        <div class="space-y-3">
          <div v-for="c in componentList" :key="c">
            <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">
              {{ t('apgarScore.component_' + c) }}
            </label>
            <select
              v-model.number="(key === 'oneMinute' ? oneMinute : fiveMinute)[c]"
              :data-testid="key + '-' + c"
              class="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            >
              <option :value="null">{{ t('apgarScore.selectPlaceholder') }}</option>
              <option :value="0">0 — {{ t('apgarScore.' + c + '_0') }}</option>
              <option :value="1">1 — {{ t('apgarScore.' + c + '_1') }}</option>
              <option :value="2">2 — {{ t('apgarScore.' + c + '_2') }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('apgarScore.resultsLabel') }}</p>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-5" data-testid="one-minute-result">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('apgarScore.oneMinuteScore') }}</p>
        <div v-if="result.oneMinute.total !== null" class="flex items-baseline gap-2">
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="one-minute-total">{{ result.oneMinute.total }}</span>
          <span class="text-base text-stone-400 font-medium">/ 10</span>
        </div>
        <span v-else class="text-3xl font-bold text-stone-300 tabular-nums">—</span>
        <p v-if="result.oneMinute.category" class="text-sm font-semibold mt-2" :class="categoryStyle(result.oneMinute.category).color" data-testid="one-minute-category">
          {{ t('apgarScore.category_' + result.oneMinute.category) }}
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-5" data-testid="five-minute-result">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('apgarScore.fiveMinuteScore') }}</p>
        <div v-if="result.fiveMinute.total !== null" class="flex items-baseline gap-2">
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="five-minute-total">{{ result.fiveMinute.total }}</span>
          <span class="text-base text-stone-400 font-medium">/ 10</span>
        </div>
        <span v-else class="text-3xl font-bold text-stone-300 tabular-nums">—</span>
        <p v-if="result.fiveMinute.category" class="text-sm font-semibold mt-2" :class="categoryStyle(result.fiveMinute.category).color" data-testid="five-minute-category">
          {{ t('apgarScore.category_' + result.fiveMinute.category) }}
        </p>
      </div>
    </div>

    <div v-if="result.fiveMinute.category" class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-red-700 via-orange-500 to-green-500 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel(result.fiveMinute.category) / 2 * 100) + '%' }"></div>
    </div>

    <div v-if="result.fiveMinute.category" class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle(result.fiveMinute.category).bg" data-testid="advice">
      {{ t('apgarScore.advice_' + result.fiveMinute.category) }}
    </div>

    <div v-if="result.needsExtended" class="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 leading-relaxed" data-testid="extended-warning">
      {{ t('apgarScore.extendedNote') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('apgarScore.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('apgarScore.refSign') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">0</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">1</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">2</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="c in componentList" :key="c">
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('apgarScore.component_' + c) }}</td>
          <td class="px-6 py-3 text-stone-600">{{ t('apgarScore.' + c + '_0') }}</td>
          <td class="px-6 py-3 text-stone-600">{{ t('apgarScore.' + c + '_1') }}</td>
          <td class="px-6 py-3 text-stone-600">{{ t('apgarScore.' + c + '_2') }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('apgarScore.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('apgarScore.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('apgarScore.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="apgarScore" />
</template>
