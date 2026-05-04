<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { estimateBac, timeUntilSober, classifyImpairment } from '../utils/bloodAlcoholEstimator.js'

const { t, tm, locale } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('bloodAlcoholEstimator.faq') || [])

useHead(() => ({
  title: t('bloodAlcoholEstimator.meta.title'),
  description: t('bloodAlcoholEstimator.meta.description'),
  routeKey: 'bloodAlcoholEstimator',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blood Alcohol Estimator',
    url: 'https://healthcalculator.app/blood-alcohol-estimator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const unit = ref('metric')
const weight = ref(null)
const drinks = ref(null)
const hours = ref(null)

const weightKg = computed(() => {
  if (weight.value == null) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const result = computed(() => {
  if (drinks.value == null || weightKg.value == null) return null
  const bac = estimateBac({
    standardDrinks: drinks.value,
    weightKg: weightKg.value,
    sex: sex.value,
    hours: hours.value || 0,
  })
  if (bac === null) return null
  return {
    bac,
    promille: bac * 10,
    alcoholGrams: drinks.value * 14,
    timeHours: timeUntilSober(bac),
    impairment: classifyImpairment(bac),
  }
})

const timeFormatted = computed(() => {
  if (!result.value) return null
  const totalMin = Math.ceil(result.value.timeHours * 60)
  return { hours: Math.floor(totalMin / 60), minutes: totalMin % 60 }
})

const impairmentColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.impairment) {
    case 'sober': return 'text-green-600'
    case 'minimal': return 'text-green-500'
    case 'mild': return 'text-yellow-500'
    case 'legal': return 'text-orange-500'
    case 'significant': return 'text-red-500'
    case 'dangerous': return 'text-red-700'
    default: return 'text-stone-500'
  }
})

const scalePosition = computed(() => {
  if (!result.value) return 0
  return Math.min(result.value.bac / 0.4 * 100, 100)
})

const effectsRows = [
  { range: '0.00', key: 'sober' },
  { range: '0.01–0.029', key: 'minimal' },
  { range: '0.03–0.079', key: 'mild' },
  { range: '0.08–0.149', key: 'legal' },
  { range: '0.15–0.299', key: 'significant' },
  { range: '> 0.30', key: 'dangerous' },
]
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bloodAlcoholEstimator.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('bloodAlcoholEstimator.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodAlcoholEstimator.instructionsLabel') }}</p>
    <p class="text-sm text-stone-600 leading-relaxed mb-6">{{ t('bloodAlcoholEstimator.instructions') }}</p>

    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        data-testid="unit-metric"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.metric') }}</button>
      <button
        @click="unit = 'imperial'"
        data-testid="unit-imperial"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodAlcoholEstimator.sexLabel') }}</label>
        <div class="flex gap-2">
          <button
            @click="sex = 'male'"
            data-testid="sex-male"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button
            @click="sex = 'female'"
            data-testid="sex-female"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('bloodAlcoholEstimator.weightLabel', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input
          v-model.number="weight"
          type="number"
          :placeholder="unit === 'metric' ? '80' : '180'"
          data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodAlcoholEstimator.drinksLabel') }}</label>
        <input
          v-model.number="drinks"
          type="number"
          step="0.5"
          min="0"
          :placeholder="t('bloodAlcoholEstimator.drinksPlaceholder')"
          data-testid="drinks"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
        <p class="text-xs text-stone-400 mt-1.5">{{ t('bloodAlcoholEstimator.drinksHelp') }}</p>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodAlcoholEstimator.hoursLabel') }}</label>
        <input
          v-model.number="hours"
          type="number"
          step="0.5"
          min="0"
          :placeholder="t('bloodAlcoholEstimator.hoursPlaceholder')"
          data-testid="hours"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('bloodAlcoholEstimator.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="bac-result">{{ result.bac.toFixed(3) }}</span>
      <span class="text-lg text-stone-400">% {{ t('bloodAlcoholEstimator.bacLabel') }}</span>
      <span :class="impairmentColor" class="text-base font-semibold ml-auto" data-testid="result-status">{{ t('bloodAlcoholEstimator.impairment_' + result.impairment) }}</span>
    </div>

    <div class="text-sm text-stone-500 mb-6 tabular-nums">
      <span data-testid="promille-result">{{ result.promille.toFixed(2) }}</span> ‰ {{ t('bloodAlcoholEstimator.promilleLabel') }}
    </div>

    <div class="mb-2">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bloodAlcoholEstimator.scaleLabel') }}</p>
      <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
        <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: scalePosition + '%' }"></div>
      </div>
      <div class="flex justify-between text-[10px] text-stone-400 tabular-nums mt-1">
        <span>0.00</span>
        <span>0.08</span>
        <span>0.20</span>
        <span>≥ 0.40</span>
      </div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4 mt-6 mb-3" data-testid="legal-limit">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bloodAlcoholEstimator.legalLimitLabel') }}</p>
      <p class="text-sm font-medium leading-relaxed">
        <span :class="result.bac < 0.08 ? 'text-green-600' : 'text-red-600'">
          {{ result.bac < 0.08 ? t('bloodAlcoholEstimator.belowUsLimit') : t('bloodAlcoholEstimator.aboveUsLimit') }}
        </span>
        <br />
        <span :class="result.bac < 0.05 ? 'text-green-600' : 'text-red-600'">
          {{ result.bac < 0.05 ? t('bloodAlcoholEstimator.belowDeLimit') : t('bloodAlcoholEstimator.aboveDeLimit') }}
        </span>
      </p>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="bg-stone-50 rounded-lg p-4" data-testid="time-until-sober">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bloodAlcoholEstimator.timeUntilSoberLabel') }}</p>
        <p class="text-xl font-bold text-stone-900 tabular-nums leading-tight">
          <span v-if="result.timeHours === 0">{{ t('bloodAlcoholEstimator.alreadySober') }}</span>
          <span v-else>{{ t('bloodAlcoholEstimator.hoursMinutes', { hours: timeFormatted.hours, minutes: timeFormatted.minutes }) }}</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4" data-testid="alcohol-grams">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bloodAlcoholEstimator.alcoholGramsLabel') }}</p>
        <p class="text-xl font-bold text-stone-900 tabular-nums leading-tight">{{ result.alcoholGrams.toFixed(0) }} g</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('bloodAlcoholEstimator.effectsTableTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bloodAlcoholEstimator.bacRangeHeader') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bloodAlcoholEstimator.effectHeader') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="row in effectsRows" :key="row.key">
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">{{ row.range }}</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bloodAlcoholEstimator.effect_' + row.key) }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('bloodAlcoholEstimator.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('bloodAlcoholEstimator.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('bloodAlcoholEstimator.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="bloodAlcoholEstimator" />
</template>
