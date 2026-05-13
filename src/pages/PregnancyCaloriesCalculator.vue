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
  pregnancyCalories,
  isPlausibleAge,
  isPlausibleWeightKg,
  isPlausibleHeightCm,
  lbToKg,
  inToCm,
} from '../utils/pregnancyCalories.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pregnancyCalories.faq') || [])

useHead(() => ({
  title: t('pregnancyCalories.meta.title'),
  description: t('pregnancyCalories.meta.description'),
  routeKey: 'pregnancyCalories',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pregnancy Calorie Needs Calculator',
    url: 'https://healthcalculator.app/en/pregnancy-calorie-needs-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const weight = ref(null)
const height = ref(null)
const activity = ref('low_active')
const trimester = ref(2)
const twins = ref(false)
const unit = ref('metric')

const weightKg = computed(() => {
  if (typeof weight.value !== 'number' || !Number.isFinite(weight.value)) return null
  return unit.value === 'imperial' ? lbToKg(weight.value) : weight.value
})

const heightCm = computed(() => {
  if (typeof height.value !== 'number' || !Number.isFinite(height.value)) return null
  return unit.value === 'imperial' ? inToCm(height.value) : height.value
})

const ageWarning = computed(() => {
  if (age.value === null || age.value === undefined || age.value === '') return false
  return !isPlausibleAge(age.value)
})

const weightWarning = computed(() => {
  if (weightKg.value === null) return false
  return !isPlausibleWeightKg(weightKg.value)
})

const heightWarning = computed(() => {
  if (heightCm.value === null) return false
  return !isPlausibleHeightCm(heightCm.value)
})

const result = computed(() => {
  if (ageWarning.value || weightWarning.value || heightWarning.value) return null
  return pregnancyCalories({
    age: age.value,
    weightKg: weightKg.value,
    heightCm: heightCm.value,
    activity: activity.value,
    trimester: trimester.value,
    twins: twins.value,
  })
})

const trimesterRows = [
  { trimester: 1, single: 0, twin: 0 },
  { trimester: 2, single: 340, twin: 640 },
  { trimester: 3, single: 452, twin: 752 },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pregnancyCalories.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('pregnancyCalories.description') }}</p>
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
            {{ t('pregnancyCalories.age') }}
          </label>
          <input
            id="input-age"
            v-model.number="age"
            data-testid="input-age"
            type="number"
            min="18"
            max="50"
            step="1"
            :placeholder="t('pregnancyCalories.agePlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('pregnancyCalories.ageHint') }}</p>
        </div>
        <div>
          <label for="input-activity" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('pregnancyCalories.activity') }}
          </label>
          <select
            id="input-activity"
            v-model="activity"
            data-testid="input-activity"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          >
            <option value="sedentary">{{ t('pregnancyCalories.activitySedentary') }}</option>
            <option value="low_active">{{ t('pregnancyCalories.activityLowActive') }}</option>
            <option value="active">{{ t('pregnancyCalories.activityActive') }}</option>
            <option value="very_active">{{ t('pregnancyCalories.activityVeryActive') }}</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ unit === 'metric' ? t('pregnancyCalories.weightKg') : t('pregnancyCalories.weightLb') }}
          </label>
          <input
            id="input-weight"
            v-model.number="weight"
            data-testid="input-weight"
            type="number"
            step="0.1"
            min="0"
            :placeholder="unit === 'metric' ? t('pregnancyCalories.weightPlaceholder') : t('pregnancyCalories.weightPlaceholderLb')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('pregnancyCalories.weightHint') }}</p>
        </div>
        <div>
          <label for="input-height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ unit === 'metric' ? t('pregnancyCalories.heightCm') : t('pregnancyCalories.heightIn') }}
          </label>
          <input
            id="input-height"
            v-model.number="height"
            data-testid="input-height"
            type="number"
            step="0.1"
            min="0"
            :placeholder="unit === 'metric' ? t('pregnancyCalories.heightPlaceholder') : t('pregnancyCalories.heightPlaceholderIn')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <div class="mb-5">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyCalories.trimester') }}
        </label>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="t1 in [1, 2, 3]"
            :key="t1"
            @click="trimester = t1"
            :data-testid="'trimester-' + t1"
            :class="trimester === t1 ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('pregnancyCalories.trimester' + t1) }}</button>
        </div>
      </div>

      <div class="mb-2">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            v-model="twins"
            type="checkbox"
            data-testid="input-twins"
            class="mt-1 h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-600"
          />
          <span>
            <span class="block text-sm font-medium text-stone-900">{{ t('pregnancyCalories.twins') }}</span>
            <span class="block text-xs text-stone-400 mt-0.5">{{ t('pregnancyCalories.twinsHint') }}</span>
          </span>
        </label>
      </div>

      <div v-if="ageWarning" data-testid="warning-age" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">&#9888;</span>
        <p class="text-sm text-amber-700">{{ t('pregnancyCalories.implausibleAge') }}</p>
      </div>
      <div v-if="weightWarning" data-testid="warning-weight" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">&#9888;</span>
        <p class="text-sm text-amber-700">{{ t('pregnancyCalories.implausibleWeight') }}</p>
      </div>
      <div v-if="heightWarning" data-testid="warning-height" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">&#9888;</span>
        <p class="text-sm text-amber-700">{{ t('pregnancyCalories.implausibleHeight') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pregnancyCalories.result') }}</div>
      <div data-testid="result-kcal" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight mb-6">
        {{ result.dailyKcal }}
        <span class="text-base font-normal text-stone-500 ml-1">{{ t('pregnancyCalories.kcalPerDay') }}</span>
      </div>

      <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('pregnancyCalories.breakdown') }}</div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-stone-50 rounded-lg p-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pregnancyCalories.prePregnancy') }}</p>
          <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="result-pre">{{ result.prePregnancyKcal }} kcal</p>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pregnancyCalories.addition') }}</p>
          <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="result-addition">+{{ result.addition }} kcal</p>
        </div>
      </div>
    </div>

    <!-- Reference table -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <div class="px-6 pt-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-1">{{ t('pregnancyCalories.table') }}</h2>
        <p class="text-xs text-stone-400 mb-4">{{ t('pregnancyCalories.tableNote') }}</p>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pregnancyCalories.trimesterCol') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pregnancyCalories.extraCol') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="row in trimesterRows" :key="row.trimester">
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('pregnancyCalories.trimester' + row.trimester) }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">
              <span v-if="row.single === 0">{{ t('pregnancyCalories.noExtra') }}</span>
              <span v-else>+{{ row.single }} kcal</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pregnancyCalories.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('pregnancyCalories.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('pregnancyCalories.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="pregnancyCalories" />
  </div>
</template>
