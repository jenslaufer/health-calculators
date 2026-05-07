<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcOsteoporosisRisk } from '../utils/osteoporosisRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('osteoporosisRisk.faq') || [])

useHead(() => ({
  title: t('osteoporosisRisk.meta.title'),
  description: t('osteoporosisRisk.meta.description'),
  routeKey: 'osteoporosisRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Osteoporosis Risk Calculator',
    url: 'https://healthcalculator.app/osteoporosis-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const sex = ref('female')
const age = ref(null)
const weight = ref(null)
const height = ref(null)
const tScore = ref(null)

const factors = ref({
  previousFracture: false,
  parentHipFracture: false,
  smoking: false,
  glucocorticoids: false,
  rheumatoidArthritis: false,
  secondaryOsteoporosis: false,
  alcohol3Plus: false,
})

const factorList = [
  'previousFracture',
  'parentHipFracture',
  'smoking',
  'glucocorticoids',
  'rheumatoidArthritis',
  'secondaryOsteoporosis',
  'alcohol3Plus',
]

const weightKg = computed(() => {
  if (weight.value == null) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const heightCm = computed(() => {
  if (height.value == null) return null
  return unit.value === 'imperial' ? height.value * 2.54 : height.value
})

const result = computed(() => calcOsteoporosisRisk({
  age: age.value,
  sex: sex.value,
  weightKg: weightKg.value,
  heightCm: heightCm.value,
  ...factors.value,
  tScore: tScore.value,
}))

const categoryStyle = computed(() => {
  if (!result.value) return { color: '', bg: '' }
  switch (result.value.category) {
    case 'low': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'high': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const categoryLevel = computed(() => {
  if (!result.value) return 0
  return { low: 0, moderate: 1, high: 2 }[result.value.category] ?? 0
})

const weightUnit = computed(() => unit.value === 'imperial' ? 'lbs' : 'kg')
const heightUnit = computed(() => unit.value === 'imperial' ? 'in' : 'cm')
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('osteoporosisRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('osteoporosisRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('osteoporosisRisk.unitMetric') }}</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('osteoporosisRisk.unitImperial') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('osteoporosisRisk.ageLabel') }}
        </label>
        <input
          v-model.number="age"
          type="number"
          min="18"
          max="120"
          placeholder="65"
          data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('osteoporosisRisk.sexLabel') }}
        </label>
        <select
          v-model="sex"
          data-testid="sex"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option value="female">{{ t('osteoporosisRisk.sexFemale') }}</option>
          <option value="male">{{ t('osteoporosisRisk.sexMale') }}</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('osteoporosisRisk.weightLabel', { unit: weightUnit }) }}
        </label>
        <input
          v-model.number="weight"
          type="number"
          step="0.1"
          :placeholder="unit === 'metric' ? '65' : '143'"
          data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('osteoporosisRisk.heightLabel', { unit: heightUnit }) }}
        </label>
        <input
          v-model.number="height"
          type="number"
          step="0.1"
          :placeholder="unit === 'metric' ? '168' : '66'"
          data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('osteoporosisRisk.riskFactorsLabel') }}</p>
    <div class="space-y-3 mb-6">
      <label
        v-for="key in factorList"
        :key="key"
        :data-testid="'factor-' + key"
        :class="factors[key] ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="factors[key]"
          type="checkbox"
          :data-testid="'checkbox-' + key"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-stone-900">{{ t('osteoporosisRisk.rf_' + key) }}</p>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('osteoporosisRisk.rf_' + key + '_desc') }}</p>
        </div>
      </label>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('osteoporosisRisk.tScoreLabel') }}
      </label>
      <input
        v-model.number="tScore"
        type="number"
        step="0.1"
        :placeholder="t('osteoporosisRisk.tScorePlaceholder')"
        data-testid="t-score"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
      <p class="text-xs text-stone-500 mt-2">{{ t('osteoporosisRisk.tScoreHelp') }}</p>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('osteoporosisRisk.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('osteoporosisRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 2 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('osteoporosisRisk.scoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.score }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="bmi">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('osteoporosisRisk.bmiLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">
          <span v-if="result.bmi">{{ result.bmi.toFixed(1) }}</span>
          <span v-else class="text-stone-400 text-lg">—</span>
        </p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('osteoporosisRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('osteoporosisRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('osteoporosisRisk.refCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('osteoporosisRisk.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('osteoporosisRisk.refRisk') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('osteoporosisRisk.category_low') }}</td><td class="px-6 py-3 text-stone-600">0–3</td><td class="px-6 py-3 text-stone-600">&lt; 10 %</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('osteoporosisRisk.category_moderate') }}</td><td class="px-6 py-3 text-stone-600">4–7</td><td class="px-6 py-3 text-stone-600">10–20 %</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('osteoporosisRisk.category_high') }}</td><td class="px-6 py-3 text-stone-600">≥ 8</td><td class="px-6 py-3 text-stone-600">&gt; 20 %</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('osteoporosisRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('osteoporosisRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('osteoporosisRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="osteoporosisRisk" />
</template>
