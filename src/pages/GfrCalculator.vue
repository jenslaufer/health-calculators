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
  title: t('gfr.meta.title'),
  description: t('gfr.meta.description'),
  routeKey: 'gfr',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'GFR Calculator — eGFR Kidney Function',
    url: 'https://healthcalculator.app/gfr-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Creatinine unit: 'mg' = mg/dL | 'umol' = µmol/L
const creatUnit = ref('mg')
const creatinine = ref(null)
const age = ref(null)
const sex = ref('male')

const UMOL_TO_MG = 1 / 88.42

function switchCreatUnit(u) {
  creatUnit.value = u
  creatinine.value = null
}

// CKD-EPI 2021 equation (race-free, KDIGO recommended)
// eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^(−1.200) × 0.9938^Age × 1.012 [if female]
// Female: κ = 0.7, α = −0.241
// Male:   κ = 0.9, α = −0.302
// Scr in mg/dL
function ckdEpi2021(scrMgDl, agYears, isFemale) {
  const kappa = isFemale ? 0.7 : 0.9
  const alpha = isFemale ? -0.241 : -0.302
  const ratio = scrMgDl / kappa
  const sexFactor = isFemale ? 1.012 : 1.0
  return (
    142 *
    Math.pow(Math.min(ratio, 1), alpha) *
    Math.pow(Math.max(ratio, 1), -1.2) *
    Math.pow(0.9938, agYears) *
    sexFactor
  )
}

const scrMgDl = computed(() => {
  if (!creatinine.value || creatinine.value <= 0) return null
  return creatUnit.value === 'mg' ? creatinine.value : creatinine.value * UMOL_TO_MG
})

const hasInputs = computed(() =>
  scrMgDl.value !== null && age.value && age.value > 0 && age.value <= 120
)

const egfr = computed(() => {
  if (!hasInputs.value) return null
  return ckdEpi2021(scrMgDl.value, age.value, sex.value === 'female')
})

const ckdStage = computed(() => {
  if (egfr.value === null) return null
  const v = egfr.value
  if (v >= 90) return { stage: 'G1', color: 'text-green-600', bg: 'bg-green-600', risk: 'low' }
  if (v >= 60) return { stage: 'G2', color: 'text-lime-600', bg: 'bg-lime-600', risk: 'low' }
  if (v >= 45) return { stage: 'G3a', color: 'text-yellow-500', bg: 'bg-yellow-500', risk: 'moderate' }
  if (v >= 30) return { stage: 'G3b', color: 'text-orange-500', bg: 'bg-orange-500', risk: 'high' }
  if (v >= 15) return { stage: 'G4', color: 'text-red-500', bg: 'bg-red-500', risk: 'veryHigh' }
  return { stage: 'G5', color: 'text-red-700', bg: 'bg-red-700', risk: 'kidney_failure' }
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link
        :to="localePath('home')"
        class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block"
      >&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('gfr.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('gfr.description') }}</p>
    </div>

    <!-- Inputs -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Creatinine unit toggle -->
      <div class="flex gap-2 mb-6">
        <button
          data-testid="btn-mgdl"
          @click="switchCreatUnit('mg')"
          :class="creatUnit === 'mg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >mg/dL</button>
        <button
          data-testid="btn-umol"
          @click="switchCreatUnit('umol')"
          :class="creatUnit === 'umol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >µmol/L</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <!-- Serum creatinine -->
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('gfr.creatinineLabel') }} ({{ creatUnit === 'mg' ? 'mg/dL' : 'µmol/L' }})
          </label>
          <input
            v-model.number="creatinine"
            data-testid="input-creatinine"
            type="number"
            step="0.01"
            min="0"
            :placeholder="creatUnit === 'mg' ? '1.0' : '88'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <!-- Age -->
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('gfr.ageLabel') }}
          </label>
          <input
            v-model.number="age"
            data-testid="input-age"
            type="number"
            step="1"
            min="1"
            max="120"
            placeholder="45"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <!-- Sex -->
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('gfr.sexLabel') }}
          </label>
          <div class="flex gap-2">
            <button
              data-testid="btn-male"
              @click="sex = 'male'"
              :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 py-3.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('gfr.male') }}</button>
            <button
              data-testid="btn-female"
              @click="sex = 'female'"
              :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 py-3.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('gfr.female') }}</button>
          </div>
        </div>
      </div>

      <p class="text-xs text-stone-400 italic">{{ t('gfr.formulaNote') }}</p>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="egfr !== null" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- eGFR value -->
      <div class="flex items-baseline gap-3 mb-6">
        <span
          data-testid="egfr-result"
          class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none"
        >{{ egfr.toFixed(1) }}</span>
        <span class="text-xl font-light text-stone-500">mL/min/1.73m²</span>
      </div>

      <!-- CKD Stage badge + description -->
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="ckd-stage"
          :class="[ckdStage.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('gfr.stage') }} {{ ckdStage.stage }}</span>
        <span class="text-sm text-stone-600">{{ t('gfr.stageDesc.' + ckdStage.stage) }}</span>
      </div>

      <!-- Risk assessment -->
      <div class="border-t border-stone-100 pt-5">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('gfr.riskLabel') }}
        </div>
        <p
          data-testid="risk-assessment"
          :class="[ckdStage.color, 'text-sm font-medium leading-relaxed']"
        >{{ t('gfr.risk.' + ckdStage.risk) }}</p>
      </div>

      <!-- Doctor recommendation -->
      <div v-if="ckdStage.stage !== 'G1'" class="border-t border-stone-100 pt-5 mt-5">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('gfr.doctorLabel') }}
        </div>
        <p class="text-sm text-stone-600 leading-relaxed">{{ t('gfr.doctor.' + ckdStage.stage) }}</p>
      </div>
    </div>

    <!-- CKD Stages reference table -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('gfr.stagesTitle') }}</h2>
      <div class="space-y-2.5">
        <div
          v-for="s in ['G1', 'G2', 'G3a', 'G3b', 'G4', 'G5']"
          :key="s"
          class="flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors"
          :class="ckdStage && ckdStage.stage === s ? 'bg-stone-900 text-white' : 'bg-stone-50'"
        >
          <div class="flex items-center gap-3">
            <span class="text-sm font-semibold w-8">{{ s }}</span>
            <span class="text-sm">{{ t('gfr.stageDesc.' + s) }}</span>
          </div>
          <span class="text-sm font-medium tabular-nums shrink-0 ml-4">{{ t('gfr.stageRange.' + s) }}</span>
        </div>
      </div>
    </div>

    <!-- Clinical context -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('gfr.contextTitle') }}</h2>
      <div class="space-y-4">
        <div class="border-b border-stone-100 pb-4">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('gfr.contextEquation') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('gfr.contextEquationText') }}</p>
        </div>
        <div class="border-b border-stone-100 pb-4">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('gfr.contextDrug') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('gfr.contextDrugText') }}</p>
        </div>
        <div class="border-b border-stone-100 pb-4">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('gfr.contextLimits') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('gfr.contextLimitsText') }}</p>
        </div>
        <div>
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('gfr.contextDisclaimer') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('gfr.contextDisclaimerText') }}</p>
        </div>
      </div>
    </div>

    <BlogBanner calculator-key="gfr" />
    <AdSlot class="mt-8" />
  </div>
</template>
