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
  calcPmsSymptom,
  PSST_CORE_ITEMS,
  PSST_OTHER_ITEMS,
  PSST_IMPAIRMENT_ITEMS,
} from '../utils/pmsSymptom.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pmsSymptom.faq') || [])

useHead(() => ({
  title: t('pmsSymptom.meta.title'),
  description: t('pmsSymptom.meta.description'),
  routeKey: 'pmsSymptom',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PMS Symptom Calculator',
    url: 'https://healthcalculator.app/en/pms-symptom-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const allKeys = [...PSST_CORE_ITEMS, ...PSST_OTHER_ITEMS, ...PSST_IMPAIRMENT_ITEMS]
const scores = ref(Object.fromEntries(allKeys.map(k => [k, 0])))

function setScore(key, value) {
  scores.value[key] = value
}

const result = computed(() => calcPmsSymptom(scores.value))
const hasInput = computed(() => Object.values(scores.value).some(v => v > 0))

const severityLevels = [0, 1, 2, 3]

const categoryColor = computed(() => {
  switch (result.value.category) {
    case 'none': return 'text-green-600'
    case 'mild': return 'text-lime-600'
    case 'moderateSevere': return 'text-orange-600'
    case 'pmdd': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const categoryBg = computed(() => {
  switch (result.value.category) {
    case 'none': return 'bg-green-500'
    case 'mild': return 'bg-lime-500'
    case 'moderateSevere': return 'bg-orange-500'
    case 'pmdd': return 'bg-red-600'
    default: return 'bg-stone-300'
  }
})

const progressPct = computed(() => {
  const max = PSST_CORE_ITEMS.length * 3 + PSST_OTHER_ITEMS.length * 3
  return Math.min(100, result.value.symptomTotal / max * 100)
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pmsSymptom.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pmsSymptom.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-sm text-stone-600 mb-6">{{ t('pmsSymptom.intro') }}</p>

    <div class="mb-8">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.coreSection') }}</h2>
      <p class="text-xs text-stone-400 mb-4">{{ t('pmsSymptom.coreIntro') }}</p>
      <div class="space-y-4">
        <div v-for="key in PSST_CORE_ITEMS" :key="key">
          <p class="text-sm text-stone-700 mb-2">{{ t('pmsSymptom.' + key) }}</p>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(key, level)"
              :data-testid="key + '-' + level"
              :class="scores[key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('pmsSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8 pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.otherSection') }}</h2>
      <p class="text-xs text-stone-400 mb-4">{{ t('pmsSymptom.otherIntro') }}</p>
      <div class="space-y-4">
        <div v-for="key in PSST_OTHER_ITEMS" :key="key">
          <p class="text-sm text-stone-700 mb-2">{{ t('pmsSymptom.' + key) }}</p>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(key, level)"
              :data-testid="key + '-' + level"
              :class="scores[key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('pmsSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.impairmentSection') }}</h2>
      <p class="text-xs text-stone-400 mb-4">{{ t('pmsSymptom.impairmentIntro') }}</p>
      <div class="space-y-4">
        <div v-for="key in PSST_IMPAIRMENT_ITEMS" :key="key">
          <p class="text-sm text-stone-700 mb-2">{{ t('pmsSymptom.' + key) }}</p>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(key, level)"
              :data-testid="key + '-' + level"
              :class="scores[key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('pmsSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasInput" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('pmsSymptom.results') }}</p>
    <div class="flex items-baseline gap-3 mb-4">
      <span :class="categoryColor" class="text-3xl font-bold tracking-tight leading-none" data-testid="result-category">{{ t('pmsSymptom.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div :class="categoryBg" class="absolute inset-y-0 left-0 transition-all duration-300" :style="{ width: progressPct + '%' }"></div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="interpretation">
      <p class="text-sm text-stone-700 leading-relaxed">{{ t('pmsSymptom.interpretation_' + result.category) }}</p>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.symptomScore') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="symptom-score">{{ result.symptomTotal }} <span class="text-sm text-stone-400">/ 42</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.impairmentScore') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="impairment-score">{{ result.impairmentTotal }} <span class="text-sm text-stone-400">/ 15</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pmsSymptom.moderateSevereCount') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="moderate-severe-count">{{ result.totalModerateOrSevere }} <span class="text-sm text-stone-400">/ 14</span></p>
      </div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium"
      :class="result.evaluationRecommended ? 'bg-red-50 text-red-900 border border-red-200' : 'bg-green-50 text-green-900 border border-green-200'"
      data-testid="evaluation-status"
    >
      {{ result.evaluationRecommended ? t('pmsSymptom.evaluationRecommended') : t('pmsSymptom.evaluationNotRecommended') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('pmsSymptom.criteriaTitle') }}</h2>
    </div>
    <ul class="divide-y divide-stone-100">
      <li class="px-6 py-3">
        <p class="text-sm text-stone-700 leading-relaxed">{{ t('pmsSymptom.criteriaPmdd') }}</p>
      </li>
      <li class="px-6 py-3">
        <p class="text-sm text-stone-700 leading-relaxed">{{ t('pmsSymptom.criteriaModerate') }}</p>
      </li>
    </ul>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pmsSymptom.psstTitle') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed mb-4">{{ t('pmsSymptom.psstText') }}</p>
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pmsSymptom.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('pmsSymptom.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('pmsSymptom.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="pmsSymptom" />
</template>
