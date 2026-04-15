<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('lifeExpectancy.meta.title'),
  description: t('lifeExpectancy.meta.description'),
  routeKey: 'lifeExpectancy',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Life Expectancy Calculator',
    url: 'https://healthcalculator.app/life-expectancy-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Base life expectancy [male, female] by country (WHO 2022 approximations)
const BASE_LE = {
  de: [78.5, 83.4],
  us: [73.5, 79.3],
  uk: [79.0, 82.8],
  fr: [79.7, 85.7],
  jp: [81.1, 87.1],
  au: [81.2, 85.3],
  ca: [79.9, 84.1],
  ch: [81.8, 85.5],
  se: [81.3, 84.7],
  no: [81.0, 84.7],
  nl: [80.3, 83.6],
  es: [80.7, 86.2],
  it: [80.5, 84.9],
  at: [79.2, 83.8],
  be: [79.0, 83.8],
  dk: [79.0, 82.9],
  fi: [79.0, 84.0],
  pt: [78.2, 84.3],
  pl: [73.4, 81.1],
  cz: [75.9, 81.9],
  ru: [66.5, 76.4],
  cn: [74.7, 79.5],
  kr: [80.5, 86.5],
  in: [68.2, 70.7],
  br: [73.0, 79.9],
  mx: [72.1, 77.8],
  ar: [73.6, 80.3],
  za: [62.5, 68.7],
  world: [70.8, 75.9],
}

// Lifestyle adjustment factors (years)
const SMOKING_ADJ = { never: 0, former: -2, light: -4, moderate: -7, heavy: -10 }
const ALCOHOL_ADJ = { none: 0, light: 0, moderate: -2, heavy: -6, very_heavy: -10 }
const EXERCISE_ADJ = { none: -3, light: 0, moderate: 2, active: 3 }
const DIET_ADJ = { very_poor: -3, poor: -1, average: 0, good: 1, excellent: 2 }
const FAMILY_ADJ = { longevity: 3, good: 1, average: 0, heart_disease: -2, cancer: -2, multiple: -3 }
const STRESS_ADJ = { low: 1, moderate: 0, high: -2, very_high: -4 }
const SOCIAL_ADJ = { strong: 2, average: 0, isolated: -3 }
const CONDITIONS_ADJ = { diabetes: -5, heart_disease: -6, cancer: -4, hypertension: -2 }

// Inputs — demographics
const age = ref(null)
const gender = ref('male')
const country = ref('de')
const unit = ref('metric')

// Inputs — lifestyle
const smoking = ref('never')
const alcohol = ref('light')
const exercise = ref('moderate')
const diet = ref('average')

// Inputs — health
const weight = ref(null)
const height = ref(null)
const heightFt = ref(null)
const heightIn = ref(null)
const conditions = ref([])
const familyHistory = ref('average')

// Inputs — mental
const stress = ref('moderate')
const social = ref('average')

// Unit helpers
const toKg = (val) => unit.value === 'imperial' ? val * 0.453592 : val
const heightCm = computed(() => {
  if (unit.value === 'imperial') {
    const ft = heightFt.value || 0
    const inches = heightIn.value || 0
    if (!ft && !inches) return null
    return (ft * 12 + inches) * 2.54
  }
  return height.value
})

const bmi = computed(() => {
  if (!weight.value || !heightCm.value || heightCm.value <= 0) return null
  const w = toKg(weight.value)
  const h = heightCm.value / 100
  return w / (h * h)
})

function bmiAdjustment(bmiVal) {
  if (!bmiVal || bmiVal < 10 || bmiVal > 70) return 0
  if (bmiVal < 18.5) return -1
  if (bmiVal < 25) return 0
  if (bmiVal < 30) return -1
  if (bmiVal < 35) return -3
  if (bmiVal < 40) return -5
  return -8
}

// National average for selected country + gender
const nationalAverage = computed(() => {
  const le = BASE_LE[country.value] || BASE_LE.world
  return gender.value === 'male' ? le[0] : le[1]
})

