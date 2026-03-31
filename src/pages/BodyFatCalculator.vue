<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bodyFat.meta.title'),
  description: t('bodyFat.meta.description'),
  routeKey: 'bodyFat',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Body Fat Calculator',
    url: 'https://healthcalculator.app/body-fat',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const gender = ref('male')
const unit = ref('metric')
const height = ref(null)
const neck = ref(null)
const waist = ref(null)
const hip = ref(null)
const weight = ref(null)

const toCm = (val) => unit.value === 'imperial' ? val * 2.54 : val

const bodyFat = computed(() => {
  if (!height.value || !neck.value || !waist.value) return null
  if (gender.value === 'female' && !hip.value) return null

  const h = toCm(height.value)
  const n = toCm(neck.value)
  const w = toCm(waist.value)

  if (gender.value === 'male') {
    if (w - n <= 0) return null
    return 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450
  }
  const hp = toCm(hip.value)
  if (w + hp - n <= 0) return null
  return 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450
})

const bodyFatFormatted = computed(() => bodyFat.value?.toFixed(1))

const categories = computed(() => {
  if (gender.value === 'male') {
    return [
      { label: 'bodyFat.essentialFat', range: '2 – 5%', min: 2, max: 5, color: 'text-blue-500', bg: 'bg-blue-500' },
      { label: 'bodyFat.athletes', range: '6 – 13%', min: 6, max: 13, color: 'text-green-600', bg: 'bg-green-600' },
      { label: 'bodyFat.fitness', range: '14 – 17%', min: 14, max: 17, color: 'text-green-500', bg: 'bg-green-500' },
      { label: 'bodyFat.average', range: '18 – 24%', min: 18, max: 24, color: 'text-yellow-500', bg: 'bg-yellow-500' },
      { label: 'bodyFat.obese', range: '> 25%', min: 25, max: 100, color: 'text-red-500', bg: 'bg-red-500' },
    ]
  }
  return [
    { label: 'bodyFat.essentialFat', range: '10 – 13%', min: 10, max: 13, color: 'text-blue-500', bg: 'bg-blue-500' },
    { label: 'bodyFat.athletes', range: '14 – 20%', min: 14, max: 20, color: 'text-green-600', bg: 'bg-green-600' },
    { label: 'bodyFat.fitness', range: '21 – 24%', min: 21, max: 24, color: 'text-green-500', bg: 'bg-green-500' },
    { label: 'bodyFat.average', range: '25 – 31%', min: 25, max: 31, color: 'text-yellow-500', bg: 'bg-yellow-500' },
    { label: 'bodyFat.obese', range: '> 32%', min: 32, max: 100, color: 'text-red-500', bg: 'bg-red-500' },
  ]
})

const category = computed(() => {
  if (!bodyFat.value) return null
  const bf = bodyFat.value
  return categories.value.find(c => bf >= c.min && bf <= c.max) || categories.value[categories.value.length - 1]
})

const barPosition = computed(() => {
  if (!bodyFat.value) return 0
  const clamped = Math.min(Math.max(bodyFat.value, 0), 50)
  return (clamped / 50) * 100
})

const fatMass = computed(() => {
  if (!bodyFat.value || !weight.value) return null
  return weight.value * (bodyFat.value / 100)
})

const leanMass = computed(() => {
  if (!bodyFat.value || !weight.value) return null
  return weight.value * (1 - bodyFat.value / 100)
})

const massUnit = computed(() => unit.value === 'metric' ? 'kg' : 'lbs')
const unitLabel = computed(() => t('common.' + (unit.value === 'metric' ? 'cm' : 'inches')))
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bodyFat.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('bodyFat.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
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

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.height', { unit: unitLabel }) }}
        </label>
        <input id="height" v-model.number="height" type="number" :placeholder="unit === 'metric' ? '170' : '67'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="neck" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('bodyFat.neck', { unit: unitLabel }) }}
        </label>
        <input id="neck" v-model.number="neck" type="number" :placeholder="unit === 'metric' ? '38' : '15'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="waist" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('bodyFat.waist', { unit: unitLabel }) }}
        </label>
        <input id="waist" v-model.number="waist" type="number" :placeholder="unit === 'metric' ? '85' : '33'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div v-if="gender === 'female'">
        <label for="hip" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('bodyFat.hip', { unit: unitLabel }) }}
        </label>
        <input id="hip" v-model.number="hip" type="number" :placeholder="unit === 'metric' ? '100' : '39'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('common.weightOptional', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
        </label>
        <input id="weight" v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div v-if="bodyFat" class="pt-5 border-t border-stone-100">
      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="body-fat-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ bodyFatFormatted }}</span>
        <span class="text-2xl text-stone-400">%</span>
        <span v-if="category" :class="category.color" data-testid="body-fat-category" class="text-lg font-semibold">{{ t(category.label) }}</span>
      </div>

      <div class="relative h-2.5 bg-stone-200 rounded-full overflow-hidden mb-1.5">
        <div class="absolute inset-0 flex">
          <div class="flex-1 bg-blue-500"></div>
          <div class="flex-1 bg-green-600"></div>
          <div class="flex-1 bg-green-500"></div>
          <div class="flex-1 bg-yellow-500"></div>
          <div class="flex-1 bg-red-500"></div>
        </div>
        <div class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform" :style="{ left: barPosition + '%' }"></div>
      </div>
      <div class="flex text-[10px] text-stone-400 tabular-nums">
        <div class="flex-1">5%</div>
        <div class="flex-1 text-center">15%</div>
        <div class="flex-1 text-center">25%</div>
        <div class="flex-1 text-center">35%</div>
        <div class="flex-1 text-right">50%</div>
      </div>

      <div v-if="fatMass !== null" class="grid grid-cols-2 gap-4 mt-5">
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('bodyFat.fatMass') }}</div>
          <div data-testid="fat-mass" class="text-2xl font-bold text-stone-900 tabular-nums">{{ fatMass.toFixed(1) }} <span class="text-sm text-stone-400">{{ massUnit }}</span></div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('bodyFat.leanMass') }}</div>
          <div data-testid="lean-mass" class="text-2xl font-bold text-stone-900 tabular-nums">{{ leanMass.toFixed(1) }} <span class="text-sm text-stone-400">{{ massUnit }}</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bodyFat.categoriesTitle', { gender: t('common.' + gender) }) }}</h2>
    <div class="space-y-3.5">
      <div
        v-for="(cat, i) in categories"
        :key="cat.label"
        :class="i < categories.length - 1 ? 'border-b border-stone-100 pb-3.5' : ''"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 rounded-full" :class="cat.bg"></div>
          <span class="text-sm text-stone-600">{{ t(cat.label) }}</span>
        </div>
        <span class="text-sm font-medium text-stone-900 tabular-nums">{{ cat.range }}</span>
      </div>
    </div>
  </div>

  <BlogBanner calculator-key="bodyFat" />
</template>
