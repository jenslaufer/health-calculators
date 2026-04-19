<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()

const faqItems = computed(() => tm('bac.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bac.meta.title'),
  description: t('bac.meta.description'),
  routeKey: 'bac',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blood Alcohol Calculator',
    url: 'https://healthcalculator.app/blood-alcohol-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const gender = ref('male')
const weight = ref(null)
const hours = ref(null)
const unit = ref('metric')

const drinks = ref([
  { volumeMl: null, alcoholPct: null },
])

const presets = [
  { labelKey: 'bac.presetBeer', volume: 500, pct: 5 },
  { labelKey: 'bac.presetWine', volume: 200, pct: 12 },
  { labelKey: 'bac.presetSpirits', volume: 40, pct: 40 },
  { labelKey: 'bac.presetCocktail', volume: 250, pct: 10 },
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

function calcAlcoholGrams(volumeMl, alcoholPct) {
  if (!volumeMl || volumeMl <= 0 || !alcoholPct || alcoholPct <= 0) return 0
  return volumeMl * (alcoholPct / 100) * 0.8
}

const totalAlcoholGrams = computed(() =>
  drinks.value.reduce((sum, d) => sum + calcAlcoholGrams(d.volumeMl, d.alcoholPct), 0)
)

const weightKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'imperial' ? weight.value * 0.453592 : weight.value
})

const rawBac = computed(() => {
  if (!totalAlcoholGrams.value || !weightKg.value || weightKg.value <= 0) return null
  const r = gender.value === 'male' ? 0.68 : 0.55
  return totalAlcoholGrams.value / (weightKg.value * r)
})

const currentBac = computed(() => {
  if (rawBac.value === null) return null
  const h = hours.value || 0
  return Math.max(0, rawBac.value - 0.15 * h)
})

const timeUntilSober = computed(() => {
  if (rawBac.value === null || rawBac.value <= 0) return null
  const h = hours.value || 0
  const remaining = rawBac.value - 0.15 * h
  if (remaining <= 0) return 0
  return remaining / 0.15
})

const timeUntilSoberFormatted = computed(() => {
  if (timeUntilSober.value === null) return null
  const totalMin = Math.ceil(timeUntilSober.value * 60)
  const hrs = Math.floor(totalMin / 60)
  const mins = totalMin % 60
  return { hours: hrs, minutes: mins }
})

const bacCategory = computed(() => {
  if (currentBac.value === null) return null
  if (currentBac.value === 0) return { label: 'bac.sober', color: 'text-green-600', bg: 'bg-green-600' }
  if (currentBac.value < 0.3) return { label: 'bac.minimal', color: 'text-green-500', bg: 'bg-green-500' }
  if (currentBac.value < 0.5) return { label: 'bac.belowLimit', color: 'text-yellow-500', bg: 'bg-yellow-500' }
  if (currentBac.value < 1.1) return { label: 'bac.aboveLimit', color: 'text-orange-500', bg: 'bg-orange-500' }
  if (currentBac.value < 2.0) return { label: 'bac.significant', color: 'text-red-500', bg: 'bg-red-500' }
  return { label: 'bac.dangerous', color: 'text-red-700', bg: 'bg-red-700' }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bac.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('bac.description') }}</p>
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

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.gender') }}</label>
        <div class="flex gap-2">
          <button @click="gender = 'male'" data-testid="gender-male"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button @click="gender = 'female'" data-testid="gender-female"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Quick presets -->
    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bac.quickAdd') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="preset in presets"
          :key="preset.labelKey"
          @click="applyPreset(preset)"
          class="px-3 py-2 rounded-lg text-sm font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors duration-150"
        >{{ t(preset.labelKey) }}</button>
      </div>
    </div>

    <!-- Drinks list -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bac.drinks') }}</label>
      <div v-for="(drink, index) in drinks" :key="index" class="flex gap-3 mb-3 items-end">
        <div class="flex-1">
          <label v-if="index === 0" class="block text-xs text-stone-400 mb-1">{{ t('bac.volume') }}</label>
          <input v-model.number="drink.volumeMl" type="number" placeholder="500" :data-testid="'drink-volume-' + index"
            class="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div class="flex-1">
          <label v-if="index === 0" class="block text-xs text-stone-400 mb-1">{{ t('bac.alcoholPct') }}</label>
          <input v-model.number="drink.alcoholPct" type="number" step="0.1" placeholder="5" :data-testid="'drink-alcohol-' + index"
            class="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <button v-if="drinks.length > 1" @click="removeDrink(index)"
          class="px-3 py-3 rounded-lg text-sm text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-150">&times;</button>
      </div>
      <button @click="addDrink" data-testid="add-drink"
        class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150">+ {{ t('bac.addDrink') }}</button>
    </div>

    <!-- Time since first drink -->
    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('bac.hoursSinceFirst') }}</label>
      <input v-model.number="hours" type="number" step="0.5" placeholder="0" data-testid="hours"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="currentBac !== null" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="bac-result">{{ currentBac.toFixed(2) }}</span>
      <span class="text-lg text-stone-400">&permil;</span>
      <span v-if="bacCategory" :class="bacCategory.color" class="text-lg font-semibold">{{ t(bacCategory.label) }}</span>
    </div>

    <!-- BAC scale bar -->
    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-600 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: Math.min(currentBac / 3 * 100, 100) + '%' }"></div>
    </div>

    <!-- Legal limit -->
    <div class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="legal-limit">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bac.legalLimit') }}</p>
      <p class="text-base text-stone-900 font-medium">
        <span v-if="currentBac < 0.5" class="text-green-600">{{ t('bac.belowLegalLimit') }}</span>
        <span v-else class="text-red-500">{{ t('bac.aboveLegalLimit') }}</span>
      </p>
    </div>

    <!-- Time until sober -->
    <div v-if="timeUntilSoberFormatted" class="bg-stone-50 rounded-lg p-4 mb-4" data-testid="time-until-sober">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bac.timeUntilSober') }}</p>
      <p class="text-2xl font-bold text-stone-900 tabular-nums">
        <span v-if="timeUntilSober === 0">{{ t('bac.alreadySober') }}</span>
        <span v-else>{{ t('bac.hoursMinutes', { hours: timeUntilSoberFormatted.hours, minutes: timeUntilSoberFormatted.minutes }) }}</span>
      </p>
    </div>

    <!-- Details -->
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bac.totalAlcohol') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ totalAlcoholGrams.toFixed(1) }} g</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('bac.rawBac') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ rawBac.toFixed(2) }} &permil;</p>
      </div>
    </div>
  </div>

  <!-- Reference table -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bac.bacRange') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bac.effect') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">0.0 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectSober') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">0.1–0.3 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectMinimal') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">0.3–0.5 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectMild') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">0.5–1.1 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectModerate') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">1.1–2.0 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectSignificant') }}</td>
        </tr>
        <tr>
          <td class="px-6 py-3 text-stone-900 font-medium">&gt; 2.0 &permil;</td>
          <td class="px-6 py-3 text-stone-600">{{ t('bac.effectDangerous') }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- How it works -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('bac.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('bac.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogBanner calculator-key="bac" />
</template>
