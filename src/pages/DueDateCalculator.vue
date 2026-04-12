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
  title: t('dueDate.meta.title'),
  description: t('dueDate.meta.description'),
  routeKey: 'dueDate',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Due Date Calculator',
    url: 'https://healthcalculator.app/due-date',
    about: { '@type': 'MedicalCondition', name: 'Pregnancy' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const method = ref('lmp')
const lmpDate = ref('')
const cycleLength = ref(28)
const conceptionDate = ref('')
const ivfTransferDate = ref('')
const ivfDay = ref('5')

const today = new Date()
today.setHours(0, 0, 0, 0)

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function parseDate(str) {
  return str ? new Date(str + 'T00:00:00') : null
}

function formatDate(date) {
  if (!date) return ''
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

const edd = computed(() => {
  if (method.value === 'lmp') {
    const lmp = parseDate(lmpDate.value)
    if (!lmp) return null
    return addDays(lmp, 280 + (cycleLength.value - 28))
  }
  if (method.value === 'conception') {
    const c = parseDate(conceptionDate.value)
    return c ? addDays(c, 266) : null
  }
  if (method.value === 'ivf') {
    const t = parseDate(ivfTransferDate.value)
    if (!t) return null
    return addDays(t, ivfDay.value === '5' ? 261 : 263)
  }
  return null
})

const lmpEquivalent = computed(() => {
  if (!edd.value) return null
  return addDays(edd.value, -280)
})

const gestationalDays = computed(() => {
  if (!lmpEquivalent.value) return 0
  return Math.max(0, Math.floor((today - lmpEquivalent.value) / (1000 * 60 * 60 * 24)))
})

const gestationalWeeks = computed(() => Math.floor(gestationalDays.value / 7))
const gestationalRemainderDays = computed(() => gestationalDays.value % 7)

const trimester = computed(() => {
  const w = gestationalWeeks.value
  if (w < 13) return t('dueDate.trimester1')
  if (w < 28) return t('dueDate.trimester2')
  return t('dueDate.trimester3')
})

const daysUntilDue = computed(() => {
  if (!edd.value) return 0
  return Math.max(0, Math.ceil((edd.value - today) / (1000 * 60 * 60 * 24)))
})

const progressPercent = computed(() => {
  if (!lmpEquivalent.value) return 0
  return Math.min(100, Math.max(0, Math.round((gestationalDays.value / 280) * 100)))
})

const keyDates = computed(() => {
  if (!lmpEquivalent.value) return []
  const base = lmpEquivalent.value
  return [
    { labelKey: 'dueDate.keyDateFirstVisit', date: addDays(base, 9 * 7) },
    { labelKey: 'dueDate.keyDateAnatomyScan', date: addDays(base, 20 * 7) },
    { labelKey: 'dueDate.keyDateViability', date: addDays(base, 24 * 7) },
    { labelKey: 'dueDate.keyDateFullTerm', date: addDays(base, 37 * 7) },
  ]
})

const milestones = computed(() => {
  if (!lmpEquivalent.value) return []
  const base = lmpEquivalent.value
  return [
    { week: 6, labelKey: 'dueDate.milestone6', date: addDays(base, 6 * 7) },
    { week: 10, labelKey: 'dueDate.milestone10', date: addDays(base, 10 * 7) },
    { week: 12, labelKey: 'dueDate.milestone12', date: addDays(base, 12 * 7) },
    { week: 20, labelKey: 'dueDate.milestone20', date: addDays(base, 20 * 7) },
    { week: 24, labelKey: 'dueDate.milestone24', date: addDays(base, 24 * 7) },
    { week: 28, labelKey: 'dueDate.milestone28', date: addDays(base, 28 * 7) },
    { week: 37, labelKey: 'dueDate.milestone37', date: addDays(base, 37 * 7) },
    { week: 40, labelKey: 'dueDate.milestone40', date: edd.value },
  ]
})

const hasResults = computed(() => !!edd.value)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('dueDate.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('dueDate.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- Method toggle -->
    <div class="mb-6">
      <p class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('dueDate.methodLabel') }}</p>
      <div class="flex flex-wrap gap-2" role="radiogroup">
        <button
          v-for="m in ['lmp', 'conception', 'ivf']"
          :key="m"
          :data-testid="`method-${m}`"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150',
            method === m
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-white text-stone-600 border-stone-300 hover:border-stone-500'
          ]"
          @click="method = m"
        >
          {{ t(`dueDate.method${m.charAt(0).toUpperCase() + m.slice(1)}`) }}
        </button>
      </div>
    </div>

    <!-- LMP inputs -->
    <div v-if="method === 'lmp'" class="grid gap-6 sm:grid-cols-2">
      <div>
        <label for="lmp-date" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dueDate.lmpDate') }}</label>
        <input id="lmp-date" v-model="lmpDate" type="date"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="cycle-length" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dueDate.cycleLength') }}</label>
        <input id="cycle-length" v-model.number="cycleLength" type="number" min="20" max="45"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Conception date input -->
    <div v-if="method === 'conception'">
      <label for="conception-date" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dueDate.conceptionDate') }}</label>
      <input id="conception-date" v-model="conceptionDate" type="date"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150 max-w-xs" />
    </div>

    <!-- IVF inputs -->
    <div v-if="method === 'ivf'" class="grid gap-6 sm:grid-cols-2">
      <div>
        <label for="ivf-date" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dueDate.ivfTransferDate') }}</label>
        <input id="ivf-date" v-model="ivfTransferDate" type="date"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <p class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('dueDate.ivfTransferDay') }}</p>
        <div class="flex gap-3">
          <label v-for="d in ['3', '5']" :key="d" class="flex items-center gap-2 cursor-pointer">
            <input type="radio" v-model="ivfDay" :value="d" class="accent-stone-900" :data-testid="`ivf-day-${d}`" />
            <span class="text-sm text-stone-700">{{ t(`dueDate.ivfDay${d}`) }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="space-y-6">
    <!-- Primary results -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div class="rounded-xl border border-stone-200 p-5 text-center">
          <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('dueDate.dueDate') }}</div>
          <div class="text-xl font-bold text-stone-900" data-testid="due-date">{{ formatDate(edd) }}</div>
        </div>
        <div class="rounded-xl border border-stone-200 p-5 text-center">
          <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('dueDate.gestationalAge') }}</div>
          <div class="text-xl font-bold text-stone-900" data-testid="gestational-age">{{ t('dueDate.weeksAndDays', { weeks: gestationalWeeks, days: gestationalRemainderDays }) }}</div>
        </div>
        <div class="rounded-xl border border-stone-200 p-5 text-center">
          <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('dueDate.trimester') }}</div>
          <div class="text-xl font-bold text-stone-900" data-testid="trimester">{{ trimester }}</div>
        </div>
        <div class="rounded-xl border border-stone-200 p-5 text-center">
          <div class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{{ t('dueDate.countdown') }}</div>
          <div class="text-xl font-bold text-stone-900" data-testid="countdown">{{ t('dueDate.countdownDays', { n: daysUntilDue }) }}</div>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="mb-6">
        <div class="flex justify-between text-xs text-stone-400 mb-1">
          <span>{{ t('dueDate.complete', { pct: progressPercent }) }}</span>
          <span>{{ t('dueDate.daysLeft', { n: daysUntilDue }) }}</span>
        </div>
        <div class="w-full bg-stone-100 rounded-full h-3" data-testid="progress-bar">
          <div role="progressbar" class="bg-stone-700 h-3 rounded-full transition-all duration-300" :style="{ width: progressPercent + '%' }"></div>
        </div>
      </div>

      <!-- Key dates -->
      <div>
        <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('dueDate.keyDates') }}</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="kd in keyDates"
            :key="kd.labelKey"
            data-testid="key-date"
            :class="['flex items-center justify-between rounded-lg border px-4 py-3', kd.date <= today ? 'border-stone-400 bg-stone-50' : 'border-stone-200']"
          >
            <span class="text-sm text-stone-600">{{ t(kd.labelKey) }}</span>
            <span class="text-xs font-medium text-stone-500 ml-3 shrink-0">{{ formatDate(kd.date) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Milestones -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('dueDate.milestones') }}</h2>
      <div class="space-y-3">
        <div
          v-for="m in milestones"
          :key="m.week"
          data-testid="milestone"
          :class="['flex items-center gap-4 rounded-lg border px-4 py-3 transition-colors', m.date <= today ? 'passed border-stone-400 bg-stone-50' : 'border-stone-200']"
        >
          <span :class="['w-3 h-3 rounded-full shrink-0', m.date <= today ? 'bg-stone-700' : 'bg-stone-300']"></span>
          <span class="text-sm font-semibold text-stone-700 w-16">{{ t('dueDate.week', { n: m.week }) }}</span>
          <span class="text-sm text-stone-600 flex-1">{{ t(m.labelKey) }}</span>
          <span class="text-xs text-stone-400">{{ formatDate(m.date) }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- How it works -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 my-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('dueDate.howItWorks') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">{{ t('dueDate.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <BlogBanner calculator-key="dueDate" />
</template>
