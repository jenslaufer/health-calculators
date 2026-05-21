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
  babyFeedingAmount,
  isPlausibleAge,
  isPlausibleWeightKg,
  lbToKg,
  mlToOz,
  DAILY_CAP_ML,
} from '../utils/babyFeedingAmount.js'
import RelatedCalculators from '../components/RelatedCalculators.vue'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('babyFeedingAmount.faq') || [])

useHead(() => ({
  title: t('babyFeedingAmount.meta.title'),
  description: t('babyFeedingAmount.meta.description'),
  routeKey: 'babyFeedingAmount',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Baby Feeding Amount Calculator',
    url: 'https://healthcalculator.app/baby-feeding-amount-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const ageMonths = ref(null)
const weight = ref(null)
const unit = ref('metric')

const weightKg = computed(() => {
  if (typeof weight.value !== 'number' || !Number.isFinite(weight.value)) return null
  return unit.value === 'imperial' ? lbToKg(weight.value) : weight.value
})

const ageWarning = computed(() => {
  if (ageMonths.value === null || ageMonths.value === undefined || ageMonths.value === '') return false
  return !isPlausibleAge(ageMonths.value)
})

const weightWarning = computed(() => {
  if (weightKg.value === null) return false
  return !isPlausibleWeightKg(weightKg.value)
})

const result = computed(() => {
  if (ageWarning.value || weightWarning.value) return null
  if (weightKg.value === null || ageMonths.value === null) return null
  return babyFeedingAmount({ weightKg: weightKg.value, ageMonths: ageMonths.value })
})

const isCapped = computed(() => result.value && result.value.dailyMl >= DAILY_CAP_ML)

const ref0to1 = computed(() => ({ feedings: 8, perKg: 150 }))
const ref1to3 = computed(() => ({ feedings: 7, perKg: 150 }))
const ref3to5 = computed(() => ({ feedings: 6, perKg: 150 }))
const ref5to6 = computed(() => ({ feedings: 5, perKg: 150 }))
const ref6to9 = computed(() => ({ feedings: 4, perKg: 120 }))
const ref9to12 = computed(() => ({ feedings: 3, perKg: 120 }))

function fmt(v, decimals = 0) {
  if (v === null || v === undefined) return ''
  return v.toFixed(decimals)
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('babyFeedingAmount.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('babyFeedingAmount.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <!-- Unit toggle (weight only) -->
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

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label for="input-age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('babyFeedingAmount.ageMonths') }}
          </label>
          <input
            id="input-age"
            v-model.number="ageMonths"
            data-testid="input-age"
            type="number"
            min="0"
            max="24"
            step="1"
            :placeholder="t('babyFeedingAmount.ageMonthsPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('babyFeedingAmount.ageMonthsHint') }}</p>
        </div>
        <div>
          <label for="input-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ unit === 'metric' ? t('babyFeedingAmount.weightKg') : t('babyFeedingAmount.weightLb') }}
          </label>
          <input
            id="input-weight"
            v-model.number="weight"
            data-testid="input-weight"
            type="number"
            step="0.1"
            min="0"
            :placeholder="unit === 'metric' ? t('babyFeedingAmount.weightPlaceholder') : t('babyFeedingAmount.weightPlaceholderLb')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <div v-if="ageWarning" data-testid="warning-age" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('babyFeedingAmount.implausibleAge') }}</p>
      </div>
      <div v-if="weightWarning" data-testid="warning-weight" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-4">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('babyFeedingAmount.implausibleWeight') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.dailyAmount') }}</div>
          <div data-testid="result-daily-ml" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmt(result.dailyMl) }}
            <span class="text-base font-normal text-stone-500">ml</span>
          </div>
          <div data-testid="result-daily-oz" class="text-sm text-stone-500 tabular-nums mt-1">≈ {{ fmt(result.dailyOz, 1) }} oz</div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.perFeeding') }}</div>
          <div data-testid="result-per-feeding-ml" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmt(result.perFeedingMl) }}
            <span class="text-base font-normal text-stone-500">ml</span>
          </div>
          <div data-testid="result-per-feeding-oz" class="text-sm text-stone-500 tabular-nums mt-1">≈ {{ fmt(result.perFeedingOz, 1) }} oz</div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.feedingsPerDay') }}</div>
          <div data-testid="result-feedings" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ result.feedings }}
          </div>
          <div class="text-sm text-stone-500 mt-1">{{ t('babyFeedingAmount.perDay') }}</div>
        </div>
      </div>

      <div v-if="isCapped" data-testid="note-capped" class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mt-4">
        <p class="text-sm text-stone-600">{{ t('babyFeedingAmount.noteCapped') }}</p>
      </div>
    </div>

    <!-- Reference table -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <div class="px-6 pt-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('babyFeedingAmount.table') }}</h2>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.ageRange') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.feedings') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.amountPerKg') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row0to1') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref0to1.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref0to1.perKg }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row1to3') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref1to3.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref1to3.perKg }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row3to5') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref3to5.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref3to5.perKg }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row5to6') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref5to6.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref5to6.perKg }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row6to9') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref6to9.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref6to9.perKg }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">{{ t('babyFeedingAmount.row9to12') }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref9to12.feedings }}</td>
            <td class="px-6 py-3 text-stone-600 tabular-nums">{{ ref9to12.perKg }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('babyFeedingAmount.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('babyFeedingAmount.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('babyFeedingAmount.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <RelatedCalculators calc-key="babyFeedingAmount" class="mt-8" />

    <BlogArticleLink calculator-key="babyFeedingAmount" />
  </div>
</template>
