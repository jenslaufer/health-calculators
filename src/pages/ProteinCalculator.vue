<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath, locale } = useLocaleRouter()

useHead(() => ({
  title: t('protein.meta.title'),
  description: t('protein.meta.description'),
  routeKey: 'protein',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Protein Calculator',
    url: 'https://healthcalculator.app/protein',
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
const diet = ref('omnivore')
const meals = ref(3)

const activityLevels = [
  { key: 'sedentary', labelKey: 'protein.sedentary', factor: 0.8 },
  { key: 'light', labelKey: 'protein.light', factor: 1.0 },
  { key: 'moderate', labelKey: 'protein.moderate', factor: 1.2 },
  { key: 'active', labelKey: 'protein.active', factor: 1.4 },
  { key: 'athlete', labelKey: 'protein.athlete', factor: 1.6 },
]

const goals = [
  { key: 'maintain', labelKey: 'protein.maintain' },
  { key: 'loseFat', labelKey: 'protein.loseFat' },
  { key: 'muscle', labelKey: 'protein.buildMuscle' },
]

const diets = [
  { key: 'omnivore', labelKey: 'protein.omnivore' },
  { key: 'vegetarian', labelKey: 'protein.vegetarian' },
  { key: 'vegan', labelKey: 'protein.vegan' },
]

const mealOptions = [3, 4, 5, 6]

// Base protein g/kg multipliers by goal
const goalMultipliers = { maintain: 1.0, loseFat: 1.2, muscle: 1.4 }

// Diet adjustment: vegetarians/vegans slightly higher to compensate for lower bioavailability
const dietMultipliers = { omnivore: 1.0, vegetarian: 1.1, vegan: 1.2 }

const proteinPerKg = computed(() => {
  if (!weight.value) return null
  const base = activityLevels.find(a => a.key === activity.value)?.factor || 1.2
  const goalMod = goalMultipliers[goal.value] || 1.0
  const dietMod = dietMultipliers[diet.value] || 1.0
  return base * goalMod * dietMod
})

const dailyProtein = computed(() => {
  if (!proteinPerKg.value || !weight.value) return null
  return Math.round(proteinPerKg.value * weight.value)
})

const proteinPerMeal = computed(() => {
  if (!dailyProtein.value) return null
  return Math.round(dailyProtein.value / meals.value)
})

// Goal comparison chart data
const goalComparison = computed(() => {
  if (!weight.value) return null
  const base = activityLevels.find(a => a.key === activity.value)?.factor || 1.2
  const dietMod = dietMultipliers[diet.value] || 1.0
  return [
    { key: 'maintain', grams: Math.round(base * 1.0 * dietMod * weight.value) },
    { key: 'loseFat', grams: Math.round(base * 1.2 * dietMod * weight.value) },
    { key: 'muscle', grams: Math.round(base * 1.4 * dietMod * weight.value) },
  ]
})

const maxGoalGrams = computed(() => {
  if (!goalComparison.value) return 1
  return Math.max(...goalComparison.value.map(g => g.grams))
})

const goalLabels = { maintain: 'protein.maintain', loseFat: 'protein.loseFat', muscle: 'protein.buildMuscle' }
const goalColors = { maintain: 'bg-stone-400', loseFat: 'bg-amber-500', muscle: 'bg-blue-500' }

const foodSources = computed(() => {
  if (diet.value === 'vegan') {
    return [
      { name: locale.value === 'de' ? 'Seitan' : 'Seitan', protein: 25 },
      { name: locale.value === 'de' ? 'Tempeh' : 'Tempeh', protein: 19 },
      { name: locale.value === 'de' ? 'Linsen (gekocht)' : 'Lentils (cooked)', protein: 9 },
      { name: locale.value === 'de' ? 'Kichererbsen (gekocht)' : 'Chickpeas (cooked)', protein: 9 },
      { name: locale.value === 'de' ? 'Tofu' : 'Tofu', protein: 8 },
      { name: locale.value === 'de' ? 'Edamame' : 'Edamame', protein: 11 },
    ]
  }
  if (diet.value === 'vegetarian') {
    return [
      { name: locale.value === 'de' ? 'Griechischer Joghurt' : 'Greek yogurt', protein: 10 },
      { name: locale.value === 'de' ? 'Hüttenkäse' : 'Cottage cheese', protein: 11 },
      { name: locale.value === 'de' ? 'Eier' : 'Eggs', protein: 13 },
      { name: locale.value === 'de' ? 'Linsen (gekocht)' : 'Lentils (cooked)', protein: 9 },
      { name: locale.value === 'de' ? 'Tofu' : 'Tofu', protein: 8 },
      { name: locale.value === 'de' ? 'Parmesan' : 'Parmesan', protein: 35 },
    ]
  }
  return [
    { name: locale.value === 'de' ? 'Hähnchenbrust' : 'Chicken breast', protein: 31 },
    { name: locale.value === 'de' ? 'Thunfisch' : 'Tuna', protein: 26 },
    { name: locale.value === 'de' ? 'Mageres Rindfleisch' : 'Lean beef', protein: 26 },
    { name: locale.value === 'de' ? 'Griechischer Joghurt' : 'Greek yogurt', protein: 10 },
    { name: locale.value === 'de' ? 'Eier' : 'Eggs', protein: 13 },
    { name: locale.value === 'de' ? 'Lachs' : 'Salmon', protein: 20 },
  ]
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('protein.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('protein.description') }}</p>
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
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('protein.goal') }}</label>
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

    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('protein.diet') }}</label>
      <div class="flex gap-2">
        <button
          v-for="d in diets"
          :key="d.key"
          @click="diet = d.key"
          :data-testid="'diet-' + d.key"
          :class="diet === d.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t(d.labelKey) }}</button>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('protein.meals') }}</label>
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

    <div v-if="dailyProtein" class="pt-5 border-t border-stone-100">
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('protein.dailyProtein') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="protein-total">{{ dailyProtein }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('protein.gramsPerDay') }}</span>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
          <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="protein-per-kg">{{ proteinPerKg.toFixed(1) }}</p>
          <p class="text-xs text-stone-500 font-medium">{{ t('protein.perKg') }}</p>
        </div>
        <div class="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
          <p class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="protein-per-meal">{{ proteinPerMeal }}</p>
          <p class="text-xs text-stone-500 font-medium">{{ t('protein.grams') }} {{ t('protein.perMeal') }}</p>
        </div>
      </div>

      <!-- Goal comparison chart -->
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('protein.goalComparison') }}</p>
        <div class="space-y-3">
          <div v-for="item in goalComparison" :key="item.key" class="flex items-center gap-3">
            <span class="text-sm text-stone-600 w-28 shrink-0">{{ t(goalLabels[item.key]) }}</span>
            <div class="flex-1 bg-stone-100 rounded-full overflow-hidden" style="height: 24px">
              <div
                :class="goalColors[item.key]"
                class="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-300"
                :style="{ width: (item.grams / maxGoalGrams * 100) + '%' }"
              >
                <span class="text-xs font-bold text-white">{{ item.grams }} g</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Food sources table -->
      <div data-testid="food-sources">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('protein.foodSources') }}</p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('protein.food') }}</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('protein.proteinPer100g') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr v-for="food in foodSources" :key="food.name">
                <td class="px-6 py-3 text-stone-600">{{ food.name }}</td>
                <td class="px-6 py-3 text-stone-900 font-medium">{{ food.protein }} g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <BlogBanner calculator-key="protein" />
  <AffiliateBanner />
</template>
