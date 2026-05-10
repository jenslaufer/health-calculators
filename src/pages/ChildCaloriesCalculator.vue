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
  childCalories,
  isPlausibleAge,
  isPlausibleWeightKg,
  isPlausibleHeightCm,
  lbToKg,
  inToCm,
  ACTIVITY_LEVELS,
} from '../utils/childCalories.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('childCalories.faq') || [])

useHead(() => ({
  title: t('childCalories.meta.title'),
  description: t('childCalories.meta.description'),
  routeKey: 'childCalories',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Child Calorie Needs Calculator',
    url: 'https://healthcalculator.app/en/child-calorie-needs-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const sex = ref('boy')
const weight = ref(null)
const height = ref(null)
const activity = ref('low_active')
const unit = ref('metric')

const weightKg = computed(() => {
  if (typeof weight.value !== 'number' || !Number.isFinite(weight.value)) return null
  return unit.value === 'imperial' ? lbToKg(weight.value) : weight.value
})

const heightCm = computed(() => {
  if (typeof height.value !== 'number' || !Number.isFinite(height.value)) return null
  return unit.value === 'imperial' ? inToCm(height.value) : height.value
})

const isToddler = computed(() => typeof age.value === 'number' && age.value >= 1 && age.value < 3)

const ageWarning = computed(() => {
  if (age.value === null || age.value === undefined || age.value === '') return false
  return !isPlausibleAge(age.value)
})

const weightWarning = computed(() => {
  if (isToddler.value) return false
  if (weightKg.value === null) return false
  return !isPlausibleWeightKg(weightKg.value)
})

const heightWarning = computed(() => {
  if (isToddler.value) return false
  if (heightCm.value === null) return false
  return !isPlausibleHeightCm(heightCm.value)
})

const result = computed(() => {
  if (ageWarning.value || weightWarning.value || heightWarning.value) return null
  if (!isPlausibleAge(age.value)) return null
  if (isToddler.value) {
    return childCalories({ age: age.value, sex: sex.value, activity: activity.value, weightKg: 10, heightCm: 80 })
  }
  if (weightKg.value === null || heightCm.value === null) return null
  return childCalories({
    age: age.value,
    sex: sex.value,
    weightKg: weightKg.value,
    heightCm: heightCm.value,
    activity: activity.value,
  })
})

const refRows = [
  { range: 'row1to3', boy: 1100, girl: 1050 },
  { range: 'row4to8', boy: 1500, girl: 1400 },
  { range: 'row9to13', boy: 2000, girl: 1800 },
  { range: 'row14to18', boy: 2700, girl: 2100 },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('childCalories.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('childCalories.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <!-- Unit toggle -->
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

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childCalories.age') }}
          </label>
          <input
            id="input-age"
            v-model.number="age"
            data-testid="input-age"
            type="number"
            min="1"
            max="18"
            step="1"
            :placeholder="t('childCalories.agePlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('childCalories.ageHint') }}</p>
        </div>
        <div>
          <label for="input-sex" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childCalories.sex') }}
          </label>
          <select
            id="input-sex"
            v-model="sex"
            data-testid="input-sex"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          >
            <option value="boy">{{ t('childCalories.sexBoy') }}</option>
            <option value="girl">{{ t('childCalories.sexGirl') }}</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ unit === 'metric' ? t('childCalories.weightKg') : t('childCalories.weightLb') }}
          </label>
          <input
            id="input-weight"
            v-model.number="weight"
            data-testid="input-weight"
            type="number"
            step="0.1"
            min="0"
            :disabled="isToddler"
            :placeholder="unit === 'metric' ? t('childCalories.weightPlaceholder') : t('childCalories.weightPlaceholderLb')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150 disabled:bg-stone-100 disabled:text-stone-400"
          />
        </div>
        <div>
          <label for="input-height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ unit === 'metric' ? t('childCalories.heightCm') : t('childCalories.heightIn') }}
          </label>
          <input
            id="input-height"
            v-model.number="height"
            data-testid="input-height"
            type="number"
            step="0.1"
            min="0"
            :disabled="isToddler"
            :placeholder="unit === 'metric' ? t('childCalories.heightPlaceholder') : t('childCalories.heightPlaceholderIn')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150 disabled:bg-stone-100 disabled:text-stone-400"
          />
        </div>
      </div>

      <div>
        <label for="input-activity" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('childCalories.activity') }}
        </label>
        <select
          id="input-activity"
          v-model="activity"
          data-testid="input-activity"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option value="sedentary">{{ t('childCalories.activitySedentary') }}</option>
          <option value="low_active">{{ t('childCalories.activityLowActive') }}</option>
          <option value="active">{{ t('childCalories.activityActive') }}</option>
          <option value="very_active">{{ t('childCalories.activityVeryActive') }}</option>
        </select>
      </div>

      <div v-if="ageWarning" data-testid="warning-age" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('childCalories.implausibleAge') }}</p>
      </div>
      <div v-if="weightWarning" data-testid="warning-weight" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('childCalories.implausibleWeight') }}</p>
      </div>
      <div v-if="heightWarning" data-testid="warning-height" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('childCalories.implausibleHeight') }}</p>
      </div>
      <div v-if="isToddler" data-testid="note-toddler" class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mt-4">
        <p class="text-sm text-stone-600">{{ t('childCalories.toddlerNote') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childCalories.result') }}</div>
      <div data-testid="result-kcal" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight">
        {{ result.dailyKcal }}
        <span class="text-base font-normal text-stone-500 ml-1">{{ t('childCalories.kcalPerDay') }}</span>
      </div>
    </div>

    <!-- Reference table -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <div class="px-6 pt-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-1">{{ t('childCalories.table') }}</h2>
        <p class="text-xs text-stone-400 mb-4">{{ t('childCalories.tableNote') }}</p>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childCalories.ageRange') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childCalories.boy') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childCalories.girl') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="row in refRows" :key="row.range">
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('childCalories.' + row.range) }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.boy }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ row.girl }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('childCalories.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('childCalories.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('childCalories.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="childCalories" />
  </div>
</template>
