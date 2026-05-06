<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcAnemiaRisk } from '../utils/anemiaRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('anemiaRisk.faq') || [])

useHead(() => ({
  title: t('anemiaRisk.meta.title'),
  description: t('anemiaRisk.meta.description'),
  routeKey: 'anemiaRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Anemia Risk Calculator',
    url: 'https://healthcalculator.app/anemia-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric') // metric = g/dL, imperial-ish = g/L
const sex = ref('female')
const hemoglobin = ref(null)

const symptoms = ref({
  fatigue: false,
  pallor: false,
  shortnessOfBreath: false,
  dizziness: false,
  coldHandsFeet: false,
  headache: false,
  rapidHeartbeat: false,
  brittleNails: false,
  restlessLegs: false,
  pica: false,
})

const symptomList = [
  { key: 'fatigue', points: 1 },
  { key: 'pallor', points: 1 },
  { key: 'shortnessOfBreath', points: 2 },
  { key: 'dizziness', points: 1 },
  { key: 'coldHandsFeet', points: 1 },
  { key: 'headache', points: 1 },
  { key: 'rapidHeartbeat', points: 2 },
  { key: 'brittleNails', points: 1 },
  { key: 'restlessLegs', points: 1 },
  { key: 'pica', points: 2 },
]

// hemoglobin is g/dL in metric; in g/L (SI) for imperial toggle. Convert to g/dL.
const hemoglobinGdL = computed(() => {
  if (hemoglobin.value == null) return null
  return unit.value === 'imperial' ? hemoglobin.value / 10 : hemoglobin.value
})

const result = computed(() => calcAnemiaRisk({
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

const hbUnit = computed(() => unit.value === 'imperial' ? 'g/L' : 'g/dL')
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('anemiaRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('anemiaRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >g/dL</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >g/L</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('anemiaRisk.sexLabel') }}
        </label>
        <select
          v-model="sex"
          data-testid="sex"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option value="female">{{ t('anemiaRisk.sexFemale') }}</option>
          <option value="male">{{ t('anemiaRisk.sexMale') }}</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('anemiaRisk.hbLabel', { unit: hbUnit }) }}
        </label>
        <input
          v-model.number="hemoglobin"
          type="number"
          step="0.1"
          :placeholder="unit === 'metric' ? '13.5' : '135'"
          data-testid="hemoglobin"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('anemiaRisk.symptomsLabel') }}</p>
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
            <p class="text-sm font-semibold text-stone-900">{{ t('anemiaRisk.symptom_' + s.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ s.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('anemiaRisk.symptom_' + s.key + '_desc') }}</p>
        </div>
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('anemiaRisk.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('anemiaRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 3 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="hb-category">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anemiaRisk.hbCategoryLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900">
          <span v-if="result.hbCategory">{{ t('anemiaRisk.category_' + result.hbCategory) }}</span>
          <span v-else class="text-stone-400 text-lg">—</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="symptom-score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anemiaRisk.symptomScoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.symptomScore }}<span class="text-lg text-stone-400 font-medium"> / 13</span></p>
      </div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="cutoff">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anemiaRisk.cutoffLabel') }}</p>
      <p class="text-base font-semibold text-stone-900 tabular-nums">{{ t('anemiaRisk.cutoffValue', { value: result.cutoff, unit: 'g/dL' }) }}</p>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('anemiaRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('anemiaRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('anemiaRisk.refCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('anemiaRisk.refWomen') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('anemiaRisk.refMen') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('anemiaRisk.category_none') }}</td><td class="px-6 py-3 text-stone-600">≥ 12.0 g/dL</td><td class="px-6 py-3 text-stone-600">≥ 13.0 g/dL</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('anemiaRisk.category_mild') }}</td><td class="px-6 py-3 text-stone-600">11.0–11.9 g/dL</td><td class="px-6 py-3 text-stone-600">11.0–12.9 g/dL</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('anemiaRisk.category_moderate') }}</td><td class="px-6 py-3 text-stone-600">8.0–10.9 g/dL</td><td class="px-6 py-3 text-stone-600">8.0–10.9 g/dL</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('anemiaRisk.category_severe') }}</td><td class="px-6 py-3 text-stone-600">&lt; 8.0 g/dL</td><td class="px-6 py-3 text-stone-600">&lt; 8.0 g/dL</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('anemiaRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('anemiaRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('anemiaRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="anemiaRisk" />
</template>
