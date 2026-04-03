<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, locale } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('period.meta.title'),
  description: t('period.meta.description'),
  routeKey: 'period',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Period Calculator',
    url: 'https://healthcalculator.app/period-calculator',
    about: { '@type': 'MedicalCondition', name: 'Menstrual Cycle' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const lmp = ref('')
const cycleLength = ref(28)
const periodDuration = ref(5)
const cyclesToPredict = ref(6)

const today = new Date()
today.setHours(0, 0, 0, 0)

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function formatDate(date) {
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function formatDateShort(date) {
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', { month: 'short', day: 'numeric' })
}

const lmpDate = computed(() => lmp.value ? new Date(lmp.value + 'T00:00:00') : null)

const nextPeriodStart = computed(() => lmpDate.value ? addDays(lmpDate.value, cycleLength.value) : null)
const nextPeriodEnd = computed(() => nextPeriodStart.value ? addDays(nextPeriodStart.value, periodDuration.value - 1) : null)

const ovulationDate = computed(() => lmpDate.value ? addDays(lmpDate.value, cycleLength.value - 14) : null)

const fertileStart = computed(() => ovulationDate.value ? addDays(ovulationDate.value, -5) : null)
const fertileEnd = computed(() => ovulationDate.value ? ovulationDate.value : null)

const predictedCycles = computed(() => {
  if (!lmpDate.value) return []
  const cycles = []
  for (let i = 1; i <= cyclesToPredict.value; i++) {
    const pStart = addDays(lmpDate.value, cycleLength.value * i)
    const pEnd = addDays(pStart, periodDuration.value - 1)
    const ov = addDays(pStart, cycleLength.value - 14)
    const fStart = addDays(ov, -5)
    cycles.push({ periodStart: pStart, periodEnd: pEnd, ovulationDate: ov, fertileStart: fStart, fertileEnd: ov })
  }
  return cycles
})

const cycleDay = computed(() => {
  if (!lmpDate.value) return 0
  const diff = Math.floor((today - lmpDate.value) / (1000 * 60 * 60 * 24))
  return ((diff % cycleLength.value) + cycleLength.value) % cycleLength.value + 1
})

const currentPhase = computed(() => {
  const day = cycleDay.value
  if (!lmpDate.value || day <= 0) return null
  const ovDay = cycleLength.value - 14
  if (day <= periodDuration.value) return 'menstrual'
  if (day < ovDay - 5) return 'follicular'
  if (day <= ovDay) return 'ovulation'
  return 'luteal'
})

const hasResults = computed(() => !!lmpDate.value)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('period.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('period.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-6 sm:grid-cols-2 mb-6">
      <div>
        <label for="lmp" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('period.lmp') }}</label>
        <input id="lmp" v-model="lmp" type="date"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="cycle" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('period.cycleLength') }}</label>
        <input id="cycle" v-model.number="cycleLength" type="number" min="21" max="35"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="duration" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('period.periodDuration') }}</label>
        <input id="duration" v-model.number="periodDuration" type="number" min="3" max="7"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="predict" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('period.cyclesToPredict') }}</label>
        <input id="predict" v-model.number="cyclesToPredict" type="number" min="1" max="12"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('period.nextPeriod') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="next-period">{{ formatDate(nextPeriodStart) }}</div>
        <div class="text-sm text-stone-500">{{ t('period.to') }} {{ formatDate(nextPeriodEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('period.ovulationDate') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="ovulation-date">{{ formatDate(ovulationDate) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('period.fertileWindow') }}</div>
        <div class="text-base font-bold text-stone-900" data-testid="fertile-window">{{ formatDateShort(fertileStart) }} – {{ formatDateShort(fertileEnd) }}</div>
      </div>
    </div>

    <!-- Cycle timeline -->
    <div class="mb-6" data-testid="cycle-timeline">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('period.currentCycle') }}</h2>
      <div class="flex rounded-lg overflow-hidden h-8">
        <div class="bg-stone-400 flex items-center justify-center text-xs text-white font-medium" :style="{ width: (periodDuration / cycleLength * 100) + '%' }">
          {{ t('period.phaseMenstrual') }}
        </div>
        <div class="bg-stone-200 flex items-center justify-center text-xs text-stone-600 font-medium" :style="{ width: ((cycleLength - 14 - 5 - periodDuration) / cycleLength * 100) + '%' }">
          {{ t('period.phaseFollicular') }}
        </div>
        <div class="bg-stone-700 flex items-center justify-center text-xs text-white font-medium" :style="{ width: (6 / cycleLength * 100) + '%' }">
          {{ t('period.phaseOvulation') }}
        </div>
        <div class="bg-stone-300 flex items-center justify-center text-xs text-stone-700 font-medium" :style="{ width: (13 / cycleLength * 100) + '%' }">
          {{ t('period.phaseLuteal') }}
        </div>
      </div>
      <div class="mt-2 text-sm text-stone-500">
        {{ t('period.currentPhaseLabel') }}:
        <span class="font-semibold text-stone-700">{{ t('period.phase_' + currentPhase) }}</span>
        <span class="ml-2 text-stone-400">({{ t('period.dayN', { n: cycleDay }) }})</span>
      </div>
    </div>

    <!-- Predicted cycles -->
    <div>
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('period.predictedCycles') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(cycle, i) in predictedCycles"
          :key="i"
          data-testid="predicted-cycle"
          class="flex flex-wrap items-center gap-4 rounded-lg border border-stone-200 px-4 py-3"
        >
          <span class="w-3 h-3 rounded-full shrink-0 bg-stone-300"></span>
          <span class="text-sm font-semibold text-stone-700 w-20">{{ t('period.cycleN', { n: i + 2 }) }}</span>
          <span class="text-sm text-stone-600">{{ t('period.periodLabel') }}: {{ formatDateShort(cycle.periodStart) }} – {{ formatDateShort(cycle.periodEnd) }}</span>
          <span class="text-sm text-stone-600">{{ t('period.ovulationLabel') }}: {{ formatDateShort(cycle.ovulationDate) }}</span>
          <span class="text-sm text-stone-500">{{ t('period.fertileLabel') }}: {{ formatDateShort(cycle.fertileStart) }} – {{ formatDateShort(cycle.fertileEnd) }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('period.howItWorks') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">
      {{ t('period.howItWorksText') }}
    </p>
  </div>

  <AdSlot class="mt-8" />
  <BlogBanner calculator-key="period" />
</template>
