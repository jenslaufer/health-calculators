<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { computeStepsResult } from '../utils/schritteKalorienRechner.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('schritteKalorienRechner.faq') || [])

useHead(() => ({
  title: t('schritteKalorienRechner.meta.title'),
  description: t('schritteKalorienRechner.meta.description'),
  routeKey: 'schritteKalorienRechner',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Steps to Calories Calculator',
      url: 'https://healthcalculator.app/de/schritte-kalorien-rechner',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://healthcalculator.app/de/' },
        { '@type': 'ListItem', position: 2, name: 'Schritte-Kalorien-Rechner', item: 'https://healthcalculator.app/de/schritte-kalorien-rechner/' },
      ],
    },
  ],
}))

const steps = ref(null)
const weight = ref(null)
const stride = ref(null)
const height = ref(null)

const result = computed(() =>
  computeStepsResult({
    steps: steps.value,
    weightKg: weight.value,
    strideCm: stride.value,
    heightCm: height.value,
  })
)

const activityColor = computed(() => {
  if (!result.value) return null
  const map = {
    sedentary: { bg: 'bg-red-500', text: 'text-red-600' },
    low: { bg: 'bg-orange-500', text: 'text-orange-600' },
    moderate: { bg: 'bg-yellow-500', text: 'text-yellow-600' },
    active: { bg: 'bg-green-500', text: 'text-green-600' },
    veryActive: { bg: 'bg-emerald-600', text: 'text-emerald-700' },
  }
  return map[result.value.activityLevel]
})

const referenceRows = [
  { steps: 5000, km: 3.75, kcal: 200 },
  { steps: 7500, km: 5.63, kcal: 300 },
  { steps: 10000, km: 7.5, kcal: 400 },
  { steps: 12500, km: 9.38, kcal: 500 },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('schritteKalorienRechner.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('schritteKalorienRechner.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.stepsLabel') }}</label>
          <input v-model.number="steps" type="number" :placeholder="t('schritteKalorienRechner.stepsPlaceholder')" data-testid="steps"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.weightLabel') }}</label>
          <input v-model.number="weight" type="number" :placeholder="t('schritteKalorienRechner.weightPlaceholder')" data-testid="weight"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.strideLabel') }}</label>
          <input v-model.number="stride" type="number" :placeholder="t('schritteKalorienRechner.stridePlaceholder')" data-testid="stride"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
          <p class="text-xs text-stone-400 mt-2">{{ t('schritteKalorienRechner.strideHint') }}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('schritteKalorienRechner.heightLabel') }}</label>
          <input v-model.number="height" type="number" :placeholder="t('schritteKalorienRechner.heightPlaceholder')" data-testid="height"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[activityColor.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('schritteKalorienRechner.activity.' + result.activityLevel) }}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-stone-50 rounded-lg p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('schritteKalorienRechner.kcalLabel') }}</p>
          <p class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">
            <span data-testid="kcal-result">{{ Math.round(result.kcal) }}</span>
            <span class="text-base text-stone-400 ml-2 font-normal">kcal</span>
          </p>
        </div>
        <div class="bg-stone-50 rounded-lg p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('schritteKalorienRechner.kmLabel') }}</p>
          <p class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">
            <span data-testid="km-result">{{ result.km.toFixed(2) }}</span>
            <span class="text-base text-stone-400 ml-2 font-normal">km</span>
          </p>
        </div>
      </div>

      <div class="border border-stone-200 rounded-lg px-4 py-3 bg-stone-50">
        <p data-testid="activity-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('schritteKalorienRechner.activityHints.' + result.activityLevel) }}</p>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('schritteKalorienRechner.incompleteHint') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
        <h2 class="text-sm font-semibold text-stone-700">{{ t('schritteKalorienRechner.referenceTable') }}</h2>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.stepsHeader') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.kmHeader') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('schritteKalorienRechner.kcalHeader') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="row in referenceRows" :key="row.steps">
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">{{ row.steps.toLocaleString() }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.km.toFixed(2) }} km</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.kcal }} kcal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-2">{{ t('schritteKalorienRechner.exampleTitle') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('schritteKalorienRechner.exampleText') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('schritteKalorienRechner.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('schritteKalorienRechner.howItWorksText') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('schritteKalorienRechner.disclaimer') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('schritteKalorienRechner.relatedTitle') }}</h2>
      <ul class="space-y-2 text-sm">
        <li><router-link :to="localePath('runningPace')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Lauftempo-Rechner</router-link></li>
        <li><router-link :to="localePath('caloriesBurned')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Kalorienverbrauch-Rechner</router-link></li>
        <li><router-link :to="localePath('tdee')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">TDEE-Rechner</router-link></li>
        <li><router-link :to="localePath('bmr')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Grundumsatz-Rechner</router-link></li>
      </ul>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <RelatedCalculators calc-key="schritteKalorienRechner" class="mt-8" />
    <BlogArticleLink calculator-key="schritteKalorienRechner" />
  </div>
</template>
