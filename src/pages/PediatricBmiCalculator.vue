<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  calcBmi,
  convertWeightToKg,
  convertHeightToCm,
  calcBmiPercentile,
  getCategory,
  categoryColor,
  categoryBg,
} from '../utils/pediatricBmi.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pediatricBmi.faq') || [])

useHead(() => ({
  title: t('pediatricBmi.meta.title'),
  description: t('pediatricBmi.meta.description'),
  routeKey: 'pediatricBmi',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pediatric BMI Calculator',
    url: 'https://healthcalculator.app/pediatric-bmi',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const sex = ref('male')
const age = ref(null)
const weight = ref(null)
const height = ref(null)
const unit = ref('metric')

const weightKg = computed(() => convertWeightToKg(weight.value, unit.value))
const heightCm = computed(() => convertHeightToCm(height.value, unit.value))
const bmi = computed(() => calcBmi(weightKg.value, heightCm.value))

const percentile = computed(() => {
  const a = Number(age.value)
  if (!Number.isFinite(a)) return null
  return calcBmiPercentile(bmi.value, a, sex.value)
})

const category = computed(() => getCategory(percentile.value))
const hasResult = computed(() => bmi.value !== null && percentile.value !== null)

const bmiFormatted = computed(() => bmi.value !== null ? bmi.value.toFixed(1) : '—')
const percentileFormatted = computed(() => percentile.value !== null ? percentile.value.toFixed(1) + '%' : '—')
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pediatricBmi.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('pediatricBmi.description') }}</p>
    </div>

    <!-- Inputs -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex gap-2 mb-6">
        <button
          @click="unit = 'metric'"
          :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          data-testid="unit-metric"
        >{{ t('pediatricBmi.metric') }}</button>
        <button
          @click="unit = 'imperial'"
          :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          data-testid="unit-imperial"
        >{{ t('pediatricBmi.imperial') }}</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBmi.sex') }}</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="sex" type="radio" value="male" data-testid="sex-male" class="accent-stone-800" />
              <span class="text-sm font-medium text-stone-700">{{ t('pediatricBmi.male') }}</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="sex" type="radio" value="female" data-testid="sex-female" class="accent-stone-800" />
              <span class="text-sm font-medium text-stone-700">{{ t('pediatricBmi.female') }}</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBmi.age') }}</label>
          <input
            v-model.number="age"
            type="number"
            min="2"
            max="20"
            step="0.1"
            placeholder="10"
            data-testid="age"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBmi.weight') }} ({{ unit === 'metric' ? 'kg' : 'lbs' }})</label>
          <input
            v-model.number="weight"
            type="number"
            min="1"
            step="0.1"
            :placeholder="unit === 'metric' ? '30' : '66'"
            data-testid="weight"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pediatricBmi.height') }} ({{ unit === 'metric' ? 'cm' : 'in' }})</label>
          <input
            v-model.number="height"
            type="number"
            min="20"
            step="0.1"
            :placeholder="unit === 'metric' ? '138' : '54'"
            data-testid="height"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', categoryBg(category)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pediatricBmi.resultsLabel') }}</p>

      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p class="text-xs text-stone-500 mb-1">{{ t('pediatricBmi.bmiLabel') }}</p>
          <p class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="result-bmi">{{ bmiFormatted }}</p>
        </div>
        <div>
          <p class="text-xs text-stone-500 mb-1">{{ t('pediatricBmi.percentileLabel') }}</p>
          <p :class="['text-4xl font-bold tabular-nums leading-none', categoryColor(category)]" data-testid="result-percentile">{{ percentileFormatted }}</p>
        </div>
      </div>

      <p :class="['text-xl font-semibold', categoryColor(category)]" data-testid="result-category">{{ t(`pediatricBmi.cat.${category}`) }}</p>
      <p class="text-sm text-stone-500 mt-1">{{ t(`pediatricBmi.catRange.${category}`) }}</p>
    </div>

    <!-- Categories reference -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('pediatricBmi.categories') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('pediatricBmi.cat.underweight') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pediatricBmi.catRange.underweight') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('pediatricBmi.cat.healthy') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pediatricBmi.catRange.healthy') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('pediatricBmi.cat.overweight') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pediatricBmi.catRange.overweight') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('pediatricBmi.cat.obesity') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pediatricBmi.catRange.obesity') }}</span>
        </div>
      </div>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('pediatricBmi.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="pediatricBmi" class="mt-8" />
    <BlogArticleLink calculator-key="pediatricBmi" />

    <AdSlot class="mt-8" />
  </div>
</template>
