<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()

const faqItems = computed(() => tm('keto.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('keto.meta.title'),
  description: t('keto.meta.description'),
  routeKey: 'keto',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Keto Calculator',
    url: 'https://healthcalculator.app/keto-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const gender = ref('male')
const height = ref(null)
const weight = ref(null)
const unit = ref('metric')
const activity = ref('moderate')
const goal = ref('lose')
const bodyFat = ref(null)
const netCarbLimit = ref(20)

const activityLevels = [
  { key: 'sedentary', labelKey: 'keto.sedentary', factor: 1.2 },
  { key: 'light', labelKey: 'keto.lightlyActive', factor: 1.375 },
  { key: 'moderate', labelKey: 'keto.moderatelyActive', factor: 1.55 },
  { key: 'very', labelKey: 'keto.veryActive', factor: 1.725 },
  { key: 'extreme', labelKey: 'keto.extremelyActive', factor: 1.9 },
]

const goals = [
  { key: 'lose', labelKey: 'keto.loseWeight' },
  { key: 'maintain', labelKey: 'keto.maintain' },
  { key: 'muscle', labelKey: 'keto.buildMuscle' },
]

const tdee = computed(() => {
  if (!age.value || !height.value || !weight.value) return null

  let h = height.value
  let w = weight.value
  if (unit.value === 'imperial') {
    h = h * 2.54
    w = w * 0.453592
  }

  const bmr = gender.value === 'male'
    ? 10 * w + 6.25 * h - 5 * age.value + 5
    : 10 * w + 6.25 * h - 5 * age.value - 161

  const factor = activityLevels.find(a => a.key === activity.value)?.factor || 1.55
  return bmr * factor
})

const goalModifiers = { lose: 0.8, maintain: 1.0, muscle: 1.1 }

const targetCalories = computed(() => {
  if (!tdee.value) return null
  return Math.round(tdee.value * goalModifiers[goal.value])
})

const leanBodyMass = computed(() => {
  if (!weight.value) return null
  let w = weight.value
  if (unit.value === 'imperial') w = w * 0.453592
  if (bodyFat.value && bodyFat.value > 0 && bodyFat.value < 100) {
    return w * (1 - bodyFat.value / 100)
  }
  return null
})

const macros = computed(() => {
  if (!targetCalories.value || !weight.value) return null

  let w = weight.value
  if (unit.value === 'imperial') w = w * 0.453592

  const carbCalories = netCarbLimit.value * 4
  const lbm = leanBodyMass.value || w * 0.75
  const lbmLbs = lbm * 2.20462
  const proteinPerLb = goal.value === 'muscle' ? 1.0 : 0.8
  const proteinGrams = Math.round(lbmLbs * proteinPerLb)
  const proteinCalories = proteinGrams * 4
  const fatCalories = targetCalories.value - carbCalories - proteinCalories
  const fatGrams = Math.round(fatCalories / 9)
  const cal = targetCalories.value
  const carbPct = Math.round((carbCalories / cal) * 100)
  const proteinPct = Math.round((proteinCalories / cal) * 100)
  const fatPct = 100 - carbPct - proteinPct
  const fiberRecommendation = Math.round(cal / 1000 * 14)

  return {
    netCarbs: { grams: netCarbLimit.value, pct: carbPct },
    protein: { grams: proteinGrams, pct: proteinPct },
    fat: { grams: fatGrams, pct: fatPct },
    fiberRecommendation,
  }
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('keto.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('keto.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
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

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.age') }}</label>
        <input v-model.number="age" type="number" placeholder="30" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.gender') }}</label>
        <div class="flex gap-2">
          <button @click="gender = 'male'" data-testid="gender-male"
            :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.male') }}</button>
          <button @click="gender = 'female'" data-testid="gender-female"
            :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('common.female') }}</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.height', { unit: t('common.' + (unit === 'metric' ? 'cm' : 'inches')) }) }}
        </label>
        <input v-model.number="height" type="number" :placeholder="unit === 'metric' ? '175' : '69'" data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('keto.bodyFat') }}</label>
        <input v-model.number="bodyFat" type="number" placeholder="20" data-testid="body-fat"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('keto.netCarbLimit') }}</label>
        <input v-model.number="netCarbLimit" type="number" placeholder="20" data-testid="net-carb-limit"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.activityLevel') }}</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="level in activityLevels"
          :key="level.key"
          @click="activity = level.key"
          :data-testid="'activity-' + level.key"
          :class="activity === level.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t(level.labelKey) }}</button>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('keto.goal') }}</label>
      <div class="flex gap-2">
        <button
          v-for="g in goals"
          :key="g.key"
          @click="goal = g.key"
          :data-testid="'goal-' + g.key"
          :class="goal === g.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t(g.labelKey) }}</button>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="macros" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-6">
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('keto.targetCalories') }}</p>
      <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="target-calories">{{ targetCalories }}</span>
      <span class="text-lg text-stone-400 ml-1">{{ t('common.kcal') }}</span>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
        <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 mx-auto mb-2"></div>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="fat-grams">{{ macros.fat.grams }}</p>
        <p class="text-xs text-stone-500 font-medium">{{ t('keto.fat') }}</p>
        <p class="text-xs text-stone-400 mt-1" data-testid="fat-pct">{{ macros.fat.pct }}%</p>
      </div>
      <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
        <div class="w-2.5 h-2.5 rounded-full bg-blue-500 mx-auto mb-2"></div>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="protein-grams">{{ macros.protein.grams }}</p>
        <p class="text-xs text-stone-500 font-medium">{{ t('keto.protein') }}</p>
        <p class="text-xs text-stone-400 mt-1" data-testid="protein-pct">{{ macros.protein.pct }}%</p>
      </div>
      <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
        <div class="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto mb-2"></div>
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="carbs-grams">{{ macros.netCarbs.grams }}</p>
        <p class="text-xs text-stone-500 font-medium">{{ t('keto.netCarbs') }}</p>
        <p class="text-xs text-stone-400 mt-1" data-testid="carbs-pct">{{ macros.netCarbs.pct }}%</p>
      </div>
    </div>

    <div class="rounded-full overflow-hidden flex mb-6" style="height: 12px" role="img" aria-label="Keto macro ratio" data-testid="macro-bar">
      <div class="bg-emerald-500" :style="{ width: macros.fat.pct + '%', height: '100%' }"></div>
      <div class="bg-blue-500" :style="{ width: macros.protein.pct + '%', height: '100%' }"></div>
      <div class="bg-amber-500" :style="{ width: macros.netCarbs.pct + '%', height: '100%' }"></div>
    </div>

    <div class="bg-stone-50 rounded-lg p-4">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('keto.fiberRecommendation') }}</p>
      <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="fiber">{{ macros.fiberRecommendation }} g</p>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="keto" />
</template>
