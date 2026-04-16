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
  title: t('bodyType.meta.title'),
  description: t('bodyType.meta.description'),
  routeKey: 'bodyType',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Body Type Calculator',
    url: 'https://healthcalculator.app/body-type-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// --- State ---
const unit = ref('metric')
const mode = ref('measurements')
const height = ref(null)
const weight = ref(null)
const wrist = ref(null)
const shoulder = ref(null)
const hip = ref(null)
const bodyFat = ref(null)
const muscleTendency = ref('normal')
const fatTendency = ref('normal')

// --- Unit conversion helpers ---
const toCm = (val) => val != null ? (unit.value === 'imperial' ? val * 2.54 : val) : null
const toKg = (val) => val != null ? (unit.value === 'imperial' ? val * 0.453592 : val) : null

// --- Core somatotype calculation (Heath-Carter adapted) ---

function calcEctomorphy(heightCm, weightKg) {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return null
  const hwr = heightCm / Math.pow(weightKg, 1 / 3)
  if (hwr >= 40.75) return Math.max(0.5, 0.732 * hwr - 28.58)
  if (hwr > 38.25) return Math.max(0.5, 0.463 * hwr - 17.63)
  return 0.1
}

function calcEndomorphy(heightCm, weightKg, bodyFatPct, hipWidthCm) {
  if (bodyFatPct != null && bodyFatPct > 0) {
    // Scale body fat % to 1–9 endomorphy range (5% ≈ 0.8, 20% ≈ 4.4, 35% ≈ 8.0)
    return Math.max(0.5, Math.min(9, bodyFatPct * 0.24 - 0.4))
  }
  if (hipWidthCm != null && hipWidthCm > 0) {
    // Biiliac breadth relative to height (typical ratio 0.14–0.20)
    const ratio = hipWidthCm / heightCm
    return Math.max(0.5, Math.min(9, ratio * 50 - 4))
  }
  // Fallback: estimate from BMI
  const bmi = weightKg / (heightCm / 100) ** 2
  return Math.max(0.5, Math.min(9, bmi * 0.20 - 2.5))
}

function calcMesomorphy(heightCm, weightKg, wristCm, shoulderCm, bodyFatPct) {
  const ecto = calcEctomorphy(heightCm, weightKg) ?? 0
  const leanKg = bodyFatPct != null ? weightKg * (1 - bodyFatPct / 100) : weightKg * 0.82
  const leanDensity = (leanKg / heightCm) * 100

  const wristContrib = wristCm ? (wristCm - 16) * 0.6 : 0
  const shoulderContrib = shoulderCm ? (shoulderCm - 41) * 0.10 : 0
  const densityContrib = (leanDensity - 28) * 0.12
  const ectoAdj = -ecto * 0.3

  return Math.max(0.5, Math.min(9, 3.5 + wristContrib + shoulderContrib + densityContrib + ectoAdj))
}

function classifySomatotype(ecto, meso, endo) {
  const components = [
    { type: 'ectomorph', value: ecto },
    { type: 'mesomorph', value: meso },
    { type: 'endomorph', value: endo },
  ].sort((a, b) => b.value - a.value)

  const [first, second, third] = components

  // All three within 1 → balanced
  if (first.value - third.value < 1) return 'balanced'

  // First dominates by ≥ 1.5 → pure type
  if (first.value - second.value >= 1.5) return first.type

  // Two dominant components
  const pair = [first.type, second.type].sort().join('-')
  const mixedMap = {
    'ectomorph-mesomorph': 'ectoMesomorph',
    'endomorph-mesomorph': 'endoMesomorph',
    'ectomorph-endomorph': 'ectoEndomorph',
  }
  return mixedMap[pair] || first.type
}

