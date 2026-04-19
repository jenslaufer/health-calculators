<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()

const faqItems = computed(() => tm('bmr.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bmr.meta.title'),
  description: t('bmr.meta.description'),
  routeKey: 'bmr',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BMR Calculator',
    url: 'https://healthcalculator.app/bmr',
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
const formula = ref('mifflin-st-jeor')

const activityLevels = [
  { key: 'bmr.sedentary', factor: 1.2 },
  { key: 'bmr.lightlyActive', factor: 1.375 },
  { key: 'bmr.moderatelyActive', factor: 1.55 },
  { key: 'bmr.veryActive', factor: 1.725 },
  { key: 'bmr.extremelyActive', factor: 1.9 },
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

  if (formula.value === 'harris-benedict') {
    return gender.value === 'male'
      ? 13.397 * weightKg + 4.799 * heightCm - 5.677 * a + 88.362
      : 9.247 * weightKg + 3.098 * heightCm - 4.330 * a + 447.593
  }

  // Mifflin-St Jeor (default)
  const base = 10 * weightKg + 6.25 * heightCm - 5 * a - 161
  return gender.value === 'male' ? base + 166 : base
})

const formatNumber = (n) => Math.round(n).toLocaleString()
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bmr.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('bmr.description') }}</p>
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
      <label for="formula" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">{{ t('bmr.formula') }}</label>
      <select id="formula" v-model="formula"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
        <option value="mifflin-st-jeor">{{ t('bmr.mifflinStJeor') }}</option>
        <option value="harris-benedict">{{ t('bmr.harrisBenedict') }}</option>
      </select>
    </div>

  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="bmr" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="text-center py-6">
      <div class="text-5xl font-bold text-stone-900 tabular-nums" data-testid="bmr-result">{{ formatNumber(bmr) }}</div>
      <div class="text-sm text-stone-500 mt-1">{{ t('common.kcalPerDay') }}</div>

      <div class="mt-8" data-testid="activity-estimates">
        <h3 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('bmr.activityEstimates') }}</h3>
        <div class="grid grid-cols-1 gap-3">
          <div v-for="level in activityLevels" :key="level.factor" class="flex items-center justify-between bg-stone-50 rounded-lg px-5 py-3">
            <span class="text-sm text-stone-600">{{ t(level.key) }}</span>
            <span class="text-base font-bold text-stone-900 tabular-nums">{{ formatNumber(bmr * level.factor) }} <span class="text-xs font-normal text-stone-400">kcal</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>


    <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogBanner calculator-key="bmr" />
</template>
