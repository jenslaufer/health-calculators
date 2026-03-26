<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

useHead({
  title: 'Water Intake Calculator — Daily Hydration Needs',
  description: 'Calculate how much water you should drink daily. Personalized to your weight, activity level, and climate.',
  path: '/water',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Water Intake Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/water',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const unit = ref('metric')
const weight = ref(null)
const activity = ref('sedentary')
const climate = ref('temperate')

const activityOptions = [
  { value: 'sedentary', label: 'Sedentary', multiplier: 1.0 },
  { value: 'light', label: 'Lightly active', multiplier: 1.1 },
  { value: 'moderate', label: 'Moderately active', multiplier: 1.2 },
  { value: 'very', label: 'Very active', multiplier: 1.3 },
  { value: 'extreme', label: 'Extremely active', multiplier: 1.4 },
]

const climateOptions = [
  { value: 'temperate', label: 'Temperate', multiplier: 1.0 },
  { value: 'hot', label: 'Hot / Humid', multiplier: 1.2 },
  { value: 'cold', label: 'Cold', multiplier: 0.9 },
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
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Water Intake Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Calculate how much water you should drink daily based on your weight, activity, and climate.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="unit = 'metric'"
        :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Metric</button>
      <button
        @click="unit = 'imperial'"
        :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Imperial</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label for="weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Weight ({{ unit === 'metric' ? 'kg' : 'lbs' }})
        </label>
        <input
          id="weight"
          v-model.number="weight"
          type="number"
          :placeholder="unit === 'metric' ? '70' : '154'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="activity" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Activity Level
        </label>
        <select
          id="activity"
          v-model="activity"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </select>
      </div>
      <div>
        <label for="climate" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Climate
        </label>
        <select
          id="climate"
          v-model="climate"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option v-for="opt in climateOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </select>
      </div>
    </div>

    <div v-if="liters" class="pt-5 border-t border-stone-100">
      <div class="flex items-baseline gap-3 mb-1">
        <span data-testid="liters" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ litersFormatted }}</span>
        <span class="text-lg text-stone-500">liters / day</span>
      </div>
      <div class="flex items-baseline gap-4 mb-5">
        <span class="text-lg text-stone-500"><span data-testid="glasses">{{ glasses }}</span> glasses</span>
        <span v-if="unit === 'imperial'" class="text-lg text-stone-500"><span data-testid="oz">{{ oz }}</span> oz</span>
      </div>

      <div class="flex gap-2 mb-5">
        <div
          v-for="i in 8"
          :key="i"
          class="w-8 h-10 rounded-md transition-colors duration-300"
          :class="i <= filledCount ? 'bg-blue-400' : 'bg-stone-200'"
        ></div>
      </div>

      <p class="text-sm text-stone-400">Spread your intake throughout the day for best hydration.</p>
    </div>
  </div>

  <BlogBanner calculator-path="/water" />
</template>
