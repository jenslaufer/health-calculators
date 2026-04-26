<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath, locale } = useLocaleRouter()

useHead(() => ({
  title: t('proteinNeed.meta.title'),
  description: t('proteinNeed.meta.description'),
  routeKey: 'proteinNeed',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Protein Need Calculator',
    url: 'https://healthcalculator.app/protein-need',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const gender = ref('male')
const weight = ref(null)
const activity = ref('moderate')
const goal = ref('maintain')
const meals = ref(3)

// Activity level ranges (g/kg) per issue spec
const activityLevels = [
  { key: 'sedentary', labelKey: 'proteinNeed.sedentary', low: 0.8, high: 0.8 },
  { key: 'moderate', labelKey: 'proteinNeed.moderate', low: 1.0, high: 1.2 },
  { key: 'active', labelKey: 'proteinNeed.active', low: 1.4, high: 1.6 },
  { key: 'athlete', labelKey: 'proteinNeed.athlete', low: 1.6, high: 2.2 },
]

const goals = [
  { key: 'maintain', labelKey: 'proteinNeed.maintain' },
  { key: 'lose', labelKey: 'proteinNeed.lose' },
  { key: 'muscle', labelKey: 'proteinNeed.muscle' },
]

const mealOptions = [3, 4, 5]

const currentActivity = computed(() => activityLevels.find(a => a.key === activity.value))

// Base midpoint g/kg from activity
const basePerKg = computed(() => {
  if (!currentActivity.value) return null
  return (currentActivity.value.low + currentActivity.value.high) / 2
})

// Adjustments
const ageBonus = computed(() => (age.value && age.value >= 65) ? 0.2 : 0)
const goalBonus = computed(() => (goal.value === 'lose') ? 0.2 : 0)
const muscleBonus = computed(() => (goal.value === 'muscle') ? 0.3 : 0)

const proteinPerKg = computed(() => {
  if (!basePerKg.value) return null
  return basePerKg.value + ageBonus.value + goalBonus.value + muscleBonus.value
})

const dailyProtein = computed(() => {
  if (!proteinPerKg.value || !weight.value) return null
  return Math.round(proteinPerKg.value * weight.value)
})

const proteinPerMeal = computed(() => {
  if (!dailyProtein.value) return null
  return Math.round(dailyProtein.value / meals.value)
})

// Meal breakdown with names
const mealBreakdown = computed(() => {
  if (!dailyProtein.value) return null
  const total = dailyProtein.value
  const count = meals.value
  const base = Math.floor(total / count)
  const remainder = total - base * count
  return Array.from({ length: count }, (_, i) => ({
    index: i + 1,
    grams: base + (i < remainder ? 1 : 0),
  }))
})

// Activity comparison chart
const activityComparison = computed(() => {
  if (!weight.value) return null
  const bonus = ageBonus.value + goalBonus.value + muscleBonus.value
  return activityLevels.map(level => ({
    key: level.key,
    labelKey: level.labelKey,
    grams: Math.round(((level.low + level.high) / 2 + bonus) * weight.value),
  }))
})

const maxComparisonGrams = computed(() => {
  if (!activityComparison.value) return 1
  return Math.max(...activityComparison.value.map(a => a.grams))
})

const activityColors = {
  sedentary: 'bg-stone-400',
  moderate: 'bg-amber-500',
  active: 'bg-blue-500',
  athlete: 'bg-emerald-500',
}

const foodExamples = computed(() => [
  { name: locale.value === 'de' ? 'Hähnchenbrust' : 'Chicken breast', protein: 31 },
  { name: locale.value === 'de' ? 'Thunfisch' : 'Tuna', protein: 26 },
  { name: locale.value === 'de' ? 'Linsen (gekocht)' : 'Lentils (cooked)', protein: 9 },
  { name: locale.value === 'de' ? 'Griechischer Joghurt' : 'Greek yogurt', protein: 10 },
  { name: locale.value === 'de' ? 'Eier' : 'Eggs', protein: 13 },
  { name: locale.value === 'de' ? 'Tofu' : 'Tofu', protein: 8 },
  { name: locale.value === 'de' ? 'Lachs' : 'Salmon', protein: 20 },
  { name: locale.value === 'de' ? 'Magerquark' : 'Quark (low-fat)', protein: 12 },
])
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('proteinNeed.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('proteinNeed.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
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

    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.weight', { unit: t('common.kg') }) }}</label>
      <input v-model.number="weight" type="number" placeholder="80" data-testid="weight"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
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

    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('proteinNeed.goal') }}</label>
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

    <div>
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('proteinNeed.mealsPerDay') }}</label>
      <div class="flex gap-2">
        <button
          v-for="m in mealOptions"
          :key="m"
          @click="meals = m"
          :data-testid="'meals-' + m"
          :class="meals === m ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ m }}</button>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="dailyProtein" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-6">
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('proteinNeed.dailyProtein') }}</p>
      <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="daily-protein">{{ dailyProtein }}</span>
      <span class="text-lg text-stone-400 ml-1">{{ t('proteinNeed.gramsPerDay') }}</span>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="protein-per-kg">{{ proteinPerKg.toFixed(1) }}</p>
        <p class="text-xs text-stone-500 font-medium">{{ t('proteinNeed.perKg') }}</p>
      </div>
      <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-bold text-stone-900 tabular-nums">{{ proteinPerMeal }}</p>
        <p class="text-xs text-stone-500 font-medium">{{ t('proteinNeed.gramsPerMeal') }}</p>
      </div>
    </div>

    <!-- Adjustment notes -->
    <div v-if="ageBonus > 0 || goalBonus > 0" class="flex flex-wrap gap-2 mb-6">
      <span v-if="ageBonus > 0" class="inline-block bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
        {{ t('proteinNeed.ageAdjustment') }}
      </span>
      <span v-if="goalBonus > 0" class="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
        {{ t('proteinNeed.loseAdjustment') }}
      </span>
    </div>

    <!-- Meal breakdown -->
    <div class="mb-6" data-testid="meal-breakdown">
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('proteinNeed.mealBreakdown') }}</p>
      <div class="grid gap-2" :class="meals <= 3 ? 'grid-cols-3' : meals === 4 ? 'grid-cols-4' : 'grid-cols-5'">
        <div v-for="m in mealBreakdown" :key="m.index" data-testid="meal-item"
          class="bg-stone-50 rounded-lg p-3 text-center border border-stone-100">
          <p class="text-lg font-bold text-stone-900 tabular-nums">{{ m.grams }} g</p>
          <p class="text-xs text-stone-400">{{ t('proteinNeed.meal') }} {{ m.index }}</p>
        </div>
      </div>
    </div>

    <!-- Activity comparison chart -->
    <div class="mb-6">
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('proteinNeed.activityComparison') }}</p>
      <div class="space-y-3">
        <div v-for="item in activityComparison" :key="item.key" class="flex items-center gap-3">
          <span class="text-sm text-stone-600 w-28 shrink-0">{{ t(item.labelKey) }}</span>
          <div class="flex-1 bg-stone-100 rounded-full overflow-hidden" style="height: 24px">
            <div
              :class="[activityColors[item.key], item.key === activity ? 'ring-2 ring-stone-900 ring-offset-1' : '']"
              class="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-300"
              :style="{ width: (item.grams / maxComparisonGrams * 100) + '%' }"
            >
              <span class="text-xs font-bold text-white">{{ item.grams }} g</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Food examples -->
    <div data-testid="food-examples">
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('proteinNeed.foodExamples') }}</p>
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-stone-50 border-b border-stone-200">
              <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('proteinNeed.food') }}</th>
              <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('proteinNeed.proteinPer100g') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-100">
            <tr v-for="food in foodExamples" :key="food.name">
              <td class="px-6 py-3 text-stone-600">{{ food.name }}</td>
              <td class="px-6 py-3 text-stone-900 font-medium">{{ food.protein }} g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <BlogArticleLink calculator-key="proteinNeed" />
</template>
