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
  title: t('intermittentFasting.meta.title'),
  description: t('intermittentFasting.meta.description'),
  routeKey: 'intermittentFasting',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Intermittent Fasting Calculator',
    url: 'https://healthcalculator.app/intermittent-fasting-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const PROTOCOLS = {
  '16:8': { fastHours: 16, eatHours: 8 },
  '18:6': { fastHours: 18, eatHours: 6 },
  '20:4': { fastHours: 20, eatHours: 4 },
  'OMAD': { fastHours: 23, eatHours: 1 },
}

const protocol = ref('16:8')
const mode = ref('lastMeal')
const time = ref('')

function parseTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number)
  return h * 60 + m
}

function formatTime(totalMinutes) {
  const wrapped = ((totalMinutes % 1440) + 1440) % 1440
  return String(Math.floor(wrapped / 60)).padStart(2, '0') + ':' + String(wrapped % 60).padStart(2, '0')
}

const result = computed(() => {
  if (!time.value || !PROTOCOLS[protocol.value]) return null
  const { fastHours, eatHours } = PROTOCOLS[protocol.value]
  const timeMin = parseTime(time.value)

  if (mode.value === 'lastMeal') {
    const fastingStart = timeMin
    const fastingEnd = timeMin + fastHours * 60
    const eatingStart = fastingEnd
    const eatingEnd = eatingStart + eatHours * 60
    return {
      fastingStart: formatTime(fastingStart),
      fastingEnd: formatTime(fastingEnd),
      eatingStart: formatTime(eatingStart),
      eatingEnd: formatTime(eatingEnd),
      fastHours,
      eatHours,
    }
  } else {
    const eatingStart = timeMin
    const eatingEnd = timeMin + eatHours * 60
    const fastingStart = eatingEnd
    const fastingEnd = fastingStart + fastHours * 60
    return {
      eatingStart: formatTime(eatingStart),
      eatingEnd: formatTime(eatingEnd),
      fastingStart: formatTime(fastingStart),
      fastingEnd: formatTime(fastingEnd),
      fastHours,
      eatHours,
    }
  }
})

const timelineSegments = computed(() => {
  if (!result.value) return []
  const { fastHours, eatHours } = result.value
  const fastPct = (fastHours / 24) * 100
  const eatPct = (eatHours / 24) * 100
  return [
    { label: t('intermittentFasting.fasting'), pct: fastPct, color: 'bg-stone-700' },
    { label: t('intermittentFasting.eating'), pct: eatPct, color: 'bg-green-500' },
  ]
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('intermittentFasting.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('intermittentFasting.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- Protocol selection -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('intermittentFasting.protocol') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="p in Object.keys(PROTOCOLS)"
          :key="p"
          @click="protocol = p"
          :class="protocol === p ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ p }}</button>
      </div>
    </div>

    <!-- Mode toggle -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('intermittentFasting.mode') }}</label>
      <div class="flex gap-2">
        <button
          @click="mode = 'lastMeal'"
          :class="mode === 'lastMeal' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('intermittentFasting.lastMeal') }}</button>
        <button
          @click="mode = 'firstMeal'"
          :class="mode === 'firstMeal' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('intermittentFasting.firstMeal') }}</button>
      </div>
    </div>

    <!-- Time input -->
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ mode === 'lastMeal' ? t('intermittentFasting.lastMealTime') : t('intermittentFasting.firstMealTime') }}
      </label>
      <input
        v-model="time"
        type="time"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
    </div>

    <!-- Results -->
    <div v-if="result" class="pt-5 border-t border-stone-100">
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
          <p class="text-xs font-semibold text-green-700 uppercase tracking-widest mb-1">{{ t('intermittentFasting.eatingWindow') }}</p>
          <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.eatingStart }} – {{ result.eatingEnd }}</p>
          <p class="text-sm text-stone-500 mt-1">{{ result.eatHours }}h</p>
        </div>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-5 text-center">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('intermittentFasting.fastingWindow') }}</p>
          <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ result.fastingStart }} – {{ result.fastingEnd }}</p>
          <p class="text-sm text-stone-500 mt-1">{{ result.fastHours }}h</p>
        </div>
      </div>

      <!-- Visual timeline -->
      <div class="mb-2">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('intermittentFasting.timeline') }}</p>
        <div class="flex h-6 rounded-full overflow-hidden">
          <div
            v-for="seg in timelineSegments"
            :key="seg.label"
            :class="seg.color"
            :style="{ width: seg.pct + '%' }"
            class="flex items-center justify-center"
          >
            <span v-if="seg.pct >= 15" class="text-xs font-semibold text-white">{{ seg.label }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-xs text-stone-400 tabular-nums">{{ result.fastingStart }}</span>
          <span class="text-xs text-stone-400 tabular-nums">{{ result.eatingStart }}</span>
          <span class="text-xs text-stone-400 tabular-nums">{{ result.eatingEnd }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Protocol tips -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('intermittentFasting.protocolTips') }}</h2>
    <div class="space-y-3.5">
      <div class="flex items-start gap-3 border-b border-stone-100 pb-3.5 last:border-0">
        <span class="text-sm font-semibold text-stone-900 shrink-0 w-12">16:8</span>
        <span class="text-sm text-stone-600">{{ t('intermittentFasting.tip168') }}</span>
      </div>
      <div class="flex items-start gap-3 border-b border-stone-100 pb-3.5 last:border-0">
        <span class="text-sm font-semibold text-stone-900 shrink-0 w-12">18:6</span>
        <span class="text-sm text-stone-600">{{ t('intermittentFasting.tip186') }}</span>
      </div>
      <div class="flex items-start gap-3 border-b border-stone-100 pb-3.5 last:border-0">
        <span class="text-sm font-semibold text-stone-900 shrink-0 w-12">20:4</span>
        <span class="text-sm text-stone-600">{{ t('intermittentFasting.tip204') }}</span>
      </div>
      <div class="flex items-start gap-3">
        <span class="text-sm font-semibold text-stone-900 shrink-0 w-12">OMAD</span>
        <span class="text-sm text-stone-600">{{ t('intermittentFasting.tipOmad') }}</span>
      </div>
    </div>
  </div>

  <!-- How it works -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('intermittentFasting.howItWorks') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">
      {{ t('intermittentFasting.howItWorksText') }}
    </p>
  </div>

  <BlogBanner calculator-key="intermittentFasting" />
  <AffiliateBanner />
</template>
