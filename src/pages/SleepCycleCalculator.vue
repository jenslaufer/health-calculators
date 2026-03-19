<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Sleep Cycle Calculator — Optimal Bedtime & Wake Time',
  description: 'Find your optimal bedtime or wake time based on 90-minute sleep cycles. Wake up refreshed, not groggy.',
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
  <div class="min-h-screen bg-stone-50">
    <div class="bg-gradient-to-br from-[#131836] to-[#1a2248] py-8 px-4">
      <div class="max-w-3xl mx-auto">
        <router-link to="/" class="text-sm text-stone-400 hover:text-white transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
        <h1 class="text-4xl font-bold text-white tracking-tight leading-tight mb-2">Sleep Cycle Calculator</h1>
        <p class="text-stone-400">Find your optimal bedtime or wake time based on sleep cycles.</p>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-8">
      <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6">
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
          <label class="block text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1.5">
            I want to {{ mode === 'wake' ? 'wake up' : 'go to sleep' }} at
          </label>
          <input
            v-model="time"
            type="time"
            class="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:border-stone-600 focus:outline-none transition-colors text-stone-900"
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

      <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
        <h2 class="text-lg font-semibold text-stone-900 mb-3">How it works</h2>
        <p class="text-sm text-stone-600 leading-relaxed">
          A full sleep cycle lasts ~90 minutes. Waking between cycles helps you feel refreshed.
          This calculator factors in ~15 minutes to fall asleep and recommends times aligned with complete cycles.
        </p>
      </div>
    </div>
  </div>
</template>
