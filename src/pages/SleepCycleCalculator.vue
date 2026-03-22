<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Sleep Cycle Calculator — Optimal Bedtime & Wake Time',
  description: 'Find your optimal bedtime or wake time based on 90-minute sleep cycles. Wake up refreshed, not groggy.',
  path: '/sleep',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Sleep Cycle Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/sleep',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const mode = ref('wake') // 'wake' = I want to wake up at, 'sleep' = I want to go to sleep at
const time = ref('')

const CYCLE_MINUTES = 90
const FALL_ASLEEP_MINUTES = 15
const CYCLE_COUNTS = [6, 5, 4]

function addMinutes(timeStr, minutes) {
  const [h, m] = timeStr.split(':').map(Number)
  const total = h * 60 + m + minutes
  const wrapped = ((total % 1440) + 1440) % 1440
  return String(Math.floor(wrapped / 60)).padStart(2, '0') + ':' + String(wrapped % 60).padStart(2, '0')
}

function subtractMinutes(timeStr, minutes) {
  return addMinutes(timeStr, -minutes)
}

function formatDuration(cycles) {
  const totalMin = cycles * CYCLE_MINUTES
  const hours = Math.floor(totalMin / 60)
  const mins = totalMin % 60
  return mins ? `${hours}h ${mins}m` : `${hours}h`
}

const options = computed(() => {
  if (!time.value) return []
  return CYCLE_COUNTS.map((cycles) => {
    const totalSleepMin = cycles * CYCLE_MINUTES
    let resultTime
    if (mode.value === 'wake') {
      resultTime = subtractMinutes(time.value, totalSleepMin + FALL_ASLEEP_MINUTES)
    } else {
      resultTime = addMinutes(time.value, FALL_ASLEEP_MINUTES + totalSleepMin)
    }
    return {
      cycles,
      time: resultTime,
      duration: formatDuration(cycles),
      recommended: cycles === 5,
    }
  })
})
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Sleep Cycle Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Find your optimal bedtime or wake time based on sleep cycles.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="mode = 'wake'"
        :class="mode === 'wake' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Wake up at</button>
      <button
        @click="mode = 'sleep'"
        :class="mode === 'sleep' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Go to sleep at</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        I want to {{ mode === 'wake' ? 'wake up' : 'go to sleep' }} at
      </label>
      <input
        v-model="time"
        type="time"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
    </div>

    <div v-if="options.length" class="grid gap-4 sm:grid-cols-3">
      <div
        v-for="opt in options"
        :key="opt.cycles"
        data-testid="cycle-option"
        :class="[
          'rounded-xl border p-5 text-center',
          opt.recommended
            ? 'border-green-600 bg-green-50'
            : 'border-stone-200'
        ]"
      >
        <span
          v-if="opt.recommended"
          class="inline-block text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2.5 py-0.5 mb-2"
        >Recommended</span>
        <div class="text-3xl font-bold text-stone-900 tabular-nums mb-1">{{ opt.time }}</div>
        <div class="text-sm text-stone-500">{{ opt.cycles }} cycles &middot; {{ opt.duration }}</div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">How it works</h2>
    <p class="text-sm text-stone-600 leading-relaxed">
      A full sleep cycle lasts ~90 minutes. Waking between cycles helps you feel refreshed.
      This calculator factors in ~15 minutes to fall asleep and recommends times aligned with complete cycles.
    </p>
  </div>
</template>