// --- Computed somatotype ---
const somatotype = computed(() => {
  const hCm = toCm(height.value)
  const wKg = toKg(weight.value)
  if (!hCm || !wKg || hCm <= 0 || wKg <= 0) return null

  const wristCm = toCm(wrist.value)
  const shoulderCm = toCm(shoulder.value)
  const hipCm = toCm(hip.value)
  const bf = bodyFat.value

  let ecto = calcEctomorphy(hCm, wKg)
  let endo = calcEndomorphy(hCm, wKg, mode.value === 'measurements' ? bf : null, mode.value === 'measurements' ? hipCm : null)
  let meso = calcMesomorphy(hCm, wKg, mode.value === 'measurements' ? wristCm : null, mode.value === 'measurements' ? shoulderCm : null, mode.value === 'measurements' ? bf : null)

  if (ecto == null) return null

  // Apply questionnaire adjustments in quick mode
  if (mode.value === 'quick') {
    const muscleAdj = muscleTendency.value === 'easy' ? 2 : muscleTendency.value === 'hard' ? -2 : 0
    const fatAdj = fatTendency.value === 'easy' ? 2 : fatTendency.value === 'hard' ? -2 : 0
    meso = Math.max(0.5, Math.min(9, meso + muscleAdj))
    endo = Math.max(0.5, Math.min(9, endo + fatAdj))
  }

  const type = classifySomatotype(ecto, meso, endo)
  return { ecto: +ecto.toFixed(1), meso: +meso.toFixed(1), endo: +endo.toFixed(1), type }
})

// --- Type metadata ---
const typeColors = {
  ectomorph: { text: 'text-blue-500', bg: 'bg-blue-500', light: 'bg-blue-50 border-blue-200' },
  mesomorph: { text: 'text-green-600', bg: 'bg-green-600', light: 'bg-green-50 border-green-200' },
  endomorph: { text: 'text-orange-500', bg: 'bg-orange-500', light: 'bg-orange-50 border-orange-200' },
  ectoMesomorph: { text: 'text-teal-600', bg: 'bg-teal-600', light: 'bg-teal-50 border-teal-200' },
  endoMesomorph: { text: 'text-yellow-600', bg: 'bg-yellow-600', light: 'bg-yellow-50 border-yellow-200' },
  ectoEndomorph: { text: 'text-purple-500', bg: 'bg-purple-500', light: 'bg-purple-50 border-purple-200' },
  balanced: { text: 'text-stone-600', bg: 'bg-stone-600', light: 'bg-stone-50 border-stone-200' },
}

const typeColor = computed(() => somatotype.value ? typeColors[somatotype.value.type] : null)

// Score bar widths (0–9 scale → 0–100%)
const ectoWidth = computed(() => somatotype.value ? Math.min(100, (somatotype.value.ecto / 9) * 100) : 0)
const mesoWidth = computed(() => somatotype.value ? Math.min(100, (somatotype.value.meso / 9) * 100) : 0)
const endoWidth = computed(() => somatotype.value ? Math.min(100, (somatotype.value.endo / 9) * 100) : 0)