// Factor-by-factor adjustments
const factors = computed(() => {
  const items = []

  const smokingAdj = SMOKING_ADJ[smoking.value] || 0
  if (smokingAdj !== 0) items.push({ key: 'smoking', label: t('lifeExpectancy.smoking'), years: smokingAdj })

  const alcoholAdj = ALCOHOL_ADJ[alcohol.value] || 0
  if (alcoholAdj !== 0) items.push({ key: 'alcohol', label: t('lifeExpectancy.alcohol'), years: alcoholAdj })

  const exerciseAdj = EXERCISE_ADJ[exercise.value] || 0
  if (exerciseAdj !== 0) items.push({ key: 'exercise', label: t('lifeExpectancy.exercise'), years: exerciseAdj })

  const dietAdj = DIET_ADJ[diet.value] || 0
  if (dietAdj !== 0) items.push({ key: 'diet', label: t('lifeExpectancy.diet'), years: dietAdj })

  const bmiAdj = bmiAdjustment(bmi.value)
  if (bmiAdj !== 0) items.push({ key: 'bmi', label: 'BMI', years: bmiAdj })

  for (const cond of conditions.value) {
    const adj = CONDITIONS_ADJ[cond] || 0
    const keyPart = cond.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
    items.push({ key: cond, label: t(`lifeExpectancy.condition${keyPart}`), years: adj })
  }

  const familyAdj = FAMILY_ADJ[familyHistory.value] || 0
  if (familyAdj !== 0) items.push({ key: 'family', label: t('lifeExpectancy.familyHistory'), years: familyAdj })

  const stressAdj = STRESS_ADJ[stress.value] || 0
  if (stressAdj !== 0) items.push({ key: 'stress', label: t('lifeExpectancy.stressLevel'), years: stressAdj })

  const socialAdj = SOCIAL_ADJ[social.value] || 0
  if (socialAdj !== 0) items.push({ key: 'social', label: t('lifeExpectancy.social'), years: socialAdj })

  return items
})

const totalAdjustment = computed(() => factors.value.reduce((sum, f) => sum + f.years, 0))

const estimatedLE = computed(() => {
  if (!age.value || age.value < 1 || age.value > 100) return null
  const raw = nationalAverage.value + totalAdjustment.value
  return Math.round(Math.max(age.value + 1, Math.min(105, raw)) * 10) / 10
})

const yearsRemaining = computed(() => {
  if (!estimatedLE.value || !age.value) return null
  return Math.max(0, Math.round((estimatedLE.value - age.value) * 10) / 10)
})

const vsNational = computed(() => {
  if (!estimatedLE.value) return null
  return Math.round((estimatedLE.value - nationalAverage.value) * 10) / 10
})

// Top 3 recommendations (worst negative factors)
const recommendations = computed(() => {
  return [...factors.value]
    .filter(f => f.years < 0)
    .sort((a, b) => a.years - b.years)
    .slice(0, 3)
})

