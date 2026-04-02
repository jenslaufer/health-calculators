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
  title: t('tdee.meta.title'),
  description: t('tdee.meta.description'),
  routeKey: 'tdee',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'TDEE Calculator',
    url: 'https://healthcalculator.app/tdee',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const gender = ref('male')
const age = ref('')
const height = ref('')
const weight = ref('')
const activityLevel = ref('1.55')

const activityOptions = [
  { key: 'tdee.sedentary', value: '1.2' },
  { key: 'tdee.lightlyActive', value: '1.375' },
  { key: 'tdee.moderatelyActive', value: '1.55' },
  { key: 'tdee.veryActive', value: '1.725' },
  { key: 'tdee.extremelyActive', value: '1.9' },
]

const bmr = computed(() => {
  const a = parseFloat(age.value)
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null

  let heightCm = h
  let weightKg = w
  if (unit.value === 'imperial') {
    heightCm = h * 2.54
    weightKg = w * 0.453592
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * a - 161
  return gender.value === 'male' ? base + 166 : base
})

const tdee = computed(() => {
  if (!bmr.value) return null
  return bmr.value * parseFloat(activityLevel.value)
})

const formatNumber = (n) => Math.round(n).toLocaleString()
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('tdee.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('tdee.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <div class="flex gap-2 mb-6">
      <button
        v-for="g in ['male', 'female']"
        :key="g"
        @click="gender = g"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="gender === g ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ t('common.' + g) }}
      </button>
    </div>

    <div class="flex gap-2 mb-6">
      <button
        v-for="u in ['metric', 'imperial']"
        :key="u"
        @click="unit = u"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="unit === u ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ t('common.' + u) }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label for="age" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('common.age') }}</label>
        <input id="age" v-model="age" type="number" placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="height" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
          {{ t('common.height', { unit: t('common.' + (unit === 'metric' ? 'cm' : 'inches')) }) }}
        </label>
        <input id="height" v-model="height" type="number" :placeholder="unit === 'metric' ? '175' : '69'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
          {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input id="weight" v-model="weight" type="number" :placeholder="unit === 'metric' ? '70' : '154'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div class="mb-6">
      <label for="activity" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('common.activityLevel') }}</label>
      <select id="activity" v-model="activityLevel"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
        <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">
          {{ t(opt.key) }}
        </option>
      </select>
    </div>

  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="tdee" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="text-center py-6">
      <div class="text-5xl font-bold text-stone-900 tabular-nums" data-testid="tdee-result">{{ formatNumber(tdee) }}</div>
      <div class="text-sm text-stone-500 mt-1">{{ t('common.kcalPerDay') }}</div>
      <div class="text-sm text-stone-400 mt-3" data-testid="bmr-result">{{ t('tdee.bmr', { value: formatNumber(bmr) }) }}</div>

      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('tdee.weightLoss') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee - 500) }}</div>
          <div class="text-xs text-stone-400">{{ t('common.kcalPerDay') }}</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('tdee.maintenance') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee) }}</div>
          <div class="text-xs text-stone-400">{{ t('common.kcalPerDay') }}</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('tdee.weightGain') }}</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee + 500) }}</div>
          <div class="text-xs text-stone-400">{{ t('common.kcalPerDay') }}</div>
        </div>
      </div>
    </div>
  </div>


    <AdSlot class="mt-8" />
  <BlogBanner calculator-key="tdee" />
</template>
