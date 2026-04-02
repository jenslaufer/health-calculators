<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('vo2Max.meta.title'),
  description: t('vo2Max.meta.description'),
  routeKey: 'vo2Max',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'VO2 Max Calculator',
    url: 'https://healthcalculator.app/vo2max-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const testType = ref('cooper')
const distance = ref(null)
const walkTime = ref(null)
const heartRate = ref(null)
const vo2maxDirect = ref(null)
const age = ref(null)
const gender = ref('male')
const weight = ref(null)
const weightUnit = ref('kg')

const weightInKg = computed(() => {
  if (!weight.value) return null
  return weightUnit.value === 'lbs' ? weight.value * 0.453592 : weight.value
})

const vo2max = computed(() => {
  if (testType.value === 'cooper') {
    if (!distance.value || distance.value <= 0) return null
    return (distance.value - 504.9) / 44.73
  }
  if (testType.value === 'rockport') {
    if (!weightInKg.value || !age.value || !walkTime.value || !heartRate.value) return null
    const weightLbs = weightInKg.value * 2.20462
    const genderVal = gender.value === 'male' ? 1 : 0
    return 132.853 - 0.0769 * weightLbs - 0.3877 * age.value + 6.315 * genderVal - 3.2649 * walkTime.value - 0.1565 * heartRate.value
  }
  if (testType.value === 'direct') {
    return vo2maxDirect.value && vo2maxDirect.value > 0 ? vo2maxDirect.value : null
  }
  return null
})

const vo2maxRounded = computed(() => {
  if (vo2max.value === null) return null
  return Math.round(vo2max.value * 10) / 10
})

const fitnessTables = {
  male: [
    { maxAge: 29, label: '20–29', ranges: [{ label: 'superior', min: 49 }, { label: 'excellent', min: 44 }, { label: 'good', min: 39 }, { label: 'fair', min: 34 }, { label: 'poor', min: 0 }] },
    { maxAge: 39, label: '30–39', ranges: [{ label: 'superior', min: 47 }, { label: 'excellent', min: 42 }, { label: 'good', min: 37 }, { label: 'fair', min: 32 }, { label: 'poor', min: 0 }] },
    { maxAge: 49, label: '40–49', ranges: [{ label: 'superior', min: 43 }, { label: 'excellent', min: 38 }, { label: 'good', min: 34 }, { label: 'fair', min: 29 }, { label: 'poor', min: 0 }] },
    { maxAge: 59, label: '50–59', ranges: [{ label: 'superior', min: 39 }, { label: 'excellent', min: 34 }, { label: 'good', min: 30 }, { label: 'fair', min: 25 }, { label: 'poor', min: 0 }] },
    { maxAge: 999, label: '60+', ranges: [{ label: 'superior', min: 36 }, { label: 'excellent', min: 31 }, { label: 'good', min: 27 }, { label: 'fair', min: 22 }, { label: 'poor', min: 0 }] },
  ],
  female: [
    { maxAge: 29, label: '20–29', ranges: [{ label: 'superior', min: 42 }, { label: 'excellent', min: 37 }, { label: 'good', min: 33 }, { label: 'fair', min: 28 }, { label: 'poor', min: 0 }] },
    { maxAge: 39, label: '30–39', ranges: [{ label: 'superior', min: 40 }, { label: 'excellent', min: 35 }, { label: 'good', min: 31 }, { label: 'fair', min: 26 }, { label: 'poor', min: 0 }] },
    { maxAge: 49, label: '40–49', ranges: [{ label: 'superior', min: 37 }, { label: 'excellent', min: 32 }, { label: 'good', min: 28 }, { label: 'fair', min: 23 }, { label: 'poor', min: 0 }] },
    { maxAge: 59, label: '50–59', ranges: [{ label: 'superior', min: 33 }, { label: 'excellent', min: 28 }, { label: 'good', min: 24 }, { label: 'fair', min: 20 }, { label: 'poor', min: 0 }] },
    { maxAge: 999, label: '60+', ranges: [{ label: 'superior', min: 30 }, { label: 'excellent', min: 25 }, { label: 'good', min: 21 }, { label: 'fair', min: 17 }, { label: 'poor', min: 0 }] },
  ],
}

const fitnessCategory = computed(() => {
  if (vo2max.value === null || !age.value || !gender.value) return null
  const table = fitnessTables[gender.value]
  const group = table.find(g => age.value <= g.maxAge) || table[table.length - 1]
  return group.ranges.find(r => vo2max.value >= r.min) || group.ranges[group.ranges.length - 1]
})

const gaugePosition = computed(() => {
  if (vo2max.value === null) return 0
  const clamped = Math.max(15, Math.min(65, vo2max.value))
  return ((clamped - 15) / 50) * 100
})

const categoryColors = {
  superior: 'text-emerald-600',
  excellent: 'text-emerald-500',
  good: 'text-sky-500',
  fair: 'text-amber-500',
  poor: 'text-red-500',
}

const categoryBgColors = {
  superior: 'bg-emerald-50 border-emerald-200',
  excellent: 'bg-emerald-50 border-emerald-200',
  good: 'bg-sky-50 border-sky-200',
  fair: 'bg-amber-50 border-amber-200',
  poor: 'bg-red-50 border-red-200',
}

