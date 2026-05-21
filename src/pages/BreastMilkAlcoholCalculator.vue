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
  calcAlcoholGrams,
  calcMilkBac,
  calcCurrentMilkBac,
  calcHoursUntilClear,
  getTotalAlcoholGrams,
} from '../utils/breastMilkAlcohol.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('breastMilkAlcohol.faq') || [])

useHead(() => ({
  title: t('breastMilkAlcohol.meta.title'),
  description: t('breastMilkAlcohol.meta.description'),
  routeKey: 'breastMilkAlcohol',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Breast Milk Alcohol Calculator',
    url: 'https://healthcalculator.app/en/breast-milk-alcohol-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const weight = ref(null)
const hours = ref(null)
const unit = ref('metric')

const drinks = ref([
  { volumeMl: null, alcoholPct: null },
])

const presets = [
  { labelKey: 'breastMilkAlcohol.presetBeer', volume: 330, pct: 5 },
  { labelKey: 'breastMilkAlcohol.presetWine', volume: 150, pct: 12 },
  { labelKey: 'breastMilkAlcohol.presetSpirits', volume: 40, pct: 40 },
  { labelKey: 'breastMilkAlcohol.presetSekt', volume: 100, pct: 11 },
]

function addDrink() {
  drinks.value.push({ volumeMl: null, alcoholPct: null })
}

function removeDrink(index) {
  if (drinks.value.length > 1) drinks.value.splice(index, 1)
}

function applyPreset(preset) {
  const emptyIndex = drinks.value.findIndex(d => !d.volumeMl && !d.alcoholPct)
  if (emptyIndex >= 0) {
    drinks.value[emptyIndex].volumeMl = preset.volume
    drinks.value[emptyIndex].alcoholPct = preset.pct
  } else {
    drinks.value.push({ volumeMl: preset.volume, alcoholPct: preset.pct })
  }
}

const totalAlcoholGrams = computed(() => getTotalAlcoholGrams(drinks.value))

const weightKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const peakBac = computed(() => {
  if (!totalAlcoholGrams.value || !weightKg.value) return null
  return calcMilkBac(totalAlcoholGrams.value, weightKg.value)
})

const currentBac = computed(() => {
  if (peakBac.value === null) return null
  return calcCurrentMilkBac(peakBac.value, hours.value || 0)
})

const hoursUntilSafe = computed(() => {
  if (peakBac.value === null) return null
  return calcHoursUntilClear(peakBac.value, hours.value || 0)
})

const timeUntilSafeFormatted = computed(() => {
  if (hoursUntilSafe.value === null) return null
  const totalMin = Math.ceil(hoursUntilSafe.value * 60)
  const hrs = Math.floor(totalMin / 60)
  const mins = totalMin % 60
  return { hours: hrs, minutes: mins }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('breastMilkAlcohol.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('breastMilkAlcohol.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.metric') }}</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.imperial') }}</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
      </label>
      <input v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '65' : '143'" data-testid="weight"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>

    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastMilkAlcohol.quickAdd') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="preset in presets"
          :key="preset.labelKey"
          @click="applyPreset(preset)"
          class="px-3 py-2 rounded-lg text-sm font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors duration-150"
        >{{ t(preset.labelKey) }}</button>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastMilkAlcohol.drinks') }}</label>
      <div v-for="(drink, index) in drinks" :key="index" class="flex gap-3 mb-3 items-end">
        <div class="flex-1">
          <label v-if="index === 0" class="block text-xs text-stone-400 mb-1">{{ t('breastMilkAlcohol.volume') }}</label>
          <input v-model.number="drink.volumeMl" type="number" placeholder="330" :data-testid="'drink-volume-' + index"
            class="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div class="flex-1">
          <label v-if="index === 0" class="block text-xs text-stone-400 mb-1">{{ t('breastMilkAlcohol.alcoholPct') }}</label>
          <input v-model.number="drink.alcoholPct" type="number" step="0.1" placeholder="5" :data-testid="'drink-alcohol-' + index"
            class="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <button v-if="drinks.length > 1" @click="removeDrink(index)"
          class="px-3 py-3 rounded-lg text-sm text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-150">&times;</button>
      </div>
      <button @click="addDrink" data-testid="add-drink"
        class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150">+ {{ t('breastMilkAlcohol.addDrink') }}</button>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastMilkAlcohol.hoursSinceFirst') }}</label>
      <input v-model.number="hours" type="number" step="0.5" placeholder="0" data-testid="hours"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="currentBac !== null" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="milk-bac-result">{{ currentBac.toFixed(2) }}</span>
      <span class="text-lg text-stone-400">&permil;</span>
      <span data-testid="milk-status" class="text-lg font-semibold" :class="currentBac === 0 ? 'text-green-600' : 'text-red-500'">
        {{ currentBac === 0 ? t('breastMilkAlcohol.milkSafe') : t('breastMilkAlcohol.milkNotSafe') }}
      </span>
    </div>

    <div v-if="timeUntilSafeFormatted" class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="time-until-safe">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('breastMilkAlcohol.timeUntilSafe') }}</p>
      <p class="text-2xl font-bold text-stone-900 tabular-nums">
        <span v-if="hoursUntilSafe === 0">{{ t('breastMilkAlcohol.alreadySafe') }}</span>
        <span v-else>{{ t('breastMilkAlcohol.hoursMinutes', { hours: timeUntilSafeFormatted.hours, minutes: timeUntilSafeFormatted.minutes }) }}</span>
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('breastMilkAlcohol.totalAlcohol') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ totalAlcoholGrams.toFixed(1) }} g</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('breastMilkAlcohol.peakBac') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ peakBac.toFixed(2) }} &permil;</p>
      </div>
    </div>
  </div>

  <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastMilkAlcohol.guidance') }}</p>
    <p class="text-sm text-stone-700 leading-relaxed">{{ t('breastMilkAlcohol.guidanceText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200">
      <h2 class="text-base font-semibold text-stone-900">{{ t('breastMilkAlcohol.referenceTable') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('breastMilkAlcohol.drinkColumn') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('breastMilkAlcohol.clearanceColumn') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastMilkAlcohol.refBeer') }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ t('breastMilkAlcohol.refBeerClearance') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastMilkAlcohol.refWine') }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ t('breastMilkAlcohol.refWineClearance') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastMilkAlcohol.refSpirits') }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ t('breastMilkAlcohol.refSpiritsClearance') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastMilkAlcohol.refSekt') }}</td>
          <td class="px-6 py-3 text-stone-600 tabular-nums">{{ t('breastMilkAlcohol.refSektClearance') }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('breastMilkAlcohol.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('breastMilkAlcohol.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="breastMilkAlcohol" class="mt-8" />
  <BlogArticleLink calculator-key="breastMilkAlcohol" />
</template>
