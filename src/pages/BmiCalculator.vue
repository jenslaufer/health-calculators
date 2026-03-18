<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'BMI Calculator — Calculate Your Body Mass Index',
  meta: [
    { name: 'description', content: 'Calculate your Body Mass Index (BMI) with this free tool. Enter your height and weight to find out your BMI category.' },
  ],
})

const height = ref(null)
const weight = ref(null)

const bmi = computed(() => {
  if (!height.value || !weight.value) return null
  const h = height.value / 100
  return weight.value / (h * h)
})

const category = computed(() => {
  if (!bmi.value) return null
  if (bmi.value < 18.5) return { label: 'Underweight', color: 'text-blue-500' }
  if (bmi.value < 25) return { label: 'Normal weight', color: 'text-green-500' }
  if (bmi.value < 30) return { label: 'Overweight', color: 'text-yellow-500' }
  return { label: 'Obese', color: 'text-red-500' }
})

const barPosition = computed(() => {
  if (!bmi.value) return 0
  return Math.min(Math.max(((bmi.value - 15) / 25) * 100, 0), 100)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 py-12">
      <router-link to="/" class="text-sm text-blue-600 hover:text-blue-800">&larr; Back</router-link>

      <h1 class="mt-4 text-3xl font-bold text-gray-900">BMI Calculator</h1>
      <p class="mt-2 text-gray-600">Calculate your Body Mass Index.</p>

      <div class="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div class="space-y-4">
          <div>
            <label for="height" class="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              id="height"
              v-model.number="height"
              type="number"
              min="1"
              placeholder="175"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label for="weight" class="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              id="weight"
              v-model.number="weight"
              type="number"
              min="1"
              placeholder="70"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div v-if="bmi" class="mt-6 rounded-lg bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-500">Your BMI</p>
        <p class="text-5xl font-bold text-gray-900">{{ bmi.toFixed(1) }}</p>
        <p class="mt-1 text-lg font-medium" :class="category.color">{{ category.label }}</p>

        <div class="mt-6">
          <div class="flex h-3 overflow-hidden rounded-full">
            <div class="w-[22%] bg-blue-400"></div>
            <div class="w-[26%] bg-green-500"></div>
            <div class="w-[20%] bg-yellow-500"></div>
            <div class="w-[32%] bg-red-500"></div>
          </div>
          <div class="relative mt-1">
            <div class="absolute h-3 w-0.5 bg-gray-900 transition-all" :style="{ left: barPosition + '%' }"></div>
          </div>
          <div class="mt-3 flex justify-between text-xs text-gray-500">
            <span>15</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
