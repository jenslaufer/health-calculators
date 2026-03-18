<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'BMI Calculator — Free Body Mass Index Calculator',
  meta: [
    { name: 'description', content: 'Calculate your Body Mass Index instantly. Free, science-backed BMI calculator with weight category classification.' },
  ],
})

const unit = ref('metric')
const height = ref('')
const weight = ref('')

const bmi = computed(() => {
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!h || !w || h <= 0 || w <= 0) return null

  let heightM, weightKg
  if (unit.value === 'metric') {
    heightM = h / 100
    weightKg = w
  } else {
    heightM = h * 0.0254
    weightKg = w * 0.453592
  }
  return weightKg / (heightM * heightM)
})

const category = computed(() => {
  if (!bmi.value) return null
  if (bmi.value < 18.5) return { label: 'Underweight', color: 'text-blue-600' }
  if (bmi.value < 25) return { label: 'Normal weight', color: 'text-green-600' }
  if (bmi.value < 30) return { label: 'Overweight', color: 'text-yellow-600' }
  return { label: 'Obese', color: 'text-red-600' }
})
</script>

<template>
  <div class="min-h-screen bg-stone-50">
    <div class="bg-gradient-to-b from-stone-900 to-stone-800 text-white">
      <div class="max-w-2xl mx-auto px-4 py-12">
        <router-link to="/" class="text-stone-400 hover:text-white text-sm mb-4 inline-block">&larr; All Calculators</router-link>
        <h1 class="text-3xl font-bold tracking-tight">BMI Calculator</h1>
        <p class="text-stone-400 mt-2">Calculate your Body Mass Index based on height and weight.</p>
      </div>
    </div>

    <div class="max-w-2xl mx-auto px-4 -mt-6">
      <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
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

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label class="text-xs font-semibold text-stone-500 tracking-wide uppercase block mb-1">
              Height ({{ unit === 'metric' ? 'cm' : 'inches' }})
            </label>
            <input
              v-model="height"
              type="number"
              :placeholder="unit === 'metric' ? '175' : '69'"
              class="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:border-stone-600"
            />
          </div>
          <div>
            <label class="text-xs font-semibold text-stone-500 tracking-wide uppercase block mb-1">
              Weight ({{ unit === 'metric' ? 'kg' : 'lbs' }})
            </label>
            <input
              v-model="weight"
              type="number"
              :placeholder="unit === 'metric' ? '70' : '154'"
              class="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:border-stone-600"
            />
          </div>
        </div>

        <!-- Result -->
        <div v-if="bmi" class="text-center py-6 border-t border-stone-100">
          <div class="text-5xl font-bold text-stone-900 tabular-nums">{{ bmi.toFixed(1) }}</div>
          <div :class="category.color" class="text-sm font-semibold mt-2">{{ category.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
