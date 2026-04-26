<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  BOYS_WEIGHT, GIRLS_WEIGHT,
  BOYS_HEIGHT, GIRLS_HEIGHT,
  BOYS_BMI, GIRLS_BMI,
  BOYS_HC, GIRLS_HC,
  calcPercentile, percentileCategory,
} from '../data/whoGrowth.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('childGrowth.meta.title'),
  description: t('childGrowth.meta.description'),
  routeKey: 'childGrowth',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Child Growth Percentile Calculator',
    url: 'https://healthcalculator.app/child-growth-percentile',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
}))

// ─── Inputs ──────────────────────────────────────────────────────────────────

const ageYears = ref(null)
const ageMonthsExtra = ref(0)
const weightVal = ref(null)
const heightVal = ref(null)
const headVal = ref(null)
const sex = ref('male')
const weightUnit = ref('kg')
const heightUnit = ref('cm')

// ─── Derived measurements ─────────────────────────────────────────────────────

const totalMonths = computed(() => {
  const y = Number(ageYears.value) || 0
  const m = Number(ageMonthsExtra.value) || 0
  return y * 12 + m
})

const weightKg = computed(() => {
  const v = Number(weightVal.value)
  if (!v || v <= 0) return null
  return weightUnit.value === 'lbs' ? v * 0.453592 : v
})

const heightCm = computed(() => {
  const v = Number(heightVal.value)
  if (!v || v <= 0) return null
  return heightUnit.value === 'in' ? v * 2.54 : v
})

const headCm = computed(() => {
  const v = Number(headVal.value)
  if (!v || v <= 0) return null
  return heightUnit.value === 'in' ? v * 2.54 : v
})

const bmi = computed(() => {
  if (!weightKg.value || !heightCm.value) return null
  const hm = heightCm.value / 100
  return weightKg.value / (hm * hm)
})

// ─── Display flags ────────────────────────────────────────────────────────────

const showHeadCirc = computed(() => totalMonths.value >= 0 && totalMonths.value <= 36)
const showBMI = computed(() => totalMonths.value >= 24 && totalMonths.value <= 216)
const showWeightAge = computed(() => totalMonths.value >= 0 && totalMonths.value <= 120)

// ─── Percentile results ───────────────────────────────────────────────────────

const weightTable = computed(() => sex.value === 'male' ? BOYS_WEIGHT : GIRLS_WEIGHT)
const heightTable = computed(() => sex.value === 'male' ? BOYS_HEIGHT : GIRLS_HEIGHT)
const bmiTable = computed(() => sex.value === 'male' ? BOYS_BMI : GIRLS_BMI)
const hcTable = computed(() => sex.value === 'male' ? BOYS_HC : GIRLS_HC)

const weightPercentile = computed(() => {
  if (!weightKg.value || !showWeightAge.value || totalMonths.value === 0) return null
  return calcPercentile(weightTable.value, totalMonths.value, weightKg.value)
})

const heightPercentile = computed(() => {
  if (!heightCm.value || totalMonths.value === 0 || totalMonths.value > 216) return null
  return calcPercentile(heightTable.value, totalMonths.value, heightCm.value)
})

const bmiPercentile = computed(() => {
  if (bmi.value === null || !showBMI.value) return null
  return calcPercentile(bmiTable.value, totalMonths.value, bmi.value)
})

const hcPercentile = computed(() => {
  if (!headCm.value || !showHeadCirc.value || totalMonths.value === 0) return null
  return calcPercentile(hcTable.value, totalMonths.value, headCm.value)
})

const weightCat = computed(() => percentileCategory(weightPercentile.value))
const heightCat = computed(() => percentileCategory(heightPercentile.value))
const bmiCat = computed(() => percentileCategory(bmiPercentile.value))
const hcCat = computed(() => percentileCategory(hcPercentile.value))

const hasResults = computed(() =>
  totalMonths.value > 0 &&
  (weightPercentile.value !== null || heightPercentile.value !== null),
)

// ─── Helpers ──────────────────────────────────────────────────────────────────

