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
  calcLdl,
  isFriedewaldInvalid,
  ldlToMgdl,
  getAtpBand,
  bandColor,
  bandBg,
  roundLdl,
} from '../utils/ldlFriedewald.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('ldlFriedewald.faq') || [])

useHead(() => ({
  title: t('ldlFriedewald.meta.title'),
  description: t('ldlFriedewald.meta.description'),
  routeKey: 'ldlFriedewald',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LDL Cholesterol Friedewald Calculator',
    url: 'https://healthcalculator.app/en/ldl-cholesterol-friedewald',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('mg')
const total = ref(null)
const hdl = ref(null)
const trig = ref(null)

function switchUnit(next) {
  if (unit.value === next) return
  unit.value = next
  total.value = null
  hdl.value = null
  trig.value = null
}

const ldlRaw = computed(() =>
  calcLdl({ total: total.value, hdl: hdl.value, trig: trig.value, unit: unit.value }),
)

const invalid = computed(() => isFriedewaldInvalid(trig.value, unit.value))

const ldlMgdlForBand = computed(() => ldlToMgdl(ldlRaw.value, unit.value))
const band = computed(() => getAtpBand(ldlMgdlForBand.value))

const hasResult = computed(() => ldlRaw.value !== null && band.value !== null)

const ldlFormatted = computed(() => {
  if (ldlRaw.value === null) return '—'
  if (unit.value === 'mmol') return ldlRaw.value.toFixed(2)
  return String(roundLdl(ldlRaw.value))
})

const ldlUnitLabel = computed(() => (unit.value === 'mmol' ? t('ldlFriedewald.ldlUnitMmol') : t('ldlFriedewald.ldlUnitMg')))

const totalPlaceholder = computed(() =>
  unit.value === 'mmol' ? t('ldlFriedewald.totalPlaceholderMmol') : t('ldlFriedewald.totalPlaceholderMg'),
)
const hdlPlaceholder = computed(() =>
  unit.value === 'mmol' ? t('ldlFriedewald.hdlPlaceholderMmol') : t('ldlFriedewald.hdlPlaceholderMg'),
)
const trigPlaceholder = computed(() =>
  unit.value === 'mmol' ? t('ldlFriedewald.trigPlaceholderMmol') : t('ldlFriedewald.trigPlaceholderMg'),
)
const formulaText = computed(() =>
  unit.value === 'mmol' ? t('ldlFriedewald.formulaTextMmol') : t('ldlFriedewald.formulaTextMg'),
)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('ldlFriedewald.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('ldlFriedewald.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span class="text-xs font-semibold text-stone-500 uppercase tracking-widest">{{ t('ldlFriedewald.unitsLabel') }}</span>
        <div class="flex gap-2">
          <button
            data-testid="btn-mg"
            type="button"
            @click="switchUnit('mg')"
            :class="unit === 'mg' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('ldlFriedewald.unitMg') }}</button>
          <button
            data-testid="btn-mmol"
            type="button"
            @click="switchUnit('mmol')"
            :class="unit === 'mmol' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('ldlFriedewald.unitMmol') }}</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label for="total-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ldlFriedewald.totalLabel') }} ({{ ldlUnitLabel }})
          </label>
          <input
            id="total-input"
            v-model.number="total"
            data-testid="total-input"
            type="number"
            step="0.01"
            min="0"
            :placeholder="totalPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="hdl-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ldlFriedewald.hdlLabel') }} ({{ ldlUnitLabel }})
          </label>
          <input
            id="hdl-input"
            v-model.number="hdl"
            data-testid="hdl-input"
            type="number"
            step="0.01"
            min="0"
            :placeholder="hdlPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="trig-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ldlFriedewald.trigLabel') }} ({{ ldlUnitLabel }})
          </label>
          <input
            id="trig-input"
            v-model.number="trig"
            data-testid="trig-input"
            type="number"
            step="0.01"
            min="0"
            :placeholder="trigPlaceholder"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <div v-if="invalid" class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6" data-testid="invalid-warning">
      <p class="text-sm font-semibold text-amber-800 mb-1">⚠ {{ t('ldlFriedewald.warningInvalid') }}</p>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', bandBg(band)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('ldlFriedewald.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="ldl-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ ldlFormatted }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ ldlUnitLabel }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-1', bandColor(band)]" data-testid="band">{{ t(`ldlFriedewald.band.${band}`) }}</p>
      <p class="text-sm text-stone-600 leading-relaxed mb-4" data-testid="band-description">{{ t(`ldlFriedewald.bandDescription.${band}`) }}</p>

      <div class="bg-white/60 border border-stone-200 rounded-lg p-4 text-xs text-stone-600 leading-relaxed" data-testid="clinical-note">
        {{ t('ldlFriedewald.clinicalNote') }}
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ldlFriedewald.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('ldlFriedewald.band.optimal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ldlFriedewald.bandRange.optimal') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-lime-500"></div>
            <span class="text-sm text-stone-600">{{ t('ldlFriedewald.band.nearOptimal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ldlFriedewald.bandRange.nearOptimal') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('ldlFriedewald.band.borderline') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ldlFriedewald.bandRange.borderline') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">{{ t('ldlFriedewald.band.high') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ldlFriedewald.bandRange.high') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('ldlFriedewald.band.veryHigh') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ldlFriedewald.bandRange.veryHigh') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ldlFriedewald.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-base text-stone-700 mb-3" data-testid="formula">
        {{ formulaText }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('ldlFriedewald.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('ldlFriedewald.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="ldlFriedewald" class="mt-8" />
    <BlogArticleLink calculator-key="ldlFriedewald" />

    <AdSlot class="mt-8" />
  </div>
</template>
