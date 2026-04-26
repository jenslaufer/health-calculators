<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, locale, tm } = useI18n()

const faqItems = computed(() => tm('ovulation.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('ovulation.meta.title'),
  description: t('ovulation.meta.description'),
  routeKey: 'ovulation',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ovulation Calculator',
    url: 'https://healthcalculator.app/ovulation',
    about: { '@type': 'MedicalCondition', name: 'Ovulation' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const lmp = ref('')
const cycleLength = ref(28)

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

const lmpDate = computed(() => lmp.value ? new Date(lmp.value + 'T00:00:00') : null)

const ovulationDate = computed(() => lmpDate.value ? addDays(lmpDate.value, cycleLength.value - 14) : null)

const fertileStart = computed(() => ovulationDate.value ? addDays(ovulationDate.value, -5) : null)
const fertileEnd = computed(() => ovulationDate.value ? addDays(ovulationDate.value, 1) : null)

const nextCycles = computed(() => {
  if (!lmpDate.value) return []
  const cycles = []
  for (let i = 1; i <= 3; i++) {
    const nextLmp = addDays(lmpDate.value, cycleLength.value * i)
    const nextOvulation = addDays(nextLmp, cycleLength.value - 14)
    cycles.push({ periodStart: nextLmp, ovulationDate: nextOvulation })
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
  if (day <= 5) return 'menstruation'
  if (day < ovDay - 5) return 'follicular'
  if (day <= ovDay + 1) return 'fertile'
  return 'luteal'
})

const hasResults = computed(() => !!lmpDate.value)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('ovulation.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('ovulation.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-6 sm:grid-cols-2 mb-6">
      <div>
        <label for="lmp" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ovulation.lmp') }}</label>
        <input id="lmp" v-model="lmp" type="date"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="cycle" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('ovulation.cycleLength') }}</label>
        <input id="cycle" v-model.number="cycleLength" type="number" min="21" max="35"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('ovulation.ovulationDate') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="ovulation-date">{{ formatDate(ovulationDate) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('ovulation.fertileWindow') }}</div>
        <div class="text-base font-bold text-stone-900" data-testid="fertile-window">{{ formatDate(fertileStart) }} – {{ formatDate(fertileEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('ovulation.cycleDay') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="cycle-day">{{ t('ovulation.dayN', { n: cycleDay }) }}</div>
      </div>
    </div>

    <!-- Cycle timeline -->
    <div class="mb-6" data-testid="cycle-timeline">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ovulation.currentCycle') }}</h2>
      <div class="flex rounded-lg overflow-hidden h-8">
        <div class="bg-stone-400 flex items-center justify-center text-xs text-white font-medium" :style="{ width: (5 / cycleLength * 100) + '%' }">
          {{ t('ovulation.phaseMenstruation') }}
        </div>
        <div class="bg-stone-200 flex items-center justify-center text-xs text-stone-600 font-medium" :style="{ width: ((cycleLength - 14 - 5 - 5) / cycleLength * 100) + '%' }">
          {{ t('ovulation.phaseFollicular') }}
        </div>
        <div class="bg-stone-700 flex items-center justify-center text-xs text-white font-medium" :style="{ width: (7 / cycleLength * 100) + '%' }">
          {{ t('ovulation.phaseFertile') }}
        </div>
        <div class="bg-stone-300 flex items-center justify-center text-xs text-stone-700 font-medium" :style="{ width: ((cycleLength - (cycleLength - 14) - 1) / cycleLength * 100) + '%' }">
          {{ t('ovulation.phaseLuteal') }}
        </div>
      </div>
      <div class="mt-2 text-sm text-stone-500">
        {{ t('ovulation.currentPhaseLabel') }}:
        <span class="font-semibold text-stone-700">{{ t('ovulation.phase_' + currentPhase) }}</span>
      </div>
    </div>

    <!-- Next 3 predicted cycles -->
    <div>
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('ovulation.nextCycles') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(cycle, i) in nextCycles"
          :key="i"
          data-testid="next-cycle"
          class="flex items-center gap-4 rounded-lg border border-stone-200 px-4 py-3"
        >
          <span class="w-3 h-3 rounded-full shrink-0 bg-stone-300"></span>
          <span class="text-sm font-semibold text-stone-700 w-20">{{ t('ovulation.cycleN', { n: i + 2 }) }}</span>
          <span class="text-sm text-stone-600 flex-1">{{ t('ovulation.periodLabel') }}: {{ formatDate(cycle.periodStart) }}</span>
          <span class="text-sm text-stone-600">{{ t('ovulation.ovulationLabel') }}: {{ formatDate(cycle.ovulationDate) }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ovulation.howItWorks') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">
      {{ t('ovulation.howItWorksText') }}
    </p>
  </div>


    <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="ovulation" />
</template>
