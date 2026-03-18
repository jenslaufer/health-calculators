<script setup>
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Health Calculators — Free, Science-Backed Health Tools',
  description: 'Free health calculators: BMI, TDEE, macros, body fat, and more. Science-backed formulas, instant results, no sign-up.',
})

const calculators = [
  { name: 'BMI Calculator', description: 'Check if your weight is in a healthy range.', path: '/bmi', ready: true },
  { name: 'TDEE Calculator', description: 'Find your daily calorie needs.', path: '/tdee', ready: false },
  { name: 'Macro Calculator', description: 'Get your ideal protein, carb, and fat split.', path: '/macros', ready: false },
  { name: 'Body Fat Calculator', description: 'Estimate your body fat percentage.', path: '/body-fat', ready: false },
  { name: 'Ideal Weight Calculator', description: 'Find your healthy weight range.', path: '/ideal-weight', ready: true },
  { name: 'Heart Rate Zones', description: 'Discover your training heart rate zones.', path: '/heart-rate', ready: false },
  { name: 'Water Intake Calculator', description: 'How much water should you drink daily?', path: '/water', ready: false },
  { name: 'Sleep Cycle Calculator', description: 'Find your optimal bedtime or wake time.', path: '/sleep', ready: false },
]
</script>

<template>
  <div class="min-h-screen bg-stone-50">
    <div class="bg-gradient-to-br from-[#131836] to-[#1a2248] py-14 px-4">
      <div class="max-w-3xl mx-auto">
        <p class="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">Free Health Tools</p>
        <h1 class="text-4xl font-bold text-white tracking-tight leading-tight mb-3">Your health, calculated.</h1>
        <p class="text-lg text-stone-400 leading-relaxed">Science-backed health calculators. No sign-up. Instant results.</p>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-8">
      <div class="grid gap-4 sm:grid-cols-2">
        <component
          v-for="calc in calculators"
          :key="calc.path"
          :is="calc.ready ? 'router-link' : 'div'"
          :to="calc.ready ? calc.path : undefined"
          :class="[
            'group block rounded-xl border p-5 transition-all duration-200',
            calc.ready
              ? 'bg-white border-stone-200 shadow-sm hover:shadow-md hover:border-stone-400 cursor-pointer'
              : 'bg-stone-100 border-stone-200 opacity-50 cursor-default'
          ]"
        >
          <h2 class="text-lg font-semibold text-stone-900 group-hover:text-stone-700 mb-1">{{ calc.name }}</h2>
          <p class="text-sm text-stone-500">{{ calc.description }}</p>
          <span v-if="!calc.ready" class="text-xs text-stone-400 tracking-wide uppercase mt-2 inline-block">Coming soon</span>
        </component>
      </div>
    </div>
  </div>
</template>
