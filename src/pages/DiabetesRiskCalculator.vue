<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('diabetesRisk.meta.title'),
  description: t('diabetesRisk.meta.description'),
  routeKey: 'diabetesRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Diabetes Risk Calculator (FINDRISC)',
    url: 'https://healthcalculator.app/diabetes-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// FINDRISC scoring constants
// Source: Lindström J, Tuomilehto J. Diabetes Care. 2003;26(3):725-731.
const AGE_SCORES = { lt45: 0, '45_54': 2, '55_64': 3, gt64: 4 }
const BMI_SCORES = { lt25: 0, '25_30': 1, gt30: 3 }
// Waist circumference thresholds: men <94/94-102/>102, women <80/80-88/>88
const WAIST_SCORES = { low: 0, mid: 3, high: 4 }
const ACTIVITY_SCORES = { yes: 0, no: 2 }
const VEGFRUIT_SCORES = { yes: 0, no: 1 }
const BP_MED_SCORES = { no: 0, yes: 2 }
const HIGH_GLUCOSE_SCORES = { no: 0, yes: 5 }
const FAMILY_SCORES = { none: 0, distant: 3, close: 5 }

// Inputs
const unit = ref('metric')
const gender = ref('male')
const ageGroup = ref(null)
const weightKg = ref(null)
const weightLbs = ref(null)
const heightCmVal = ref(null)
const heightFt = ref(null)
const heightIn = ref(null)
const waistCm = ref(null)
const waistIn = ref(null)
const physicalActivity = ref(null)
const vegFruitDaily = ref(null)
const bpMedication = ref(null)
const highBloodGlucose = ref(null)
const familyHistory = ref(null)

// Unit conversion helpers
const weightInKg = computed(() => {
  if (unit.value === 'imperial') return weightLbs.value ? weightLbs.value * 0.453592 : null
  return weightKg.value
})

const heightInCm = computed(() => {
  if (unit.value === 'imperial') {
    const ft = heightFt.value || 0
    const inches = heightIn.value || 0
    return ft || inches ? (ft * 12 + inches) * 2.54 : null
  }
  return heightCmVal.value
})

const waistInCm = computed(() => {
  if (unit.value === 'imperial') return waistIn.value ? waistIn.value * 2.54 : null
  return waistCm.value
})

// BMI calculation
const bmi = computed(() => {
  const w = weightInKg.value
  const h = heightInCm.value
  if (!w || !h || h <= 0) return null
  return w / ((h / 100) ** 2)
})

// BMI category for scoring
const bmiScore = computed(() => {
  const b = bmi.value
  if (b === null) return null
  if (b < 25) return BMI_SCORES.lt25
  if (b <= 30) return BMI_SCORES['25_30']
  return BMI_SCORES.gt30
})

// Waist circumference score
const waistScore = computed(() => {
  const w = waistInCm.value
  if (w === null) return null
  if (gender.value === 'male') {
    if (w < 94) return WAIST_SCORES.low
    if (w <= 102) return WAIST_SCORES.mid
    return WAIST_SCORES.high
  } else {
    if (w < 80) return WAIST_SCORES.low
    if (w <= 88) return WAIST_SCORES.mid
    return WAIST_SCORES.high
  }
})

// Total FINDRISC score
const score = computed(() => {
  const ageScore = ageGroup.value !== null ? AGE_SCORES[ageGroup.value] : null
  const bScore = bmiScore.value
  const wScore = waistScore.value
  const actScore = physicalActivity.value !== null ? ACTIVITY_SCORES[physicalActivity.value] : null
  const vegScore = vegFruitDaily.value !== null ? VEGFRUIT_SCORES[vegFruitDaily.value] : null
  const bpScore = bpMedication.value !== null ? BP_MED_SCORES[bpMedication.value] : null
  const glScore = highBloodGlucose.value !== null ? HIGH_GLUCOSE_SCORES[highBloodGlucose.value] : null
  const famScore = familyHistory.value !== null ? FAMILY_SCORES[familyHistory.value] : null

  if ([ageScore, bScore, wScore, actScore, vegScore, bpScore, glScore, famScore].some(v => v === null)) return null

  return ageScore + bScore + wScore + actScore + vegScore + bpScore + glScore + famScore
})

// Risk category
const riskCategory = computed(() => {
  const s = score.value
  if (s === null) return null
  if (s <= 7) return 'low'
  if (s <= 11) return 'slightly_elevated'
  if (s <= 14) return 'moderate'
  if (s <= 20) return 'high'
  return 'very_high'
})

