<script setup>
import { ref, computed, watch } from 'vue'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

useHead({
  title: 'Heart Rate Zone Calculator — Find Your Training Zones',
  description: 'Calculate your five heart rate training zones. Standard and Karvonen methods for optimized fat burn, endurance, and peak performance.',
  path: '/heart-rate',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Heart Rate Zone Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/heart-rate',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const age = ref(null)
const restingHr = ref(null)
const method = ref('standard')

const hrMax = computed(() => age.value ? 220 - age.value : null)

const karvonenAvailable = computed(() => !!restingHr.value)

watch(karvonenAvailable, (available) => {
  if (!available && method.value === 'karvonen') {
    method.value = 'standard'
  }
})

const zoneDefs = [
  { name: 'Recovery', low: 0.50, high: 0.60, color: 'bg-blue-400', dot: 'bg-blue-400', description: 'Light activity, active recovery. Improves overall health and aids recovery.' },
  { name: 'Fat Burn', low: 0.60, high: 0.70, color: 'bg-green-500', dot: 'bg-green-500', description: 'Easy endurance training. Builds aerobic base and burns fat efficiently.' },
  { name: 'Aerobic', low: 0.70, high: 0.80, color: 'bg-yellow-500', dot: 'bg-yellow-500', description: 'Moderate effort. Improves cardiovascular fitness and endurance.' },
  { name: 'Anaerobic', low: 0.80, high: 0.90, color: 'bg-orange-500', dot: 'bg-orange-500', description: 'Hard effort. Increases speed, power, and lactate threshold.' },
  { name: 'VO2 Max', low: 0.90, high: 1.00, color: 'bg-red-500', dot: 'bg-red-500', description: 'Maximum effort. Develops peak performance and speed.' },
]

const zones = computed(() => {
  if (!hrMax.value) return []

  return zoneDefs.map((z, i) => {
    let low, high
    if (method.value === 'karvonen' && restingHr.value) {
      const hrr = hrMax.value - restingHr.value
      low = Math.round(restingHr.value + hrr * z.low)
      high = Math.round(restingHr.value + hrr * z.high)
    } else {
      low = Math.round(hrMax.value * z.low)
      high = Math.round(hrMax.value * z.high)
    }
    return { ...z, bpmLow: low, bpmHigh: high, number: i + 1 }
  })
})
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Heart Rate Zone Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Find your five training heart rate zones.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="space-y-6">
      <div>
        <label for="age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Age</label>
        <input
          id="age"
          v-model.number="age"
          type="number"
          min="1"
          max="120"
          placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="resting-hr" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Resting Heart Rate (optional)</label>
        <input
          id="resting-hr"
          v-model.number="restingHr"
          type="number"
          min="30"
          max="120"
          placeholder="60"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <span class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">Method</span>
        <div class="flex gap-2">
          <button
            @click="method = 'standard'"
            :class="method === 'standard' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >Standard</button>
          <button
            @click="method = 'karvonen'"
            :disabled="!karvonenAvailable"
            :class="[
              method === 'karvonen' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
              !karvonenAvailable ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >Karvonen</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="hrMax" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Max Heart Rate</p>
    <p class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ hrMax }}</p>
    <p class="mt-1 text-sm text-stone-500">bpm</p>

    <div class="mt-6 flex h-3 overflow-hidden rounded-full">
      <div v-for="zone in zones" :key="zone.number" class="flex-1" :class="zone.color"></div>
    </div>

    <div class="mt-6 space-y-3">
      <div
        v-for="zone in zones"
        :key="zone.number"
        data-testid="zone-card"
        class="flex items-start gap-3 rounded-lg border border-stone-100 p-4"
      >
        <div class="mt-1 h-3 w-3 shrink-0 rounded-full" :class="zone.dot"></div>
        <div class="min-w-0 flex-1">
          <div class="flex items-baseline justify-between">
            <h3 class="text-sm font-semibold text-stone-900">Zone {{ zone.number }} — {{ zone.name }}</h3>
            <span data-testid="zone-range" class="text-sm font-medium text-stone-700">{{ zone.bpmLow }}–{{ zone.bpmHigh }} bpm</span>
          </div>
          <p class="mt-1 text-xs text-stone-500">{{ zone.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <BlogBanner calculator-path="/heart-rate" />
</template>
