<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcPcosSymptoms } from '../utils/pcosSymptoms.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pcosSymptoms.faq') || [])

useHead(() => ({
  title: t('pcosSymptoms.meta.title'),
  description: t('pcosSymptoms.meta.description'),
  routeKey: 'pcosSymptoms',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PCOS Symptom Checker',
    url: 'https://healthcalculator.app/pcos-symptom-checker',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const symptomKeys = [
  { key: 'irregularCycles', section: 'ovulatory' },
  { key: 'missedPeriods', section: 'ovulatory' },
  { key: 'hirsutism', section: 'androgen' },
  { key: 'acne', section: 'androgen' },
  { key: 'hairLoss', section: 'androgen' },
  { key: 'weightGain', section: 'metabolic' },
  { key: 'acanthosis', section: 'metabolic' },
  { key: 'fertilityIssues', section: 'metabolic' },
  { key: 'familyHistory', section: 'metabolic' },
]

const symptoms = ref(Object.fromEntries(symptomKeys.map(s => [s.key, false])))

function toggle(key, value) {
  symptoms.value[key] = value
}

const ovulatorySymptoms = symptomKeys.filter(s => s.section === 'ovulatory')
const androgenSymptoms = symptomKeys.filter(s => s.section === 'androgen')
const metabolicSymptoms = symptomKeys.filter(s => s.section === 'metabolic')

const result = computed(() => calcPcosSymptoms(symptoms.value))

const hasInput = computed(() => Object.values(symptoms.value).some(Boolean))

const categoryColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.category) {
    case 'low': return 'text-green-600'
    case 'moderate': return 'text-yellow-600'
    case 'high': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const categoryBg = computed(() => {
  if (!result.value) return 'bg-stone-300'
  switch (result.value.category) {
    case 'low': return 'bg-green-500'
    case 'moderate': return 'bg-yellow-500'
    case 'high': return 'bg-red-600'
    default: return 'bg-stone-300'
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pcosSymptoms.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pcosSymptoms.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-6">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pcosSymptoms.ovulatorySection') }}</h2>
      <div class="space-y-3">
        <div v-for="s in ovulatorySymptoms" :key="s.key" class="flex items-center justify-between gap-4">
          <span class="text-sm text-stone-700 flex-1">{{ t('pcosSymptoms.' + s.key) }}</span>
          <div class="flex gap-2 shrink-0">
            <button
              @click="toggle(s.key, false)"
              :data-testid="s.key + '-no'"
              :class="!symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.no') }}</button>
            <button
              @click="toggle(s.key, true)"
              :data-testid="s.key + '-yes'"
              :class="symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.yes') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-6 pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pcosSymptoms.androgenSection') }}</h2>
      <div class="space-y-3">
        <div v-for="s in androgenSymptoms" :key="s.key" class="flex items-center justify-between gap-4">
          <span class="text-sm text-stone-700 flex-1">{{ t('pcosSymptoms.' + s.key) }}</span>
          <div class="flex gap-2 shrink-0">
            <button
              @click="toggle(s.key, false)"
              :data-testid="s.key + '-no'"
              :class="!symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.no') }}</button>
            <button
              @click="toggle(s.key, true)"
              :data-testid="s.key + '-yes'"
              :class="symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.yes') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pcosSymptoms.metabolicSection') }}</h2>
      <div class="space-y-3">
        <div v-for="s in metabolicSymptoms" :key="s.key" class="flex items-center justify-between gap-4">
          <span class="text-sm text-stone-700 flex-1">{{ t('pcosSymptoms.' + s.key) }}</span>
          <div class="flex gap-2 shrink-0">
            <button
              @click="toggle(s.key, false)"
              :data-testid="s.key + '-no'"
              :class="!symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.no') }}</button>
            <button
              @click="toggle(s.key, true)"
              :data-testid="s.key + '-yes'"
              :class="symptoms[s.key] ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('pcosSymptoms.yes') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasInput && result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('pcosSymptoms.results') }}</p>
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="result-score">{{ result.score }}</span>
      <span class="text-lg text-stone-400">/ 100</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="result-category">{{ t('pcosSymptoms.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div :class="categoryBg" class="absolute inset-y-0 left-0 transition-all duration-300" :style="{ width: result.score + '%' }"></div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="interpretation">
      <p class="text-sm text-stone-700 leading-relaxed">{{ t('pcosSymptoms.interpretation_' + result.category) }}</p>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pcosSymptoms.criteriaMet', { count: result.criteriaMetCount }) }}</p>
        <p class="text-sm text-stone-700 mt-2" data-testid="rotterdam-criteria">
          <span :class="result.ovulatoryDysfunction ? 'text-stone-900 font-semibold' : 'text-stone-400'">
            {{ result.ovulatoryDysfunction ? '✓' : '·' }} {{ t('pcosSymptoms.ovulatoryDysfunction') }}
          </span><br />
          <span :class="result.hyperandrogenism ? 'text-stone-900 font-semibold' : 'text-stone-400'">
            {{ result.hyperandrogenism ? '✓' : '·' }} {{ t('pcosSymptoms.hyperandrogenism') }}
          </span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pcosSymptoms.symptomCount') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="symptom-count">{{ result.symptomCount }} / 9</p>
      </div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium"
      :class="result.evaluationRecommended ? 'bg-red-50 text-red-900 border border-red-200' : 'bg-green-50 text-green-900 border border-green-200'"
      data-testid="evaluation-status"
    >
      {{ result.evaluationRecommended ? t('pcosSymptoms.evaluationRecommended') : t('pcosSymptoms.evaluationNotRecommended') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('pcosSymptoms.criteriaTitle') }}</h2>
    </div>
    <ul class="divide-y divide-stone-100">
      <li class="px-6 py-3 text-sm text-stone-700">{{ t('pcosSymptoms.criterion1') }}</li>
      <li class="px-6 py-3 text-sm text-stone-700">{{ t('pcosSymptoms.criterion2') }}</li>
      <li class="px-6 py-3 text-sm text-stone-700">
        {{ t('pcosSymptoms.criterion3') }}
        <p class="text-xs text-stone-400 mt-1">{{ t('pcosSymptoms.criterion3Note') }}</p>
      </li>
    </ul>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pcosSymptoms.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('pcosSymptoms.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('pcosSymptoms.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="pcosSymptoms" />
</template>
