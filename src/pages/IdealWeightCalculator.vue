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
  title: t('idealWeight.meta.title'),
  description: t('idealWeight.meta.description'),
  routeKey: 'idealWeight',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Ideal Weight Calculator',
    url: 'https://healthcalculator.app/ideal-weight',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const height = ref(null)
const gender = ref('male')
const unit = ref('metric')

const heightInches = computed(() => {
  if (!height.value) return null
  return unit.value === 'metric' ? height.value / 2.54 : height.value
})

const formulas = computed(() => {
  const h = heightInches.value
  if (!h || h <= 0) return null
  const isMale = gender.value === 'male'
  const results = [
    { name: 'Devine', year: 1974, kg: isMale ? 50 + 2.3 * (h - 60) : 45.5 + 2.3 * (h - 60) },
    { name: 'Robinson', year: 1983, kg: isMale ? 52 + 1.9 * (h - 60) : 49 + 1.7 * (h - 60) },
    { name: 'Miller', year: 1983, kg: isMale ? 56.2 + 1.41 * (h - 60) : 53.1 + 1.36 * (h - 60) },
    { name: 'Hamwi', year: 1964, kg: isMale ? 48 + 2.7 * (h - 60) : 45.5 + 2.2 * (h - 60) },
  ]
  return results.map(r => ({
    ...r,
    value: unit.value === 'metric' ? r.kg : r.kg * 2.205,
  }))
})

const average = computed(() => {
  if (!formulas.value) return null
  const sum = formulas.value.reduce((s, f) => s + f.value, 0)
  return sum / formulas.value.length
})

const range = computed(() => {
  if (!formulas.value) return null
  const values = formulas.value.map(f => f.value)
  return { min: Math.min(...values), max: Math.max(...values) }
})

const bmiRange = computed(() => {
  if (!heightInches.value) return null
  const hMeters = heightInches.value * 0.0254
  const min = 18.5 * hMeters * hMeters
  const max = 24.9 * hMeters * hMeters
  if (unit.value === 'imperial') return { min: min * 2.205, max: max * 2.205 }
  return { min, max }
})

const weightUnit = computed(() => unit.value === 'metric' ? 'kg' : 'lbs')

const fmt = (v) => v?.toFixed(1)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('idealWeight.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('idealWeight.description') }}</p>
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
          <button
            @click="gender = 'male'"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button
            @click="gender = 'female'"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.height', { unit: t('common.' + (unit === 'metric' ? 'cm' : 'inches')) }) }}
        </label>
        <input
          v-model.number="height"
          type="number"
          :placeholder="unit === 'metric' ? '170' : '67'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="formulas" data-testid="results" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ fmt(average) }}</span>
      <span class="text-lg text-stone-500 ml-2">{{ weightUnit }}</span>
    </div>
    <p class="text-sm text-stone-500 mb-6">{{ fmt(range.min) }} – {{ fmt(range.max) }} {{ weightUnit }}</p>
  </div>

  <div v-if="formulas" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('idealWeight.formulaComparison') }}</h2>
    <div class="space-y-3.5">
      <div v-for="f in formulas" :key="f.name" class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
        <div>
          <span class="text-sm text-stone-900 font-medium">{{ f.name }}</span>
          <span class="text-xs text-stone-400 ml-1">({{ f.year }})</span>
        </div>
        <span class="text-sm font-medium text-stone-900 tabular-nums">{{ fmt(f.value) }} {{ weightUnit }}</span>
      </div>
    </div>
  </div>

  <div v-if="bmiRange" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('idealWeight.healthyBmiRange') }}</h2>
    <p class="text-sm text-stone-600">
      {{ t('idealWeight.bmiRangeText') }}
      <span class="font-semibold text-stone-900 tabular-nums">{{ fmt(bmiRange.min) }} – {{ fmt(bmiRange.max) }} {{ weightUnit }}</span>.
    </p>
  </div>


    <AdSlot class="mt-8" />
  <BlogBanner calculator-key="idealWeight" />
</template>
