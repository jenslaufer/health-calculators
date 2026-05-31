<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  calcPulsePressure,
  getPulsePressureBand,
  getAgeContext,
  bandColor,
  bandBg,
  formatPp,
} from '../utils/pulsePressure.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pulsePressure.faq') || [])

useHead(() => ({
  title: t('pulsePressure.meta.title'),
  description: t('pulsePressure.meta.description'),
  routeKey: 'pulsePressure',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pulse Pressure Calculator',
    url: 'https://healthcalculator.app/en/pulse-pressure',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const systolic = ref(null)
const diastolic = ref(null)
const age = ref(null)

const pp = computed(() => calcPulsePressure(systolic.value, diastolic.value))
const band = computed(() => getPulsePressureBand(pp.value))
const ageBucket = computed(() => getAgeContext(age.value))
const hasResult = computed(() => pp.value !== null)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pulsePressure.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('pulsePressure.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('pulsePressure.inputsTitle') }}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="systolic-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('pulsePressure.systolicLabel') }} ({{ t('pulsePressure.unit') }})
          </label>
          <input
            id="systolic-input"
            v-model.number="systolic"
            data-testid="systolic-input"
            type="number"
            min="0"
            :placeholder="t('pulsePressure.systolicPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="diastolic-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('pulsePressure.diastolicLabel') }} ({{ t('pulsePressure.unit') }})
          </label>
          <input
            id="diastolic-input"
            v-model.number="diastolic"
            data-testid="diastolic-input"
            type="number"
            min="0"
            :placeholder="t('pulsePressure.diastolicPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <div>
        <label for="age-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('pulsePressure.ageLabel') }}
        </label>
        <input
          id="age-input"
          v-model.number="age"
          data-testid="age-input"
          type="number"
          min="0"
          :placeholder="t('pulsePressure.agePlaceholder')"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', bandBg(band)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('pulsePressure.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-2">
        <span data-testid="pp-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ formatPp(pp) }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ t('pulsePressure.unit') }} · {{ t('pulsePressure.ppLabel') }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-4', bandColor(band)]" data-testid="band">{{ t(`pulsePressure.band.${band}`) }}</p>

      <p class="text-sm text-stone-600 leading-relaxed mb-4" data-testid="band-description">{{ t(`pulsePressure.bandDescription.${band}`) }}</p>

      <div v-if="ageBucket" class="bg-white/60 border border-stone-200 rounded-lg p-4 mb-4" data-testid="age-context">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('pulsePressure.ageContextTitle') }}</p>
        <p class="text-sm text-stone-600 leading-relaxed">{{ t(`pulsePressure.ageContext.${ageBucket}`) }}</p>
      </div>

      <div class="bg-white/60 border border-stone-200 rounded-lg p-4 text-xs text-stone-600 leading-relaxed" data-testid="clinical-note">
        {{ t('pulsePressure.clinicalNote') }}
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('pulsePressure.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-600"></div>
            <span class="text-sm text-stone-600">{{ t('pulsePressure.band.narrow') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pulsePressure.bandRange.narrow') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('pulsePressure.band.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pulsePressure.bandRange.normal') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">{{ t('pulsePressure.band.wide') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('pulsePressure.bandRange.wide') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('pulsePressure.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-sm text-stone-700 mb-3" data-testid="formula">
        {{ t('pulsePressure.formulaText') }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('pulsePressure.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('pulsePressure.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="pulsePressure" class="mt-8" />
    <BlogArticleLink calculator-key="pulsePressure" />

    <AdSlot class="mt-8" />
  </div>
</template>