const countryKeys = Object.keys(BASE_LE)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('lifeExpectancy.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('lifeExpectancy.description') }}</p>
  </div>

  <!-- Demographics -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="gender = 'male'"
        :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.male') }}</button>
      <button
        @click="gender = 'female'"
        :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >{{ t('common.female') }}</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.age') }}
        </label>
        <input
          id="age"
          v-model.number="age"
          data-testid="age-input"
          type="number"
          min="1"
          max="100"
          placeholder="35"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="country" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('lifeExpectancy.country') }}
        </label>
        <select
          id="country"
          v-model="country"
          data-testid="country-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option v-for="key in countryKeys" :key="key" :value="key">{{ t(`lifeExpectancy.countries.${key}`) }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Lifestyle -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('lifeExpectancy.lifestyle') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="smoking" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.smoking') }}</label>
        <select id="smoking" v-model="smoking" data-testid="smoking-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="never">{{ t('lifeExpectancy.smokingNever') }}</option>
          <option value="former">{{ t('lifeExpectancy.smokingFormer') }}</option>
          <option value="light">{{ t('lifeExpectancy.smokingLight') }}</option>
          <option value="moderate">{{ t('lifeExpectancy.smokingModerate') }}</option>
          <option value="heavy">{{ t('lifeExpectancy.smokingHeavy') }}</option>
        </select>
      </div>

      <div>
        <label for="alcohol" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.alcohol') }}</label>
        <select id="alcohol" v-model="alcohol" data-testid="alcohol-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="none">{{ t('lifeExpectancy.alcoholNone') }}</option>
          <option value="light">{{ t('lifeExpectancy.alcoholLight') }}</option>
          <option value="moderate">{{ t('lifeExpectancy.alcoholModerate') }}</option>
          <option value="heavy">{{ t('lifeExpectancy.alcoholHeavy') }}</option>
          <option value="very_heavy">{{ t('lifeExpectancy.alcoholVeryHeavy') }}</option>
        </select>
      </div>

      <div>
        <label for="exercise" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.exercise') }}</label>
        <select id="exercise" v-model="exercise" data-testid="exercise-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="none">{{ t('lifeExpectancy.exerciseNone') }}</option>
          <option value="light">{{ t('lifeExpectancy.exerciseLight') }}</option>
          <option value="moderate">{{ t('lifeExpectancy.exerciseModerate') }}</option>
          <option value="active">{{ t('lifeExpectancy.exerciseActive') }}</option>
        </select>
      </div>

      <div>
        <label for="diet" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.diet') }}</label>
        <select id="diet" v-model="diet" data-testid="diet-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="very_poor">{{ t('lifeExpectancy.dietVeryPoor') }}</option>
          <option value="poor">{{ t('lifeExpectancy.dietPoor') }}</option>
          <option value="average">{{ t('lifeExpectancy.dietAverage') }}</option>
          <option value="good">{{ t('lifeExpectancy.dietGood') }}</option>
          <option value="excellent">{{ t('lifeExpectancy.dietExcellent') }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Health -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('lifeExpectancy.health') }}</h2>

    <!-- Body weight for BMI -->
    <div class="mb-6">
      <div class="flex gap-2 mb-4">
        <button
          @click="unit = 'metric'"
          :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('common.metric') }}</button>
        <button
          @click="unit = 'imperial'"
          :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('common.imperial') }}</button>
      </div>

      <p class="text-xs text-stone-400 mb-3">{{ t('lifeExpectancy.bodyWeight') }}</p>

      <div v-if="unit === 'metric'" class="grid grid-cols-2 gap-4">
        <div>
          <label for="weight-kg" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: 'kg' }) }}
          </label>
          <input id="weight-kg" v-model.number="weight" type="number" placeholder="75"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all" />
        </div>
        <div>
          <label for="height-cm" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.height', { unit: 'cm' }) }}
          </label>
          <input id="height-cm" v-model.number="height" type="number" placeholder="175"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all" />
        </div>
      </div>

      <div v-else class="grid grid-cols-3 gap-4">
        <div>
          <label for="weight-lbs" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: 'lbs' }) }}
          </label>
          <input id="weight-lbs" v-model.number="weight" type="number" placeholder="165"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all" />
        </div>
        <div>
          <label for="height-ft" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">ft</label>
          <input id="height-ft" v-model.number="heightFt" type="number" placeholder="5"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all" />
        </div>
        <div>
          <label for="height-in" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">in</label>
          <input id="height-in" v-model.number="heightIn" type="number" placeholder="9"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all" />
        </div>
      </div>

      <div v-if="bmi" class="mt-3 text-sm text-stone-500">
        BMI: <span data-testid="bmi-display" class="font-semibold text-stone-700">{{ bmi.toFixed(1) }}</span>
      </div>
    </div>

    <!-- Chronic conditions -->
    <div class="mb-6">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('lifeExpectancy.conditions') }}</p>
      <div class="grid grid-cols-2 gap-2">
        <label v-for="cond in ['diabetes', 'heart_disease', 'cancer', 'hypertension']" :key="cond"
          class="flex items-center gap-2 text-sm text-stone-700 cursor-pointer">
          <input type="checkbox" :value="cond" v-model="conditions"
            class="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500 cursor-pointer" />
          {{ t(`lifeExpectancy.condition${cond.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`) }}
        </label>
      </div>
    </div>

    <!-- Family history -->
    <div>
      <label for="family" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.familyHistory') }}</label>
      <select id="family" v-model="familyHistory" data-testid="family-select"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
        <option value="longevity">{{ t('lifeExpectancy.familyLongevity') }}</option>
        <option value="good">{{ t('lifeExpectancy.familyGood') }}</option>
        <option value="average">{{ t('lifeExpectancy.familyAverage') }}</option>
        <option value="heart_disease">{{ t('lifeExpectancy.familyHeartDisease') }}</option>
        <option value="cancer">{{ t('lifeExpectancy.familyCancer') }}</option>
        <option value="multiple">{{ t('lifeExpectancy.familyMultiple') }}</option>
      </select>
    </div>
  </div>

  <!-- Mental & Social -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('lifeExpectancy.mental') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="stress" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.stressLevel') }}</label>
        <select id="stress" v-model="stress" data-testid="stress-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="low">{{ t('lifeExpectancy.stressLow') }}</option>
          <option value="moderate">{{ t('lifeExpectancy.stressModerate') }}</option>
          <option value="high">{{ t('lifeExpectancy.stressHigh') }}</option>
          <option value="very_high">{{ t('lifeExpectancy.stressVeryHigh') }}</option>
        </select>
      </div>

      <div>
        <label for="social" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('lifeExpectancy.social') }}</label>
        <select id="social" v-model="social" data-testid="social-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="strong">{{ t('lifeExpectancy.socialStrong') }}</option>
          <option value="average">{{ t('lifeExpectancy.socialAverage') }}</option>
          <option value="isolated">{{ t('lifeExpectancy.socialIsolated') }}</option>
        </select>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="estimatedLE" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- Main result -->
    <div class="flex flex-col sm:flex-row sm:items-end gap-4 mb-6 pb-6 border-b border-stone-100">
      <div>
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('lifeExpectancy.estimatedLE') }}</div>
        <div class="flex items-baseline gap-2">
          <span data-testid="le-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ estimatedLE }}</span>
          <span class="text-2xl text-stone-400">years</span>
        </div>
      </div>
      <div class="sm:ml-8">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('lifeExpectancy.yearsRemaining') }}</div>
        <div class="flex items-baseline gap-2">
          <span data-testid="years-remaining" class="text-3xl font-bold text-stone-900 tabular-nums leading-none">{{ yearsRemaining }}</span>
          <span class="text-lg text-stone-400">years</span>
        </div>
      </div>
    </div>

    <!-- Comparison to national average -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('lifeExpectancy.nationalAverage') }}</div>
        <div data-testid="national-average" class="text-2xl font-bold text-stone-900 tabular-nums">{{ nationalAverage }}</div>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('lifeExpectancy.vsNational') }}</div>
        <div data-testid="vs-national"
          :class="vsNational >= 0 ? 'text-emerald-600' : 'text-red-500'"
          class="text-2xl font-bold tabular-nums">
          {{ vsNational >= 0 ? '+' : '' }}{{ vsNational }}
        </div>
      </div>
    </div>

    <!-- Factor breakdown -->
    <div v-if="factors.length > 0" class="mb-6">
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('lifeExpectancy.factorBreakdown') }}</h2>
      <div data-testid="factor-breakdown" class="space-y-2">
        <div v-for="f in factors" :key="f.key"
          class="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
          <span class="text-sm text-stone-600">{{ f.label }}</span>
          <span
            :class="f.years > 0 ? 'text-emerald-600' : 'text-red-500'"
            class="text-sm font-semibold tabular-nums">
            {{ f.years > 0 ? '+' : '' }}{{ f.years }}
          </span>
        </div>
      </div>
    </div>

    <!-- Recommendations -->
    <div v-if="recommendations.length > 0" class="mb-6">
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('lifeExpectancy.recommendations') }}</h2>
      <div class="space-y-2">
        <div v-for="r in recommendations" :key="r.key"
          class="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
          <span class="text-amber-600 font-bold text-sm">{{ r.years }}</span>
          <span class="text-sm text-stone-700">{{ r.label }}</span>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 rounded-lg p-4">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('lifeExpectancy.disclaimer') }}</p>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <BlogBanner calculator-key="lifeExpectancy" />
</template>
