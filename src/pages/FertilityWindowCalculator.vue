<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  addDays,
  calcFertilityWindow,
  getDayLabel,
  conceptionProbability,
} from '../utils/fertilityWindow.js'

const { t, locale, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('fertilityWindow.faq') || [])

useHead(() => ({
  title: t('fertilityWindow.meta.title'),
  description: t('fertilityWindow.meta.description'),
  routeKey: 'fertilityWindow',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Fertility Window Calculator',
    url: 'https://healthcalculator.app/en/fertility-window-calculator',
    about: { '@type': 'MedicalCondition', name: 'Fertility' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const lmp = ref('')
const cycleLength = ref(28)

const lmpDate = computed(() => lmp.value ? new Date(lmp.value + 'T00:00:00') : null)
const window = computed(() => calcFertilityWindow(lmpDate.value, cycleLength.value))

function formatDate(date) {
  if (!date) return ''
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function formatShort(date) {
  if (!date) return ''
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

const dailyForecast = computed(() => {
  if (!window.value) return []
  const ov = window.value.ovulation
  const days = []
  for (let offset = -7; offset <= 2; offset++) {
    const date = addDays(ov, offset)
    const phase = getDayLabel(date, window.value)
    const probability = conceptionProbability(offset)
    days.push({ offset, date, phase, probability })
  }
  return days
})

function phaseStyle(phase) {
  switch (phase) {
    case 'ovulation': return 'bg-rose-600 text-white'
    case 'lhSurge': return 'bg-rose-500 text-white'
    case 'peak': return 'bg-rose-400 text-white'
    case 'core': return 'bg-rose-200 text-rose-900'
    case 'expanded': return 'bg-rose-50 text-rose-700'
    default: return 'bg-stone-50 text-stone-500'
  }
}

function probabilityLabel(p) {
  if (p >= 0.30) return t('fertilityWindow.highest')
  if (p >= 0.20) return t('fertilityWindow.high')
  if (p >= 0.13) return t('fertilityWindow.moderate')
  if (p > 0) return t('fertilityWindow.low')
  return t('fertilityWindow.veryLow')
}

const hasResults = computed(() => !!window.value)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('fertilityWindow.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('fertilityWindow.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-6 sm:grid-cols-2">
      <div>
        <label for="lmp" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('fertilityWindow.lmp') }}</label>
        <input id="lmp" v-model="lmp" type="date" data-testid="lmp"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="cycle" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('fertilityWindow.cycleLength') }}</label>
        <input id="cycle" v-model.number="cycleLength" type="number" min="21" max="45" data-testid="cycle-length"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
      <div class="rounded-xl border border-rose-200 bg-rose-50 p-5 text-center">
        <div class="text-xs font-semibold text-rose-600 uppercase tracking-widest mb-1">{{ t('fertilityWindow.ovulationDay') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="ovulation-date">{{ formatDate(window.ovulation) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('fertilityWindow.peakFertility') }}</div>
        <div class="text-sm font-bold text-stone-900" data-testid="peak-window">{{ formatShort(window.peakStart) }} – {{ formatShort(window.peakEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('fertilityWindow.expandedWindow') }}</div>
        <div class="text-sm font-bold text-stone-900" data-testid="expanded-window">{{ formatShort(window.expandedStart) }} – {{ formatShort(window.expandedEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('fertilityWindow.lhSurge') }}</div>
        <div class="text-sm font-bold text-stone-900" data-testid="lh-surge">{{ formatShort(window.lhSurgeStart) }} – {{ formatShort(window.lhSurgeEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('fertilityWindow.coreWindow') }}</div>
        <div class="text-sm font-bold text-stone-900" data-testid="core-window">{{ formatShort(window.coreStart) }} – {{ formatShort(window.coreEnd) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('fertilityWindow.nextPeriod') }}</div>
        <div class="text-sm font-bold text-stone-900" data-testid="next-period">{{ formatShort(window.nextPeriod) }}</div>
      </div>
    </div>

    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('fertilityWindow.dailyForecast') }}</h2>
    <div class="overflow-hidden rounded-lg border border-stone-200">
      <table class="w-full text-sm" data-testid="forecast-table">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('fertilityWindow.day') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('fertilityWindow.date') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('fertilityWindow.phase') }}</th>
            <th class="text-left px-4 py-3 font-semibold text-stone-700">{{ t('fertilityWindow.probability') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="row in dailyForecast" :key="row.offset" data-testid="forecast-row">
            <td class="px-4 py-3 text-stone-700 font-medium tabular-nums">
              <span v-if="row.offset === 0">0</span>
              <span v-else-if="row.offset > 0">+{{ row.offset }}</span>
              <span v-else>{{ row.offset }}</span>
            </td>
            <td class="px-4 py-3 text-stone-700 tabular-nums">{{ formatShort(row.date) }}</td>
            <td class="px-4 py-3">
              <span :class="phaseStyle(row.phase)" class="inline-block rounded px-2 py-1 text-xs font-semibold">
                {{ t('fertilityWindow.phase' + (row.phase ? row.phase.charAt(0).toUpperCase() + row.phase.slice(1) : 'None')) }}
              </span>
            </td>
            <td class="px-4 py-3 text-stone-700 tabular-nums">
              <span v-if="row.probability > 0">{{ (row.probability * 100).toFixed(0) }} %</span>
              <span v-else class="text-stone-400">—</span>
              <span class="text-xs text-stone-400 ml-2">{{ probabilityLabel(row.probability) }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-stone-400 mt-4">{{ t('fertilityWindow.source') }}</p>
  </div>

  <div class="flex flex-wrap gap-3 mb-6 text-sm">
    <router-link :to="localePath('ovulation')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('fertilityWindow.linkOvulation') }}
    </router-link>
    <span class="text-stone-300">&middot;</span>
    <router-link :to="localePath('period')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('fertilityWindow.linkPeriod') }}
    </router-link>
    <span class="text-stone-300">&middot;</span>
    <router-link :to="localePath('dueDate')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('fertilityWindow.linkPregnancy') }}
    </router-link>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('fertilityWindow.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('fertilityWindow.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="fertilityWindow" class="mt-8" />
  <BlogArticleLink calculator-key="fertilityWindow" />
</template>
