<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'BMI Calculator — Free Body Mass Index Calculator',
  description: 'Calculate your Body Mass Index instantly. Science-backed BMI formula, no sign-up required.',
})

const height = ref(null)
const weight = ref(null)
const unit = ref('metric')

const bmi = computed(() => {
  if (!height.value || !weight.value) return null
  if (unit.value === 'metric') {
    const m = height.value / 100
    return weight.value / (m * m)
  }
  return (weight.value * 703) / (height.value * height.value)
})

const category = computed(() => {
  if (!bmi.value) return null
  if (bmi.value < 18.5) return { label: 'Underweight', color: 'text-blue-500', bg: 'bg-blue-500' }
  if (bmi.value < 25) return { label: 'Normal weight', color: 'text-green-600', bg: 'bg-green-600' }
  if (bmi.value < 30) return { label: 'Overweight', color: 'text-yellow-500', bg: 'bg-yellow-500' }
  return { label: 'Obese', color: 'text-red-500', bg: 'bg-red-500' }
})

const bmiFormatted = computed(() => bmi.value?.toFixed(1))

const barPosition = computed(() => {
  if (!bmi.value) return 0
  const clamped = Math.min(Math.max(bmi.value, 10), 40)
  return ((clamped - 10) / 30) * 100
})
</script>

<template>
  <div class="min-h-screen bg-stone-50">
    <div class="bg-gradient-to-br from-[#131836] to-[#1a2248] py-8 px-4">
      <div class="max-w-3xl mx-auto">
        <router-link to="/" class="text-sm text-stone-400 hover:text-white transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
        <h1 class="text-4xl font-bold text-white tracking-tight leading-tight mb-2">BMI Calculator</h1>
        <p class="text-stone-400">Calculate your Body Mass Index to check if your weight is in a healthy range.</p>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-8">
      <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6">
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

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label class="block text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1.5">
              Height ({{ unit === 'metric' ? 'cm' : 'inches' }})
            </label>
            <input
              v-model.number="height"
              type="number"
              :placeholder="unit === 'metric' ? '170' : '67'"
              class="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:border-stone-600 focus:outline-none transition-colors text-stone-900"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1.5">
              Weight ({{ unit === 'metric' ? 'kg' : 'lbs' }})
            </label>
            <input
              v-model.number="weight"
              type="number"
              :placeholder="unit === 'metric' ? '70' : '154'"
              class="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:border-stone-600 focus:outline-none transition-colors text-stone-900"
            />
          </div>
        </div>

        <div v-if="bmi" class="pt-5 border-t border-stone-100">
          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ bmiFormatted }}</span>
            <span :class="category.color" class="text-lg font-semibold">{{ category.label }}</span>
          </div>

          <div class="relative h-2.5 bg-stone-200 rounded-full overflow-hidden mb-1.5">
            <div class="absolute inset-0 flex">
              <div class="flex-1 bg-blue-400/8"></div>
              <div class="flex-1 bg-green-600"></div>
              <div class="flex-1 bg-yellow-500"></div>
              <div class="flex-1 bg-red-500"></div>
            </div>
            <div
              class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform"
              :style="{ left: barPosition + '%' }"
            ></div>
          </div>
          <div class="flex text-[10px] text-stone-400 tabular-nums">
            <div class="flex-1">18.5</div>
            <div class="flex-1 text-center">25</div>
            <div class="flex-1 text-center">30</div>
            <div class="flex-1 text-right">40</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-3">BMI Categories</h2>
        <div class="space-y-3.5">
          <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-400/8 border border-stone-300"></div>
              <span class="text-sm text-stone-600">Underweight</span>
            </div>
            <span class="text-sm font-medium text-stone-900 tabular-nums">&lt; 18.5</span>
          </div>
          <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-green-600"></div>
              <span class="text-sm text-stone-600">Normal weight</span>
            </div>
            <span class="text-sm font-medium text-stone-900 tabular-nums">18.5 – 24.9</span>
          </div>
          <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <span class="text-sm text-stone-600">Overweight</span>
            </div>
            <span class="text-sm font-medium text-stone-900 tabular-nums">25.0 – 29.9</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <span class="text-sm text-stone-600">Obese</span>
            </div>
            <span class="text-sm font-medium text-stone-900 tabular-nums">&ge; 30.0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