const ageComparisonData = computed(() => {
  if (!gender.value) return []
  const table = fitnessTables[gender.value]
  return table.map(group => ({
    label: group.label,
    superior: group.ranges[0].min,
    excellent: group.ranges[1].min,
    good: group.ranges[2].min,
    fair: group.ranges[3].min,
  }))
})

const testTypes = [
  { key: 'cooper', labelKey: 'vo2Max.cooperTest' },
  { key: 'rockport', labelKey: 'vo2Max.rockportTest' },
  { key: 'direct', labelKey: 'vo2Max.directEntry' },
]
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('vo2Max.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('vo2Max.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.testType') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tt in testTypes"
          :key="tt.key"
          @click="testType = tt.key"
          :class="testType === tt.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t(tt.labelKey) }}</button>
      </div>
    </div>

    <p v-if="testType === 'cooper'" class="text-sm text-stone-400 mb-4">{{ t('vo2Max.cooperInfo') }}</p>
    <p v-if="testType === 'rockport'" class="text-sm text-stone-400 mb-4">{{ t('vo2Max.rockportInfo') }}</p>
    <p v-if="testType === 'direct'" class="text-sm text-stone-400 mb-4">{{ t('vo2Max.directInfo') }}</p>

    <!-- Cooper Test inputs -->
    <div v-if="testType === 'cooper'" class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.distance') }}</label>
      <input v-model.number="distance" type="number" placeholder="2400" data-testid="distance"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>

    <!-- Rockport inputs -->
    <div v-if="testType === 'rockport'" class="space-y-4 mb-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.weight', { unit: t('common.' + weightUnit) }) }}</label>
          <input v-model.number="weight" type="number" placeholder="80" data-testid="weight"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.weightUnit') }}</label>
          <div class="flex gap-2">
            <button @click="weightUnit = 'kg'"
              :class="weightUnit === 'kg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">kg</button>
            <button @click="weightUnit = 'lbs'"
              :class="weightUnit === 'lbs' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">lbs</button>
          </div>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.walkTime') }}</label>
        <input v-model.number="walkTime" type="number" placeholder="15" data-testid="walk-time"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.heartRate') }}</label>
        <input v-model.number="heartRate" type="number" placeholder="140" data-testid="heart-rate"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Direct entry -->
    <div v-if="testType === 'direct'" class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vo2Max.vo2maxDirect') }}</label>
      <input v-model.number="vo2maxDirect" type="number" placeholder="45" data-testid="vo2max-direct"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>

    <!-- Age and Gender (always shown) -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.age') }}</label>
        <input v-model.number="age" type="number" placeholder="30" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.gender') }}</label>
        <div class="flex gap-2">
          <button @click="gender = 'male'"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('common.male') }}</button>
          <button @click="gender = 'female'"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('common.female') }}</button>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div v-if="vo2maxRounded" class="pt-5 border-t border-stone-100">
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('vo2Max.vo2maxResult') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="vo2max-result">{{ vo2maxRounded }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('vo2Max.unit') }}</span>
      </div>

      <!-- Fitness gauge -->
      <div class="mb-6">
        <div class="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-red-400 via-amber-400 via-sky-400 to-emerald-400">
          <div
            class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform -translate-x-1/2 transition-all duration-300"
            :style="{ left: gaugePosition + '%' }"
          ></div>
        </div>
        <div class="flex justify-between text-xs text-stone-400 mt-1">
          <span>15</span>
          <span>65</span>
        </div>
      </div>

      <!-- Fitness category -->
      <div v-if="fitnessCategory" class="mb-6" data-testid="fitness-category">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-2">{{ t('vo2Max.fitnessCategory') }}</p>
        <div :class="categoryBgColors[fitnessCategory.label]" class="border rounded-xl p-4">
          <span :class="categoryColors[fitnessCategory.label]" class="text-xl font-bold">{{ t('vo2Max.' + fitnessCategory.label) }}</span>
        </div>
      </div>

      <!-- Age comparison table -->
      <div v-if="age && gender" data-testid="age-comparison">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('vo2Max.ageComparison') }}</p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('vo2Max.ageGroup') }}</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('vo2Max.superior') }}</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('vo2Max.excellent') }}</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('vo2Max.good') }}</th>
                <th class="text-left px-4 py-2.5 font-semibold text-stone-700">{{ t('vo2Max.fair') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr v-for="row in ageComparisonData" :key="row.label"
                :class="{ 'bg-stone-50 font-semibold': age <= (fitnessTables[gender].find(g => g.label === row.label)?.maxAge ?? 999) && age > (fitnessTables[gender][fitnessTables[gender].findIndex(g => g.label === row.label) - 1]?.maxAge ?? 0) }">
                <td class="px-4 py-2.5 text-stone-600">{{ row.label }}</td>
                <td class="px-4 py-2.5 text-stone-900">&ge;{{ row.superior }}</td>
                <td class="px-4 py-2.5 text-stone-900">&ge;{{ row.excellent }}</td>
                <td class="px-4 py-2.5 text-stone-900">&ge;{{ row.good }}</td>
                <td class="px-4 py-2.5 text-stone-900">&ge;{{ row.fair }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <BlogBanner calculator-key="vo2Max" />
  <AffiliateBanner />
</template>
