<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('caloriesBurned.meta.title'),
  description: t('caloriesBurned.meta.description'),
  routeKey: 'caloriesBurned',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calories Burned Calculator',
    url: 'https://healthcalculator.app/calories-burned',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const activities = [
  { key: 'running_8kmh', met: 8.3, category: 'running' },
  { key: 'running_10kmh', met: 9.8, category: 'running' },
  { key: 'running_12kmh', met: 11.0, category: 'running' },
  { key: 'running_14kmh', met: 11.8, category: 'running' },
  { key: 'running_16kmh', met: 12.8, category: 'running' },
  { key: 'cycling_leisure', met: 3.5, category: 'cycling' },
  { key: 'cycling_moderate', met: 6.8, category: 'cycling' },
  { key: 'cycling_vigorous', met: 10.0, category: 'cycling' },
  { key: 'cycling_mountain', met: 8.5, category: 'cycling' },
  { key: 'swimming_leisurely', met: 6.0, category: 'swimming' },
  { key: 'swimming_moderate', met: 7.0, category: 'swimming' },
  { key: 'swimming_vigorous', met: 9.8, category: 'swimming' },
  { key: 'swimming_backstroke', met: 4.8, category: 'swimming' },
  { key: 'swimming_butterfly', met: 13.8, category: 'swimming' },
  { key: 'weightlifting_light', met: 3.5, category: 'gym' },
  { key: 'weightlifting_vigorous', met: 6.0, category: 'gym' },
  { key: 'hiit', met: 8.0, category: 'gym' },
  { key: 'yoga', met: 2.5, category: 'gym' },
  { key: 'pilates', met: 3.0, category: 'gym' },
  { key: 'elliptical', met: 5.0, category: 'gym' },
  { key: 'rowing_moderate', met: 7.0, category: 'gym' },
  { key: 'soccer', met: 7.0, category: 'sports' },
  { key: 'basketball', met: 6.5, category: 'sports' },
  { key: 'tennis_singles', met: 8.0, category: 'sports' },
  { key: 'tennis_doubles', met: 5.0, category: 'sports' },
  { key: 'badminton', met: 5.5, category: 'sports' },
  { key: 'volleyball', met: 4.0, category: 'sports' },
  { key: 'hiking', met: 6.0, category: 'daily' },
  { key: 'walking_moderate', met: 3.5, category: 'daily' },
  { key: 'walking_brisk', met: 4.3, category: 'daily' },
  { key: 'gardening', met: 3.8, category: 'daily' },
  { key: 'housework', met: 3.3, category: 'daily' },
  { key: 'dancing', met: 5.5, category: 'daily' },
  { key: 'stair_climbing', met: 8.8, category: 'daily' },
]

const categories = [
  { key: 'running', labelKey: 'caloriesBurned.categoryRunning' },
  { key: 'cycling', labelKey: 'caloriesBurned.categoryCycling' },
  { key: 'swimming', labelKey: 'caloriesBurned.categorySwimming' },
  { key: 'gym', labelKey: 'caloriesBurned.categoryGym' },
  { key: 'sports', labelKey: 'caloriesBurned.categorySports' },
  { key: 'daily', labelKey: 'caloriesBurned.categoryDaily' },
]

const selectedActivity = ref('')
const weight = ref(null)
const duration = ref(null)
const unit = ref('kg')
const sessionsPerWeek = ref(3)

const weightInKg = computed(() => {
  if (!weight.value) return null
  return unit.value === 'lbs' ? weight.value * 0.453592 : weight.value
})

const selectedMet = computed(() => {
  const act = activities.find(a => a.key === selectedActivity.value)
  return act ? act.met : null
})

const caloriesBurned = computed(() => {
  if (!selectedMet.value || !weightInKg.value || !duration.value) return null
  return Math.round(selectedMet.value * weightInKg.value * (duration.value / 60))
})