// 10-year probability of developing type 2 diabetes
const probability = computed(() => {
  const cat = riskCategory.value
  if (!cat) return null
  const map = { low: 1, slightly_elevated: 4, moderate: 17, high: 33, very_high: 50 }
  return map[cat]
})

const riskColor = computed(() => {
  const cat = riskCategory.value
  if (!cat) return ''
  return {
    low: 'text-green-700',
    slightly_elevated: 'text-lime-700',
    moderate: 'text-yellow-700',
    high: 'text-orange-700',
    very_high: 'text-red-700',
  }[cat]
})

const riskBg = computed(() => {
  const cat = riskCategory.value
  if (!cat) return ''
  return {
    low: 'bg-green-50 border-green-200',
    slightly_elevated: 'bg-lime-50 border-lime-200',
    moderate: 'bg-yellow-50 border-yellow-200',
    high: 'bg-orange-50 border-orange-200',
    very_high: 'bg-red-50 border-red-200',
  }[cat]
})

// Factor breakdown for display
const factorRows = computed(() => {
  if (score.value === null) return []
  return [
    { label: t('diabetesRisk.factorAge'), score: AGE_SCORES[ageGroup.value] },
    { label: t('diabetesRisk.factorBmi'), score: bmiScore.value },
    { label: t('diabetesRisk.factorWaist'), score: waistScore.value },
    { label: t('diabetesRisk.factorActivity'), score: ACTIVITY_SCORES[physicalActivity.value] },
    { label: t('diabetesRisk.factorVegFruit'), score: VEGFRUIT_SCORES[vegFruitDaily.value] },
    { label: t('diabetesRisk.factorBpMed'), score: BP_MED_SCORES[bpMedication.value] },
    { label: t('diabetesRisk.factorHighGlucose'), score: HIGH_GLUCOSE_SCORES[highBloodGlucose.value] },
    { label: t('diabetesRisk.factorFamily'), score: FAMILY_SCORES[familyHistory.value] },
  ]
})

// Prevention recommendations
const recommendations = computed(() => {
  const cat = riskCategory.value
  if (!cat) return []
  const recs = []

  if (bmiScore.value > 0) recs.push(t('diabetesRisk.recWeight'))
  if (ACTIVITY_SCORES[physicalActivity.value] > 0) recs.push(t('diabetesRisk.recActivity'))
  if (VEGFRUIT_SCORES[vegFruitDaily.value] > 0) recs.push(t('diabetesRisk.recDiet'))
  if (cat === 'moderate' || cat === 'high' || cat === 'very_high') recs.push(t('diabetesRisk.recScreening'))
  if (cat === 'high' || cat === 'very_high') recs.push(t('diabetesRisk.recDoctor'))

  if (recs.length === 0) recs.push(t('diabetesRisk.recMaintain'))
  return recs
})

function switchUnit(u) {
  unit.value = u
  weightKg.value = null
  weightLbs.value = null
  heightCmVal.value = null
  heightFt.value = null
  heightIn.value = null
  waistCm.value = null
  waistIn.value = null
}
</script>

