<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcPearlIndex, classifyPearlIndex, referenceMethods } from '../utils/pearlIndexRechner.js'
import RelatedCalculators from '../components/RelatedCalculators.vue'

const { t, tm, locale } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('pearlIndexRechner.faq') || [])

useHead(() => ({
  title: t('pearlIndexRechner.meta.title'),
  description: t('pearlIndexRechner.meta.description'),
  routeKey: 'pearlIndexRechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('pearlIndexRechner.title'),
    url: locale.value === 'de'
      ? 'https://healthcalculator.app/de/pearl-index-rechner'
      : 'https://healthcalculator.app/en/pearl-index-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const women = ref(100)
const months = ref(12)
const pregnancies = ref(null)

const pearlIndex = computed(() => calcPearlIndex(pregnancies.value, women.value, months.value))
const category = computed(() => classifyPearlIndex(pearlIndex.value))

const formattedPi = computed(() => {
  if (pearlIndex.value === null) return null
  return locale.value === 'de'
    ? pearlIndex.value.toFixed(2).replace('.', ',')
    : pearlIndex.value.toFixed(2)
})

const categoryStyle = computed(() => {
  switch (category.value) {
    case 'verySafe': return { color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' }
    case 'safe': return { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' }
    case 'moderate': return { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' }
    case 'lowSafety': return { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' }
    case 'unsafe': return { color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' }
    default: return { color: 'text-stone-600', bg: 'bg-stone-50', border: 'border-stone-200' }
  }
})

function formatPi(value) {
  if (value === null || value === undefined) return ''
  const fixed = value < 1 ? value.toFixed(2) : value.toFixed(1)
  return locale.value === 'de' ? fixed.replace('.', ',') : fixed
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('pearlIndexRechner.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('pearlIndexRechner.description') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6" data-testid="medical-disclaimer">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('pearlIndexRechner.disclaimer') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-4">{{ t('pearlIndexRechner.inputsTitle') }}</h2>
    <div class="grid gap-6 sm:grid-cols-3">
      <div>
        <label for="women" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pearlIndexRechner.women') }}</label>
        <input id="women" v-model.number="women" type="number" min="1" step="1" :placeholder="t('pearlIndexRechner.womenHint')" data-testid="women"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <p class="text-xs text-stone-400 mt-1">{{ t('pearlIndexRechner.womenHint') }}</p>
      </div>
      <div>
        <label for="months" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pearlIndexRechner.months') }}</label>
        <input id="months" v-model.number="months" type="number" min="1" step="1" :placeholder="t('pearlIndexRechner.monthsHint')" data-testid="months"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <p class="text-xs text-stone-400 mt-1">{{ t('pearlIndexRechner.monthsHint') }}</p>
      </div>
      <div>
        <label for="pregnancies" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pearlIndexRechner.pregnancies') }}</label>
        <input id="pregnancies" v-model.number="pregnancies" type="number" min="0" step="1" placeholder="0" data-testid="pregnancies"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <p class="text-xs text-stone-400 mt-1">{{ t('pearlIndexRechner.pregnanciesHint') }}</p>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="pearlIndex !== null" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6" data-testid="result-card">
    <div class="flex items-baseline gap-3 mb-2">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="pearl-index-result">{{ formattedPi }}</span>
      <span v-if="category" :class="categoryStyle.color" class="text-lg font-semibold" data-testid="pearl-index-category">{{ t('pearlIndexRechner.' + category) }}</span>
    </div>
    <p class="text-sm text-stone-500 mb-4">{{ t('pearlIndexRechner.resultUnit') }}</p>
    <div :class="[categoryStyle.bg, categoryStyle.border]" class="border rounded-lg p-4">
      <p :class="categoryStyle.color" class="text-sm font-medium">
        {{ t('pearlIndexRechner.resultExplain', { women, months, pi: formattedPi }) }}
      </p>
      <p class="text-xs text-stone-500 mt-2">{{ t('pearlIndexRechner.categoryHelp') }}</p>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pearlIndexRechner.exampleTitle') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('pearlIndexRechner.exampleText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6" data-testid="reference-table-wrap">
    <div class="px-6 py-5 border-b border-stone-200">
      <h2 class="text-base font-semibold text-stone-900 mb-1">{{ t('pearlIndexRechner.referenceTitle') }}</h2>
      <p class="text-sm text-stone-500">{{ t('pearlIndexRechner.referenceIntro') }}</p>
    </div>
    <table class="w-full text-sm" data-testid="reference-table">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('pearlIndexRechner.method') }}</th>
          <th class="text-right px-6 py-3 font-semibold text-stone-700">{{ t('pearlIndexRechner.perfectUse') }}</th>
          <th class="text-right px-6 py-3 font-semibold text-stone-700">{{ t('pearlIndexRechner.typicalUse') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="m in referenceMethods" :key="m.key" data-testid="reference-row">
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('pearlIndexRechner.methods.' + m.key) }}</td>
          <td class="px-6 py-3 text-stone-700 text-right tabular-nums">{{ formatPi(m.perfect) }}</td>
          <td class="px-6 py-3 text-stone-700 text-right tabular-nums">{{ formatPi(m.typical) }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pearlIndexRechner.contentTitle') }}</h2>
    <div class="space-y-3 text-sm text-stone-600 leading-relaxed">
      <p>{{ t('pearlIndexRechner.contentP1') }}</p>
      <p>{{ t('pearlIndexRechner.contentP2') }}</p>
      <p>{{ t('pearlIndexRechner.contentP3') }}</p>
      <p>{{ t('pearlIndexRechner.contentP4') }}</p>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('pearlIndexRechner.internalLinksTitle') }}</h2>
    <div class="flex flex-wrap gap-3 text-sm">
      <router-link :to="localePath('ovulation')" class="text-stone-600 hover:text-stone-900 underline underline-offset-2 transition-colors">
        {{ t('pearlIndexRechner.linkOvulation') }}
      </router-link>
      <span class="text-stone-300">&middot;</span>
      <router-link :to="localePath('period')" class="text-stone-600 hover:text-stone-900 underline underline-offset-2 transition-colors">
        {{ t('pearlIndexRechner.linkPeriod') }}
      </router-link>
      <span class="text-stone-300">&middot;</span>
      <router-link :to="localePath('pregnancy')" class="text-stone-600 hover:text-stone-900 underline underline-offset-2 transition-colors">
        {{ t('pearlIndexRechner.linkPregnancy') }}
      </router-link>
      <span class="text-stone-300">&middot;</span>
      <router-link :to="localePath('fertilityWindow')" class="text-stone-600 hover:text-stone-900 underline underline-offset-2 transition-colors">
        {{ t('pearlIndexRechner.linkFertility') }}
      </router-link>
    </div>
  </div>

  <div class="bg-stone-50 rounded-xl border border-stone-200 p-6 mb-6">
    <h3 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('pearlIndexRechner.sourcesTitle') }}</h3>
    <p class="text-xs text-stone-500 leading-relaxed">{{ t('pearlIndexRechner.sourcesText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <RelatedCalculators calc-key="pearlIndexRechner" class="mt-8" />

  <BlogArticleLink calculator-key="pearlIndexRechner" />
</template>
