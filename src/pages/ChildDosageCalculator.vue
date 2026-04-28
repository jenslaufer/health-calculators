<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('childDosage.faq') || [])

useHead(() => ({
  title: t('childDosage.meta.title'),
  description: t('childDosage.meta.description'),
  routeKey: 'childDosage',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Child Dosage Calculator',
    url: 'https://healthcalculator.app/child-dosage-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const DRUGS = {
  paracetamol: {
    label: 'Paracetamol',
    singleMin: 10,
    singleMax: 15,
    singleDefault: 15,
    dailyMax: 60,
    absoluteDailyMaxMg: 4000,
    minWeightKg: 4,
    defaultConcentration: 24,
    intervalHours: 6,
  },
  ibuprofen: {
    label: 'Ibuprofen',
    singleMin: 7,
    singleMax: 10,
    singleDefault: 10,
    dailyMax: 30,
    absoluteDailyMaxMg: 2400,
    minWeightKg: 5,
    defaultConcentration: 20,
    intervalHours: 8,
  },
  amoxicillin: {
    label: 'Amoxicillin',
    singleMin: 7,
    singleMax: 15,
    singleDefault: 15,
    dailyMax: 90,
    absoluteDailyMaxMg: 4000,
    minWeightKg: 3,
    defaultConcentration: 50,
    intervalHours: 8,
  },
}

const weightKg = ref(null)
const drugKey = ref('paracetamol')
const mgPerKg = ref(15)
const concentration = ref(24)

const drug = computed(() => DRUGS[drugKey.value])

function selectDrug(key) {
  drugKey.value = key
  mgPerKg.value = DRUGS[key].singleDefault
  concentration.value = DRUGS[key].defaultConcentration
}

const singleDoseMg = computed(() => {
  if (!weightKg.value || weightKg.value <= 0 || !mgPerKg.value || mgPerKg.value <= 0) return null
  return weightKg.value * mgPerKg.value
})

const maxDailyMg = computed(() => {
  if (!weightKg.value || weightKg.value <= 0) return null
  return Math.min(weightKg.value * drug.value.dailyMax, drug.value.absoluteDailyMaxMg)
})

const singleDoseMl = computed(() => {
  if (!singleDoseMg.value || !concentration.value || concentration.value <= 0) return null
  return singleDoseMg.value / concentration.value
})

const maxDailyMl = computed(() => {
  if (!maxDailyMg.value || !concentration.value || concentration.value <= 0) return null
  return maxDailyMg.value / concentration.value
})

const dosesPerDay = computed(() => Math.floor(24 / drug.value.intervalHours))

const warnings = computed(() => {
  const w = []
  if (!weightKg.value || weightKg.value <= 0) return w
  if (weightKg.value < 3) w.push('weightTooLow')
  if (weightKg.value > 80) w.push('weightTooHigh')
  if (weightKg.value < drug.value.minWeightKg && weightKg.value >= 3) w.push('belowMinWeight')
  if (mgPerKg.value && mgPerKg.value > drug.value.singleMax) w.push('overdose')
  return w
})

const primaryWarning = computed(() => warnings.value[0] || null)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('childDosage.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('childDosage.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <!-- Drug selector -->
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childDosage.drugLabel') }}</label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(d, key) in DRUGS"
            :key="key"
            @click="selectDrug(key)"
            :data-testid="'drug-' + key"
            :class="drugKey === key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ d.label }}</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childDosage.weightLabel') }} (kg)
          </label>
          <input
            id="input-weight"
            v-model.number="weightKg"
            data-testid="input-weight"
            type="number"
            step="0.1"
            min="0"
            :placeholder="t('childDosage.weightPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <div>
          <label for="input-mg-per-kg" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childDosage.mgPerKgLabel') }}
          </label>
          <input
            id="input-mg-per-kg"
            v-model.number="mgPerKg"
            data-testid="input-mg-per-kg"
            type="number"
            step="0.5"
            min="0"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('childDosage.mgPerKgHint', { min: drug.singleMin, max: drug.singleMax }) }}</p>
        </div>

        <div>
          <label for="input-concentration" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childDosage.concentrationLabel') }} (mg/mL)
          </label>
          <input
            id="input-concentration"
            v-model.number="concentration"
            data-testid="input-concentration"
            type="number"
            step="1"
            min="0"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('childDosage.concentrationHint') }}</p>
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('childDosage.frequencyLabel') }}
          </label>
          <div class="px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 text-base font-medium" data-testid="frequency-display">
            {{ t('childDosage.everyHours', { h: drug.intervalHours }) }} · {{ dosesPerDay }} {{ t('childDosage.dosesPerDay') }}
          </div>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Warnings -->
    <div v-if="primaryWarning" class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
      <div class="flex items-start gap-3">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <div>
          <p class="text-sm font-semibold text-amber-700 mb-1" data-testid="result-warning">
            {{ t('childDosage.warnings.' + primaryWarning) }}
          </p>
          <p v-for="w in warnings.slice(1)" :key="w" class="text-sm text-amber-700">
            {{ t('childDosage.warnings.' + w) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div v-if="singleDoseMg !== null" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childDosage.resultSingleDose') }}</div>
          <div class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            <span data-testid="result-dose-mg">{{ singleDoseMg.toFixed(0) }} mg</span>
          </div>
          <div v-if="singleDoseMl !== null" class="text-base text-stone-500 mt-1 tabular-nums">
            ≈ <span data-testid="result-dose-ml">{{ singleDoseMl.toFixed(1) }} mL</span>
          </div>
        </div>

        <div v-if="maxDailyMg !== null">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childDosage.resultMaxDaily') }}</div>
          <div class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            <span data-testid="result-daily-mg">{{ maxDailyMg.toFixed(0) }} mg</span>
          </div>
          <div v-if="maxDailyMl !== null" class="text-base text-stone-500 mt-1 tabular-nums">
            ≈ <span data-testid="result-daily-ml">{{ maxDailyMl.toFixed(1) }} mL</span>
          </div>
        </div>
      </div>

      <div class="bg-stone-50 rounded-lg p-4 text-sm text-stone-600 leading-relaxed">
        <p>{{ t('childDosage.formulaText', { weight: weightKg, mgPerKg: mgPerKg, dose: singleDoseMg.toFixed(0) }) }}</p>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
      <p class="text-sm text-red-800 font-medium" data-testid="disclaimer">{{ t('childDosage.disclaimer') }}</p>
    </div>

    <!-- Reference table -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childDosage.tableDrug') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childDosage.tableSingle') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childDosage.tableDaily') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('childDosage.tableInterval') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="(d, key) in DRUGS" :key="key">
            <td class="px-6 py-3 text-stone-900 font-medium">{{ d.label }}</td>
            <td class="px-6 py-3 text-stone-600">{{ d.singleMin }}–{{ d.singleMax }} mg/kg</td>
            <td class="px-6 py-3 text-stone-600">{{ d.dailyMax }} mg/kg</td>
            <td class="px-6 py-3 text-stone-600">{{ t('childDosage.everyHours', { h: d.intervalHours }) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="childDosage" />
  </div>
</template>
