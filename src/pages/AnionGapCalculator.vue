<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()

const faqItems = computed(() => tm('anionGap.faq') || [])
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('anionGap.meta.title'),
  description: t('anionGap.meta.description'),
  routeKey: 'anionGap',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Anion Gap Calculator',
    url: 'https://healthcalculator.app/anion-gap-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const na = ref(null)
const cl = ref(null)
const hco3 = ref(null)
const albumin = ref(null)

const hasAllRequired = computed(() => na.value !== null && cl.value !== null && hco3.value !== null)

const ag = computed(() => {
  if (!hasAllRequired.value) return null
  return na.value - (cl.value + hco3.value)
})

const correctedAg = computed(() => {
  if (ag.value === null || albumin.value === null) return null
  return ag.value + 2.5 * (4.0 - albumin.value)
})

const interpretation = computed(() => {
  const v = ag.value
  if (v === null) return null
  if (v < 8) return { key: 'low', color: 'text-blue-600', bg: 'bg-blue-600', border: 'border-blue-200' }
  if (v <= 12) return { key: 'normal', color: 'text-green-600', bg: 'bg-green-600', border: 'border-green-200' }
  if (v <= 20) return { key: 'mild', color: 'text-yellow-500', bg: 'bg-yellow-500', border: 'border-yellow-200' }
  return { key: 'high', color: 'text-red-500', bg: 'bg-red-500', border: 'border-red-200' }
})

const plausibilityWarning = computed(() => {
  if (!hasAllRequired.value) return false
  if (na.value < 120 || na.value > 160) return true
  if (cl.value < 80 || cl.value > 120) return true
  if (hco3.value < 5 || hco3.value > 40) return true
  return false
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('anionGap.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('anionGap.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="input-na" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('anionGap.naLabel') }} (mEq/L)
          </label>
          <input
            id="input-na"
            v-model.number="na"
            data-testid="input-na"
            type="number"
            step="1"
            min="0"
            :placeholder="t('anionGap.naPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="input-cl" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('anionGap.clLabel') }} (mEq/L)
          </label>
          <input
            id="input-cl"
            v-model.number="cl"
            data-testid="input-cl"
            type="number"
            step="1"
            min="0"
            :placeholder="t('anionGap.clPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="input-hco3" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('anionGap.hco3Label') }} (mEq/L)
          </label>
          <input
            id="input-hco3"
            v-model.number="hco3"
            data-testid="input-hco3"
            type="number"
            step="1"
            min="0"
            :placeholder="t('anionGap.hco3Placeholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="input-albumin" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('anionGap.albuminLabel') }} (g/dL)
          </label>
          <input
            id="input-albumin"
            v-model.number="albumin"
            data-testid="input-albumin"
            type="number"
            step="0.1"
            min="0"
            :placeholder="t('anionGap.albuminPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <p class="text-xs text-stone-400 mt-1.5">{{ t('anionGap.albuminHint') }}</p>
        </div>
      </div>

      <!-- Plausibility warning -->
      <div v-if="plausibilityWarning" data-testid="warning-plausibility" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-2">
        <span class="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
        <p class="text-sm text-amber-700">{{ t('anionGap.warningPlausibility') }}</p>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div v-if="ag !== null" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Interpretation badge -->
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-interpretation"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('anionGap.interpretation.' + interpretation.key) }}</span>
      </div>

      <!-- AG value -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anionGap.resultAg') }}</div>
          <div data-testid="result-ag" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ ag.toFixed(1) }}
            <span class="text-base font-normal text-stone-500">mEq/L</span>
          </div>
        </div>

        <!-- Corrected AG -->
        <div v-if="correctedAg !== null">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anionGap.resultCorrectedAg') }}</div>
          <div data-testid="result-corrected-ag" class="text-4xl font-bold text-stone-900 tabular-nums tracking-tight">
            {{ correctedAg.toFixed(1) }}
            <span class="text-base font-normal text-stone-500">mEq/L</span>
          </div>
        </div>
      </div>

      <!-- Clinical hint -->
      <div :class="[interpretation.border, 'border rounded-lg px-4 py-3 bg-stone-50 mb-4']">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('anionGap.clinicalHint') }}</div>
        <p data-testid="result-hint" class="text-sm text-stone-700">{{ t('anionGap.hint.' + interpretation.key) }}</p>
      </div>

      <!-- Formula -->
      <div class="border-t border-stone-100 pt-4">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('anionGap.formula') }}</div>
        <div class="bg-stone-50 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 space-y-1">
          <div>{{ t('anionGap.formulaAg') }}</div>
          <div v-if="correctedAg !== null">{{ t('anionGap.formulaCorrected') }}</div>
        </div>
      </div>
    </div>

    <!-- Reference ranges -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('anionGap.referenceTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(row, i) in tm('anionGap.referenceRanges')"
          :key="i"
          class="flex items-start justify-between border-b border-stone-100 pb-3 last:border-0 last:pb-0"
        >
          <div class="flex items-center gap-3">
            <div :class="[
              i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-green-600' : i === 2 ? 'bg-yellow-500' : 'bg-red-500',
              'w-2.5 h-2.5 rounded-full shrink-0 mt-0.5'
            ]"></div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ row.label }}</span>
              <p class="text-xs text-stone-500">{{ row.hint }}</p>
            </div>
          </div>
          <div class="text-sm font-medium text-stone-900 tabular-nums shrink-0 ml-4">{{ row.range }}</div>
        </div>
      </div>

    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <BlogArticleLink calculator-key="anionGap" />
    <AdSlot class="mt-8" />
  </div>
</template>
