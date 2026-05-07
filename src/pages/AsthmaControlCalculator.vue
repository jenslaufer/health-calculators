<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { ACT_QUESTIONS, evaluateAct } from '../utils/asthmaControl.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('asthmaControl.faq') || [])

useHead(() => ({
  title: t('asthmaControl.meta.title'),
  description: t('asthmaControl.meta.description'),
  routeKey: 'asthmaControl',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Asthma Control Test Calculator',
    url: 'https://healthcalculator.app/asthma-control-test',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const answers = ref({
  activityLimitation: null,
  shortnessOfBreath: null,
  nightSymptoms: null,
  rescueInhalerUse: null,
  selfRating: null,
})

const result = computed(() => evaluateAct(answers.value))

const answeredCount = computed(() =>
  ACT_QUESTIONS.filter(q => Number.isInteger(answers.value[q])).length,
)

const progressPct = computed(() => (answeredCount.value / ACT_QUESTIONS.length) * 100)

const interpretation = computed(() => {
  if (!result.value) return null
  const k = result.value.category
  if (k === 'wellControlled') return { key: k, color: 'text-green-600', bg: 'bg-green-600', border: 'border-green-200' }
  if (k === 'notWellControlled') return { key: k, color: 'text-orange-500', bg: 'bg-orange-500', border: 'border-orange-200' }
  return { key: k, color: 'text-red-500', bg: 'bg-red-500', border: 'border-red-200' }
})

function reset() {
  for (const q of ACT_QUESTIONS) answers.value[q] = null
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('asthmaControl.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('asthmaControl.description') }}</p>
    </div>

    <!-- Intro / progress -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6">
      <p class="text-sm text-stone-600 mb-4">{{ t('asthmaControl.introNote') }}</p>
      <div class="flex items-center gap-4">
        <div class="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <div class="h-full bg-stone-900 transition-all duration-200" :style="{ width: progressPct + '%' }"></div>
        </div>
        <span class="text-xs font-semibold text-stone-500 tabular-nums">{{ answeredCount }} / 5</span>
      </div>
    </div>

    <!-- Questions -->
    <div class="space-y-6 mb-6">
      <div
        v-for="qKey in ACT_QUESTIONS"
        :key="qKey"
        class="bg-white border border-stone-200 rounded-xl shadow-sm p-6"
        :data-testid="'question-' + qKey"
      >
        <p class="text-base font-semibold text-stone-900 mb-4 leading-snug">
          {{ t(`asthmaControl.questions.${qKey}.title`) }}
        </p>
        <div class="space-y-2">
          <button
            v-for="opt in tm(`asthmaControl.questions.${qKey}.options`)"
            :key="opt.value"
            @click="answers[qKey] = opt.value"
            :data-testid="`option-${qKey}-${opt.value}`"
            :class="answers[qKey] === opt.value
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'"
            class="w-full text-left border rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150 flex items-center gap-3"
          >
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold tabular-nums shrink-0"
              :class="answers[qKey] === opt.value ? 'bg-white text-stone-900' : 'bg-stone-100 text-stone-600'"
            >{{ opt.value }}</span>
            <span>{{ opt.label }}</span>
          </button>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="result" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('asthmaControl.categories.' + interpretation.key) }}</span>
      </div>

      <div class="mb-6">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('asthmaControl.scoreLabel') }}</div>
        <div class="flex items-baseline gap-3">
          <span data-testid="result-score" class="text-6xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.score }}</span>
          <span class="text-base text-stone-400">{{ t('asthmaControl.scoreScale') }}</span>
        </div>
      </div>

      <!-- Score scale bar -->
      <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-orange-500 to-green-600 rounded-full" style="width: 100%"></div>
        <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: ((result.score - 5) / 20) * 100 + '%' }"></div>
      </div>

      <div :class="[interpretation.border, 'border rounded-lg px-4 py-3 bg-stone-50']">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('asthmaControl.hints.' + interpretation.key) }}</p>
      </div>

      <div class="mt-6 pt-4 border-t border-stone-100">
        <button @click="reset" data-testid="reset"
          class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150">{{ t('asthmaControl.reset') }}</button>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('asthmaControl.incompleteHint') }}</p>
    </div>

    <!-- Score scale -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('asthmaControl.scaleTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(row, i) in tm('asthmaControl.scaleRows')"
          :key="i"
          class="flex items-start justify-between border-b border-stone-100 pb-3 last:border-0 last:pb-0"
        >
          <div class="flex items-center gap-3">
            <div :class="[
              i === 0 ? 'bg-green-600' : i === 1 ? 'bg-orange-500' : 'bg-red-500',
              'w-2.5 h-2.5 rounded-full shrink-0 mt-0.5',
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

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('asthmaControl.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('asthmaControl.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('asthmaControl.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="asthmaControl" />
    <AdSlot class="mt-8" />
  </div>
</template>
