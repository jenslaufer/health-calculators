<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcIief5Result } from '../utils/erectileDysfunction.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('erectileDysfunction.faq') || [])

useHead(() => ({
  title: t('erectileDysfunction.meta.title'),
  description: t('erectileDysfunction.meta.description'),
  routeKey: 'erectileDysfunction',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Erectile Dysfunction Calculator',
    url: 'https://healthcalculator.app/erectile-dysfunction-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const questionKeys = ['q1', 'q2', 'q3', 'q4', 'q5']
const answers = ref([null, null, null, null, null])

const result = computed(() => calcIief5Result(answers.value))

const severityColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.severity) {
    case 'noEd': return 'text-green-600'
    case 'mild': return 'text-yellow-600'
    case 'mildModerate': return 'text-orange-500'
    case 'moderate': return 'text-red-500'
    case 'severe': return 'text-red-700'
    default: return 'text-stone-600'
  }
})

const severityBg = computed(() => {
  if (!result.value) return ''
  switch (result.value.severity) {
    case 'noEd': return 'bg-green-50 border-green-200 text-green-900'
    case 'mild': return 'bg-yellow-50 border-yellow-200 text-yellow-900'
    case 'mildModerate': return 'bg-orange-50 border-orange-200 text-orange-900'
    case 'moderate': return 'bg-red-50 border-red-200 text-red-900'
    case 'severe': return 'bg-red-100 border-red-300 text-red-900'
    default: return 'bg-stone-50 border-stone-200 text-stone-900'
  }
})

function reset() {
  answers.value = [null, null, null, null, null]
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('erectileDysfunction.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('erectileDysfunction.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('erectileDysfunction.instructionsLabel') }}</p>
    <p class="text-sm text-stone-600 leading-relaxed mb-6">{{ t('erectileDysfunction.instructions') }}</p>

    <div v-for="(qKey, qIdx) in questionKeys" :key="qKey" class="mb-6 pb-6 border-b border-stone-100 last:border-b-0 last:pb-0 last:mb-0">
      <p class="text-sm font-semibold text-stone-900 mb-3">
        <span class="text-stone-400">{{ qIdx + 1 }}.</span>
        {{ t('erectileDysfunction.questions.' + qKey + '.text') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-2">
        <button
          v-for="opt in 5"
          :key="opt"
          @click="answers[qIdx] = opt"
          :data-testid="qKey + '-option-' + opt"
          :class="answers[qIdx] === opt ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'"
          class="text-left text-sm px-4 py-3 rounded-lg border transition-colors duration-150"
        >
          <span class="font-semibold mr-1">{{ opt }}.</span>
          <span>{{ t('erectileDysfunction.questions.' + qKey + '.opt' + opt) }}</span>
        </button>
      </div>
    </div>

    <button
      @click="reset"
      class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150"
    >&times; {{ t('erectileDysfunction.reset') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('erectileDysfunction.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="iief5-score">{{ result.score }}</span>
      <span class="text-lg text-stone-400">/ 25</span>
      <span :class="severityColor" class="text-lg font-semibold" data-testid="result-status">{{ t('erectileDysfunction.severity_' + result.severity) }}</span>
    </div>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-red-700 via-red-500 via-orange-500 via-yellow-500 to-green-500 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: ((result.score - 5) / 20 * 100) + '%' }"></div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium border mb-4"
      :class="severityBg"
      data-testid="severity-message"
    >
      {{ t('erectileDysfunction.advice_' + result.severity) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('erectileDysfunction.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('erectileDysfunction.refScore') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('erectileDysfunction.refSeverity') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">22 – 25</td><td class="px-6 py-3 text-stone-600">{{ t('erectileDysfunction.severity_noEd') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">17 – 21</td><td class="px-6 py-3 text-stone-600">{{ t('erectileDysfunction.severity_mild') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">12 – 16</td><td class="px-6 py-3 text-stone-600">{{ t('erectileDysfunction.severity_mildModerate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">8 – 11</td><td class="px-6 py-3 text-stone-600">{{ t('erectileDysfunction.severity_moderate') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7</td><td class="px-6 py-3 text-stone-600">{{ t('erectileDysfunction.severity_severe') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('erectileDysfunction.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('erectileDysfunction.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('erectileDysfunction.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="erectileDysfunction" />
</template>
