<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bodyTemperature.meta.title'),
  description: t('bodyTemperature.meta.description'),
  routeKey: 'bodyTemperature',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Body Temperature Calculator',
    url: 'https://healthcalculator.app/body-temperature-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Pure calculation functions

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9
}

function getCategory(tempC) {
  if (tempC < 35.0) return 'hypothermia'
  if (tempC < 36.1) return 'low'
  if (tempC <= 37.2) return 'normal'
  if (tempC <= 38.0) return 'elevated'
  if (tempC <= 39.0) return 'fever'
  if (tempC <= 40.0) return 'high_fever'
  return 'very_high_fever'
}

// State

const unit = ref('celsius')
const inputValue = ref(37.0)

// Computed

const tempC = computed(() => {
  const v = parseFloat(inputValue.value)
  if (isNaN(v)) return null
  return unit.value === 'celsius' ? v : fahrenheitToCelsius(v)
})

const tempF = computed(() => {
  if (tempC.value === null) return null
  return celsiusToFahrenheit(tempC.value)
})

const category = computed(() => {
  if (tempC.value === null) return null
  return getCategory(tempC.value)
})

const categoryColors = {
  hypothermia:    { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   badge: 'bg-blue-100 text-blue-800' },
  low:            { bg: 'bg-sky-50',    border: 'border-sky-200',    text: 'text-sky-700',    badge: 'bg-sky-100 text-sky-800' },
  normal:         { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  badge: 'bg-green-100 text-green-800' },
  elevated:       { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800' },
  fever:          { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
  high_fever:     { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    badge: 'bg-red-100 text-red-800' },
  very_high_fever:{ bg: 'bg-red-50',    border: 'border-red-300',    text: 'text-red-800',    badge: 'bg-red-200 text-red-900' },
}

const currentColors = computed(() => category.value ? categoryColors[category.value] : categoryColors.normal)

const rangeRows = [
  { key: 'hypothermia', maxC: 34.9, minC: null },
  { key: 'low',         minC: 35.0, maxC: 36.0 },
  { key: 'normal',      minC: 36.1, maxC: 37.2 },
  { key: 'elevated',    minC: 37.3, maxC: 38.0 },
  { key: 'fever',       minC: 38.1, maxC: 39.0 },
  { key: 'high_fever',  minC: 39.1, maxC: 40.0 },
  { key: 'very_high_fever', minC: 40.1, maxC: null },
]

function formatRange(row) {
  const toF = c => celsiusToFahrenheit(c).toFixed(1)
  if (row.minC === null) return `< ${row.maxC} °C / ${toF(row.maxC)} °F`
  if (row.maxC === null) return `> ${row.minC} °C / ${toF(row.minC)} °F`
  return `${row.minC}–${row.maxC} °C / ${toF(row.minC)}–${toF(row.maxC)} °F`
}

function switchUnit(newUnit) {
  if (newUnit === unit.value) return
  if (newUnit === 'fahrenheit') {
    inputValue.value = parseFloat(celsiusToFahrenheit(inputValue.value).toFixed(1))
  } else {
    inputValue.value = parseFloat(fahrenheitToCelsius(inputValue.value).toFixed(1))
  }
  unit.value = newUnit
}
</script>

<template>
  <div>
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-6 inline-block">
      ← {{ t('common.backToAll') }}
    </router-link>

    <h1 class="text-3xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bodyTemperature.title') }}</h1>
    <p class="text-base text-stone-500 leading-relaxed mb-8">{{ t('bodyTemperature.description') }}</p>

    <!-- Input -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="mb-5">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">
          {{ t('bodyTemperature.unitLabel') }}
        </label>
        <div class="flex gap-2 w-fit" data-testid="unit-selector">
          <button
            v-for="u in ['celsius', 'fahrenheit']"
            :key="u"
            @click="switchUnit(u)"
            :class="unit === u ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150"
            :data-testid="`unit-${u}`"
          >{{ t(`bodyTemperature.${u}`) }}</button>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">
          {{ t('bodyTemperature.temperatureLabel') }}
          <span class="normal-case font-normal ml-1">({{ unit === 'celsius' ? '°C' : '°F' }})</span>
        </label>
        <input
          v-model.number="inputValue"
          type="number"
          step="0.1"
          :min="unit === 'celsius' ? 20 : 68"
          :max="unit === 'celsius' ? 45 : 113"
          class="w-40 border border-stone-200 rounded-lg px-4 py-3 text-xl font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 tabular-nums"
          data-testid="temperature-input"
        />
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="tempC !== null" class="mb-6">
      <!-- Temperature display -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-5">{{ t('bodyTemperature.results') }}</h2>

        <div class="grid grid-cols-2 gap-4 mb-5">
          <div class="bg-stone-50 rounded-xl p-5">
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">°C</p>
            <span class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900" data-testid="temp-celsius">
              {{ tempC.toFixed(1) }}
            </span>
          </div>
          <div class="bg-stone-50 rounded-xl p-5">
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">°F</p>
            <span class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900" data-testid="temp-fahrenheit">
              {{ tempF.toFixed(1) }}
            </span>
          </div>
        </div>

        <!-- Category -->
        <div
          v-if="category"
          :class="[currentColors.bg, currentColors.border]"
          class="border rounded-xl p-5"
          data-testid="temperature-category"
        >
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              {{ t('bodyTemperature.categoryLabel') }}
            </p>
            <span
              :class="currentColors.badge"
              class="text-xs font-semibold px-2.5 py-1 rounded-full"
              data-testid="category-badge"
            >{{ t(`bodyTemperature.category.${category}`) }}</span>
          </div>
          <p :class="currentColors.text" class="text-sm leading-relaxed">
            {{ t(`bodyTemperature.categoryDesc.${category}`) }}
          </p>
        </div>
      </div>

      <!-- Reference ranges -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
        <div class="p-6 border-b border-stone-100">
          <h2 class="text-lg font-semibold text-stone-900">{{ t('bodyTemperature.rangesTitle') }}</h2>
        </div>
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-stone-50 border-b border-stone-200">
              <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bodyTemperature.rangeCategory') }}</th>
              <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('bodyTemperature.rangeValues') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-100">
            <tr
              v-for="row in rangeRows"
              :key="row.key"
              :class="category === row.key ? 'bg-stone-50 font-semibold' : ''"
            >
              <td class="px-6 py-3 text-stone-700">{{ t(`bodyTemperature.category.${row.key}`) }}</td>
              <td class="px-6 py-3 text-stone-600 tabular-nums">{{ formatRange(row) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Info boxes -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-5">{{ t('bodyTemperature.infoTitle') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="fact in ['measurement', 'variation', 'fever', 'hypothermia']" :key="fact" class="bg-stone-50 rounded-xl p-5">
          <p class="text-sm font-semibold text-stone-900 mb-2">{{ t(`bodyTemperature.info.${fact}`) }}</p>
          <p class="text-xs text-stone-500 leading-relaxed">{{ t(`bodyTemperature.info.${fact}Desc`) }}</p>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">
        <strong class="text-stone-700">{{ t('bodyTemperature.disclaimerTitle') }}:</strong>
        {{ t('bodyTemperature.disclaimer') }}
      </p>
    </div>

    <BlogBanner calculator-key="bodyTemperature" />
    <AdSlot class="mt-8" />
  </div>
</template>
