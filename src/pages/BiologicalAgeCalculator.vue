<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath, localeBlogPath, locale } = useLocaleRouter()

useHead(() => ({
  title: t('biologicalAge.meta.title'),
  description: t('biologicalAge.meta.description'),
  routeKey: 'biologicalAge',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Biological Age Calculator',
    url: 'https://healthcalculator.app/biological-age-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// --- Adjustment tables ---
const RHR_ADJ = (rhr) => {
  if (!rhr || rhr < 20 || rhr > 220) return 0
  if (rhr < 55) return -3
  if (rhr < 65) return -1
  if (rhr < 75) return 0
  if (rhr < 85) return 2
  return 4
}

const BP_ADJ = (bp) => {
  if (!bp || bp < 60 || bp > 250) return 0
  if (bp < 120) return -1
  if (bp < 130) return 0
  if (bp < 140) return 1
  if (bp < 160) return 2
  return 4
}

const EXERCISE_FREQ_ADJ = { none: 4, '1_2': 1, '3_4': -2, '5plus': -3 }
const EXERCISE_INTENSITY_ADJ = { light: 0, moderate: -1, vigorous: -2 }
const SLEEP_DURATION_ADJ = { under5: 4, '5_6': 2, '7_8': 0, '9plus': 1 }
const SLEEP_QUALITY_ADJ = { poor: 3, fair: 1, good: 0, excellent: -1 }
const SMOKING_ADJ = { never: 0, former: 2, light: 3, moderate: 5, heavy: 7 }
const ALCOHOL_ADJ = { none: 0, light: 0, moderate: 2, heavy: 4 }
const DIET_ADJ = { very_poor: 4, poor: 2, average: 0, good: -1, excellent: -2 }
const STRESS_ADJ = { low: -1, moderate: 0, high: 2, very_high: 4 }
const SOCIAL_ADJ = { strong: -1, average: 0, isolated: 2 }
const CONDITIONS_ADJ = { diabetes: 4, heart_disease: 5, hypertension: 2, high_cholesterol: 1 }

const BMI_ADJ = (bmi) => {
  if (!bmi || bmi < 10 || bmi > 70) return 0
  if (bmi < 18.5) return 2
  if (bmi < 25) return 0
  if (bmi < 30) return 2
  if (bmi < 35) return 4
  if (bmi < 40) return 6
  return 8
}

// --- Inputs ---
const age = ref(null)
const gender = ref('male')
const unit = ref('metric')
const weight = ref(null)
const height = ref(null)
const heightFt = ref(null)
const heightIn = ref(null)

const rhr = ref(null)
const bp = ref(null)
const exerciseFreq = ref('3_4')
const exerciseIntensity = ref('moderate')
const sleepDuration = ref('7_8')
const sleepQuality = ref('good')
const smoking = ref('never')
const alcohol = ref('light')
const diet = ref('average')
const stress = ref('moderate')
const social = ref('average')
const conditions = ref([])

// --- Unit helpers ---
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

// --- Category adjustments ---
const cardioAdj = computed(() => {
  const freqAdj = EXERCISE_FREQ_ADJ[exerciseFreq.value] ?? 0
  const intensityAdj = exerciseFreq.value !== 'none'
    ? (EXERCISE_INTENSITY_ADJ[exerciseIntensity.value] ?? 0)
    : 0
  return RHR_ADJ(rhr.value) + BP_ADJ(bp.value) + freqAdj + intensityAdj
})

const metabolicAdj = computed(() => {
  let total = BMI_ADJ(bmi.value) + (DIET_ADJ[diet.value] ?? 0)
  for (const cond of conditions.value) {
    total += CONDITIONS_ADJ[cond] ?? 0
  }
  return total
})

const lifestyleAdj = computed(() => {
  return (SMOKING_ADJ[smoking.value] ?? 0)
    + (ALCOHOL_ADJ[alcohol.value] ?? 0)
    + (SLEEP_DURATION_ADJ[sleepDuration.value] ?? 0)
    + (SLEEP_QUALITY_ADJ[sleepQuality.value] ?? 0)
})

const mentalAdj = computed(() => {
  return (STRESS_ADJ[stress.value] ?? 0) + (SOCIAL_ADJ[social.value] ?? 0)
})

const totalAdj = computed(() => {
  return cardioAdj.value + metabolicAdj.value + lifestyleAdj.value + mentalAdj.value
})

// Clamp total adjustment to [-20, 25] and ensure biological age >= 5
const biologicalAge = computed(() => {
  if (!age.value || age.value < 1 || age.value > 120) return null
  const clamped = Math.max(-20, Math.min(25, totalAdj.value))
  return Math.max(5, Math.round(age.value + clamped))
})

const ageDifference = computed(() => {
  if (!biologicalAge.value || !age.value) return null
  return biologicalAge.value - age.value
})

// --- Factor list for top improvements ---
const allFactors = computed(() => {
  const items = []

  const rhrAdj = RHR_ADJ(rhr.value)
  if (rhrAdj > 0) items.push({ key: 'rhr', adj: rhrAdj })

  const bpAdj = BP_ADJ(bp.value)
  if (bpAdj > 0) items.push({ key: 'bp', adj: bpAdj })

  const freqAdj = EXERCISE_FREQ_ADJ[exerciseFreq.value] ?? 0
  const intAdj = exerciseFreq.value !== 'none' ? (EXERCISE_INTENSITY_ADJ[exerciseIntensity.value] ?? 0) : 0
  const exerciseTotal = freqAdj + intAdj
  if (exerciseTotal > 0) items.push({ key: 'exercise', adj: exerciseTotal })

  const sleepAdj = (SLEEP_DURATION_ADJ[sleepDuration.value] ?? 0) + (SLEEP_QUALITY_ADJ[sleepQuality.value] ?? 0)
  if (sleepAdj > 0) items.push({ key: 'sleep', adj: sleepAdj })

  const smokingAdj = SMOKING_ADJ[smoking.value] ?? 0
  if (smokingAdj > 0) items.push({ key: 'smoking', adj: smokingAdj })

  const alcoholAdj = ALCOHOL_ADJ[alcohol.value] ?? 0
  if (alcoholAdj > 0) items.push({ key: 'alcohol', adj: alcoholAdj })

  const dietAdj = DIET_ADJ[diet.value] ?? 0
  if (dietAdj > 0) items.push({ key: 'diet', adj: dietAdj })

  const stressAdj = STRESS_ADJ[stress.value] ?? 0
  if (stressAdj > 0) items.push({ key: 'stress', adj: stressAdj })

  const socialAdj = SOCIAL_ADJ[social.value] ?? 0
  if (socialAdj > 0) items.push({ key: 'social', adj: socialAdj })

  const bmiAdj = BMI_ADJ(bmi.value)
  if (bmiAdj > 0) items.push({ key: 'bmi', adj: bmiAdj })

  for (const cond of conditions.value) {
    const condAdj = CONDITIONS_ADJ[cond] ?? 0
    if (condAdj > 0) items.push({ key: cond, adj: condAdj })
  }

  return items.sort((a, b) => b.adj - a.adj)
})

const topImprovements = computed(() => allFactors.value.slice(0, 3))

const blogSlug = computed(() => locale.value === 'de' ? 'biologisches-alter-berechnen' : 'biological-age-calculator')
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('biologicalAge.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('biologicalAge.description') }}</p>
  </div>

  <!-- Demographics -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.demographics') }}</h2>

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

    <div class="mb-6">
      <label for="bio-age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
        {{ t('common.age') }}
      </label>
      <input
        id="bio-age"
        v-model.number="age"
        data-testid="age-input"
        type="number"
        min="1"
        max="120"
        placeholder="35"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
      />
    </div>

    <!-- Body weight for BMI -->
    <div>
      <p class="text-xs text-stone-400 mb-3">{{ t('biologicalAge.bodyWeight') }}</p>
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
        {{ t('biologicalAge.bmiDisplay') }}: <span data-testid="bmi-display" class="font-semibold text-stone-700">{{ bmi.toFixed(1) }}</span>
      </div>
    </div>
  </div>

  <!-- Cardiovascular -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.cardiovascular') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="rhr" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.rhr') }}</label>
        <input
          id="rhr"
          v-model.number="rhr"
          data-testid="rhr-input"
          type="number"
          min="20"
          max="220"
          :placeholder="t('biologicalAge.rhrPlaceholder')"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all"
        />
        <p class="text-xs text-stone-400 mt-1">{{ t('biologicalAge.rhrHint') }}</p>
      </div>

      <div>
        <label for="bp" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.bp') }}</label>
        <input
          id="bp"
          v-model.number="bp"
          data-testid="bp-input"
          type="number"
          min="60"
          max="250"
          :placeholder="t('biologicalAge.bpPlaceholder')"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all"
        />
      </div>

      <div>
        <label for="exercise-freq" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.exerciseFreq') }}</label>
        <select id="exercise-freq" v-model="exerciseFreq" data-testid="exercise-freq-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="none">{{ t('biologicalAge.exerciseFreqNone') }}</option>
          <option value="1_2">{{ t('biologicalAge.exerciseFreq1_2') }}</option>
          <option value="3_4">{{ t('biologicalAge.exerciseFreq3_4') }}</option>
          <option value="5plus">{{ t('biologicalAge.exerciseFreq5plus') }}</option>
        </select>
      </div>

      <div v-if="exerciseFreq !== 'none'">
        <label for="exercise-intensity" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.exerciseIntensity') }}</label>
        <select id="exercise-intensity" v-model="exerciseIntensity" data-testid="exercise-intensity-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="light">{{ t('biologicalAge.exerciseLight') }}</option>
          <option value="moderate">{{ t('biologicalAge.exerciseModerate') }}</option>
          <option value="vigorous">{{ t('biologicalAge.exerciseVigorous') }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Sleep -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.sleepSection') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="sleep-duration" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.sleepDuration') }}</label>
        <select id="sleep-duration" v-model="sleepDuration" data-testid="sleep-duration-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="under5">{{ t('biologicalAge.sleepDurationUnder5') }}</option>
          <option value="5_6">{{ t('biologicalAge.sleepDuration5_6') }}</option>
          <option value="7_8">{{ t('biologicalAge.sleepDuration7_8') }}</option>
          <option value="9plus">{{ t('biologicalAge.sleepDuration9plus') }}</option>
        </select>
      </div>

      <div>
        <label for="sleep-quality" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.sleepQuality') }}</label>
        <select id="sleep-quality" v-model="sleepQuality" data-testid="sleep-quality-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="poor">{{ t('biologicalAge.sleepPoor') }}</option>
          <option value="fair">{{ t('biologicalAge.sleepFair') }}</option>
          <option value="good">{{ t('biologicalAge.sleepGood') }}</option>
          <option value="excellent">{{ t('biologicalAge.sleepExcellent') }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Lifestyle -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.lifestyle') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="smoking" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.smoking') }}</label>
        <select id="smoking" v-model="smoking" data-testid="smoking-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="never">{{ t('biologicalAge.smokingNever') }}</option>
          <option value="former">{{ t('biologicalAge.smokingFormer') }}</option>
          <option value="light">{{ t('biologicalAge.smokingLight') }}</option>
          <option value="moderate">{{ t('biologicalAge.smokingModerate') }}</option>
          <option value="heavy">{{ t('biologicalAge.smokingHeavy') }}</option>
        </select>
      </div>

      <div>
        <label for="alcohol" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.alcohol') }}</label>
        <select id="alcohol" v-model="alcohol" data-testid="alcohol-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="none">{{ t('biologicalAge.alcoholNone') }}</option>
          <option value="light">{{ t('biologicalAge.alcoholLight') }}</option>
          <option value="moderate">{{ t('biologicalAge.alcoholModerate') }}</option>
          <option value="heavy">{{ t('biologicalAge.alcoholHeavy') }}</option>
        </select>
      </div>

      <div class="sm:col-span-2">
        <label for="diet" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.diet') }}</label>
        <select id="diet" v-model="diet" data-testid="diet-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="very_poor">{{ t('biologicalAge.dietVeryPoor') }}</option>
          <option value="poor">{{ t('biologicalAge.dietPoor') }}</option>
          <option value="average">{{ t('biologicalAge.dietAverage') }}</option>
          <option value="good">{{ t('biologicalAge.dietGood') }}</option>
          <option value="excellent">{{ t('biologicalAge.dietExcellent') }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Mental & Social -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.mental') }}</h2>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label for="stress" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.stress') }}</label>
        <select id="stress" v-model="stress" data-testid="stress-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="low">{{ t('biologicalAge.stressLow') }}</option>
          <option value="moderate">{{ t('biologicalAge.stressModerate') }}</option>
          <option value="high">{{ t('biologicalAge.stressHigh') }}</option>
          <option value="very_high">{{ t('biologicalAge.stressVeryHigh') }}</option>
        </select>
      </div>

      <div>
        <label for="social" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('biologicalAge.social') }}</label>
        <select id="social" v-model="social" data-testid="social-select"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-sm bg-white focus:outline-none focus:border-stone-600 transition-all">
          <option value="strong">{{ t('biologicalAge.socialStrong') }}</option>
          <option value="average">{{ t('biologicalAge.socialAverage') }}</option>
          <option value="isolated">{{ t('biologicalAge.socialIsolated') }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Health / Chronic conditions -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('biologicalAge.health') }}</h2>
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('biologicalAge.conditions') }}</p>
    <div class="grid grid-cols-2 gap-2">
      <label v-for="cond in ['diabetes', 'heart_disease', 'hypertension', 'high_cholesterol']" :key="cond"
        class="flex items-center gap-2 text-sm text-stone-700 cursor-pointer">
        <input type="checkbox" :value="cond" v-model="conditions"
          :data-testid="`condition-${cond}`"
          class="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500 cursor-pointer" />
        {{ t(`biologicalAge.condition${cond.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`) }}
      </label>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="biologicalAge" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">

    <!-- Main result -->
    <div class="flex flex-col sm:flex-row sm:items-end gap-6 mb-8 pb-8 border-b border-stone-100">
      <div>
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('biologicalAge.biologicalAge') }}</div>
        <div class="flex items-baseline gap-2">
          <span data-testid="bio-age-result" class="text-6xl font-bold text-stone-900 tabular-nums leading-none">{{ biologicalAge }}</span>
          <span class="text-2xl text-stone-400">{{ t('biologicalAge.years') }}</span>
        </div>
      </div>

      <div class="sm:ml-8">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('biologicalAge.difference') }}</div>
        <div class="flex items-baseline gap-2">
          <span
            data-testid="age-difference"
            :class="ageDifference <= 0 ? 'text-emerald-600' : 'text-red-500'"
            class="text-3xl font-bold tabular-nums leading-none"
          >{{ ageDifference > 0 ? '+' : '' }}{{ ageDifference }}</span>
          <span class="text-lg text-stone-400">{{ ageDifference < 0 ? t('biologicalAge.youngerBy') : ageDifference > 0 ? t('biologicalAge.olderBy') : '' }}</span>
        </div>
        <div v-if="ageDifference === 0" class="text-sm text-stone-500 mt-1">{{ t('biologicalAge.sameAge') }}</div>
      </div>
    </div>

    <!-- Category breakdown -->
    <div class="mb-8">
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('biologicalAge.categoryBreakdown') }}</h2>
      <div data-testid="category-breakdown" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="(adj, label) in {
          [t('biologicalAge.categoryCardiovascular')]: cardioAdj,
          [t('biologicalAge.categoryMetabolic')]: metabolicAdj,
          [t('biologicalAge.categoryLifestyle')]: lifestyleAdj,
          [t('biologicalAge.categoryMental')]: mentalAdj,
        }" :key="label"
          class="bg-stone-50 rounded-xl p-4 text-center">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">{{ label }}</div>
          <div :class="adj <= 0 ? 'text-emerald-600' : 'text-red-500'" class="text-2xl font-bold tabular-nums">
            {{ adj > 0 ? '+' : '' }}{{ adj }}
          </div>
          <div class="text-xs text-stone-400 mt-1">{{ t('biologicalAge.years') }}</div>
        </div>
      </div>
    </div>

    <!-- Top 3 improvements -->
    <div v-if="topImprovements.length > 0" class="mb-8">
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('biologicalAge.topImprovements') }}</h2>
      <div data-testid="top-improvements" class="space-y-3">
        <div v-for="(item, index) in topImprovements" :key="item.key"
          class="flex items-start gap-4 bg-amber-50 border border-amber-100 rounded-xl px-5 py-4">
          <span class="text-amber-600 font-bold text-lg tabular-nums w-6 text-center shrink-0">{{ index + 1 }}</span>
          <div>
            <div class="text-sm font-semibold text-stone-800">+{{ item.adj }} {{ t('biologicalAge.years') }}</div>
            <div class="text-sm text-stone-600 mt-0.5">{{ t(`biologicalAge.actions.${item.key}`) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 rounded-lg p-4">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('biologicalAge.disclaimer') }}</p>
    </div>
  </div>

  <!-- Blog link -->
  <div class="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-6" data-testid="blog-banner">
    <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">{{ t('biologicalAge.blogLinkLabel') }}</p>
    <router-link
      :to="localeBlogPath(blogSlug)"
      class="text-base font-semibold text-stone-900 hover:text-stone-600 transition-colors"
    >{{ t('biologicalAge.blogLinkTitle') }} &rarr;</router-link>
  </div>

  <AdSlot class="mt-8" />
</template>
