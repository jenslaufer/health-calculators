<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Health Calculators — Free Online Health Tools',
  meta: [
    { name: 'description', content: 'Free online health calculators. BMI, heart rate zones, and more.' },
  ],
})

const calculators = [
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index', path: '/bmi', ready: true },
  { name: 'Heart Rate Zones', description: 'Find your training heart rate zones', path: '/heart-rate', ready: true },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 py-12">
      <h1 class="text-3xl font-bold text-gray-900">Health Calculators</h1>
      <p class="mt-2 text-gray-600">Free tools to understand your health metrics.</p>

      <div class="mt-8 space-y-4">
        <router-link
          v-for="calc in calculators"
          :key="calc.path"
          :to="calc.ready ? calc.path : ''"
          class="block rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
          :class="{ 'opacity-50 pointer-events-none': !calc.ready }"
        >
          <h2 class="text-lg font-semibold text-gray-900">{{ calc.name }}</h2>
          <p class="mt-1 text-sm text-gray-500">{{ calc.description }}</p>
          <span v-if="!calc.ready" class="mt-2 inline-block text-xs text-gray-400">Coming soon</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
