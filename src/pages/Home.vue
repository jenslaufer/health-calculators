<script setup>
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Health Calculators — Free BMI, TDEE, Body Fat & More',
  description: 'Free online health calculators: BMI, TDEE, body fat, macros, ideal weight, water intake, heart rate zones, and sleep cycles. Science-backed formulas, instant results, no sign-up.',
  path: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Health Calculators',
    url: 'https://jenslaufer.github.io/health-calculators/',
    description: 'Free online health calculators with science-backed formulas.',
  },
})

const groups = [
  {
    label: 'Body Composition',
    items: [
      { name: 'BMI Calculator', description: 'Check if your weight is in a healthy range.', path: '/bmi' },
      { name: 'Body Fat Calculator', description: 'Estimate your body fat percentage.', path: '/body-fat' },
      { name: 'Ideal Weight Calculator', description: 'Find your healthy weight range.', path: '/ideal-weight' },
    ],
  },
  {
    label: 'Nutrition & Energy',
    items: [
      { name: 'TDEE Calculator', description: 'Find your daily calorie needs.', path: '/tdee' },
      { name: 'Macro Calculator', description: 'Get your ideal protein, carb, and fat split.', path: '/macros' },
      { name: 'Water Intake Calculator', description: 'How much water should you drink daily?', path: '/water' },
    ],
  },
  {
    label: 'Fitness & Recovery',
    items: [
      { name: 'Heart Rate Zones', description: 'Discover your training heart rate zones.', path: '/heart-rate' },
      { name: 'Sleep Cycle Calculator', description: 'Find your optimal bedtime or wake time.', path: '/sleep' },
    ],
  },
]
</script>

<template>
  <div>
    <div class="mb-12">
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Your health, calculated.</h1>
      <p class="text-base text-stone-500 font-normal leading-relaxed">Science-backed health calculators. No sign-up. Instant results.</p>
    </div>

    <div>
      <div v-for="group in groups" :key="group.label" class="mb-10">
        <h2 class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">{{ group.label }}</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link
            v-for="calc in group.items"
            :key="calc.path"
            :to="calc.path"
            class="group block p-8 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-stone-400 hover:shadow-md transition-all duration-200"
          >
            <h2 class="text-base font-semibold text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
              {{ calc.name }}
            </h2>
            <p class="text-sm text-stone-500 leading-relaxed">
              {{ calc.description }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
