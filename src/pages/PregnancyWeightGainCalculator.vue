<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('pregnancyWeightGain.meta.title'),
  description: t('pregnancyWeightGain.meta.description'),
  routeKey: 'pregnancyWeightGain',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pregnancy Weight Gain Calculator',
    url: 'https://healthcalculator.app/pregnancy-weight-gain-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// IOM 2009 guidelines: { min, max } total weight gain in kg
const IOM_GUIDELINES = {
  singleton: {
    underweight: { min: 12.5, max: 18 },
    normal:      { min: 11.5, max: 16 },
    overweight:  { min: 7,    max: 11.5 },
    obese:       { min: 5,    max: 9 },
  },
  twins: {
    underweight: { min: 12.5, max: 18 },  // IOM 2009 has no specific guideline; use singleton underweight as proxy
    normal:      { min: 17,   max: 25 },
    overweight:  { min: 14,   max: 23 },
    obese:       { min: 11,   max: 19 },
  },
}

const preWeight = ref(null)
const heightCm = ref(null)
const currentWeek = ref(null)
const twins = ref(false)

const bmi = computed(() => {
  if (!preWeight.value || !heightCm.value) return null
  return preWeight.value / Math.pow(heightCm.value / 100, 2)
})

const bmiCategory = computed(() => {
  if (!bmi.value) return null
  if (bmi.value < 18.5) return 'underweight'
  if (bmi.value < 25)   return 'normal'
  if (bmi.value < 30)   return 'overweight'
  return 'obese'
})

const gainRange = computed(() => {
  if (!bmiCategory.value) return null
  const type = twins.value ? 'twins' : 'singleton'
  return IOM_GUIDELINES[type][bmiCategory.value]
})

const gainAtWeek = computed(() => {
  if (!gainRange.value || !currentWeek.value) return null
  const week = Math.min(Math.max(currentWeek.value, 0), 40)
  return {
    min: (gainRange.value.min / 40) * week,
    max: (gainRange.value.max / 40) * week,
  }
})

const hasResults = computed(() => bmi.value !== null && currentWeek.value !== null)

// Chart: week-by-week recommended gain range
const CHART_WEEKS = 40
const chartWidth = 400
const chartHeight = 160
const paddingLeft = 32
const paddingRight = 8
const paddingTop = 8
const paddingBottom = 24

const maxGain = computed(() => {
  if (!gainRange.value) return 20
  return Math.ceil(gainRange.value.max * 1.1)
})

function weekToX(week) {
  return paddingLeft + (week / CHART_WEEKS) * (chartWidth - paddingLeft - paddingRight)
}

function gainToY(gain) {
  return paddingTop + chartHeight - paddingBottom - (gain / maxGain.value) * (chartHeight - paddingTop - paddingBottom)
}

const shadedPath = computed(() => {
  if (!gainRange.value) return ''
  const minRate = gainRange.value.min / 40
  const maxRate = gainRange.value.max / 40
  // Build top edge (max) forward, bottom edge (min) backward
  const topPoints = []
  const bottomPoints = []
  for (let w = 0; w <= CHART_WEEKS; w++) {
    topPoints.push(`${weekToX(w)},${gainToY(maxRate * w)}`)
    bottomPoints.push(`${weekToX(w)},${gainToY(minRate * w)}`)
  }
  return `M ${topPoints[0]} L ${topPoints.join(' L ')} L ${bottomPoints.reverse().join(' L ')} Z`
})

const minLine = computed(() => {
  if (!gainRange.value) return ''
  const rate = gainRange.value.min / 40
  return Array.from({ length: CHART_WEEKS + 1 }, (_, w) => `${weekToX(w)},${gainToY(rate * w)}`).join(' ')
})

const maxLine = computed(() => {
  if (!gainRange.value) return ''
  const rate = gainRange.value.max / 40
  return Array.from({ length: CHART_WEEKS + 1 }, (_, w) => `${weekToX(w)},${gainToY(rate * w)}`).join(' ')
})

const currentDot = computed(() => {
  if (!gainAtWeek.value || !currentWeek.value) return null
  const w = Math.min(currentWeek.value, CHART_WEEKS)
  const midGain = (gainAtWeek.value.min + gainAtWeek.value.max) / 2
  return { x: weekToX(w), y: gainToY(midGain) }
})

