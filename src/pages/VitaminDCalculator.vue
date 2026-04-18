<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, locale } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('vitaminD.meta.title'),
  description: t('vitaminD.meta.description'),
  routeKey: 'vitaminD',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Vitamin D Calculator',
    url: 'https://healthcalculator.app/vitamin-d',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Solar declination by month (degrees, approximate)
const DECLINATION = [-21, -14, -3, 9, 19, 23.5, 21, 14, 3, -8, -19, -23.5]

// Skin type time multipliers relative to Type II (higher = more melanin = slower synthesis)
const SKIN_FACTORS = [0.5, 1.0, 1.5, 2.0, 3.0, 4.0]

// Fraction of body surface exposed per clothing option
const CLOTHING_EXPOSED = [0.80, 0.35, 0.15, 0.05]

// Calibration: UV_B=7, skinII, 35% exposed, no SPF → 12 min for 1000 IU
const CALIBRATION = 34.0

const CITY_PRESETS = [
  { name: 'Helsinki', lat: 60 },
  { name: 'Berlin', lat: 52 },
  { name: 'London', lat: 51 },
  { name: 'Paris', lat: 49 },
  { name: 'New York', lat: 41 },
  { name: 'Rome', lat: 42 },
  { name: 'Madrid', lat: 40 },
  { name: 'Cairo', lat: 30 },
  { name: 'Miami', lat: 26 },
  { name: 'Bangkok', lat: 14 },
  { name: 'Sydney', lat: -34 },
  { name: 'São Paulo', lat: -24 },
]

