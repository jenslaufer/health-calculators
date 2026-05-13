<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcFFMIResult } from '../utils/ffmiRechner.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('ffmiRechner.faq') || [])

useHead(() => ({
  title: t('ffmiRechner.meta.title'),
  description: t('ffmiRechner.meta.description'),
  routeKey: 'ffmiRechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FFMI Calculator',
    url: 'https://healthcalculator.app/en/ffmi-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const weight = ref(null)
const height = ref(null)
const bodyFat = ref(null)

const result = computed(() => calcFFMIResult({
  weightKg: weight.value,
  heightCm: height.value,
  bodyFatPct: bodyFat.value,
  sex: sex.value,
}))

const categoryStyle = computed(() => {
  if (!result.value) return { color: '', bg: '' }
  switch (result.value.category) {
    case 'belowAverage': return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200 text-yellow-900' }
    case 'average': return { color: 'text-stone-700', bg: 'bg-stone-50 border-stone-200 text-stone-900' }
    case 'aboveAverage': return { color: 'text-green-600', bg: 'bg-green-50 border-green-200 text-green-900' }
    case 'top1': return { color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200 text-blue-900' }
    case 'unlikelyNatural': return { color: 'text-red-700', bg: 'bg-red-100 border-red-300 text-red-900' }
    default: return { color: '', bg: '' }
  }
})

const categoryLevel = computed(() => {
  if (!result.value) return 0
  return { belowAverage: 0, average: 1, aboveAverage: 2, top1: 3, unlikelyNatural: 4 }[result.value.category] ?? 0
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('ffmiRechner.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('ffmiRechner.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ffmiRechner.sexLabel') }}</label>
        <div class="flex gap-2">
          <button @click="sex = 'male'" data-testid="sex-male"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('ffmiRechner.sexMale') }}</button>
          <button @click="sex = 'female'" data-testid="sex-female"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('ffmiRechner.sexFemale') }}</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ffmiRechner.weightLabel') }}</label>
        <input v-model.number="weight" type="number" step="0.1" min="0" placeholder="80" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-2">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ffmiRechner.heightLabel') }}</label>
        <input v-model.number="height" type="number" step="0.1" min="0" placeholder="180" data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ffmiRechner.bodyFatLabel') }}</label>
        <input v-model.number="bodyFat" type="number" step="0.1" min="0" max="99" placeholder="15" data-testid="bodyFat"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
    <p class="text-xs text-stone-400 leading-relaxed">{{ t('ffmiRechner.bodyFatHint') }}</p>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('ffmiRechner.resultsLabel') }}</p>

    <div class="flex items-baseline gap-3 mb-2">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="ffmi-result">{{ result.ffmi.toFixed(2) }}</span>
      <span class="text-lg text-stone-400">FFMI</span>
    </div>
    <p class="text-sm font-semibold mb-6" :class="categoryStyle.color" data-testid="result-status">
      {{ t('ffmiRechner.category_' + result.category) }}
    </p>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-500 via-green-500 via-blue-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: (categoryLevel / 4 * 100) + '%' }"></div>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="ffm-result">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ffmiRechner.ffmLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.ffm.toFixed(1) }} <span class="text-base text-stone-400 font-medium">kg</span></p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ffmiRechner.ffmiLabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.ffmi.toFixed(2) }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="normalized-ffmi">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ffmiRechner.normalizedFFMILabel') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.normalizedFFMI.toFixed(2) }}</p>
        <p class="text-xs text-stone-400 mt-1">{{ t('ffmiRechner.normalizedFFMIHint') }}</p>
      </div>
    </div>

    <div class="rounded-lg p-4 text-sm font-medium border" :class="categoryStyle.bg" data-testid="advice">
      {{ t('ffmiRechner.advice_' + result.category) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('ffmiRechner.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ffmiRechner.refRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ffmiRechner.refMale') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('ffmiRechner.refFemale') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ffmiRechner.category_belowAverage') }}</td>
          <td class="px-6 py-3 text-stone-600">&lt; 18</td>
          <td class="px-6 py-3 text-stone-600">&lt; 13</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ffmiRechner.category_average') }}</td>
          <td class="px-6 py-3 text-stone-600">18–20</td>
          <td class="px-6 py-3 text-stone-600">13–15</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ffmiRechner.category_aboveAverage') }}</td>
          <td class="px-6 py-3 text-stone-600">20–25</td>
          <td class="px-6 py-3 text-stone-600">15–19</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ffmiRechner.category_top1') }}</td>
          <td class="px-6 py-3 text-stone-600">25–28</td>
          <td class="px-6 py-3 text-stone-600">19–22</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('ffmiRechner.category_unlikelyNatural') }}</td>
          <td class="px-6 py-3 text-stone-600">&gt; 28</td>
          <td class="px-6 py-3 text-stone-600">&gt; 22</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('ffmiRechner.exampleTitle') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('ffmiRechner.exampleText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('ffmiRechner.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('ffmiRechner.howItWorksText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('ffmiRechner.uniqueContent') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('ffmiRechner.uniqueContentText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('ffmiRechner.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="ffmiRechner" />
</template>