const MONTHS_DE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']

function fmtPct(p) {
  if (p === null || p === undefined) return '—'
  return p.toFixed(1) + '%'
}

function fmtBmi(b) {
  if (b === null) return '—'
  return b.toFixed(1)
}

function catColor(cat) {
  if (!cat) return 'text-stone-400'
  if (cat === 'normal') return 'text-emerald-600'
  if (cat === 'low' || cat === 'high') return 'text-amber-600'
  return 'text-red-500'
}

function catBg(cat) {
  if (!cat) return 'bg-stone-100'
  if (cat === 'normal') return 'bg-emerald-50 border-emerald-200'
  if (cat === 'low' || cat === 'high') return 'bg-amber-50 border-amber-200'
  return 'bg-red-50 border-red-200'
}

function barWidth(p) {
  if (p === null) return '0%'
  return Math.min(100, Math.max(0, p)) + '%'
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('childGrowth.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('childGrowth.description') }}</p>
  </div>

  <!-- Inputs -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('childGrowth.inputsLabel') }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <!-- Sex -->
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childGrowth.sex') }}</label>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="sex"
              type="radio"
              value="male"
              data-testid="sex-male"
              class="accent-stone-800"
            />
            <span class="text-sm font-medium text-stone-700">{{ t('childGrowth.male') }}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="sex"
              type="radio"
              value="female"
              data-testid="sex-female"
              class="accent-stone-800"
            />
            <span class="text-sm font-medium text-stone-700">{{ t('childGrowth.female') }}</span>
          </label>
        </div>
      </div>

      <!-- Age: years -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childGrowth.ageYears') }}</label>
        <input
          v-model.number="ageYears"
          type="number"
          min="0"
          max="18"
          placeholder="2"
          data-testid="age-years"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <!-- Age: months -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childGrowth.ageMonths') }}</label>
        <select
          v-model.number="ageMonthsExtra"
          data-testid="age-months"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option v-for="m in 12" :key="m - 1" :value="m - 1">{{ m - 1 }} {{ t('childGrowth.months') }}</option>
        </select>
      </div>

      <!-- Weight -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childGrowth.weight') }}</label>
        <div class="flex gap-2">
          <input
            v-model.number="weightVal"
            type="number"
            min="0.5"
            step="0.1"
            :placeholder="weightUnit === 'kg' ? '12.5' : '27.6'"
            data-testid="weight"
            class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <select
            v-model="weightUnit"
            data-testid="weight-unit"
            class="border border-stone-300 rounded-lg px-3 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 transition-all duration-150"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      </div>

      <!-- Height -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('childGrowth.height') }}</label>
        <div class="flex gap-2">
          <input
            v-model.number="heightVal"
            type="number"
            min="30"
            step="0.1"
            :placeholder="heightUnit === 'cm' ? '87' : '34.3'"
            data-testid="height"
            class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <select
            v-model="heightUnit"
            data-testid="height-unit"
            class="border border-stone-300 rounded-lg px-3 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 transition-all duration-150"
          >
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
      </div>

      <!-- Head circumference (0–3 years only) -->
      <div v-if="showHeadCirc">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('childGrowth.headCirc') }}
          <span class="normal-case font-normal text-stone-400 ml-1">{{ t('childGrowth.optional') }}</span>
        </label>
        <div class="flex gap-2">
          <input
            v-model.number="headVal"
            type="number"
            min="20"
            step="0.1"
            :placeholder="heightUnit === 'cm' ? '47.5' : '18.7'"
            data-testid="head-circ"
            class="flex-1 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <span class="flex items-center px-3 text-sm text-stone-500 font-medium">{{ heightUnit === 'cm' ? 'cm' : 'in' }}</span>
        </div>
      </div>

    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('childGrowth.resultsLabel') }}</p>

    <div class="space-y-6">

      <!-- Height-for-age -->
      <div v-if="heightPercentile !== null" :class="['border rounded-xl p-5', catBg(heightCat)]">
        <div class="flex items-start justify-between mb-3">
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childGrowth.heightForAge') }}</p>
            <p :class="['text-3xl font-bold tabular-nums leading-none', catColor(heightCat)]" data-testid="height-percentile">{{ fmtPct(heightPercentile) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-stone-400 mb-1">{{ t(`childGrowth.cat.${heightCat}`) }}</p>
            <p class="text-sm text-stone-500">{{ heightCm?.toFixed(1) }} cm</p>
          </div>
        </div>
        <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div class="h-full bg-current rounded-full transition-all duration-500" :class="catColor(heightCat)" :style="{ width: barWidth(heightPercentile) }" />
        </div>
      </div>

      <!-- Weight-for-age -->
      <div v-if="weightPercentile !== null" :class="['border rounded-xl p-5', catBg(weightCat)]">
        <div class="flex items-start justify-between mb-3">
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childGrowth.weightForAge') }}</p>
            <p :class="['text-3xl font-bold tabular-nums leading-none', catColor(weightCat)]" data-testid="weight-percentile">{{ fmtPct(weightPercentile) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-stone-400 mb-1">{{ t(`childGrowth.cat.${weightCat}`) }}</p>
            <p class="text-sm text-stone-500">{{ weightKg?.toFixed(1) }} kg</p>
          </div>
        </div>
        <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div class="h-full bg-current rounded-full transition-all duration-500" :class="catColor(weightCat)" :style="{ width: barWidth(weightPercentile) }" />
        </div>
      </div>

      <!-- BMI-for-age -->
      <div v-if="bmiPercentile !== null" :class="['border rounded-xl p-5', catBg(bmiCat)]">
        <div class="flex items-start justify-between mb-3">
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childGrowth.bmiForAge') }}</p>
            <p :class="['text-3xl font-bold tabular-nums leading-none', catColor(bmiCat)]" data-testid="bmi-percentile">{{ fmtPct(bmiPercentile) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-stone-400 mb-1">{{ t(`childGrowth.cat.${bmiCat}`) }}</p>
            <p class="text-sm text-stone-500">BMI {{ fmtBmi(bmi) }}</p>
          </div>
        </div>
        <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div class="h-full bg-current rounded-full transition-all duration-500" :class="catColor(bmiCat)" :style="{ width: barWidth(bmiPercentile) }" />
        </div>
      </div>

      <!-- Head circumference -->
      <div v-if="hcPercentile !== null" :class="['border rounded-xl p-5', catBg(hcCat)]">
        <div class="flex items-start justify-between mb-3">
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('childGrowth.hcForAge') }}</p>
            <p :class="['text-3xl font-bold tabular-nums leading-none', catColor(hcCat)]" data-testid="hc-percentile">{{ fmtPct(hcPercentile) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-stone-400 mb-1">{{ t(`childGrowth.cat.${hcCat}`) }}</p>
            <p class="text-sm text-stone-500">{{ headCm?.toFixed(1) }} cm</p>
          </div>
        </div>
        <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div class="h-full bg-current rounded-full transition-all duration-500" :class="catColor(hcCat)" :style="{ width: barWidth(hcPercentile) }" />
        </div>
      </div>

    </div>

    <!-- Legend -->
    <div class="mt-6 pt-6 border-t border-stone-100">
      <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">{{ t('childGrowth.legend') }}</p>
      <div class="flex flex-wrap gap-3 text-xs">
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500 inline-block" />{{ t('childGrowth.cat.veryLow') }} (&lt;3%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 inline-block" />{{ t('childGrowth.cat.low') }} (3–15%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block" />{{ t('childGrowth.cat.normal') }} (15–85%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 inline-block" />{{ t('childGrowth.cat.high') }} (85–97%)</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500 inline-block" />{{ t('childGrowth.cat.veryHigh') }} (&gt;97%)</span>
      </div>
    </div>
  </div>

  <!-- Disclaimer -->
  <div v-if="hasResults" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
    <p class="text-xs text-stone-500 leading-relaxed">{{ t('childGrowth.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <BlogArticleLink calculator-key="childGrowth" />
</template>