const unitLabel = computed(() => t('common.' + (unit.value === 'metric' ? 'cm' : 'inches')))
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bodyType.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bodyType.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Mode toggle -->
      <div class="flex gap-2 mb-6">
        <button
          @click="mode = 'measurements'"
          :class="mode === 'measurements' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('bodyType.measurementsMode') }}</button>
        <button
          @click="mode = 'quick'"
          :class="mode === 'quick' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('bodyType.quickMode') }}</button>
      </div>

      <!-- Unit toggle -->
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

      <!-- Required: height + weight -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label for="height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.height', { unit: unitLabel }) }}
          </label>
          <input
            id="height"
            v-model.number="height"
            type="number"
            :placeholder="unit === 'metric' ? '175' : '69'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="weight" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
          </label>
          <input
            id="weight"
            v-model.number="weight"
            type="number"
            :placeholder="unit === 'metric' ? '75' : '165'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <!-- Measurements mode: optional inputs -->
      <template v-if="mode === 'measurements'">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label for="wrist" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              {{ t('bodyType.wrist', { unit: unitLabel }) }}
            </label>
            <input
              id="wrist"
              v-model.number="wrist"
              type="number"
              :placeholder="unit === 'metric' ? '17' : '6.7'"
              class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
          </div>
          <div>
            <label for="shoulder" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              {{ t('bodyType.shoulder', { unit: unitLabel }) }}
            </label>
            <input
              id="shoulder"
              v-model.number="shoulder"
              type="number"
              :placeholder="unit === 'metric' ? '43' : '16.9'"
              class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label for="hip" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              {{ t('bodyType.hip', { unit: unitLabel }) }}
            </label>
            <input
              id="hip"
              v-model.number="hip"
              type="number"
              :placeholder="unit === 'metric' ? '27' : '10.6'"
              class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
          </div>
          <div>
            <label for="bodyFat" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              {{ t('bodyType.bodyFatOptional') }}
            </label>
            <input
              id="bodyFat"
              v-model.number="bodyFat"
              type="number"
              placeholder="15"
              min="1"
              max="60"
              class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
          </div>
        </div>
      </template>

      <!-- Quick mode: questionnaire -->
      <template v-else>
        <div class="space-y-5">
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('bodyType.muscleTendency') }}</p>
            <div class="flex gap-2">
              <button
                v-for="opt in ['hard', 'normal', 'easy']"
                :key="opt"
                @click="muscleTendency = opt"
                :class="muscleTendency === opt ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
                class="flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
              >{{ t('bodyType.tendency' + opt.charAt(0).toUpperCase() + opt.slice(1)) }}</button>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('bodyType.fatTendency') }}</p>
            <div class="flex gap-2">
              <button
                v-for="opt in ['hard', 'normal', 'easy']"
                :key="opt"
                @click="fatTendency = opt"
                :class="fatTendency === opt ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
                class="flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
              >{{ t('bodyType.tendency' + opt.charAt(0).toUpperCase() + opt.slice(1)) }}</button>
            </div>
          </div>
        </div>
      </template>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="somatotype" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Type heading -->
      <div class="flex items-center gap-4 mb-6">
        <div :class="typeColor.bg" class="w-3 h-3 rounded-full flex-shrink-0"></div>
        <div>
          <div class="flex items-baseline gap-3">
            <span data-testid="body-type-result" :class="typeColor.text" class="text-3xl font-bold tracking-tight">
              {{ t('bodyType.' + somatotype.type) }}
            </span>
          </div>
          <p class="text-sm text-stone-500 mt-0.5">{{ t('bodyType.' + somatotype.type + 'Desc') }}</p>
        </div>
      </div>

      <!-- Somatotype component bars -->
      <div class="mb-6">
        <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('bodyType.components') }}</h2>
        <div class="space-y-3">
          <div>
            <div class="flex justify-between text-sm mb-1.5">
              <span class="text-stone-600">{{ t('bodyType.ectomorphyScore') }}</span>
              <span data-testid="ecto-score" class="font-semibold text-stone-900 tabular-nums">{{ somatotype.ecto }}</span>
            </div>
            <div class="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full transition-all duration-500" :style="{ width: ectoWidth + '%' }"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1.5">
              <span class="text-stone-600">{{ t('bodyType.mesomorphyScore') }}</span>
              <span data-testid="meso-score" class="font-semibold text-stone-900 tabular-nums">{{ somatotype.meso }}</span>
            </div>
            <div class="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-600 rounded-full transition-all duration-500" :style="{ width: mesoWidth + '%' }"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1.5">
              <span class="text-stone-600">{{ t('bodyType.endomorphyScore') }}</span>
              <span data-testid="endo-score" class="font-semibold text-stone-900 tabular-nums">{{ somatotype.endo }}</span>
            </div>
            <div class="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div class="h-full bg-orange-500 rounded-full transition-all duration-500" :style="{ width: endoWidth + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Method note -->
      <p class="text-xs text-stone-400">{{ t(mode === 'quick' ? 'bodyType.quickNote' : 'bodyType.methodNote') }}</p>
    </div>

    <!-- Training + Nutrition recommendations -->
    <template v-if="somatotype">
      <div class="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('bodyType.training') }}</h2>
          <p class="text-sm text-stone-600 leading-relaxed">{{ t('bodyType.training' + somatotype.type.charAt(0).toUpperCase() + somatotype.type.slice(1)) }}</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('bodyType.nutrition') }}</h2>
          <p class="text-sm text-stone-600 leading-relaxed">{{ t('bodyType.nutrition' + somatotype.type.charAt(0).toUpperCase() + somatotype.type.slice(1)) }}</p>
        </div>
      </div>
    </template>

    <BlogBanner calculator-key="bodyType" />
    <AdSlot class="mt-8" />
  </div>
</template>
