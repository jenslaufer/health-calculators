<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('oneRepMax.meta.title'),
  description: t('oneRepMax.meta.description'),
  routeKey: 'oneRepMax',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'One Rep Max (1RM) Calculator',
    url: 'https://healthcalculator.app/one-rep-max-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const weightLifted = ref(null)
const reps = ref(null)
const unit = ref('kg')
const selectedFormula = ref('epley')

const weightInKg = computed(() => {
  if (!weightLifted.value) return null
  return unit.value === 'lbs' ? weightLifted.value * 0.453592 : weightLifted.value
})

function epley(w, r) {
  if (r === 1) return w
  return w * (1 + r / 30)
}

function brzycki(w, r) {
  if (r === 1) return w
  return w * (36 / (37 - r))
}

function lombardi(w, r) {
  return w * Math.pow(r, 0.10)
}

function oconner(w, r) {
  return w * (1 + r * 0.025)
}

const formulas = { epley, brzycki, lombardi, oconner }

const estimated1RM = computed(() => {
  if (!weightInKg.value || !reps.value || reps.value < 1) return null
  const fn = formulas[selectedFormula.value]
  const result = fn(weightInKg.value, reps.value)
  return Math.round(unit.value === 'lbs' ? result / 0.453592 : result)
})

const formulaResults = computed(() => {
  if (!weightInKg.value || !reps.value || reps.value < 1) return null
  return Object.entries(formulas).map(([key, fn]) => {
    const result = fn(weightInKg.value, reps.value)
    return {
      key,
      label: t('oneRepMax.' + key),
      value: Math.round(unit.value === 'lbs' ? result / 0.453592 : result),
    }
  })
})

const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]
const repRanges = ['1', '2-3', '3-4', '4-6', '6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20']

const percentageChart = computed(() => {
  if (!estimated1RM.value) return null
  return percentages.map((pct, i) => ({
    percent: pct,
    weight: Math.round(estimated1RM.value * pct / 100),
    reps: repRanges[i],
  }))
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('oneRepMax.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('oneRepMax.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('oneRepMax.weightLifted', { unit: t('common.' + unit) }) }}</label>
        <input v-model.number="weightLifted" type="number" placeholder="100" data-testid="weight-lifted"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('oneRepMax.reps') }}</label>
        <input v-model.number="reps" type="number" placeholder="5" min="1" max="36" data-testid="reps"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('oneRepMax.weightUnit') }}</label>
        <div class="flex gap-2">
          <button @click="unit = 'kg'" data-testid="unit-kg"
            :class="unit === 'kg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">kg</button>
          <button @click="unit = 'lbs'" data-testid="unit-lbs"
            :class="unit === 'lbs' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">lbs</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('oneRepMax.formula') }}</label>
        <select v-model="selectedFormula" data-testid="formula-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option value="epley">{{ t('oneRepMax.epley') }}</option>
          <option value="brzycki">{{ t('oneRepMax.brzycki') }}</option>
          <option value="lombardi">{{ t('oneRepMax.lombardi') }}</option>
          <option value="oconner">{{ t('oneRepMax.oconner') }}</option>
        </select>
      </div>
    </div>

    <div v-if="estimated1RM" class="pt-5 border-t border-stone-100">
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('oneRepMax.estimated1RM') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="one-rep-max-result">{{ estimated1RM }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('common.' + unit) }}</span>
      </div>

      <div class="mb-6" data-testid="formula-comparison">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('oneRepMax.formulaComparison') }}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div v-for="f in formulaResults" :key="f.key" class="bg-stone-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-stone-900 tabular-nums">{{ f.value }}</div>
            <div class="text-xs text-stone-500 font-medium">{{ f.label }}</div>
          </div>
        </div>
      </div>

      <div data-testid="percentage-chart">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('oneRepMax.percentageChart') }}</p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('oneRepMax.percent') }}</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('oneRepMax.weight') }} ({{ t('common.' + unit) }})</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('oneRepMax.repsRange') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr v-for="row in percentageChart" :key="row.percent"
                :class="row.percent === 100 ? 'bg-stone-50 font-semibold' : ''">
                <td class="px-4 py-2.5 text-stone-600">{{ row.percent }}%</td>
                <td class="px-4 py-2.5 text-stone-900 font-medium tabular-nums">{{ row.weight }}</td>
                <td class="px-4 py-2.5 text-stone-500">{{ row.reps }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-2">{{ t('oneRepMax.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('oneRepMax.howItWorksText') }}</p>
  </div>

  <BlogBanner calculator-key="oneRepMax" />
  <AffiliateBanner />
</template>
