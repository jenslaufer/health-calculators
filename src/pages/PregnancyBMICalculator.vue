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
import {
  calcBmi,
  getBmiCategory,
  getRecommendedGain,
  lbsToKg,
  inchesToCm,
} from '../utils/pregnancyBMI.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()
const faqItems = computed(() => tm('pregnancyBMI.faq') || [])

useHead(() => ({
  title: t('pregnancyBMI.meta.title'),
  description: t('pregnancyBMI.meta.description'),
  routeKey: 'pregnancyBMI',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pregnancy BMI Calculator',
    url: 'https://healthcalculator.app/pregnancy-bmi-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const weight = ref(null)
const height = ref(null)
const twins = ref(false)

const weightKg = computed(() =>
  unit.value === 'imperial' ? lbsToKg(weight.value) : weight.value
)
const heightCm = computed(() =>
  unit.value === 'imperial' ? inchesToCm(height.value) : height.value
)

const bmi = computed(() => calcBmi(weightKg.value, heightCm.value))
const category = computed(() => getBmiCategory(bmi.value))
const gain = computed(() => getRecommendedGain(category.value, twins.value))

const categoryColor = computed(() => {
  switch (category.value) {
    case 'underweight': return 'text-blue-600'
    case 'normal': return 'text-emerald-600'
    case 'overweight': return 'text-yellow-600'
    case 'obese': return 'text-red-600'
    default: return 'text-stone-600'
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pregnancyBMI.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pregnancyBMI.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        data-testid="unit-metric"
      >{{ t('common.metric') }}</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        data-testid="unit-imperial"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyBMI.weight') }} ({{ unit === 'metric' ? 'kg' : 'lbs' }})
        </label>
        <input
          v-model.number="weight"
          type="number"
          :placeholder="unit === 'metric' ? '65' : '143'"
          min="20"
          max="300"
          data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyBMI.height') }} ({{ unit === 'metric' ? 'cm' : 'in' }})
        </label>
        <input
          v-model.number="height"
          type="number"
          :placeholder="unit === 'metric' ? '170' : '67'"
          min="50"
          max="250"
          data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('pregnancyBMI.pregnancyType') }}
      </label>
      <div class="flex gap-2">
        <button
          @click="twins = false"
          :class="!twins ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          data-testid="btn-singleton"
        >{{ t('pregnancyBMI.singleton') }}</button>
        <button
          @click="twins = true"
          :class="twins ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          data-testid="btn-twins"
        >{{ t('pregnancyBMI.twins') }}</button>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="bmi !== null" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="bmi-result">{{ bmi.toFixed(1) }}</span>
      <span class="text-lg text-stone-400">BMI</span>
      <span v-if="category" :class="categoryColor" class="text-lg font-semibold" data-testid="bmi-category">
        {{ t('pregnancyBMI.' + category) }}
      </span>
    </div>

    <p v-if="category" class="text-sm text-stone-600 leading-relaxed mb-6" data-testid="category-description">
      {{ t('pregnancyBMI.' + category + 'Desc') }}
    </p>

    <div v-if="gain" class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pregnancyBMI.recommendedGain') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="gain-range">
          {{ gain.min }}–{{ gain.max }} <span class="text-sm text-stone-400">kg</span>
        </p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pregnancyBMI.totalGain') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">
          {{ ((gain.min + gain.max) / 2).toFixed(1) }} <span class="text-sm text-stone-400">kg</span>
        </p>
      </div>
    </div>

    <p class="text-xs text-stone-400">{{ t('pregnancyBMI.source') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pregnancyBMI.rangeBmi') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pregnancyBMI.rangeCategory') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pregnancyBMI.rangeGain') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 18.5</td>
          <td class="px-6 py-3 text-blue-700 font-medium">{{ t('pregnancyBMI.underweight') }}</td>
          <td class="px-6 py-3 text-stone-700 tabular-nums">12.5–18 kg</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">18.5–24.9</td>
          <td class="px-6 py-3 text-emerald-700 font-medium">{{ t('pregnancyBMI.normal') }}</td>
          <td class="px-6 py-3 text-stone-700 tabular-nums">11.5–16 kg</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25–29.9</td>
          <td class="px-6 py-3 text-yellow-700 font-medium">{{ t('pregnancyBMI.overweight') }}</td>
          <td class="px-6 py-3 text-stone-700 tabular-nums">7–11.5 kg</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 30</td>
          <td class="px-6 py-3 text-red-700 font-medium">{{ t('pregnancyBMI.obese') }}</td>
          <td class="px-6 py-3 text-stone-700 tabular-nums">5–9 kg</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap gap-3 mb-6 text-sm">
    <router-link :to="localePath('pregnancyWeightGain')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('pregnancyBMI.linkPregnancyWeightGain') }}
    </router-link>
    <span class="text-stone-300">&middot;</span>
    <router-link :to="localePath('bmi')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('pregnancyBMI.linkBmi') }}
    </router-link>
    <span class="text-stone-300">&middot;</span>
    <router-link :to="localePath('pregnancy')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('pregnancyBMI.linkPregnancy') }}
    </router-link>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pregnancyBMI.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('pregnancyBMI.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="pregnancyBMI" class="mt-8" />
  <BlogArticleLink calculator-key="pregnancyBMI" />
</template>
