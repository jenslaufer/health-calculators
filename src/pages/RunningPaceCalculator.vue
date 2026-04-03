<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('runningPace.meta.title'),
  description: t('runningPace.meta.description'),
  routeKey: 'runningPace',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Running Pace Calculator',
    url: 'https://healthcalculator.app/running-pace-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const KM_TO_MI = 1.60934

const distances = [
  { key: '5k', km: 5 },
  { key: '10k', km: 10 },
  { key: 'half', km: 21.0975 },
  { key: 'marathon', km: 42.195 },
  { key: 'custom', km: null },
]

const selectedDistance = ref('10k')
const customDistance = ref(null)
const mode = ref('time') // 'time' or 'pace'
const hours = ref(null)
const minutes = ref(null)
const seconds = ref(null)
const paceMin = ref(null)
const paceSec = ref(null)
const splitUnit = ref('km')

const distanceKm = computed(() => {
  if (selectedDistance.value === 'custom') return customDistance.value
  return distances.find(d => d.key === selectedDistance.value)?.km || null
})

const totalTimeSeconds = computed(() => {
  if (mode.value !== 'time') return null
  const h = hours.value || 0
  const m = minutes.value || 0
  const s = seconds.value || 0
  const total = h * 3600 + m * 60 + s
  return total > 0 ? total : null
})

const paceSecondsPerKm = computed(() => {
  if (mode.value === 'pace') {
    const m = paceMin.value || 0
    const s = paceSec.value || 0
    const total = m * 60 + s
    return total > 0 ? total : null
  }
  if (!totalTimeSeconds.value || !distanceKm.value || distanceKm.value <= 0) return null
  return totalTimeSeconds.value / distanceKm.value
})

const finishTimeSeconds = computed(() => {
  if (mode.value === 'time') return totalTimeSeconds.value
  if (!paceSecondsPerKm.value || !distanceKm.value) return null
  return paceSecondsPerKm.value * distanceKm.value
})

const hasResult = computed(() => paceSecondsPerKm.value && distanceKm.value && distanceKm.value > 0)

