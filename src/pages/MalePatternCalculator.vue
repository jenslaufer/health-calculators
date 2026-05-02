<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcMalePatternResult, NORWOOD_STAGES } from '../utils/malePattern.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('malePattern.faq') || [])

useHead(() => ({
  title: t('malePattern.meta.title'),
  description: t('malePattern.meta.description'),
  routeKey: 'malePattern',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Male Pattern Baldness Calculator',
    url: 'https://healthcalculator.app/male-pattern-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const questionKeys = ['q1', 'q2', 'q3', 'q4']
const answers = ref([null, null, null, null])

const result = computed(() => calcMalePatternResult(answers.value))

const stageColor = computed(() => {
  if (!result.value) return ''
  switch (result.value.stage) {
    case '1': return 'text-green-600'
    case '2': return 'text-green-500'
    case '3': return 'text-yellow-600'
    case '3v': return 'text-yellow-700'
    case '4': return 'text-orange-500'
    case '5': return 'text-orange-600'
    case '6': return 'text-red-600'
    case '7': return 'text-red-700'
    default: return 'text-stone-600'
  }
})

const stageBg = computed(() => {
  if (!result.value) return ''
  switch (result.value.stage) {
    case '1': return 'bg-green-50 border-green-200 text-green-900'
    case '2': return 'bg-green-50 border-green-200 text-green-900'
    case '3': return 'bg-yellow-50 border-yellow-200 text-yellow-900'
    case '3v': return 'bg-yellow-50 border-yellow-300 text-yellow-900'
    case '4': return 'bg-orange-50 border-orange-200 text-orange-900'
    case '5': return 'bg-orange-50 border-orange-300 text-orange-900'
    case '6': return 'bg-red-50 border-red-200 text-red-900'
    case '7': return 'bg-red-100 border-red-300 text-red-900'
    default: return 'bg-stone-50 border-stone-200 text-stone-900'
  }
})

function reset() {
  answers.value = [null, null, null, null]
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('malePattern.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('malePattern.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('malePattern.instructionsLabel') }}</p>
    <p class="text-sm text-stone-600 leading-relaxed mb-6">{{ t('malePattern.instructions') }}</p>

    <div v-for="(qKey, qIdx) in questionKeys" :key="qKey" class="mb-6 pb-6 border-b border-stone-100 last:border-b-0 last:pb-0 last:mb-0">
      <p class="text-sm font-semibold text-stone-900 mb-3">
        <span class="text-stone-400">{{ qIdx + 1 }}.</span>
        {{ t('malePattern.questions.' + qKey + '.text') }}
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
          <span>{{ t('malePattern.questions.' + qKey + '.opt' + opt) }}</span>
        </button>
      </div>
    </div>

    <button
      @click="reset"
      class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150"
    >&times; {{ t('malePattern.reset') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('malePattern.results') }}</p>

    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="norwood-stage">{{ result.stage }}</span>
      <span class="text-lg text-stone-400">/ 7</span>
      <span :class="stageColor" class="text-lg font-semibold" data-testid="result-status">{{ t('malePattern.stage_' + result.stage + '_name') }}</span>
    </div>

    <p class="text-sm text-stone-500 mb-4" data-testid="norwood-score">{{ t('malePattern.scoreLabel') }}: {{ result.score }} / 20</p>

    <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
      <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-700 rounded-full" style="width: 100%"></div>
      <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: ((result.score - 4) / 16 * 100) + '%' }"></div>
    </div>

    <div
      class="rounded-lg p-4 text-sm font-medium border mb-4"
      :class="stageBg"
      data-testid="stage-message"
    >
      {{ t('malePattern.advice_' + result.stage) }}
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50">
      <h2 class="text-base font-semibold text-stone-900">{{ t('malePattern.refTitle') }}</h2>
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('malePattern.refStage') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('malePattern.refDescription') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr v-for="s in NORWOOD_STAGES" :key="s">
          <td class="px-6 py-3 text-stone-900 font-medium">{{ t('malePattern.stage_' + s + '_name') }}</td>
          <td class="px-6 py-3 text-stone-600">{{ t('malePattern.stage_' + s + '_desc') }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('malePattern.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('malePattern.howItWorksText') }}</p>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <p class="text-sm text-amber-900 leading-relaxed">{{ t('malePattern.disclaimer') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="malePattern" />
</template>
