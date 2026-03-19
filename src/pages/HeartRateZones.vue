<script setup>
import { ref, computed, watch } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Heart Rate Zone Calculator — Find Your Training Zones',
  meta: [
    { name: 'description', content: 'Calculate your five heart rate training zones. Standard and Karvonen methods for optimized fat burn, endurance, and peak performance.' },
  ],
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
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 py-12">
      <router-link to="/" class="text-sm text-blue-600 hover:text-blue-800">&larr; Back</router-link>

      <h1 class="mt-4 text-3xl font-bold text-gray-900">Heart Rate Zone Calculator</h1>
      <p class="mt-2 text-gray-600">Find your five training heart rate zones.</p>

      <div class="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div class="space-y-4">
          <div>
            <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
            <input
              id="age"
              v-model.number="age"
              type="number"
              min="1"
              max="120"
              placeholder="30"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label for="resting-hr" class="block text-sm font-medium text-gray-700">Resting Heart Rate (optional)</label>
            <input
              id="resting-hr"
              v-model.number="restingHr"
              type="number"
              min="30"
              max="120"
              placeholder="60"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <span class="block text-sm font-medium text-gray-700">Method</span>
            <div class="mt-2 flex gap-4">
              <label class="flex items-center gap-2 text-sm text-gray-700">
                <input v-model="method" type="radio" value="standard" class="text-blue-600" />
                Standard
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700" :class="{ 'opacity-50': !karvonenAvailable }">
                <input v-model="method" type="radio" value="karvonen" :disabled="!karvonenAvailable" class="text-blue-600" />
                Karvonen
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hrMax" class="mt-6 rounded-lg bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-500">Max Heart Rate</p>
        <p class="text-5xl font-bold text-gray-900">{{ hrMax }}</p>
        <p class="mt-1 text-sm text-gray-500">bpm</p>

        <div class="mt-6 flex h-3 overflow-hidden rounded-full">
          <div v-for="zone in zones" :key="zone.number" class="flex-1" :class="zone.color"></div>
        </div>

        <div class="mt-6 space-y-3">
          <div
            v-for="zone in zones"
            :key="zone.number"
            data-testid="zone-card"
            class="flex items-start gap-3 rounded-lg border border-gray-100 p-4"
          >
            <div class="mt-1 h-3 w-3 shrink-0 rounded-full" :class="zone.dot"></div>
            <div class="min-w-0 flex-1">
              <div class="flex items-baseline justify-between">
                <h3 class="text-sm font-semibold text-gray-900">Zone {{ zone.number }} — {{ zone.name }}</h3>
                <span data-testid="zone-range" class="text-sm font-medium text-gray-700">{{ zone.bpmLow }}–{{ zone.bpmHigh }} bpm</span>
              </div>
              <p class="mt-1 text-xs text-gray-500">{{ zone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