const pacePerKm = computed(() => {
  if (!paceSecondsPerKm.value) return null
  const mins = Math.floor(paceSecondsPerKm.value / 60)
  const secs = Math.round(paceSecondsPerKm.value % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
})

const pacePerMi = computed(() => {
  if (!paceSecondsPerKm.value) return null
  const secPerMi = paceSecondsPerKm.value * KM_TO_MI
  const mins = Math.floor(secPerMi / 60)
  const secs = Math.round(secPerMi % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
})

const finishTimeFormatted = computed(() => {
  if (!finishTimeSeconds.value) return null
  const total = Math.round(finishTimeSeconds.value)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
})

const speedKmh = computed(() => {
  if (!paceSecondsPerKm.value) return null
  return (3600 / paceSecondsPerKm.value).toFixed(1)
})

const negativeSplitPlan = computed(() => {
  if (!distanceKm.value || !paceSecondsPerKm.value) return null
  const half = distanceKm.value / 2
  const firstPace = paceSecondsPerKm.value * 1.025
  const secondPace = paceSecondsPerKm.value * 0.975
  return {
    firstHalfTime: formatSec(firstPace * half),
    secondHalfTime: formatSec(secondPace * half),
    firstHalfPace: formatPace(firstPace),
    secondHalfPace: formatPace(secondPace),
  }
})

const splits = computed(() => {
  if (!distanceKm.value || !paceSecondsPerKm.value) return []
  const splitDist = splitUnit.value === 'mi' ? KM_TO_MI : 1
  const numFull = Math.floor(distanceKm.value / splitDist)
  const remainder = distanceKm.value % splitDist
  const result = []
  let cumTime = 0
  for (let i = 1; i <= numFull; i++) {
    const splitTime = paceSecondsPerKm.value * splitDist
    cumTime += splitTime
    result.push({ num: i, splitTime: formatSec(splitTime), cumTime: formatSec(cumTime) })
  }
  if (remainder > 0.01) {
    const splitTime = paceSecondsPerKm.value * remainder
    cumTime += splitTime
    result.push({
      num: numFull + 1,
      splitTime: formatSec(splitTime),
      cumTime: formatSec(cumTime),
      partial: remainder.toFixed(2),
    })
  }
  return result
})

function formatSec(totalSec) {
  const total = Math.round(totalSec)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
}

function formatPace(secPerKm) {
  const mins = Math.floor(secPerKm / 60)
  const secs = Math.round(secPerKm % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('runningPace.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('runningPace.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- Distance -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.distance') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="d in distances"
          :key="d.key"
          @click="selectedDistance = d.key"
          :class="selectedDistance === d.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('runningPace.distance_' + d.key) }}</button>
      </div>
      <input
        v-if="selectedDistance === 'custom'"
        v-model.number="customDistance"
        type="number"
        step="0.1"
        min="0.1"
        :placeholder="t('runningPace.customPlaceholder')"
        data-testid="custom-distance"
        class="mt-3 w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
    </div>

    <!-- Mode -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.calculateFrom') }}</label>
      <div class="flex gap-2">
        <button
          @click="mode = 'time'"
          :class="mode === 'time' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('runningPace.fromTime') }}</button>
        <button
          @click="mode = 'pace'"
          :class="mode === 'pace' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('runningPace.fromPace') }}</button>
      </div>
    </div>

    <!-- Time inputs -->
    <div v-if="mode === 'time'" class="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.hours') }}</label>
        <input v-model.number="hours" type="number" min="0" placeholder="0" data-testid="hours"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.minutes') }}</label>
        <input v-model.number="minutes" type="number" min="0" max="59" placeholder="50" data-testid="minutes"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.seconds') }}</label>
        <input v-model.number="seconds" type="number" min="0" max="59" placeholder="0" data-testid="seconds"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Pace inputs -->
    <div v-if="mode === 'pace'" class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.paceMin') }}</label>
        <input v-model.number="paceMin" type="number" min="0" placeholder="5" data-testid="pace-min"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('runningPace.paceSec') }}</label>
        <input v-model.number="paceSec" type="number" min="0" max="59" placeholder="0" data-testid="pace-sec"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Results -->
    <div v-if="hasResult" class="pt-5 border-t border-stone-100">
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('runningPace.paceKm') }}</p>
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="pace-per-km">{{ pacePerKm }}</span>
          <span class="text-sm text-stone-400 ml-1">min/km</span>
        </div>
        <div>
          <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('runningPace.paceMi') }}</p>
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="pace-per-mi">{{ pacePerMi }}</span>
          <span class="text-sm text-stone-400 ml-1">min/mi</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('runningPace.finishTime') }}</p>
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="finish-time">{{ finishTimeFormatted }}</span>
        </div>
        <div>
          <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('runningPace.speed') }}</p>
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="speed">{{ speedKmh }}</span>
          <span class="text-sm text-stone-400 ml-1">km/h</span>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Negative split plan -->
  <div v-if="hasResult && negativeSplitPlan" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6" data-testid="negative-split">
    <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('runningPace.negativeSplit') }}</h2>
    <p class="text-sm text-stone-500 mb-4">{{ t('runningPace.negativeSplitDesc') }}</p>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('runningPace.firstHalf') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ negativeSplitPlan.firstHalfTime }}</p>
        <p class="text-sm text-stone-400">{{ negativeSplitPlan.firstHalfPace }} min/km</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('runningPace.secondHalf') }}</p>
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ negativeSplitPlan.secondHalfTime }}</p>
        <p class="text-sm text-stone-400">{{ negativeSplitPlan.secondHalfPace }} min/km</p>
      </div>
    </div>
  </div>

  <!-- Splits table -->
  <div v-if="hasResult && splits.length" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6" data-testid="splits-table">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-stone-900">{{ t('runningPace.splits') }}</h2>
      <div class="flex gap-2">
        <button
          @click="splitUnit = 'km'"
          :class="splitUnit === 'km' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150"
        >km</button>
        <button
          @click="splitUnit = 'mi'"
          :class="splitUnit === 'mi' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150"
        >mi</button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ splitUnit === 'km' ? 'km' : 'mi' }}</th>
            <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('runningPace.splitTime') }}</th>
            <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('runningPace.cumTime') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="s in splits" :key="s.num">
            <td class="px-4 py-2.5 text-stone-600 tabular-nums">{{ s.partial ? s.partial : s.num }}</td>
            <td class="px-4 py-2.5 text-stone-900 font-medium tabular-nums">{{ s.splitTime }}</td>
            <td class="px-4 py-2.5 text-stone-900 font-medium tabular-nums">{{ s.cumTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <BlogBanner calculator-key="runningPace" />
  <AffiliateBanner />
</template>
