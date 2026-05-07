<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcWhtr, getWhtrRiskZone } from '../utils/whtrRechner.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('whtrRechner.faq') || [])

useHead(() => ({
  title: t('whtrRechner.meta.title'),
  description: t('whtrRechner.meta.description'),
  routeKey: 'whtrRechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Waist-to-Height Ratio Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const waist = ref(null)
const height = ref(null)
const age = ref(35)

const whtr = computed(() => calcWhtr(waist.value, height.value))
const whtrFormatted = computed(() => whtr.value?.toFixed(3))

const zone = computed(() => getWhtrRiskZone(whtr.value, age.value))

const zoneColors = {
  slim: 'text-blue-500',
  low: 'text-green-600',
  moderate: 'text-yellow-500',
  increased: 'text-orange-500',
  high: 'text-red-500',
}

const ageHint = computed(() => {
  if (age.value > 50) return t('whtrRechner.ageHintOver50')
  if (age.value >= 40) return t('whtrRechner.ageHint40to50')
  return t('whtrRechner.ageHintUnder40')
})

const fmt = (n) => n.toFixed(2).replace('.', ',')

const thresholds = computed(() => {
  const off = age.value > 50 ? 0.05 : age.value >= 40 ? 0.005 : 0
  return [
    { key: 'slim', range: '< 0,40', bg: 'bg-blue-500' },
    { key: 'low', range: `0,40 – ${fmt(0.50 + off - 0.001)}`, bg: 'bg-green-600' },
    { key: 'moderate', range: `${fmt(0.50 + off)} – ${fmt(0.55 + off - 0.001)}`, bg: 'bg-yellow-500' },
    { key: 'increased', range: `${fmt(0.55 + off)} – ${fmt(0.60 + off - 0.001)}`, bg: 'bg-orange-500' },
    { key: 'high', range: `≥ ${fmt(0.60 + off)}`, bg: 'bg-red-500' },
  ]
})

const halfHeight = computed(() => (height.value ? (height.value / 2).toFixed(1) : null))
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('whtrRechner.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('whtrRechner.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
      <div>
        <label for="waist" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('whtrRechner.waist') }}
        </label>
        <input id="waist" v-model.number="waist" type="number" min="40" max="200" placeholder="85" data-testid="waist-input"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="height" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('whtrRechner.height') }}
        </label>
        <input id="height" v-model.number="height" type="number" min="100" max="230" placeholder="175" data-testid="height-input"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="age" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('whtrRechner.age') }}
        </label>
        <input id="age" v-model.number="age" type="number" min="10" max="120" placeholder="35" data-testid="age-input"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>
    <p class="text-xs text-stone-400 mt-2">{{ t('whtrRechner.rule') }}</p>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="whtr" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-4">
      <span data-testid="whtr-result" class="text-5xl font-bold text-stone-900 tabular-nums leading-none">{{ whtrFormatted }}</span>
      <span v-if="zone" :class="zoneColors[zone]" data-testid="whtr-zone" class="text-lg font-semibold">{{ t('whtrRechner.' + zone) }}</span>
    </div>

    <div v-if="halfHeight" class="bg-stone-50 rounded-lg p-4 mt-5">
      <p class="text-sm text-stone-600 leading-relaxed">
        {{ t('whtrRechner.rule') }}
        <span class="block mt-1 text-stone-500">
          <span class="tabular-nums">{{ height }} cm ÷ 2 = {{ halfHeight }} cm</span> &middot;
          <span class="tabular-nums">{{ t('whtrRechner.waist') }}: {{ waist }} cm</span>
        </span>
      </p>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline justify-between mb-4">
      <h2 class="text-lg font-semibold text-stone-900">{{ t('whtrRechner.thresholdsTitle') }}</h2>
      <span class="text-xs text-stone-400">{{ t('whtrRechner.ageHintLabel') }}: {{ ageHint }}</span>
    </div>
    <div class="overflow-hidden rounded-lg border border-stone-100">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-100">
            <th class="text-left px-4 py-2.5 font-semibold text-stone-600">{{ t('whtrRechner.categoryColumn') }}</th>
            <th class="text-right px-4 py-2.5 font-semibold text-stone-600">{{ t('whtrRechner.rangeColumn') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr v-for="th in thresholds" :key="th.key">
            <td class="px-4 py-3 text-stone-700">
              <span class="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle" :class="th.bg"></span>
              {{ t('whtrRechner.' + th.key) }}
            </td>
            <td class="px-4 py-3 text-right text-stone-900 font-medium tabular-nums">{{ th.range }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('whtrRechner.exampleTitle') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed">{{ t('whtrRechner.exampleText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('whtrRechner.aboutTitle') }}</h2>
    <p class="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{{ t('whtrRechner.aboutText') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('whtrRechner.relatedTitle') }}</h2>
    <ul class="grid grid-cols-2 gap-2 text-sm">
      <li><router-link :to="localePath('bmi')" class="text-stone-700 hover:text-stone-900 underline underline-offset-2">{{ t('whtrRechner.relatedBmi') }}</router-link></li>
      <li><router-link :to="localePath('waistHipRatio')" class="text-stone-700 hover:text-stone-900 underline underline-offset-2">{{ t('whtrRechner.relatedWhr') }}</router-link></li>
      <li><router-link :to="localePath('bodyFat')" class="text-stone-700 hover:text-stone-900 underline underline-offset-2">{{ t('whtrRechner.relatedBodyFat') }}</router-link></li>
      <li><router-link :to="localePath('idealWeight')" class="text-stone-700 hover:text-stone-900 underline underline-offset-2">{{ t('whtrRechner.relatedIdealWeight') }}</router-link></li>
    </ul>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('whtrRechner.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="whtrRechner" />
</template>
