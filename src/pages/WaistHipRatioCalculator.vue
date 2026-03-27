<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

useHead({
  title: 'Waist-to-Hip Ratio Calculator — WHO Risk Assessment',
  description: 'Calculate your waist-to-hip ratio and assess health risk based on WHO guidelines. Free, instant results for men and women.',
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
})

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
    if (whr.value <= 0.85) return { label: 'Low Risk', color: 'text-green-600' }
    if (whr.value <= 0.90) return { label: 'Moderate Risk', color: 'text-yellow-500' }
    return { label: 'High Risk', color: 'text-red-500' }
  }
  if (whr.value <= 0.80) return { label: 'Low Risk', color: 'text-green-600' }
  if (whr.value <= 0.85) return { label: 'Moderate Risk', color: 'text-yellow-500' }
  return { label: 'High Risk', color: 'text-red-500' }
})

const barPosition = computed(() => {
  if (!whr.value) return 0
  const clamped = Math.min(Math.max(whr.value, 0.5), 1.2)
  return ((clamped - 0.5) / 0.7) * 100
})

const thresholds = computed(() => {
  if (gender.value === 'male') {
    return [
      { label: 'Low Risk', range: '≤ 0.85', color: 'text-green-600', bg: 'bg-green-600' },
      { label: 'Moderate Risk', range: '0.86 – 0.90', color: 'text-yellow-500', bg: 'bg-yellow-500' },
      { label: 'High Risk', range: '> 0.90', color: 'text-red-500', bg: 'bg-red-500' },
    ]
  }
  return [
    { label: 'Low Risk', range: '≤ 0.80', color: 'text-green-600', bg: 'bg-green-600' },
    { label: 'Moderate Risk', range: '0.81 – 0.85', color: 'text-yellow-500', bg: 'bg-yellow-500' },
    { label: 'High Risk', range: '> 0.85', color: 'text-red-500', bg: 'bg-red-500' },
  ]
})
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Waist-to-Hip Ratio Calculator</h1>
    <p class="text-base text-stone-500 font-normal">Assess your health risk based on WHO waist-to-hip ratio guidelines.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex gap-2 mb-6">
      <button
        @click="gender = 'male'"
        :class="gender === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Male</button>
      <button
        @click="gender = 'female'"
        :class="gender === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
      >Female</button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="waist" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Waist circumference (cm)
        </label>
        <input
          id="waist"
          v-model.number="waist"
          type="number"
          placeholder="85"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="hip" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          Hip circumference (cm)
        </label>
        <input
          id="hip"
          v-model.number="hip"
          type="number"
          placeholder="100"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <div v-if="whr" class="pt-5 border-t border-stone-100">
      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="whr-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ whrFormatted }}</span>
        <span v-if="category" :class="category.color" data-testid="whr-category" class="text-lg font-semibold">{{ category.label }}</span>
      </div>

      <div class="relative h-2.5 bg-stone-200 rounded-full overflow-hidden mb-1.5">
        <div class="absolute inset-0 flex">
          <div class="flex-1 bg-green-600"></div>
          <div class="flex-1 bg-yellow-500"></div>
          <div class="flex-1 bg-red-500"></div>
        </div>
        <div
          class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform"
          :style="{ left: barPosition + '%' }"
        ></div>
      </div>
      <div class="flex text-[10px] text-stone-400 tabular-nums">
        <div class="flex-1">0.50</div>
        <div class="flex-1 text-center">0.80</div>
        <div class="flex-1 text-right">1.20</div>
      </div>

      <div class="bg-stone-50 rounded-lg p-4 mt-5">
        <p class="text-sm text-stone-600 leading-relaxed">
          <template v-if="category.label === 'Low Risk'">
            Your WHR indicates a <strong class="text-green-600">low health risk</strong>. Keep up your healthy lifestyle with regular exercise and a balanced diet.
          </template>
          <template v-else-if="category.label === 'Moderate Risk'">
            Your WHR indicates a <strong class="text-yellow-600">moderate health risk</strong>. Consider increasing physical activity and monitoring your waist circumference.
          </template>
          <template v-else>
            Your WHR indicates a <strong class="text-red-600">high health risk</strong> according to WHO guidelines. Central obesity is associated with increased cardiovascular and metabolic risk. Consult a healthcare professional.
          </template>
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">WHO Risk Thresholds ({{ gender === 'male' ? 'Male' : 'Female' }})</h2>
    <div class="space-y-3.5">
      <div
        v-for="(t, i) in thresholds"
        :key="t.label"
        :class="i < thresholds.length - 1 ? 'border-b border-stone-100 pb-3.5' : ''"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 rounded-full" :class="t.bg"></div>
          <span class="text-sm text-stone-600">{{ t.label }}</span>
        </div>
        <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t.range }}</span>
      </div>
    </div>
  </div>

  <BlogBanner calculator-path="/waist-hip-ratio" />
</template>
