<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { babyFeedingAmount } from '../utils/babyFeedingAmount.js'

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

const weightPlaceholder = computed(() => unit.value === 'imperial' ? '11' : '5')
const weightUnitLabel = computed(() => unit.value === 'imperial' ? 'lbs' : 'kg')

const result = computed(() => babyFeedingAmount({
  ageMonths: ageMonths.value,
  weight: weight.value,
  unit: unit.value,
}))

function fmt(v, dec = 0) {
  if (v === null || v === undefined) return ''
  return v.toFixed(dec)
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

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
        <div>
          <label for="input-age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('babyFeedingAmount.ageLabel') }}
          </label>
          <input
            id="input-age"
            v-model.number="ageMonths"
            data-testid="input-age"
            type="number"
            step="1"
            min="0"
            max="24"
            placeholder="3"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('babyFeedingAmount.ageHint') }}</p>
        </div>
        <div>
          <label for="input-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('babyFeedingAmount.weightLabel') }} ({{ weightUnitLabel }})
          </label>
          <input
            id="input-weight"
            v-model.number="weight"
            data-testid="input-weight"
            type="number"
            step="0.1"
            min="0"
            :placeholder="weightPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('babyFeedingAmount.weightHint') }}</p>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" data-testid="result-card" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span data-testid="result-stage" class="bg-stone-900 text-white text-sm font-semibold px-3 py-1 rounded-full">
          {{ t('babyFeedingAmount.stage.' + result.stage) }}
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.dailyTotal') }}</div>
          <div data-testid="result-daily-ml" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmt(result.dailyMl) }}
            <span class="text-base font-normal text-stone-500">ml</span>
          </div>
          <div class="text-sm text-stone-500 tabular-nums mt-1">≈ {{ fmt(result.dailyOz, 1) }} oz</div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.perFeeding') }}</div>
          <div data-testid="result-per-feeding-ml" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ fmt(result.perFeedingMl) }}
            <span class="text-base font-normal text-stone-500">ml</span>
          </div>
          <div class="text-sm text-stone-500 tabular-nums mt-1">≈ {{ fmt(result.perFeedingOz, 1) }} oz · {{ result.feedings }} {{ t('babyFeedingAmount.feedingsPerDay') }}</div>
        </div>
      </div>

      <div class="bg-stone-50 rounded-lg px-4 py-3">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyFeedingAmount.formula') }}</div>
        <p class="text-sm text-stone-700 tabular-nums">
          {{ fmt(result.weightKg, 1) }} kg × {{ result.mlPerKg }} ml/kg = {{ fmt(result.dailyMl) }} ml/{{ t('babyFeedingAmount.day') }}
        </p>
      </div>
    </div>

    <!-- Reference table -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.tableAge') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.tableMlPerKg') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('babyFeedingAmount.tableFeedings') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">0–1 {{ t('babyFeedingAmount.months') }}</td>
            <td class="px-6 py-3 text-stone-600">~150 ml/kg</td>
            <td class="px-6 py-3 text-stone-600">7–8</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">2–5 {{ t('babyFeedingAmount.months') }}</td>
            <td class="px-6 py-3 text-stone-600">~150 ml/kg</td>
            <td class="px-6 py-3 text-stone-600">6</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">6–11 {{ t('babyFeedingAmount.months') }}</td>
            <td class="px-6 py-3 text-stone-600">~120 ml/kg</td>
            <td class="px-6 py-3 text-stone-600">5</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium">12+ {{ t('babyFeedingAmount.months') }}</td>
            <td class="px-6 py-3 text-stone-600">~90 ml/kg</td>
            <td class="px-6 py-3 text-stone-600">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('babyFeedingAmount.disclaimer') }}</p>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('babyFeedingAmount.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('babyFeedingAmount.howItWorksText') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="babyFeedingAmount" />
  </div>
</template>
