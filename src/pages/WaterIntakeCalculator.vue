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
  title: t('water.meta.title'),
  description: t('water.meta.description'),
  routeKey: 'water',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Water Intake Calculator',
    url: 'https://healthcalculator.app/water',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const weight = ref(null)
const activity = ref('sedentary')
const climate = ref('temperate')

const activityOptions = [
  { value: 'sedentary', key: 'water.sedentary', multiplier: 1.0 },
  { value: 'light', key: 'water.lightlyActive', multiplier: 1.1 },
  { value: 'moderate', key: 'water.moderatelyActive', multiplier: 1.2 },
  { value: 'very', key: 'water.veryActive', multiplier: 1.3 },
  { value: 'extreme', key: 'water.extremelyActive', multiplier: 1.4 },
]

const climateOptions = [
  { value: 'temperate', key: 'water.temperate', multiplier: 1.0 },
  { value: 'hot', key: 'water.hotHumid', multiplier: 1.2 },
  { value: 'cold', key: 'water.cold', multiplier: 0.9 },
]

const weightKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'metric' ? weight.value : weight.value / 2.20462
})

const liters = computed(() => {
  if (!weightKg.value) return null
  const base = weightKg.value * 0.033
  const actMult = activityOptions.find(a => a.value === activity.value).multiplier
  const climMult = climateOptions.find(c => c.value === climate.value).multiplier
  return base * actMult * climMult
})

const litersFormatted = computed(() => liters.value?.toFixed(1))
const glasses = computed(() => liters.value ? Math.round(liters.value / 0.25) : null)
const oz = computed(() => liters.value ? (liters.value * 33.814).toFixed(0) : null)
const filledCount = computed(() => {
  if (!glasses.value) return 0
  return Math.min(Math.ceil(glassRatio.value * 8), 8)
})
const glassRatio = computed(() => {
  if (!glasses.value) return 0
  return Math.min(glasses.value / 8, 1)
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('water.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('water.description') }}</p>
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

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label for="weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input id="weight" v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '70' : '154'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="activity" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.activityLevel') }}
        </label>
        <select id="activity" v-model="activity"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">{{ t(opt.key) }}</option>
        </select>
      </div>
      <div>
        <label for="climate" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('water.climate') }}
        </label>
        <select id="climate" v-model="climate"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option v-for="opt in climateOptions" :key="opt.value" :value="opt.value">{{ t(opt.key) }}</option>
        </select>
      </div>
    </div>

    <div v-if="liters" class="pt-5 border-t border-stone-100">
      <div class="flex items-baseline gap-3 mb-1">
        <span data-testid="liters" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ litersFormatted }}</span>
        <span class="text-lg text-stone-500">{{ t('water.litersPerDay') }}</span>
      </div>
      <div class="flex items-baseline gap-4 mb-5">
        <span class="text-lg text-stone-500"><span data-testid="glasses">{{ glasses }}</span> {{ t('water.glasses') }}</span>
        <span v-if="unit === 'imperial'" class="text-lg text-stone-500"><span data-testid="oz">{{ oz }}</span> {{ t('water.oz') }}</span>
      </div>

      <div class="flex gap-2 mb-5">
        <div
          v-for="i in 8"
          :key="i"
          class="w-8 h-10 rounded-md transition-colors duration-300"
          :class="i <= filledCount ? 'bg-blue-400' : 'bg-stone-200'"
        ></div>
      </div>

      <p class="text-sm text-stone-400">{{ t('water.tip') }}</p>
    </div>
  </div>


    <AdSlot class="mt-8" />
  <BlogBanner calculator-key="water" />
</template>
