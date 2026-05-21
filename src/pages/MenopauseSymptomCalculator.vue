<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcMenopauseSymptom, MRS_ITEMS } from '../utils/menopauseSymptom.js'
import RelatedCalculators from '../components/RelatedCalculators.vue'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('menopauseSymptom.faq') || [])

useHead(() => ({
  title: t('menopauseSymptom.meta.title'),
  description: t('menopauseSymptom.meta.description'),
  routeKey: 'menopauseSymptom',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Menopause Symptom Calculator',
    url: 'https://healthcalculator.app/en/menopause-symptom-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const scores = ref(Object.fromEntries(MRS_ITEMS.map(i => [i.key, 0])))

function setScore(key, value) {
  scores.value[key] = value
}

const somaticItems = MRS_ITEMS.filter(i => i.subscale === 'somatic')
const psychologicalItems = MRS_ITEMS.filter(i => i.subscale === 'psychological')
const urogenitalItems = MRS_ITEMS.filter(i => i.subscale === 'urogenital')

const result = computed(() => calcMenopauseSymptom(scores.value))

const hasInput = computed(() => Object.values(scores.value).some(v => v > 0))

const categoryColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.category) {
    case 'none': return 'text-green-600'
    case 'mild': return 'text-lime-600'
    case 'moderate': return 'text-yellow-600'
    case 'severe': return 'text-red-600'
    default: return 'text-stone-600'
  }
})

const categoryBg = computed(() => {
  if (!result.value) return 'bg-stone-300'
  switch (result.value.category) {
    case 'none': return 'bg-green-500'
    case 'mild': return 'bg-lime-500'
    case 'moderate': return 'bg-yellow-500'
    case 'severe': return 'bg-red-600'
    default: return 'bg-stone-300'
  }
})

const subscaleColor = (cat) => {
  switch (cat) {
    case 'none': return 'text-green-600'
    case 'mild': return 'text-lime-600'
    case 'moderate': return 'text-yellow-600'
    case 'severe': return 'text-red-600'
    default: return 'text-stone-600'
  }
}

const severityLevels = [0, 1, 2, 3, 4]
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('menopauseSymptom.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('menopauseSymptom.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-sm text-stone-600 mb-6">{{ t('menopauseSymptom.intro') }}</p>

    <div class="mb-8">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('menopauseSymptom.somaticSection') }}</h2>
      <div class="space-y-4">
        <div v-for="item in somaticItems" :key="item.key">
          <p class="text-sm text-stone-700 mb-2">{{ t('menopauseSymptom.' + item.key) }}</p>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(item.key, level)"
              :data-testid="item.key + '-' + level"
              :class="scores[item.key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('menopauseSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8 pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('menopauseSymptom.psychologicalSection') }}</h2>
      <div class="space-y-4">
        <div v-for="item in psychologicalItems" :key="item.key">
          <p class="text-sm text-stone-700 mb-2">{{ t('menopauseSymptom.' + item.key) }}</p>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(item.key, level)"
              :data-testid="item.key + '-' + level"
              :class="scores[item.key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('menopauseSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-6 border-t border-stone-100">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('menopauseSymptom.urogenitalSection') }}</h2>
      <div class="space-y-4">
        <div v-for="item in urogenitalItems" :key="item.key">
          <p class="text-sm text-stone-700 mb-2">{{ t('menopauseSymptom.' + item.key) }}</p>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="level in severityLevels"
              :key="level"
              @click="setScore(item.key, level)"
              :data-testid="item.key + '-' + level"
              :class="scores[item.key] === level ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2 py-2 rounded-lg text-xs font-medium transition-colors duration-150"
            >{{ t('menopauseSymptom.severity_' + level) }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasInput && result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('menopauseSymptom.results') }}</p>
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="result-total">{{ result.total }}</span>
      <span class="text-lg text-stone-400">/ 44</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="result-category">{{ t('menopauseSymptom.category_' + result.category) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div :class="categoryBg" class="absolute inset-y-0 left-0 transition-all duration-300" :style="{ width: (result.total / 44 * 100) + '%' }"></div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="interpretation">
      <p class="text-sm text-stone-700 leading-relaxed">{{ t('menopauseSymptom.interpretation_' + result.category) }}</p>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('menopauseSymptom.somaticSection') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="somatic-score">{{ result.somatic }} <span class="text-sm text-stone-400">/ 16</span></p>
        <p :class="subscaleColor(result.somaticCategory)" class="text-xs font-semibold mt-1" data-testid="somatic-category">{{ t('menopauseSymptom.category_' + result.somaticCategory) }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('menopauseSymptom.psychologicalSection') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="psychological-score">{{ result.psychological }} <span class="text-sm text-stone-400">/ 16</span></p>
        <p :class="subscaleColor(result.psychologicalCategory)" class="text-xs font-semibold mt-1" data-testid="psychological-category">{{ t('menopauseSymptom.category_' + result.psychologicalCategory) }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('menopauseSymptom.urogenitalSection') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="urogenital-score">{{ result.urogenital }} <span class="text-sm text-stone-400">/ 12</span></p>
        <p :class="subscaleColor(result.urogenitalCategory)" class="text-xs font-semibold mt-1" data-testid="urogenital-category">{{ t('menopauseSymptom.category_' + result.urogenitalCategory) }}</p>
      </div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium"
      :class="result.evaluationRecommended ? 'bg-red-50 text-red-900 border border-red-200' : 'bg-green-50 text-green-900 border border-green-200'"
      data-testid="evaluation-status"
    >
      {{ result.evaluationRecommended ? t('menopauseSymptom.evaluationRecommended') : t('menopauseSymptom.evaluationNotRecommended') }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('menopauseSymptom.subscalesTitle') }}</h2>
    </div>
    <ul class="divide-y divide-stone-100">
      <li class="px-6 py-3">
        <p class="text-sm font-semibold text-stone-900">{{ t('menopauseSymptom.somaticSection') }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('menopauseSymptom.somaticDescription') }}</p>
      </li>
      <li class="px-6 py-3">
        <p class="text-sm font-semibold text-stone-900">{{ t('menopauseSymptom.psychologicalSection') }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('menopauseSymptom.psychologicalDescription') }}</p>
      </li>
      <li class="px-6 py-3">
        <p class="text-sm font-semibold text-stone-900">{{ t('menopauseSymptom.urogenitalSection') }}</p>
        <p class="text-xs text-stone-500 mt-1">{{ t('menopauseSymptom.urogenitalDescription') }}</p>
      </li>
    </ul>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('menopauseSymptom.mrsTitle') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed mb-4">{{ t('menopauseSymptom.mrsText') }}</p>
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('menopauseSymptom.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('menopauseSymptom.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('menopauseSymptom.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="menopauseSymptom" class="mt-8" />

  <BlogArticleLink calculator-key="menopauseSymptom" />
</template>