<template>
  <div>
    <div class="mb-8">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-3xl font-bold tracking-tight text-stone-900 mb-2">{{ t('diabetesRisk.title') }}</h1>
      <p class="text-stone-500 text-base">{{ t('diabetesRisk.description') }}</p>
    </div>

    <BlogArticleLink calculatorKey="diabetesRisk" />

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6">

      <!-- Unit toggle -->
      <div class="flex gap-2 mb-6">
        <button
          @click="switchUnit('metric')"
          :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >{{ t('common.metric') }}</button>
        <button
          @click="switchUnit('imperial')"
          :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >{{ t('common.imperial') }}</button>
      </div>

      <!-- Gender -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-2">{{ t('diabetesRisk.gender') }}</label>
        <div class="flex gap-2">
          <button
            @click="gender = 'male'"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.male') }}</button>
          <button
            @click="gender = 'female'"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.female') }}</button>
        </div>
      </div>

      <!-- Age group -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-2">{{ t('diabetesRisk.ageGroup') }}</label>
        <select
          v-model="ageGroup"
          data-testid="age-group-select"
          class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <option :value="null" disabled>{{ t('diabetesRisk.selectAge') }}</option>
          <option value="lt45">{{ t('diabetesRisk.ageLt45') }}</option>
          <option value="45_54">{{ t('diabetesRisk.age45_54') }}</option>
          <option value="55_64">{{ t('diabetesRisk.age55_64') }}</option>
          <option value="gt64">{{ t('diabetesRisk.ageGt64') }}</option>
        </select>
      </div>

      <!-- Weight & Height for BMI -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-2">{{ t('diabetesRisk.weightHeight') }}</label>
        <div v-if="unit === 'metric'" class="flex gap-3">
          <div class="flex-1">
            <label class="block text-xs text-stone-500 mb-1">{{ t('common.weight') }} (kg)</label>
            <input
              v-model.number="weightKg"
              type="number"
              min="30"
              max="300"
              data-testid="weight-input"
              class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
              :placeholder="t('diabetesRisk.placeholderWeight')"
            />
          </div>
          <div class="flex-1">
            <label class="block text-xs text-stone-500 mb-1">{{ t('common.height') }} (cm)</label>
            <input
              v-model.number="heightCmVal"
              type="number"
              min="100"
              max="250"
              data-testid="height-input"
              class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
              :placeholder="t('diabetesRisk.placeholderHeight')"
            />
          </div>
        </div>
        <div v-else class="flex gap-3 flex-wrap">
          <div class="w-28">
            <label class="block text-xs text-stone-500 mb-1">{{ t('common.weight') }} (lbs)</label>
            <input
              v-model.number="weightLbs"
              type="number"
              min="60"
              max="660"
              data-testid="weight-lbs-input"
              class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <div class="w-24">
            <label for="height-ft" class="block text-xs text-stone-500 mb-1">ft</label>
            <input
              id="height-ft"
              v-model.number="heightFt"
              type="number"
              min="3"
              max="8"
              data-testid="height-ft-input"
              class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <div class="w-24">
            <label for="height-in" class="block text-xs text-stone-500 mb-1">in</label>
            <input
              id="height-in"
              v-model.number="heightIn"
              type="number"
              min="0"
              max="11"
              data-testid="height-in-input"
              class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
        </div>
        <div v-if="bmi !== null" class="mt-2 text-xs text-stone-500">
          {{ t('diabetesRisk.bmiLabel') }}: <span data-testid="bmi-display" class="font-semibold text-stone-700">{{ bmi.toFixed(1) }}</span>
        </div>
      </div>

      <!-- Waist circumference -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-1">{{ t('diabetesRisk.waist') }}</label>
        <p class="text-xs text-stone-400 mb-2">{{ t('diabetesRisk.waistHint') }}</p>
        <div v-if="unit === 'metric'" class="flex items-center gap-2">
          <input
            v-model.number="waistCm"
            type="number"
            min="40"
            max="200"
            data-testid="waist-input"
            class="w-40 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            :placeholder="gender === 'male' ? t('diabetesRisk.placeholderWaistMale') : t('diabetesRisk.placeholderWaistFemale')"
          />
          <span class="text-sm text-stone-500">cm</span>
        </div>
        <div v-else class="flex items-center gap-2">
          <input
            v-model.number="waistIn"
            type="number"
            min="15"
            max="80"
            data-testid="waist-in-input"
            class="w-40 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
          <span class="text-sm text-stone-500">in</span>
        </div>
      </div>

      <!-- Physical activity -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-1">{{ t('diabetesRisk.physicalActivity') }}</label>
        <p class="text-xs text-stone-400 mb-2">{{ t('diabetesRisk.physicalActivityHint') }}</p>
        <div class="flex gap-2">
          <button
            @click="physicalActivity = 'yes'"
            :class="physicalActivity === 'yes' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="activity-yes"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.yes') }}</button>
          <button
            @click="physicalActivity = 'no'"
            :class="physicalActivity === 'no' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="activity-no"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.no') }}</button>
        </div>
      </div>

      <!-- Vegetable/fruit consumption -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-1">{{ t('diabetesRisk.vegFruitDaily') }}</label>
        <p class="text-xs text-stone-400 mb-2">{{ t('diabetesRisk.vegFruitHint') }}</p>
        <div class="flex gap-2">
          <button
            @click="vegFruitDaily = 'yes'"
            :class="vegFruitDaily === 'yes' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="vegfruit-yes"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.yes') }}</button>
          <button
            @click="vegFruitDaily = 'no'"
            :class="vegFruitDaily === 'no' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="vegfruit-no"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.no') }}</button>
        </div>
      </div>

      <!-- Blood pressure medication -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-2">{{ t('diabetesRisk.bpMedication') }}</label>
        <div class="flex gap-2">
          <button
            @click="bpMedication = 'no'"
            :class="bpMedication === 'no' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="bp-med-no"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.no') }}</button>
          <button
            @click="bpMedication = 'yes'"
            :class="bpMedication === 'yes' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="bp-med-yes"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.yes') }}</button>
        </div>
      </div>

      <!-- High blood glucose history -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-1">{{ t('diabetesRisk.highBloodGlucose') }}</label>
        <p class="text-xs text-stone-400 mb-2">{{ t('diabetesRisk.highBloodGlucoseHint') }}</p>
        <div class="flex gap-2">
          <button
            @click="highBloodGlucose = 'no'"
            :class="highBloodGlucose === 'no' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="glucose-no"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.no') }}</button>
          <button
            @click="highBloodGlucose = 'yes'"
            :class="highBloodGlucose === 'yes' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            data-testid="glucose-yes"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >{{ t('common.yes') }}</button>
        </div>
      </div>

      <!-- Family history -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-stone-700 mb-2">{{ t('diabetesRisk.familyHistory') }}</label>
        <select
          v-model="familyHistory"
          data-testid="family-history-select"
          class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <option :value="null" disabled>{{ t('diabetesRisk.selectFamily') }}</option>
          <option value="none">{{ t('diabetesRisk.familyNone') }}</option>
          <option value="distant">{{ t('diabetesRisk.familyDistant') }}</option>
          <option value="close">{{ t('diabetesRisk.familyClose') }}</option>
        </select>
      </div>
    </div>

    <!-- Results -->
    <div v-if="score !== null" data-testid="result-section">
      <!-- Score + risk category -->
      <div :class="['border rounded-xl p-6 mb-6', riskBg]">
        <div class="flex items-start justify-between mb-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">FINDRISC Score</p>
            <p data-testid="findrisc-score" class="text-5xl font-bold text-stone-900 tabular-nums">{{ score }}</p>
            <p class="text-sm text-stone-500 mt-1">{{ t('diabetesRisk.scoreRange') }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">{{ t('diabetesRisk.riskCategory') }}</p>
            <p data-testid="risk-category" :class="['text-2xl font-bold', riskColor]">{{ t(`diabetesRisk.risk_${riskCategory}`) }}</p>
            <p data-testid="probability" class="text-sm text-stone-500 mt-1">{{ probability }}% {{ t('diabetesRisk.probability10y') }}</p>
          </div>
        </div>

        <!-- Score bar -->
        <div class="w-full bg-white bg-opacity-60 rounded-full h-3 overflow-hidden">
          <div
            :class="[riskColor.replace('text-', 'bg-')]"
            class="h-3 rounded-full transition-all duration-500"
            :style="{ width: `${(score / 26) * 100}%` }"
          ></div>
        </div>
        <div class="flex justify-between text-xs text-stone-400 mt-1">
          <span>0</span>
          <span>26</span>
        </div>
      </div>

      <AdSlot slot-id="diabetes-risk-result" />

      <!-- Factor breakdown -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6" data-testid="factor-breakdown">
        <h2 class="text-base font-semibold text-stone-800 mb-4">{{ t('diabetesRisk.factorBreakdown') }}</h2>
        <div class="space-y-2">
          <div
            v-for="row in factorRows"
            :key="row.label"
            class="flex items-center justify-between py-2 border-b border-stone-100 last:border-0"
          >
            <span class="text-sm text-stone-600">{{ row.label }}</span>
            <span
              :class="row.score > 0 ? 'text-orange-700 font-semibold' : 'text-green-700'"
              class="text-sm tabular-nums"
            >+{{ row.score }}</span>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6" data-testid="recommendations">
        <h2 class="text-base font-semibold text-stone-800 mb-4">{{ t('diabetesRisk.recommendations') }}</h2>
        <ul class="space-y-2">
          <li v-for="rec in recommendations" :key="rec" class="flex items-start gap-2 text-sm text-stone-600">
            <span class="text-stone-400 mt-0.5">›</span>
            <span>{{ rec }}</span>
          </li>
        </ul>
      </div>

      <!-- Medical disclaimer -->
      <div class="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-6" data-testid="disclaimer">
        <p class="text-xs text-stone-500 leading-relaxed">{{ t('diabetesRisk.disclaimer') }}</p>
      </div>
    </div>

    <AdSlot slot-id="diabetes-risk-bottom" />
  </div>
</template>
