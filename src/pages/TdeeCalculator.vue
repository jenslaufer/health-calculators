<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'TDEE Calculator — Free Daily Calorie Needs Calculator',
  description: 'Calculate your Total Daily Energy Expenditure. Science-backed Mifflin-St Jeor formula, personalized to your activity level.',
  path: '/tdee',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'TDEE Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/tdee',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const unit = ref('metric')
const gender = ref('male')
const age = ref('')
const height = ref('')
const weight = ref('')
const activityLevel = ref('1.55')

const activityOptions = [
  { label: 'Sedentary (office job, little exercise)', value: '1.2' },
  { label: 'Lightly active (1-3 days/week)', value: '1.375' },
  { label: 'Moderately active (3-5 days/week)', value: '1.55' },
  { label: 'Very active (6-7 days/week)', value: '1.725' },
  { label: 'Extremely active (athlete/physical job)', value: '1.9' },
]

const bmr = computed(() => {
  const a = parseFloat(age.value)
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null

  let heightCm = h
  let weightKg = w
  if (unit.value === 'imperial') {
    heightCm = h * 2.54
    weightKg = w * 0.453592
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * a - 161
  return gender.value === 'male' ? base + 166 : base
})

const tdee = computed(() => {
  if (!bmr.value) return null
  return bmr.value * parseFloat(activityLevel.value)
})

const formatNumber = (n) => Math.round(n).toLocaleString()
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">TDEE Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Calculate your Total Daily Energy Expenditure based on the Mifflin-St Jeor equation.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <!-- Gender Toggle -->
    <div class="flex gap-2 mb-6">
      <button
        v-for="g in ['male', 'female']"
        :key="g"
        @click="gender = g"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="gender === g ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ g === 'male' ? 'Male' : 'Female' }}
      </button>
    </div>

    <!-- Unit Toggle -->
    <div class="flex gap-2 mb-6">
      <button
        v-for="u in ['metric', 'imperial']"
        :key="u"
        @click="unit = u"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="unit === u ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ u === 'metric' ? 'Metric' : 'Imperial' }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label for="age" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Age</label>
        <input
          id="age"
          v-model="age"
          type="number"
          placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="height" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
          Height ({{ unit === 'metric' ? 'cm' : 'inches' }})
        </label>
        <input
          id="height"
          v-model="height"
          type="number"
          :placeholder="unit === 'metric' ? '175' : '69'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="weight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
          Weight ({{ unit === 'metric' ? 'kg' : 'lbs' }})
        </label>
        <input
          id="weight"
          v-model="weight"
          type="number"
          :placeholder="unit === 'metric' ? '70' : '154'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <!-- Activity Level -->
    <div class="mb-6">
      <label for="activity" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Activity Level</label>
      <select
        id="activity"
        v-model="activityLevel"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      >
        <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>

    <!-- Results -->
    <div v-if="tdee" class="text-center py-6 border-t border-stone-100">
      <div class="text-5xl font-bold text-stone-900 tabular-nums" data-testid="tdee-result">{{ formatNumber(tdee) }}</div>
      <div class="text-sm text-stone-500 mt-1">kcal / day</div>
      <div class="text-sm text-stone-400 mt-3" data-testid="bmr-result">BMR: {{ formatNumber(bmr) }} kcal</div>

      <!-- Calorie Targets -->
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">Weight Loss</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee - 500) }}</div>
          <div class="text-xs text-stone-400">kcal / day</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">Maintenance</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee) }}</div>
          <div class="text-xs text-stone-400">kcal / day</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">Weight Gain</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee + 500) }}</div>
          <div class="text-xs text-stone-400">kcal / day</div>
        </div>
      </div>
    </div>
  </div>
</template>
