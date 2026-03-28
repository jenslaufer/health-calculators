<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('waistHipRatio.meta.title'),
  description: t('waistHipRatio.meta.description'),
  path: '/waist-hip-ratio',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Waist-to-Hip Ratio Calculator',
    url: 'https://jenslaufer.github.io/health-calculators/waist-hip-ratio',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const gender = ref('male')
const waist = ref(null)
const hip = ref(null)

const whr = computed(() => {
  if (!waist.value || !hip.value || hip.value === 0) return null
  return waist.value / hip.value
})

const whrFormatted = computed(() => whr.value?.toFixed(2))

const category = computed(() => {
  if (!whr.value) return null
  if (gender.value === 'male') {
    if (whr.value <= 0.85) return { key: 'low', color: 'text-green-600' }
    if (whr.value <= 0.90) return { key: 'moderate', color: 'text-yellow-500' }
    return { key: 'high', color: 'text-red-500' }
  }
  if (whr.value <= 0.80) return { key: 'low', color: 'text-green-600' }
  if (whr.value <= 0.85) return { key: 'moderate', color: 'text-yellow-500' }
  return { key: 'high', color: 'text-red-500' }
})

const barPosition = computed(() => {
  if (!whr.value) return 0
  const clamped = Math.min(Math.max(whr.value, 0.5), 1.2)
  return ((clamped - 0.5) / 0.7) * 100
})

const thresholds = computed(() => {
  if (gender.value === 'male') {
    return [
      { labelKey: 'waistHipRatio.lowRisk', range: '≤ 0.85', color: 'text-green-600', bg: 'bg-green-600' },
      { labelKey: 'waistHipRatio.moderateRisk', range: '0.86 – 0.90', color: 'text-yellow-500', bg: 'bg-yellow-500' },
      { labelKey: 'waistHipRatio.highRisk', range: '> 0.90', color: 'text-red-500', bg: 'bg-red-500' },
    ]
  }
  return [
    { labelKey: 'waistHipRatio.lowRisk', range: '≤ 0.80', color: 'text-green-600', bg: 'bg-green-600' },
    { labelKey: 'waistHipRatio.moderateRisk', range: '0.81 – 0.85', color: 'text-yellow-500', bg: 'bg-yellow-500' },
    { labelKey: 'waistHipRatio.highRisk', range: '> 0.85', color: 'text-red-500', bg: 'bg-red-500' },
  ]
})

const categoryLabels = { low: 'waistHipRatio.lowRisk', moderate: 'waistHipRatio.moderateRisk', high: 'waistHipRatio.highRisk' }
const recKeys = { low: 'waistHipRatio.recLow', moderate: 'waistHipRatio.recModerate', high: 'waistHipRatio.recHigh' }
const recColors = { low: 'text-green-600', moderate: 'text-yellow-600', high: 'text-red-600' }
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('waistHipRatio.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('waistHipRatio.description') }}</p>
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

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="waist" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('waistHipRatio.waist') }}
        </label>
        <input id="waist" v-model.number="waist" type="number" placeholder="85"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="hip" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('waistHipRatio.hip') }}
        </label>
        <input id="hip" v-model.number="hip" type="number" placeholder="100"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <div v-if="whr" class="pt-5 border-t border-stone-100">
      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="whr-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ whrFormatted }}</span>
        <span v-if="category" :class="category.color" data-testid="whr-category" class="text-lg font-semibold">{{ t(categoryLabels[category.key]) }}</span>
      </div>

      <div class="relative h-2.5 bg-stone-200 rounded-full overflow-hidden mb-1.5">
        <div class="absolute inset-0 flex">
          <div class="flex-1 bg-green-600"></div>
          <div class="flex-1 bg-yellow-500"></div>
          <div class="flex-1 bg-red-500"></div>
        </div>
        <div class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform" :style="{ left: barPosition + '%' }"></div>
      </div>
      <div class="flex text-[10px] text-stone-400 tabular-nums">
        <div class="flex-1">0.50</div>
        <div class="flex-1 text-center">0.80</div>
        <div class="flex-1 text-right">1.20</div>
      </div>

      <div class="bg-stone-50 rounded-lg p-4 mt-5">
        <p v-if="category" class="text-sm text-stone-600 leading-relaxed" v-html="t(recKeys[category.key], { start: `<strong class='${recColors[category.key]}'>`, end: '</strong>' })"></p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('waistHipRatio.thresholdsTitle', { gender: t('common.' + gender) }) }}</h2>
    <div class="space-y-3.5">
      <div
        v-for="(th, i) in thresholds"
        :key="th.labelKey"
        :class="i < thresholds.length - 1 ? 'border-b border-stone-100 pb-3.5' : ''"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 rounded-full" :class="th.bg"></div>
          <span class="text-sm text-stone-600">{{ t(th.labelKey) }}</span>
        </div>
        <span class="text-sm font-medium text-stone-900 tabular-nums">{{ th.range }}</span>
      </div>
    </div>
  </div>

  <BlogBanner calculator-path="/waist-hip-ratio" />
</template>
