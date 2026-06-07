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
  calcWilks,
  getWilksBand,
  kgFromLb,
  bandColor,
  bandBg,
} from '../utils/wilksCoefficient.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('wilksCoefficient.faq') || [])

useHead(() => ({
  title: t('wilksCoefficient.meta.title'),
  description: t('wilksCoefficient.meta.description'),
  routeKey: 'wilksCoefficient',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Wilks Coefficient Calculator',
    url: 'https://healthcalculator.app/en/wilks-coefficient',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const bodyweight = ref(null)
const total = ref(null)
const sex = ref('male')
const unit = ref('kg')

const bodyweightKg = computed(() => {
  if (bodyweight.value == null || bodyweight.value === '') return null
  return unit.value === 'lb' ? kgFromLb(Number(bodyweight.value)) : Number(bodyweight.value)
})

const totalKg = computed(() => {
  if (total.value == null || total.value === '') return null
  return unit.value === 'lb' ? kgFromLb(Number(total.value)) : Number(total.value)
})

const score = computed(() =>
  calcWilks({
    bodyweightKg: bodyweightKg.value,
    totalKg: totalKg.value,
    sex: sex.value,
  }),
)

const band = computed(() => getWilksBand(score.value))
const hasResult = computed(() => score.value != null)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('wilksCoefficient.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('wilksCoefficient.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('wilksCoefficient.inputsTitle') }}</h2>

      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('wilksCoefficient.unitLabel') }}</label>
        <div class="flex gap-2">
          <button @click="unit = 'kg'" data-testid="unit-kg" type="button"
            :class="unit === 'kg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('wilksCoefficient.unitKg') }}</button>
          <button @click="unit = 'lb'" data-testid="unit-lb" type="button"
            :class="unit === 'lb' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('wilksCoefficient.unitLb') }}</button>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('wilksCoefficient.sexLabel') }}</label>
        <div class="flex gap-2">
          <button @click="sex = 'male'" data-testid="sex-male" type="button"
            :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('wilksCoefficient.sexMale') }}</button>
          <button @click="sex = 'female'" data-testid="sex-female" type="button"
            :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150">{{ t('wilksCoefficient.sexFemale') }}</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="bodyweight-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('wilksCoefficient.bodyweightLabel') }} ({{ unit }})
          </label>
          <input
            id="bodyweight-input"
            v-model.number="bodyweight"
            data-testid="bodyweight-input"
            type="number"
            min="0"
            :placeholder="t('wilksCoefficient.bodyweightPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="total-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('wilksCoefficient.totalLabel') }} ({{ unit }})
          </label>
          <input
            id="total-input"
            v-model.number="total"
            data-testid="total-input"
            type="number"
            min="0"
            :placeholder="t('wilksCoefficient.totalPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', bandBg(band)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('wilksCoefficient.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-2">
        <span data-testid="wilks-score" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ score }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ t('wilksCoefficient.bandLabel') }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-4', bandColor(band)]" data-testid="band">{{ t(`wilksCoefficient.band.${band}`) }}</p>

      <p class="text-sm text-stone-600 leading-relaxed" data-testid="band-description">{{ t(`wilksCoefficient.bandDescription.${band}`) }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('wilksCoefficient.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-stone-400"></div>
            <span class="text-sm text-stone-600">{{ t('wilksCoefficient.band.untrained') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('wilksCoefficient.bandRange.untrained') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('wilksCoefficient.band.novice') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('wilksCoefficient.bandRange.novice') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('wilksCoefficient.band.intermediate') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('wilksCoefficient.bandRange.intermediate') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
            <span class="text-sm text-stone-600">{{ t('wilksCoefficient.band.advanced') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('wilksCoefficient.bandRange.advanced') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
            <span class="text-sm text-stone-600">{{ t('wilksCoefficient.band.elite') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('wilksCoefficient.bandRange.elite') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('wilksCoefficient.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-sm text-stone-700 mb-3" data-testid="formula">
        {{ t('wilksCoefficient.formulaText') }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('wilksCoefficient.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('wilksCoefficient.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="wilksCoefficient" class="mt-8" />
    <BlogArticleLink calculator-key="wilksCoefficient" />

    <AdSlot class="mt-8" />
  </div>
</template>
