<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcDehydrationRisk } from '../utils/dehydrationRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('dehydrationRisk.faq') || [])

useHead(() => ({
  title: t('dehydrationRisk.meta.title'),
  description: t('dehydrationRisk.meta.description'),
  routeKey: 'dehydrationRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dehydration Risk Calculator',
    url: 'https://healthcalculator.app/dehydration-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const weight = ref(null)
const intake = ref(null)

const symptoms = ref({
  thirst: false,
  darkUrine: false,
  dryMouth: false,
  fatigue: false,
  headache: false,
  dizziness: false,
  rapidHeartbeat: false,
  confusion: false,
})

const symptomList = [
  { key: 'thirst', points: 1 },
  { key: 'darkUrine', points: 1 },
  { key: 'dryMouth', points: 1 },
  { key: 'fatigue', points: 1 },
  { key: 'headache', points: 1 },
  { key: 'dizziness', points: 2 },
  { key: 'rapidHeartbeat', points: 2 },
  { key: 'confusion', points: 3 },
]

const weightKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const intakeMl = computed(() => {
  if (intake.value == null) return null
  return unit.value === 'imperial' ? intake.value * 29.5735 : intake.value
})

const result = computed(() => calcDehydrationRisk({
  weightKg: weightKg.value,
  intakeMl: intakeMl.value,
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

const volumeUnit = computed(() => unit.value === 'imperial' ? t('dehydrationRisk.flOz') : 'ml')

const recommendedDeficitDisplay = computed(() => {
  if (!result.value) return null
  if (unit.value === 'imperial') {
    return { value: (result.value.deficitMl / 29.5735).toFixed(1), unit: volumeUnit.value }
  }
  return { value: result.value.deficitMl.toString(), unit: 'ml' }
})

const requirementDisplay = computed(() => {
  if (!result.value) return null
  if (unit.value === 'imperial') {
    return { value: (result.value.requirementMl / 29.5735).toFixed(1), unit: volumeUnit.value }
  }
  return { value: Math.round(result.value.requirementMl).toString(), unit: 'ml' }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('dehydrationRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('dehydrationRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.metric') }}</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input
          v-model.number="weight"
          type="number"
          :placeholder="unit === 'metric' ? '70' : '154'"
          data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dehydrationRisk.intakeLabel', { unit: unit === 'metric' ? 'ml' : t('dehydrationRisk.flOz') }) }}</label>
        <input
          v-model.number="intake"
          type="number"
          :placeholder="unit === 'metric' ? '2000' : '67'"
          data-testid="intake"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('dehydrationRisk.symptomsLabel') }}</p>
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
            <p class="text-sm font-semibold text-stone-900">{{ t('dehydrationRisk.symptom_' + s.key) }}</p>
            <span class="text-xs font-semibold text-stone-400 tabular-nums">+{{ s.points }}</span>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ t('dehydrationRisk.symptom_' + s.key + '_desc') }}</p>
        </div>
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('dehydrationRisk.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold tabular-nums tracking-tight leading-none" :class="categoryStyle.color" data-testid="result-status">{{ t('dehydrationRisk.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 3 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="deficit-pct">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('dehydrationRisk.deficitPctLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.deficitPct.toFixed(1) }}<span class="text-lg text-stone-400 font-medium"> %</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="symptom-score">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('dehydrationRisk.symptomScoreLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.symptomScore }}<span class="text-lg text-stone-400 font-medium"> / 12</span></p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="requirement">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('dehydrationRisk.requirementLabel') }}</p>
        <p class="text-base font-semibold text-stone-900 tabular-nums">
          <span v-if="requirementDisplay">{{ requirementDisplay.value }} {{ requirementDisplay.unit }}</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="recommended-deficit">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('dehydrationRisk.deficitMlLabel') }}</p>
        <p class="text-base font-semibold text-stone-900 tabular-nums">
          <span v-if="recommendedDeficitDisplay">{{ recommendedDeficitDisplay.value }} {{ recommendedDeficitDisplay.unit }}</span>
        </p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('dehydrationRisk.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('dehydrationRisk.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('dehydrationRisk.refCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('dehydrationRisk.refDeficit') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('dehydrationRisk.refSigns') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('dehydrationRisk.category_none') }}</td><td class="px-6 py-3 text-stone-600">&lt; 1 %</td><td class="px-6 py-3 text-stone-600">{{ t('dehydrationRisk.refSigns_none') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('dehydrationRisk.category_mild') }}</td><td class="px-6 py-3 text-stone-600">1–3 %</td><td class="px-6 py-3 text-stone-600">{{ t('dehydrationRisk.refSigns_mild') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('dehydrationRisk.category_moderate') }}</td><td class="px-6 py-3 text-stone-600">3–6 %</td><td class="px-6 py-3 text-stone-600">{{ t('dehydrationRisk.refSigns_moderate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('dehydrationRisk.category_severe') }}</td><td class="px-6 py-3 text-stone-600">&gt; 6 %</td><td class="px-6 py-3 text-stone-600">{{ t('dehydrationRisk.refSigns_severe') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('dehydrationRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('dehydrationRisk.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('dehydrationRisk.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="dehydrationRisk" />
</template>
