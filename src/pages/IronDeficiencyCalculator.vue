<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcIronDeficiency, TOTAL_SYMPTOM_POINTS } from '../utils/ironDeficiency.js'
import RelatedCalculators from '../components/RelatedCalculators.vue'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('ironDeficiency.faq') || [])

useHead(() => ({
  title: t('ironDeficiency.meta.title'),
  description: t('ironDeficiency.meta.description'),
  routeKey: 'ironDeficiency',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Iron Deficiency Calculator',
    url: 'https://healthcalculator.app/iron-deficiency-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric') // metric: Hb g/dL + ferritin ng/mL ; si: Hb g/L + ferritin µg/L (same number)
const sex = ref('female')
const ferritin = ref(null)
const tsat = ref(null)
const hemoglobin = ref(null)

const symptoms = ref({
  fatigue: false,
  pallor: false,
  shortnessOfBreath: false,
  hairLoss: false,
  brittleNails: false,
  restlessLegs: false,
  pica: false,
  coldHandsFeet: false,
  headache: false,
  poorConcentration: false,
})

const symptomList = [
  { key: 'fatigue', points: 1 },
  { key: 'pallor', points: 1 },
  { key: 'shortnessOfBreath', points: 2 },
  { key: 'hairLoss', points: 1 },
  { key: 'brittleNails', points: 1 },
  { key: 'restlessLegs', points: 2 },
  { key: 'pica', points: 2 },
  { key: 'coldHandsFeet', points: 1 },
  { key: 'headache', points: 1 },
  { key: 'poorConcentration', points: 1 },
]

// In "si" mode the user types Hb as g/L (multiply input by 10). Ferritin ng/mL == µg/L numerically.
const hemoglobinGdL = computed(() => {
  if (hemoglobin.value == null) return null
  return unit.value === 'si' ? hemoglobin.value / 10 : hemoglobin.value
})

const result = computed(() => calcIronDeficiency({
  ferritin: ferritin.value,
  tsat: tsat.value,
  hemoglobin: hemoglobinGdL.value,
  sex: sex.value,
  symptoms: symptoms.value,
}))

const categoryStyle = computed(() => {
  if (!result.value) return { color: '', bg: '' }
  switch (result.value.category) {
    case 'none': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'mild': return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200 text-yellow-900' }
    case 'moderate': return { color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200 text-orange-900' }
    case 'severe': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const categoryLevel = computed(() => {
  if (!result.value) return 0
  return { none: 0, mild: 1, moderate: 2, severe: 3 }[result.value.category] ?? 0
})

const hbUnit = computed(() => unit.value === 'si' ? 'g/L' : 'g/dL')
const ferritinUnit = computed(() => unit.value === 'si' ? 'µg/L' : 'ng/mL')
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('ironDeficiency.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('ironDeficiency.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('ironDeficiency.unitMetric') }}</button>
      <button
        @click="unit = 'si'"
        :class="unit === 'si' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('ironDeficiency.unitSi') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('ironDeficiency.sexLabel') }}
        </label>
        <select
          v-model="sex"
          data-testid="sex"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option value="female">{{ t('ironDeficiency.sexFemale') }}</option>
          <option value="male">{{ t('ironDeficiency.sexMale') }}</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('ironDeficiency.ferritinLabel', { unit: ferritinUnit }) }}
        </label>
        <input
          v-model.number="ferritin"
          type="number"
          step="0.1"
          min="0"
          placeholder="30"
          data-testid="ferritin"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('ironDeficiency.tsatLabel') }}
        </label>
        <input
          v-model.number="tsat"
          type="number"
          step="0.1"
          min="0"
          max="100"
          placeholder="25"
          data-testid="tsat"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('ironDeficiency.hbLabel', { unit: hbUnit }) }}
        </label>
        <input
          v-model.number="hemoglobin"
          type="number"
          step="0.1"
          min="0"
          :placeholder="unit === 'metric' ? '13.5' : '135'"
          data-testid="hemoglobin"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('ironDeficiency.symptomsLabel') }}</p>
    <div class="space-y-3">
      <label
        v-for="s in symptomList"
        :key="s.key"
        :data-testid="'symptom-' + s.key"
        :class="symptoms[s.key] ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'"
        class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors duration-150"
      >
        <input
          v-model="symptoms[s.key]"
          type="checkbox"
          :data-testid="'checkbox-' + s.key"
          class="mt-1 h-5 w-5 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-3">
            <p class="text-sm font-semibold text-stone-900">{{ t('ironDeficiency.symptom_' + s.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ s.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('ironDeficiency.symptom_' + s.key + '_desc') }}</p>
        </div>
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('ironDeficiency.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('ironDeficiency.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 3 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="ferritin-category">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ironDeficiency.ferritinCategoryLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900">
          <span v-if="result.ferritinCategory">{{ t('ironDeficiency.category_' + result.ferritinCategory) }}</span>
          <span v-else class="text-stone-400 text-lg">—</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="tsat-category">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ironDeficiency.tsatCategoryLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900">
          <span v-if="result.tsatCategory">{{ t('ironDeficiency.category_' + result.tsatCategory) }}</span>
          <span v-else class="text-stone-400 text-lg">—</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="hb-category">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ironDeficiency.hbCategoryLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900">
          <span v-if="result.hbCategory">{{ t('ironDeficiency.category_' + result.hbCategory) }}</span>
          <span v-else class="text-stone-400 text-lg">—</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="symptom-score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ironDeficiency.symptomScoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.symptomScore }}<span class="text-lg text-stone-400 font-medium"> / {{ TOTAL_SYMPTOM_POINTS }}</span></p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('ironDeficiency.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('ironDeficiency.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ironDeficiency.refMarker') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ironDeficiency.category_none') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ironDeficiency.category_mild') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ironDeficiency.category_moderate') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ironDeficiency.category_severe') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ironDeficiency.refFerritin') }}</td>
          <td class="px-6 py-3 text-stone-600">≥ 100</td>
          <td class="px-6 py-3 text-stone-600">30–99</td>
          <td class="px-6 py-3 text-stone-600">15–29</td>
          <td class="px-6 py-3 text-stone-600">&lt; 15</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ironDeficiency.refTsat') }}</td>
          <td class="px-6 py-3 text-stone-600">≥ 20 %</td>
          <td class="px-6 py-3 text-stone-600">16–19 %</td>
          <td class="px-6 py-3 text-stone-600">&lt; 16 %</td>
          <td class="px-6 py-3 text-stone-600">—</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ironDeficiency.refHbWomen') }}</td>
          <td class="px-6 py-3 text-stone-600">≥ 12.0</td>
          <td class="px-6 py-3 text-stone-600">11.0–11.9</td>
          <td class="px-6 py-3 text-stone-600">8.0–10.9</td>
          <td class="px-6 py-3 text-stone-600">&lt; 8.0</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ironDeficiency.refHbMen') }}</td>
          <td class="px-6 py-3 text-stone-600">≥ 13.0</td>
          <td class="px-6 py-3 text-stone-600">11.0–12.9</td>
          <td class="px-6 py-3 text-stone-600">8.0–10.9</td>
          <td class="px-6 py-3 text-stone-600">&lt; 8.0</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('ironDeficiency.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('ironDeficiency.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('ironDeficiency.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="ironDeficiency" class="mt-8" />

  <BlogArticleLink calculator-key="ironDeficiency" />
</template>