const MONTH_SHORT = {
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

const MONTH_LONG = {
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

const monthShort = computed(() => MONTH_SHORT[locale.value] || MONTH_SHORT.en)
const monthLong = computed(() => MONTH_LONG[locale.value] || MONTH_LONG.en)

const skinType = ref(1)      // 0=TypeI … 5=TypeVI
const latitude = ref(51)
const month = ref(5)         // June default — summer, shows meaningful results
const hour = ref(12)
const clothing = ref(1)
const spf = ref(1)           // 1 = no SPF; otherwise the SPF value
const vitaminDLevel = ref(null)
const levelUnit = ref('nmol')

const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

function formatHour(h) {
  if (locale.value === 'de') return `${h}:00`
  return h < 12 ? `${h}:00 AM` : h === 12 ? '12:00 PM' : `${h - 12}:00 PM`
}

function calcSinElev(latDeg, monthIdx, hr) {
  const latR = latDeg * Math.PI / 180
  const declR = DECLINATION[monthIdx] * Math.PI / 180
  const haR = (hr - 12) * 15 * Math.PI / 180
  return Math.sin(latR) * Math.sin(declR) + Math.cos(latR) * Math.cos(declR) * Math.cos(haR)
}

function calcUvB(latDeg, monthIdx, hr) {
  const sinElev = calcSinElev(latDeg, monthIdx, hr)
  return 10 * Math.pow(Math.max(0, sinElev), 1.8)
}

function calcRate(uvB, skinTypeIdx, clothingIdx, spfVal) {
  if (uvB < 1.0) return 0
  return CALIBRATION * uvB * CLOTHING_EXPOSED[clothingIdx] / (SKIN_FACTORS[skinTypeIdx] * Math.max(1, spfVal))
}

function calcMinutes(targetIU, uvB, skinTypeIdx, clothingIdx, spfVal) {
  const rate = calcRate(uvB, skinTypeIdx, clothingIdx, spfVal)
  if (rate <= 0) return null
  return targetIU / rate
}

const uvB = computed(() => calcUvB(latitude.value, month.value, hour.value))
const rate = computed(() => calcRate(uvB.value, skinType.value, clothing.value, spf.value))

const minutesFor1000 = computed(() => calcMinutes(1000, uvB.value, skinType.value, clothing.value, spf.value))

const productionIn30Min = computed(() => Math.round(rate.value * 30))

const seasonalData = computed(() =>
  Array.from({ length: 12 }, (_, m) => {
    const uv = calcUvB(latitude.value, m, 12)
    return { uv, minutes: calcMinutes(1000, uv, skinType.value, clothing.value, spf.value) }
  })
)

const maxSeasonalUvB = computed(() => Math.max(...seasonalData.value.map(d => d.uv), 0.1))

const levelNmol = computed(() => {
  if (!vitaminDLevel.value) return null
  return levelUnit.value === 'ng' ? vitaminDLevel.value * 2.5 : vitaminDLevel.value
})

const vitaminDStatus = computed(() => {
  if (!levelNmol.value) return null
  if (levelNmol.value < 30) return 'deficient'
  if (levelNmol.value < 50) return 'insufficient'
  if (levelNmol.value < 75) return 'adequate'
  return 'optimal'
})

const supplementRecKey = computed(() => {
  const mins = minutesFor1000.value
  const status = vitaminDStatus.value
  if (uvB.value < 1.0 || mins === null || mins > 90) {
    return status === 'deficient' ? 'high' : 'supplement'
  }
  if (mins > 30) {
    return status === 'deficient' ? 'medium' : 'consider'
  }
  if (status === 'deficient') return 'medium'
  if (status === 'insufficient') return 'consider'
  return 'sun'
})

function minuteColor(mins) {
  if (mins <= 15) return 'text-green-600'
  if (mins <= 30) return 'text-yellow-600'
  if (mins <= 60) return 'text-orange-500'
  return 'text-red-500'
}

function barColor(uv) {
  if (uv >= 3) return 'bg-green-500'
  if (uv >= 1) return 'bg-yellow-400'
  return 'bg-stone-200'
}

const statusColors = {
  deficient: { bg: 'bg-red-50', border: 'border-red-200', title: 'text-red-700' },
  insufficient: { bg: 'bg-yellow-50', border: 'border-yellow-200', title: 'text-yellow-700' },
  adequate: { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-700' },
  optimal: { bg: 'bg-green-50', border: 'border-green-200', title: 'text-green-700' },
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('vitaminD.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('vitaminD.description') }}</p>
    </div>

    <!-- Input Card -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">

      <!-- Skin Type -->
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('vitaminD.skinType') }}</label>
        <div class="grid grid-cols-3 gap-2 sm:grid-cols-6 mb-2">
          <button
            v-for="(label, i) in ['I', 'II', 'III', 'IV', 'V', 'VI']"
            :key="i"
            @click="skinType = i"
            :class="skinType === i ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150"
            :data-testid="`skin-type-${i}`"
          >{{ label }}</button>
        </div>
        <p class="text-xs text-stone-400">{{ t(`vitaminD.skinTypes.${skinType}`) }}</p>
      </div>

      <!-- Latitude & City Presets -->
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vitaminD.latitude') }}</label>
        <div class="flex gap-3 items-center mb-3">
          <input
            v-model.number="latitude"
            type="number"
            min="-90"
            max="90"
            data-testid="latitude-input"
            class="w-28 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <span class="text-sm text-stone-400">° {{ latitude >= 0 ? t('vitaminD.north') : t('vitaminD.south') }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="city in CITY_PRESETS"
            :key="city.name"
            @click="latitude = city.lat"
            :class="latitude === city.lat ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150"
          >{{ city.name }}</button>
        </div>
      </div>

      <!-- Month & Time of Day -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vitaminD.month') }}</label>
          <select
            v-model.number="month"
            data-testid="month-select"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 transition-all duration-150"
          >
            <option v-for="(name, i) in monthLong" :key="i" :value="i">{{ name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vitaminD.timeOfDay') }}</label>
          <select
            v-model.number="hour"
            data-testid="time-select"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 transition-all duration-150"
          >
            <option v-for="h in HOURS" :key="h" :value="h">{{ formatHour(h) }}</option>
          </select>
        </div>
      </div>

      <!-- Clothing Coverage -->
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('vitaminD.clothing') }}</label>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button
            v-for="(key, i) in ['minimal', 'light', 'moderate', 'full']"
            :key="i"
            @click="clothing = i"
            :class="clothing === i ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 text-center"
            :data-testid="`clothing-${key}`"
          >{{ t(`vitaminD.clothingOptions.${key}`) }}</button>
        </div>
      </div>

      <!-- Sunscreen (SPF) -->
      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('vitaminD.spf') }}</label>
        <div class="flex gap-2 flex-wrap">
          <button
            v-for="s in [1, 15, 30, 50]"
            :key="s"
            @click="spf = s"
            :class="spf === s ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            :data-testid="`spf-${s}`"
          >{{ s === 1 ? t('vitaminD.spfNone') : `SPF ${s}` }}</button>
        </div>
      </div>

      <!-- Optional: Current Vitamin D Level -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('vitaminD.currentLevel') }}
          <span class="text-stone-400 font-normal normal-case ml-1">{{ t('vitaminD.optional') }}</span>
        </label>
        <div class="flex gap-3 items-center">
          <input
            v-model.number="vitaminDLevel"
            type="number"
            :placeholder="levelUnit === 'nmol' ? '50' : '20'"
            data-testid="level-input"
            class="w-32 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <div class="flex gap-1">
            <button
              @click="levelUnit = 'nmol'"
              :class="levelUnit === 'nmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >nmol/L</button>
            <button
              @click="levelUnit = 'ng'"
              :class="levelUnit === 'ng' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >ng/mL</button>
          </div>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results Card -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-5">{{ t('vitaminD.results') }}</h2>

      <div class="grid grid-cols-2 gap-4 mb-5">
        <!-- Minutes needed -->
        <div class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vitaminD.minutesLabel') }}</p>
          <div class="flex items-baseline gap-1">
            <span
              v-if="minutesFor1000 !== null && minutesFor1000 <= 120"
              :class="minuteColor(minutesFor1000)"
              class="text-4xl font-bold tabular-nums tracking-tight leading-none"
              data-testid="minutes-result"
            >{{ Math.round(minutesFor1000) }}</span>
            <span
              v-else
              class="text-2xl font-bold text-stone-400"
              data-testid="minutes-result"
            >—</span>
            <span v-if="minutesFor1000 !== null && minutesFor1000 <= 120" class="text-base text-stone-400 ml-1">{{ t('vitaminD.min') }}</span>
          </div>
          <p class="text-xs text-stone-400 mt-1">{{ t('vitaminD.for1000IU') }}</p>
        </div>

        <!-- IU in 30 minutes -->
        <div class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('vitaminD.productionLabel') }}</p>
          <div class="flex items-baseline gap-1">
            <span
              class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900"
              data-testid="production-result"
            >{{ productionIn30Min }}</span>
            <span class="text-base text-stone-400 ml-1">IU</span>
          </div>
          <p class="text-xs text-stone-400 mt-1">{{ t('vitaminD.in30Min') }}</p>
        </div>
      </div>

      <!-- Insufficient UV warning -->
      <div v-if="uvB < 1.0" class="bg-stone-100 border border-stone-200 rounded-lg p-4 mb-4">
        <p class="text-sm text-stone-600">{{ t('vitaminD.insufficientUV') }}</p>
      </div>

      <!-- Vitamin D status (if level provided) -->
      <div v-if="vitaminDStatus" class="mb-4">
        <div
          :class="[statusColors[vitaminDStatus].bg, statusColors[vitaminDStatus].border]"
          class="border rounded-lg p-4"
        >
          <p :class="statusColors[vitaminDStatus].title" class="text-sm font-semibold mb-1">
            {{ t(`vitaminD.status.${vitaminDStatus}`) }}
          </p>
          <p class="text-xs text-stone-500">{{ t(`vitaminD.statusDesc.${vitaminDStatus}`) }}</p>
        </div>
      </div>

      <!-- Supplementation recommendation -->
      <div class="bg-stone-50 border border-stone-200 rounded-lg p-4" data-testid="supplement-rec">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('vitaminD.recommendation') }}</p>
        <p class="text-sm text-stone-700">{{ t(`vitaminD.recs.${supplementRecKey}`) }}</p>
      </div>
    </div>

    <!-- Seasonal Chart Card -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-1">{{ t('vitaminD.seasonalTitle') }}</h2>
      <p class="text-sm text-stone-400 mb-5">{{ t('vitaminD.seasonalDesc') }}</p>

      <div class="flex items-end gap-1 h-20" data-testid="seasonal-chart">
        <div
          v-for="(d, i) in seasonalData"
          :key="i"
          class="flex-1 rounded-t-sm transition-all duration-300"
          :class="barColor(d.uv)"
          :style="{ height: Math.max(4, (d.uv / maxSeasonalUvB) * 100) + '%' }"
        ></div>
      </div>

      <div class="flex mt-1.5">
        <div
          v-for="(name, i) in monthShort"
          :key="i"
          class="flex-1 text-center"
          :class="i === month ? 'text-stone-900 font-semibold text-[10px]' : 'text-[10px] text-stone-400'"
        >{{ name }}</div>
      </div>

      <!-- Legend -->
      <div class="flex gap-4 mt-3 flex-wrap">
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-sm bg-green-500"></div>
          <span class="text-xs text-stone-400">{{ t('vitaminD.uvHigh') }}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-sm bg-yellow-400"></div>
          <span class="text-xs text-stone-400">{{ t('vitaminD.uvMedium') }}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-sm bg-stone-200"></div>
          <span class="text-xs text-stone-400">{{ t('vitaminD.uvNone') }}</span>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">
        <strong class="text-stone-700">{{ t('vitaminD.disclaimerTitle') }}:</strong>
        {{ t('vitaminD.disclaimer') }}
      </p>
    </div>

    <BlogBanner calculator-key="vitaminD" />
    <AdSlot class="mt-8" />
  </div>
</template>
