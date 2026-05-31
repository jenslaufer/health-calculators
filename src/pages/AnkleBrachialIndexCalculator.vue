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
  calcAbi,
  getAbiBand,
  bandColor,
  bandBg,
  formatAbi,
} from '../utils/ankleBrachialIndex.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('ankleBrachialIndex.faq') || [])

useHead(() => ({
  title: t('ankleBrachialIndex.meta.title'),
  description: t('ankleBrachialIndex.meta.description'),
  routeKey: 'ankleBrachialIndex',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Ankle-Brachial Index Calculator',
    url: 'https://healthcalculator.app/en/ankle-brachial-index',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const leftArm = ref(null)
const rightArm = ref(null)
const leftAnkle = ref(null)
const rightAnkle = ref(null)

const abi = computed(() =>
  calcAbi({
    leftArm: leftArm.value,
    rightArm: rightArm.value,
    leftAnkle: leftAnkle.value,
    rightAnkle: rightAnkle.value,
  }),
)

const overallBand = computed(() => (abi.value ? getAbiBand(abi.value.overall) : null))
const leftBand = computed(() => (abi.value ? getAbiBand(abi.value.left) : null))
const rightBand = computed(() => (abi.value ? getAbiBand(abi.value.right) : null))

const hasResult = computed(() => abi.value !== null)
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('ankleBrachialIndex.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('ankleBrachialIndex.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-5">{{ t('ankleBrachialIndex.inputsTitle') }}</h2>

      <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">{{ t('ankleBrachialIndex.armsLegend') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label for="left-arm-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ankleBrachialIndex.leftArmLabel') }} ({{ t('ankleBrachialIndex.unit') }})
          </label>
          <input
            id="left-arm-input"
            v-model.number="leftArm"
            data-testid="left-arm-input"
            type="number"
            min="0"
            :placeholder="t('ankleBrachialIndex.leftArmPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="right-arm-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ankleBrachialIndex.rightArmLabel') }} ({{ t('ankleBrachialIndex.unit') }})
          </label>
          <input
            id="right-arm-input"
            v-model.number="rightArm"
            data-testid="right-arm-input"
            type="number"
            min="0"
            :placeholder="t('ankleBrachialIndex.rightArmPlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">{{ t('ankleBrachialIndex.anklesLegend') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="left-ankle-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ankleBrachialIndex.leftAnkleLabel') }} ({{ t('ankleBrachialIndex.unit') }})
          </label>
          <input
            id="left-ankle-input"
            v-model.number="leftAnkle"
            data-testid="left-ankle-input"
            type="number"
            min="0"
            :placeholder="t('ankleBrachialIndex.leftAnklePlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="right-ankle-input" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('ankleBrachialIndex.rightAnkleLabel') }} ({{ t('ankleBrachialIndex.unit') }})
          </label>
          <input
            id="right-ankle-input"
            v-model.number="rightAnkle"
            data-testid="right-ankle-input"
            type="number"
            min="0"
            :placeholder="t('ankleBrachialIndex.rightAnklePlaceholder')"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="hasResult" :class="['border rounded-xl shadow-sm p-8 mb-6', bandBg(overallBand)]" data-testid="result-card">
      <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('ankleBrachialIndex.resultsLabel') }}</p>

      <div class="flex items-baseline gap-3 mb-2">
        <span data-testid="overall-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ formatAbi(abi.overall) }}</span>
        <span class="text-sm text-stone-400 ml-1">{{ t('ankleBrachialIndex.overallLabel') }}</span>
      </div>

      <p :class="['text-lg font-semibold mb-4', bandColor(overallBand)]" data-testid="band">{{ t(`ankleBrachialIndex.band.${overallBand}`) }}</p>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-white/60 border border-stone-200 rounded-lg p-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ankleBrachialIndex.leftLabel') }}</p>
          <p data-testid="left-value" class="text-2xl font-bold text-stone-900 tabular-nums">{{ formatAbi(abi.left) }}</p>
          <p :class="['text-sm font-medium', bandColor(leftBand)]" data-testid="left-band">{{ t(`ankleBrachialIndex.band.${leftBand}`) }}</p>
        </div>
        <div class="bg-white/60 border border-stone-200 rounded-lg p-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('ankleBrachialIndex.rightLabel') }}</p>
          <p data-testid="right-value" class="text-2xl font-bold text-stone-900 tabular-nums">{{ formatAbi(abi.right) }}</p>
          <p :class="['text-sm font-medium', bandColor(rightBand)]" data-testid="right-band">{{ t(`ankleBrachialIndex.band.${rightBand}`) }}</p>
        </div>
      </div>

      <p class="text-sm text-stone-600 leading-relaxed mb-4" data-testid="band-description">{{ t(`ankleBrachialIndex.bandDescription.${overallBand}`) }}</p>

      <div class="bg-white/60 border border-stone-200 rounded-lg p-4 text-xs text-stone-600 leading-relaxed" data-testid="clinical-note">
        {{ t('ankleBrachialIndex.clinicalNote') }}
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ankleBrachialIndex.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-700"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.severe') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.severe') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.moderate') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.moderate') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.mild') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.mild') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.borderline') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.borderline') }}</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.normal') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
            <span class="text-sm text-stone-600">{{ t('ankleBrachialIndex.band.nonCompressible') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">{{ t('ankleBrachialIndex.bandRange.nonCompressible') }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('ankleBrachialIndex.formulaTitle') }}</h2>
      <div class="bg-stone-50 rounded-lg p-4 font-mono text-sm text-stone-700 mb-3" data-testid="formula">
        {{ t('ankleBrachialIndex.formulaText') }}
      </div>
      <p class="text-sm text-stone-600 leading-relaxed">{{ t('ankleBrachialIndex.formulaWhy') }}</p>
    </div>

    <div v-if="hasResult" class="bg-stone-50 rounded-xl border border-stone-200 p-5 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('ankleBrachialIndex.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <RelatedCalculators calc-key="ankleBrachialIndex" class="mt-8" />
    <BlogArticleLink calculator-key="ankleBrachialIndex" />

    <AdSlot class="mt-8" />
  </div>
</template>
