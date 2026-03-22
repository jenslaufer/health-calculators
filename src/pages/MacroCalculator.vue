<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Macro Calculator — Free Protein, Carb & Fat Calculator',
  description: 'Calculate your ideal macronutrient split. Personalized protein, carb, and fat targets based on your goals and activity level.',
  path: '/macros',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Macro Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/macros',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const age = ref(null)
const gender = ref('male')
const height = ref(null)
const weight = ref(null)
const unit = ref('metric')
const activity = ref('moderate')
const goal = ref('maintain')

const activityLevels = [
  { key: 'sedentary', label: 'Sedentary', factor: 1.2 },
  { key: 'light', label: 'Lightly active', factor: 1.375 },
  { key: 'moderate', label: 'Moderately active', factor: 1.55 },
  { key: 'very', label: 'Very active', factor: 1.725 },
  { key: 'extreme', label: 'Extremely active', factor: 1.9 },
]

const goals = [
  { key: 'lose', label: 'Lose weight' },
  { key: 'maintain', label: 'Maintain' },
  { key: 'muscle', label: 'Build muscle' },
]

const macroSplits = {
  lose: { protein: 0.4, carbs: 0.3, fat: 0.3 },
  maintain: { protein: 0.3, carbs: 0.4, fat: 0.3 },
  muscle: { protein: 0.3, carbs: 0.45, fat: 0.25 },
}

const goalModifiers = { lose: 0.8, maintain: 1.0, muscle: 1.1 }

const tdee = computed(() => {
  if (!age.value || !height.value || !weight.value) return null

  let h = height.value
  let w = weight.value
  if (unit.value === 'imperial') {
    h = h * 2.54
    w = w * 0.453592
  }

  const bmr = gender.value === 'male'
    ? 10 * w + 6.25 * h - 5 * age.value + 5
    : 10 * w + 6.25 * h - 5 * age.value - 161

  const factor = activityLevels.find(a => a.key === activity.value)?.factor || 1.55
  return bmr * factor
})

const targetCalories = computed(() => {
  if (!tdee.value) return null
  return Math.round(tdee.value * goalModifiers[goal.value])
})

const macros = computed(() => {
  if (!targetCalories.value) return null
  const split = macroSplits[goal.value]
  const cal = targetCalories.value
  return {
    protein: { grams: Math.round((cal * split.protein) / 4), pct: Math.round(split.protein * 100) },
    carbs: { grams: Math.round((cal * split.carbs) / 4), pct: Math.round(split.carbs * 100) },
    fat: { grams: Math.round((cal * split.fat) / 9), pct: Math.round(split.fat * 100) },
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Macro Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Calculate your ideal protein, carb, and fat targets based on your goals.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- Unit toggle -->
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

    <!-- Age & Gender -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Age</label>
        <input
          v-model.number="age"
          type="number"
          placeholder="30"
          data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Gender</label>
        <div class="flex gap-2">
          <button
            @click="gender = 'male'"
            data-testid="gender-male"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >Male</button>
          <button
            @click="gender = 'female'"
            data-testid="gender-female"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >Female</button>
        </div>
      </div>
    </div>

    <!-- Height & Weight -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Height ({{ unit === 'metric' ? 'cm' : 'inches' }})
        </label>
        <input
          v-model.number="height"
          type="number"
          :placeholder="unit === 'metric' ? '175' : '69'"
          data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Weight ({{ unit === 'metric' ? 'kg' : 'lbs' }})
        </label>
        <input
          v-model.number="weight"
          type="number"
          :placeholder="unit === 'metric' ? '80' : '176'"
          data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <!-- Activity level -->
    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Activity Level</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="level in activityLevels"
          :key="level.key"
          @click="activity = level.key"
          :data-testid="'activity-' + level.key"
          :class="activity === level.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ level.label }}</button>
      </div>
    </div>

    <!-- Goal -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Goal</label>
      <div class="flex gap-2">
        <button
          v-for="g in goals"
          :key="g.key"
          @click="goal = g.key"
          :data-testid="'goal-' + g.key"
          :class="goal === g.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ g.label }}</button>
      </div>
    </div>

    <!-- Results -->
    <div v-if="targetCalories" class="pt-5 border-t border-stone-100">
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">Target Calories</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="target-calories">{{ targetCalories }}</span>
        <span class="text-lg text-stone-400 ml-1">kcal</span>
      </div>

      <!-- Macro cards -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-500 mx-auto mb-2"></div>
          <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="protein-grams">{{ macros.protein.grams }}</p>
          <p class="text-xs text-stone-500 font-medium">Protein (g)</p>
          <p class="text-xs text-stone-400 mt-1" data-testid="protein-pct">{{ macros.protein.pct }}%</p>
        </div>
        <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto mb-2"></div>
          <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="carbs-grams">{{ macros.carbs.grams }}</p>
          <p class="text-xs text-stone-500 font-medium">Carbs (g)</p>
          <p class="text-xs text-stone-400 mt-1" data-testid="carbs-pct">{{ macros.carbs.pct }}%</p>
        </div>
        <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
          <div class="w-2.5 h-2.5 rounded-full bg-rose-500 mx-auto mb-2"></div>
          <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="fat-grams">{{ macros.fat.grams }}</p>
          <p class="text-xs text-stone-500 font-medium">Fat (g)</p>
          <p class="text-xs text-stone-400 mt-1" data-testid="fat-pct">{{ macros.fat.pct }}%</p>
        </div>
      </div>

      <!-- Stacked bar -->
      <div class="rounded-full overflow-hidden flex" style="height: 12px" role="img" aria-label="Macro ratio" data-testid="macro-bar">
        <div class="bg-blue-500" :style="{ width: macros.protein.pct + '%', height: '100%' }"></div>
        <div class="bg-amber-500" :style="{ width: macros.carbs.pct + '%', height: '100%' }"></div>
        <div class="bg-rose-500" :style="{ width: macros.fat.pct + '%', height: '100%' }"></div>
      </div>
    </div>
  </div>
</template>