const yAxisTicks = computed(() => {
  if (!gainRange.value) return []
  const step = maxGain.value <= 10 ? 2 : maxGain.value <= 20 ? 4 : 5
  const ticks = []
  for (let g = 0; g <= maxGain.value; g += step) {
    ticks.push({ g, y: gainToY(g) })
  }
  return ticks
})
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pregnancyWeightGain.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pregnancyWeightGain.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label for="pre-weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyWeightGain.preWeight') }}
        </label>
        <input
          id="pre-weight"
          v-model.number="preWeight"
          type="number"
          placeholder="65"
          min="30"
          max="250"
          data-testid="pre-weight"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div>
        <label for="height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyWeightGain.height') }}
        </label>
        <input
          id="height"
          v-model.number="heightCm"
          type="number"
          placeholder="170"
          min="100"
          max="250"
          data-testid="height"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="week" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyWeightGain.currentWeek') }}
        </label>
        <input
          id="week"
          v-model.number="currentWeek"
          type="number"
          placeholder="20"
          min="1"
          max="42"
          data-testid="current-week"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
      <div class="flex flex-col justify-end pb-0.5">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pregnancyWeightGain.twinsLabel') }}
        </label>
        <div class="flex gap-2">
          <button
            @click="twins = false"
            :class="!twins ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            data-testid="btn-singleton"
          >{{ t('pregnancyWeightGain.singleton') }}</button>
          <button
            @click="twins = true"
            :class="twins ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            data-testid="btn-twins"
          >{{ t('pregnancyWeightGain.twins') }}</button>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <!-- BMI & Category -->
    <div class="flex items-baseline gap-3 mb-6">
      <span data-testid="bmi-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ bmi.toFixed(1) }}</span>
      <span class="text-2xl text-stone-400">BMI</span>
      <span data-testid="bmi-category" class="text-lg font-medium"
        :class="{
          'text-blue-600':   bmiCategory === 'underweight',
          'text-emerald-600': bmiCategory === 'normal',
          'text-yellow-600':  bmiCategory === 'overweight',
          'text-red-600':     bmiCategory === 'obese',
        }"
      >{{ t('pregnancyWeightGain.categories.' + bmiCategory) }}</span>
    </div>

    <!-- Total gain recommendation -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('pregnancyWeightGain.totalGainRange') }}</div>
        <div class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="total-gain-range">
          {{ gainRange.min }}–{{ gainRange.max }} <span class="text-sm text-stone-400">kg</span>
        </div>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('pregnancyWeightGain.gainByWeek', { week: currentWeek }) }}</div>
        <div class="text-2xl font-bold text-stone-900 tabular-nums" data-testid="gain-by-week">
          {{ gainAtWeek.min.toFixed(1) }}–{{ gainAtWeek.max.toFixed(1) }} <span class="text-sm text-stone-400">kg</span>
        </div>
      </div>
    </div>

    <!-- Chart -->
    <div>
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('pregnancyWeightGain.chartTitle') }}</h2>
      <div class="overflow-x-auto">
        <svg
          :viewBox="`0 0 ${chartWidth} ${chartHeight}`"
          :width="chartWidth"
          :height="chartHeight"
          class="w-full max-w-full"
          aria-label="Pregnancy weight gain chart"
          data-testid="weight-chart"
        >
          <!-- Y-axis ticks -->
          <g v-for="tick in yAxisTicks" :key="tick.g">
            <line :x1="paddingLeft - 4" :y1="tick.y" :x2="chartWidth - paddingRight" :y2="tick.y"
              stroke="#e7e5e4" stroke-width="1" />
            <text :x="paddingLeft - 6" :y="tick.y + 4" text-anchor="end" class="text-xs" fill="#a8a29e" font-size="9">
              {{ tick.g }}
            </text>
          </g>

          <!-- X-axis labels -->
          <text v-for="w in [0, 10, 20, 30, 40]" :key="w"
            :x="weekToX(w)" :y="chartHeight - 2" text-anchor="middle" fill="#a8a29e" font-size="9">
            {{ w === 0 ? t('pregnancyWeightGain.weekShort', { w: 0 }) : w }}
          </text>

          <!-- Shaded range -->
          <path :d="shadedPath" fill="#10b981" fill-opacity="0.12" />

          <!-- Min line -->
          <polyline :points="minLine" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 2" />

          <!-- Max line -->
          <polyline :points="maxLine" fill="none" stroke="#10b981" stroke-width="1.5" />

          <!-- Current week vertical line -->
          <line v-if="currentDot && currentWeek <= CHART_WEEKS"
            :x1="currentDot.x" :y1="paddingTop"
            :x2="currentDot.x" :y2="chartHeight - paddingBottom"
            stroke="#292524" stroke-width="1" stroke-dasharray="3 3" />

          <!-- Current position dot -->
          <circle v-if="currentDot && currentWeek <= CHART_WEEKS"
            :cx="currentDot.x" :cy="currentDot.y"
            r="5" fill="#292524" data-testid="chart-dot" />
        </svg>
      </div>
      <div class="flex items-center gap-4 mt-2 text-xs text-stone-400">
        <span class="flex items-center gap-1">
          <span class="inline-block w-4 border-t-2 border-emerald-500"></span>
          {{ t('pregnancyWeightGain.legendMax') }}
        </span>
        <span class="flex items-center gap-1">
          <span class="inline-block w-4 border-t-2 border-emerald-500 border-dashed"></span>
          {{ t('pregnancyWeightGain.legendMin') }}
        </span>
        <span class="flex items-center gap-1">
          <span class="inline-block w-2 h-2 rounded-full bg-stone-900"></span>
          {{ t('pregnancyWeightGain.legendCurrent') }}
        </span>
      </div>
    </div>

    <!-- IOM source note -->
    <p class="text-xs text-stone-400 mt-4">{{ t('pregnancyWeightGain.source') }}</p>
  </div>

  <!-- Links to related calculators -->
  <div v-if="hasResults" class="flex flex-wrap gap-3 mb-6 text-sm">
    <router-link :to="localePath('bmi')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('pregnancyWeightGain.linkBmi') }}
    </router-link>
    <span class="text-stone-300">&middot;</span>
    <router-link :to="localePath('pregnancy')" class="text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">
      {{ t('pregnancyWeightGain.linkPregnancy') }}
    </router-link>
  </div>

  <AdSlot class="mt-8" />
  <BlogArticleLink calculator-key="pregnancyWeightGain" />
</template>
