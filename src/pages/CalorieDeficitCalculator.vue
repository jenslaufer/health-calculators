<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('calorieDeficit.meta.title'),
  description: t('calorieDeficit.meta.description'),
  path: '/kaloriendefizit-rechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kaloriendefizit-Rechner',
    url: 'https://jenslaufer.github.io/health-calculators/kaloriendefizit-rechner',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const gender = ref('male')
const age = ref('')
const height = ref('')
const weight = ref('')
const targetWeight = ref('')
const weeks = ref('')
const activityLevel = ref('1.55')

const activityOptions = [
  { key: 'calorieDeficit.sedentary', value: '1.2' },
  { key: 'calorieDeficit.lightlyActive', value: '1.375' },
  { key: 'calorieDeficit.moderatelyActive', value: '1.55' },
  { key: 'calorieDeficit.veryActive', value: '1.725' },
  { key: 'calorieDeficit.extremelyActive', value: '1.9' },
]

const KCAL_PER_KG = 7700

const bmr = computed(() => {
  const a = parseFloat(age.value)
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null
  const base = 10 * w + 6.25 * h - 5 * a - 161
  return gender.value === 'male' ? base + 166 : base
})

const tdee = computed(() => {
  if (!bmr.value) return null
  return bmr.value * parseFloat(activityLevel.value)
})

const weightToLose = computed(() => {
  const w = parseFloat(weight.value)
  const tw = parseFloat(targetWeight.value)
  if (!w || !tw || tw <= 0 || w <= 0 || tw >= w) return null
  return w - tw
})

const totalDays = computed(() => {
  const w = parseFloat(weeks.value)
  if (!w || w <= 0) return null
  return w * 7
})

const dailyDeficit = computed(() => {
  if (!weightToLose.value || !totalDays.value) return null
  return (weightToLose.value * KCAL_PER_KG) / totalDays.value
})

const dailyCalories = computed(() => {
  if (!tdee.value || !dailyDeficit.value) return null
  return tdee.value - dailyDeficit.value
})

const weeklyLoss = computed(() => {
  if (!weightToLose.value || !weeks.value) return null
  return weightToLose.value / parseFloat(weeks.value)
})

const isUnsafe = computed(() => dailyCalories.value !== null && dailyCalories.value < 1200)
const isAggressive = computed(() => weeklyLoss.value !== null && weeklyLoss.value > 1)

const hasResult = computed(() => dailyCalories.value !== null)

const formatNumber = (n) => Math.round(n).toLocaleString()
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('calorieDeficit.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('calorieDeficit.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <div class="flex gap-2 mb-6">
      <button
        v-for="g in [{ key: 'male', labelKey: 'common.male' }, { key: 'female', labelKey: 'common.female' }]"
        :key="g.key"
        @click="gender = g.key"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="gender === g.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ t(g.labelKey) }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label for="age" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('common.age') }}</label>
        <input id="age" v-model="age" type="number" placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="height" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('calorieDeficit.heightCm') }}</label>
        <input id="height" v-model="height" type="number" placeholder="175"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('calorieDeficit.weightKg') }}</label>
        <input id="weight" v-model="weight" type="number" placeholder="80"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="targetWeight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('calorieDeficit.targetWeight') }}</label>
        <input id="targetWeight" v-model="targetWeight" type="number" placeholder="70"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weeks" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('calorieDeficit.weeks') }}</label>
        <input id="weeks" v-model="weeks" type="number" placeholder="12"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="mb-6">
      <label for="activity" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('common.activityLevel') }}</label>
      <select id="activity" v-model="activityLevel"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
        <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">{{ t(opt.key) }}</option>
      </select>
    </div>

    <div v-if="hasResult" class="text-center py-6 border-t border-stone-100">
      <div class="text-5xl font-bold text-stone-900 tabular-nums" data-testid="daily-calories">{{ formatNumber(dailyCalories) }}</div>
      <div class="text-sm text-stone-500 mt-1">{{ t('calorieDeficit.resultLabel') }}</div>

      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('calorieDeficit.tdee') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee) }}</div>
          <div class="text-xs text-stone-400">{{ t('common.kcalPerDay') }}</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('calorieDeficit.dailyDeficit') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1" data-testid="daily-deficit">{{ formatNumber(dailyDeficit) }}</div>
          <div class="text-xs text-stone-400">{{ t('common.kcal') }}</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('calorieDeficit.weeklyLoss') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1" data-testid="weekly-loss">{{ weeklyLoss.toFixed(2) }} kg</div>
          <div class="text-xs text-stone-400">{{ t('calorieDeficit.perWeek') }}</div>
        </div>
      </div>

      <div v-if="isUnsafe" class="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700" data-testid="warning-unsafe">
        {{ t('calorieDeficit.warningUnsafe') }}
      </div>
      <div v-if="isAggressive" class="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700" data-testid="warning-aggressive">
        {{ t('calorieDeficit.warningAggressive') }}
      </div>
    </div>
  </div>

  <BlogBanner calculator-path="/kaloriendefizit-rechner" />
</template>
