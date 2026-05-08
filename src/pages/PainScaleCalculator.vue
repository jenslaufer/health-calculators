<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { evaluatePainScore } from '../utils/painScale.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('painScale.faq') || [])

useHead(() => ({
  title: t('painScale.meta.title'),
  description: t('painScale.meta.description'),
  routeKey: 'painScale',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pain Scale Calculator',
    url: 'https://healthcalculator.app/pain-scale-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const scale = ref('nrs')
const nrsValue = ref(null)
const vasValue = ref(null)
const wongBakerValue = ref(null)

const wongBakerOptions = [
  { value: 0, face: '😀' },
  { value: 2, face: '🙂' },
  { value: 4, face: '😐' },
  { value: 6, face: '🙁' },
  { value: 8, face: '😣' },
  { value: 10, face: '😭' },
]

const nrsOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = computed(() => {
  if (scale.value === 'nrs') {
    return evaluatePainScore({ scale: 'nrs', value: nrsValue.value })
  }
  if (scale.value === 'vas') {
    return evaluatePainScore({ scale: 'vas', value: vasValue.value })
  }
  if (scale.value === 'wongBaker') {
    return evaluatePainScore({ scale: 'wongBaker', value: wongBakerValue.value })
  }
  return null
})

const interpretation = computed(() => {
  if (!result.value) return null
  const map = {
    none: { color: 'text-green-600', bg: 'bg-green-600' },
    mild: { color: 'text-green-500', bg: 'bg-green-500' },
    moderate: { color: 'text-orange-500', bg: 'bg-orange-500' },
    severe: { color: 'text-red-600', bg: 'bg-red-600' },
  }
  return { key: result.value.category, ...map[result.value.category] }
})

const categoryRows = [
  { range: '0', key: 'none' },
  { range: '1 – 3', key: 'mild' },
  { range: '4 – 6', key: 'moderate' },
  { range: '7 – 10', key: 'severe' },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('painScale.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('painScale.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('painScale.scaleLabel') }}</label>
        <div class="flex gap-2 flex-wrap">
          <button
            @click="scale = 'nrs'"
            data-testid="scale-nrs"
            :class="scale === 'nrs' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('painScale.scales.nrs') }}</button>
          <button
            @click="scale = 'vas'"
            data-testid="scale-vas"
            :class="scale === 'vas' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('painScale.scales.vas') }}</button>
          <button
            @click="scale = 'wongBaker'"
            data-testid="scale-wong"
            :class="scale === 'wongBaker' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('painScale.scales.wongBaker') }}</button>
        </div>
        <p class="text-sm text-stone-500 mt-3" data-testid="scale-hint">{{ t('painScale.scaleHints.' + scale) }}</p>
      </div>

      <div v-if="scale === 'nrs'">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('painScale.scoreLabel') }}</label>
        <div class="grid grid-cols-11 gap-1.5">
          <button
            v-for="n in nrsOptions"
            :key="n"
            @click="nrsValue = n"
            :data-testid="'nrs-' + n"
            :class="nrsValue === n ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'"
            class="aspect-square rounded-lg text-base font-semibold tabular-nums transition-colors duration-150"
          >{{ n }}</button>
        </div>
      </div>

      <div v-else-if="scale === 'vas'">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('painScale.vasLabel') }}</label>
        <input
          v-model.number="vasValue"
          type="range"
          min="0"
          max="100"
          step="1"
          data-testid="vas-slider"
          class="w-full accent-stone-900"
        />
        <div class="flex justify-between text-xs text-stone-400 mt-2 tabular-nums">
          <span>0</span>
          <span class="text-stone-900 font-semibold text-base" data-testid="vas-value">{{ vasValue ?? 0 }} mm</span>
          <span>100</span>
        </div>
      </div>

      <div v-else-if="scale === 'wongBaker'">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('painScale.selectFace') }}</label>
        <div class="grid grid-cols-6 gap-2">
          <button
            v-for="opt in wongBakerOptions"
            :key="opt.value"
            @click="wongBakerValue = opt.value"
            :data-testid="'wong-' + opt.value"
            :class="wongBakerValue === opt.value ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'"
            class="flex flex-col items-center gap-1 px-3 py-3 rounded-lg border-2 transition-colors duration-150"
          >
            <span class="text-3xl leading-none">{{ opt.face }}</span>
            <span class="text-xs font-semibold tabular-nums">{{ opt.value }}</span>
          </button>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('painScale.categories.' + interpretation.key) }}</span>
      </div>

      <div class="mb-6">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('painScale.scoreLabel') }}</div>
        <div class="flex items-baseline gap-3">
          <span data-testid="result-score" class="text-6xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.score.toFixed(1) }}</span>
          <span class="text-base text-stone-400">/ 10</span>
        </div>
      </div>

      <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-orange-500 to-red-600 rounded-full" style="width: 100%"></div>
        <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: Math.min(result.score / 10 * 100, 100) + '%' }"></div>
      </div>

      <div class="border border-stone-200 rounded-lg px-4 py-3 bg-stone-50">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('painScale.hints.' + interpretation.key) }}</p>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('painScale.incompleteHint') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('painScale.rangeLabel') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('painScale.interpretationLabel') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="row in categoryRows" :key="row.key">
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">{{ row.range }}</td>
            <td class="px-6 py-3 text-stone-600">{{ t('painScale.categories.' + row.key) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('painScale.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('painScale.howItWorksText') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('painScale.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="painScale" />
  </div>
</template>
