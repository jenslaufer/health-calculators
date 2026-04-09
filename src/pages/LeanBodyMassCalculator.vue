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
  title: t('leanBodyMass.meta.title'),
  description: t('leanBodyMass.meta.description'),
  routeKey: 'leanBodyMass',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lean Body Mass Calculator',
    url: 'https://healthcalculator.app/lean-body-mass',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const gender = ref('male')
const unit = ref('metric')
const weight = ref(null)
const height = ref(null)

const toKg = (val) => unit.value === 'imperial' ? val * 0.453592 : val
const toCm = (val) => unit.value === 'imperial' ? val * 2.54 : val

const lbmBoer = computed(() => {
  if (!weight.value || !height.value) return null
  const w = toKg(weight.value)
  const h = toCm(height.value)
  if (gender.value === 'male') return 0.407 * w + 0.267 * h - 19.2
  return 0.252 * w + 0.473 * h - 48.3
})

const lbmJames = computed(() => {
  if (!weight.value || !height.value) return null
  const w = toKg(weight.value)
  const h = toCm(height.value)
  if (gender.value === 'male') return 1.1 * w - 128 * Math.pow(w / h, 2)
  return 1.07 * w - 148 * Math.pow(w / h, 2)
})

const lbmHume = computed(() => {
  if (!weight.value || !height.value) return null
  const w = toKg(weight.value)
  const h = toCm(height.value)
  if (gender.value === 'male') return 0.3281 * w + 0.33929 * h - 29.5336
  return 0.29569 * w + 0.41813 * h - 43.2933
})

const lbmAverage = computed(() => {
  if (!lbmBoer.value || !lbmJames.value || !lbmHume.value) return null
  return (lbmBoer.value + lbmJames.value + lbmHume.value) / 3
})

const fatMass = computed(() => {
  if (!lbmAverage.value || !weight.value) return null
  const w = toKg(weight.value)
  return Math.max(0, w - lbmAverage.value)
})

const leanPercent = computed(() => {
  if (!lbmAverage.value || !weight.value) return null
  const w = toKg(weight.value)
  return Math.min(100, (lbmAverage.value / w) * 100)
})

const massUnit = computed(() => 'kg')
const weightLabel = computed(() => t('common.' + (unit.value === 'metric' ? 'kg' : 'lbs')))
const heightLabel = computed(() => t('common.' + (unit.value === 'metric' ? 'cm' : 'inches')))
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('leanBodyMass.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('leanBodyMass.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="gender = 'male'"
        :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.male') }}</button>
      <button
        @click="gender = 'female'"
        :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.female') }}</button>
    </div>

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

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weight', { unit: weightLabel }) }}
        </label>
        <input id="weight" v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.height', { unit: heightLabel }) }}
        </label>
        <input id="height" v-model.number="height" type="number" :placeholder="unit === 'metric' ? '180' : '71'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="lbmAverage" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-6">
      <span data-testid="lbm-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ lbmAverage.toFixed(1) }}</span>
      <span class="text-2xl text-stone-400">{{ massUnit }}</span>
      <span class="text-lg text-stone-500 font-medium">{{ t('leanBodyMass.average') }}</span>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('leanBodyMass.fatMass') }}</div>
        <div data-testid="fat-mass" class="text-2xl font-bold text-stone-900 tabular-nums">{{ fatMass.toFixed(1) }} <span class="text-sm text-stone-400">{{ massUnit }}</span></div>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('leanBodyMass.leanPercent') }}</div>
        <div data-testid="lean-percent" class="text-2xl font-bold text-stone-900 tabular-nums">{{ leanPercent.toFixed(1) }} <span class="text-sm text-stone-400">%</span></div>
      </div>
    </div>

    <div>
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('leanBodyMass.formulaComparison') }}</h2>
      <div class="space-y-3">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3">
          <span class="text-sm text-stone-600">{{ t('leanBodyMass.boer') }}</span>
          <span data-testid="boer-result" class="text-sm font-semibold text-stone-900 tabular-nums">{{ lbmBoer.toFixed(1) }} {{ massUnit }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3">
          <span class="text-sm text-stone-600">{{ t('leanBodyMass.james') }}</span>
          <span data-testid="james-result" class="text-sm font-semibold text-stone-900 tabular-nums">{{ lbmJames.toFixed(1) }} {{ massUnit }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-stone-600">{{ t('leanBodyMass.hume') }}</span>
          <span data-testid="hume-result" class="text-sm font-semibold text-stone-900 tabular-nums">{{ lbmHume.toFixed(1) }} {{ massUnit }}</span>
        </div>
      </div>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <BlogBanner calculator-key="leanBodyMass" />
</template>
