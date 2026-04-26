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

const faqItems = computed(() => tm('pregnancy.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('pregnancy.meta.title'),
  description: t('pregnancy.meta.description'),
  routeKey: 'pregnancy',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Pregnancy Due Date Calculator',
    url: 'https://healthcalculator.app/pregnancy',
    about: { '@type': 'MedicalCondition', name: 'Pregnancy' },
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
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const lmpDate = computed(() => lmp.value ? new Date(lmp.value + 'T00:00:00') : null)
const cycleAdjust = computed(() => cycleLength.value - 28)
const dueDate = computed(() => lmpDate.value ? addDays(lmpDate.value, 280 + cycleAdjust.value) : null)
const conceptionDate = computed(() => lmpDate.value ? addDays(lmpDate.value, 14 + cycleAdjust.value) : null)

const gestationalDays = computed(() => {
  if (!lmpDate.value) return 0
  return Math.floor((today - lmpDate.value) / (1000 * 60 * 60 * 24))
})
const gestationalWeeks = computed(() => Math.floor(gestationalDays.value / 7))
const gestationalRemainderDays = computed(() => gestationalDays.value % 7)

const trimester = computed(() => {
  if (gestationalWeeks.value < 13) return '1st'
  if (gestationalWeeks.value < 28) return '2nd'
  return '3rd'
})

const daysUntilDue = computed(() => {
  if (!dueDate.value) return 0
  return Math.max(0, Math.ceil((dueDate.value - today) / (1000 * 60 * 60 * 24)))
})

const progressPercent = computed(() => {
  if (!lmpDate.value) return 0
  const total = 280 + cycleAdjust.value
  const elapsed = gestationalDays.value
  return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)))
})

const milestones = computed(() => {
  if (!lmpDate.value) return []
  const base = lmpDate.value
  const adj = cycleAdjust.value
  return [
    { week: 6, labelKey: 'pregnancy.milestone6', date: addDays(base, 6 * 7 + adj) },
    { week: 12, labelKey: 'pregnancy.milestone12', date: addDays(base, 12 * 7 + adj) },
    { week: 16, labelKey: 'pregnancy.milestone16', date: addDays(base, 16 * 7 + adj) },
    { week: 20, labelKey: 'pregnancy.milestone20', date: addDays(base, 20 * 7 + adj) },
    { week: 24, labelKey: 'pregnancy.milestone24', date: addDays(base, 24 * 7 + adj) },
    { week: 28, labelKey: 'pregnancy.milestone28', date: addDays(base, 28 * 7 + adj) },
    { week: 37, labelKey: 'pregnancy.milestone37', date: addDays(base, 37 * 7 + adj) },
    { week: 40, labelKey: 'pregnancy.milestone40', date: dueDate.value },
  ]
})

const hasResults = computed(() => !!lmpDate.value)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pregnancy.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pregnancy.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-6 sm:grid-cols-2 mb-6">
      <div>
        <label for="lmp" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pregnancy.lmp') }}</label>
        <input id="lmp" v-model="lmp" type="date"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="cycle" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pregnancy.cycleLength') }}</label>
        <input id="cycle" v-model.number="cycleLength" type="number" min="20" max="45"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('pregnancy.dueDate') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="due-date">{{ formatDate(dueDate) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('pregnancy.gestationalAge') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="gestational-age">{{ t('pregnancy.weeksAndDays', { weeks: gestationalWeeks, days: gestationalRemainderDays }) }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('pregnancy.trimester') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="trimester">{{ trimester }}</div>
      </div>
      <div class="rounded-xl border border-stone-200 p-5 text-center">
        <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('pregnancy.conceptionDate') }}</div>
        <div class="text-xl font-bold text-stone-900" data-testid="conception-date">{{ formatDate(conceptionDate) }}</div>
      </div>
    </div>

    <div class="mb-6">
      <div class="flex justify-between text-xs text-stone-400 mb-1">
        <span>{{ t('pregnancy.complete', { pct: progressPercent }) }}</span>
        <span>{{ t('pregnancy.daysLeft', { n: daysUntilDue }) }}</span>
      </div>
      <div class="w-full bg-stone-100 rounded-full h-3" data-testid="progress-bar">
        <div role="progressbar" class="bg-stone-700 h-3 rounded-full transition-all duration-300" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('pregnancy.milestones') }}</h2>
      <div class="space-y-3">
        <div
          v-for="m in milestones"
          :key="m.week"
          data-testid="milestone"
          :class="['flex items-center gap-4 rounded-lg border px-4 py-3 transition-colors', m.date <= today ? 'passed border-stone-400 bg-stone-50' : 'border-stone-200']"
        >
          <span :class="['w-3 h-3 rounded-full shrink-0', m.date <= today ? 'bg-stone-700' : 'bg-stone-300']"></span>
          <span class="text-sm font-semibold text-stone-700 w-16">{{ t('pregnancy.week', { n: m.week }) }}</span>
          <span class="text-sm text-stone-600 flex-1">{{ t(m.labelKey) }}</span>
          <span class="text-xs text-stone-400">{{ formatDate(m.date) }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('pregnancy.howItWorks') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">
      {{ t('pregnancy.howItWorksText') }}
    </p>
  </div>


    <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="pregnancy" />
</template>
