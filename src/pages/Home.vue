<script setup>
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Health Calculators — Free Online Health Tools',
  meta: [
    { name: 'description', content: 'Free, science-backed health calculators. BMI, TDEE, and more.' },
  ],
})

const calculators = [
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index', path: '/bmi', ready: true },
  { name: 'TDEE Calculator', description: 'Calculate your daily calorie needs', path: '/tdee', ready: true },
]
</script>

<template>
  <div class="min-h-screen bg-stone-50">
    <div class="bg-gradient-to-b from-stone-900 to-stone-800 text-white">
      <div class="max-w-2xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold tracking-tight">Health Calculators</h1>
        <p class="text-stone-400 mt-2">Free, science-backed tools for your health.</p>
      </div>
    </div>

    <div class="max-w-2xl mx-auto px-4 -mt-6">
      <div class="grid gap-4">
        <router-link
          v-for="calc in calculators"
          :key="calc.path"
          :to="calc.ready ? calc.path : ''"
          class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 block"
          :class="calc.ready ? 'hover:border-stone-400 transition-colors' : 'opacity-50 pointer-events-none'"
        >
          <h2 class="font-semibold text-stone-900">{{ calc.name }}</h2>
          <p class="text-sm text-stone-500 mt-1">{{ calc.description }}</p>
          <span v-if="!calc.ready" class="text-xs text-stone-400 mt-2 inline-block">Coming soon</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