const foodEquivalents = computed(() => {
  if (!caloriesBurned.value) return null
  return {
    slicesPizza: Math.round(caloriesBurned.value / 285 * 10) / 10,
    bananas: Math.round(caloriesBurned.value / 105 * 10) / 10,
    chocolate: Math.round(caloriesBurned.value / 235 * 10) / 10,
  }
})

const weeklyProjection = computed(() => {
  if (!caloriesBurned.value) return null
  return caloriesBurned.value * sessionsPerWeek.value
})

const sessionOptions = [1, 2, 3, 4, 5, 6, 7]
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('caloriesBurned.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('caloriesBurned.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="mb-4">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caloriesBurned.activity') }}</label>
      <select v-model="selectedActivity" data-testid="activity-select"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
        <option value="" disabled>{{ t('caloriesBurned.selectActivity') }}</option>
        <optgroup v-for="cat in categories" :key="cat.key" :label="t(cat.labelKey)">
          <option v-for="act in activities.filter(a => a.category === cat.key)" :key="act.key" :value="act.key">
            {{ t('caloriesBurned.' + act.key) }}
          </option>
        </optgroup>
      </select>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.weight', { unit: t('common.' + unit) }) }}</label>
        <input v-model.number="weight" type="number" placeholder="80" data-testid="weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caloriesBurned.weightUnit') }}</label>
        <div class="flex gap-2">
          <button @click="unit = 'kg'" data-testid="unit-kg"
            :class="unit === 'kg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">kg</button>
          <button @click="unit = 'lbs'" data-testid="unit-lbs"
            :class="unit === 'lbs' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">lbs</button>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caloriesBurned.duration') }}</label>
      <input v-model.number="duration" type="number" placeholder="30" data-testid="duration"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
    </div>

    <div v-if="caloriesBurned" class="pt-5 border-t border-stone-100">
      <div class="mb-6">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('caloriesBurned.caloriesBurned') }}</p>
        <span class="text-5xl font-bold text-stone-900 tabular-nums leading-none" data-testid="calories-result">{{ caloriesBurned }}</span>
        <span class="text-lg text-stone-400 ml-1">{{ t('caloriesBurned.kcal') }}</span>
      </div>

      <div class="mb-6" data-testid="food-equivalents">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('caloriesBurned.foodEquivalents') }}</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-stone-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-stone-900 tabular-nums">{{ foodEquivalents.slicesPizza }}</div>
            <div class="text-xs text-stone-500 font-medium">{{ t('caloriesBurned.slicesPizza') }}</div>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-stone-900 tabular-nums">{{ foodEquivalents.bananas }}</div>
            <div class="text-xs text-stone-500 font-medium">{{ t('caloriesBurned.bananas') }}</div>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-stone-900 tabular-nums">{{ foodEquivalents.chocolate }}</div>
            <div class="text-xs text-stone-500 font-medium">{{ t('caloriesBurned.chocolate') }}</div>
          </div>
        </div>
      </div>

      <div data-testid="weekly-projection">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('caloriesBurned.weeklyProjection') }}</p>
        <div class="flex items-center gap-4">
          <div class="flex gap-2">
            <button
              v-for="s in sessionOptions"
              :key="s"
              @click="sessionsPerWeek = s"
              :data-testid="'sessions-' + s"
              :class="sessionsPerWeek === s ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ s }}</button>
          </div>
          <span class="text-xs text-stone-400">{{ t('caloriesBurned.sessionsPerWeek') }}</span>
        </div>
        <div class="mt-3 bg-stone-50 rounded-lg p-4">
          <span class="text-2xl font-bold text-stone-900 tabular-nums">{{ weeklyProjection.toLocaleString() }}</span>
          <span class="text-sm text-stone-400 ml-1">{{ t('caloriesBurned.kcalPerWeek') }}</span>
        </div>
      </div>
    </div>
  </div>

  <BlogArticleLink calculator-key="caloriesBurned" />
  <AffiliateBanner />
</template>
