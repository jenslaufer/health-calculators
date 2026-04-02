<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('heartRate.meta.title'),
  description: t('heartRate.meta.description'),
  routeKey: 'heartRate',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Heart Rate Zone Calculator',
    url: 'https://healthcalculator.app/heart-rate',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

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
  { nameKey: 'heartRate.recovery', low: 0.50, high: 0.60, color: 'bg-blue-400', dot: 'bg-blue-400', descKey: 'heartRate.recoveryDesc' },
  { nameKey: 'heartRate.fatBurn', low: 0.60, high: 0.70, color: 'bg-green-500', dot: 'bg-green-500', descKey: 'heartRate.fatBurnDesc' },
  { nameKey: 'heartRate.aerobic', low: 0.70, high: 0.80, color: 'bg-yellow-500', dot: 'bg-yellow-500', descKey: 'heartRate.aerobicDesc' },
  { nameKey: 'heartRate.anaerobic', low: 0.80, high: 0.90, color: 'bg-orange-500', dot: 'bg-orange-500', descKey: 'heartRate.anaerobicDesc' },
  { nameKey: 'heartRate.vo2max', low: 0.90, high: 1.00, color: 'bg-red-500', dot: 'bg-red-500', descKey: 'heartRate.vo2maxDesc' },
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
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('heartRate.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('heartRate.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="space-y-6">
      <div>
        <label for="age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.age') }}</label>
        <input id="age" v-model.number="age" type="number" min="1" max="120" placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="resting-hr" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('heartRate.restingHr') }}</label>
        <input id="resting-hr" v-model.number="restingHr" type="number" min="30" max="120" placeholder="60"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <span class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.method') }}</span>
        <div class="flex gap-2">
          <button
            @click="method = 'standard'"
            :class="method === 'standard' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('heartRate.standard') }}</button>
          <button
            @click="method = 'karvonen'"
            :disabled="!karvonenAvailable"
            :class="[
              method === 'karvonen' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
              !karvonenAvailable ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('heartRate.karvonen') }}</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="hrMax" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('heartRate.maxHr') }}</p>
    <p class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ hrMax }}</p>
    <p class="mt-1 text-sm text-stone-500">{{ t('heartRate.bpm') }}</p>

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
            <h3 class="text-sm font-semibold text-stone-900">{{ t('heartRate.zone', { n: zone.number, name: t(zone.nameKey) }) }}</h3>
            <span data-testid="zone-range" class="text-sm font-medium text-stone-700">{{ zone.bpmLow }}–{{ zone.bpmHigh }} {{ t('heartRate.bpm') }}</span>
          </div>
          <p class="mt-1 text-xs text-stone-500">{{ t(zone.descKey) }}</p>
        </div>
      </div>
    </div>
  </div>


    <AdSlot class="mt-8" />
  <BlogBanner calculator-key="heartRate" />
</template>
