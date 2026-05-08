<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { CAT_QUESTIONS, evaluateCopd } from '../utils/copdAssessment.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('copdAssessment.faq') || [])

useHead(() => ({
  title: t('copdAssessment.meta.title'),
  description: t('copdAssessment.meta.description'),
  routeKey: 'copdAssessment',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'COPD Assessment Calculator',
    url: 'https://healthcalculator.app/copd-assessment-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const mmrc = ref(null)
const catAnswers = ref({
  cough: null, phlegm: null, chestTightness: null, breathlessness: null,
  activityLimitation: null, leavingHome: null, sleep: null, energy: null,
})
const moderateCount = ref(null)
const hospitalized = ref(null)

const result = computed(() => {
  if (mmrc.value === null) return null
  if (moderateCount.value === null) return null
  if (hospitalized.value === null) return null
  for (const q of CAT_QUESTIONS) if (catAnswers.value[q] === null) return null
  return evaluateCopd({
    catAnswers: catAnswers.value,
    mmrc: mmrc.value,
    moderateCount: moderateCount.value,
    hospitalized: hospitalized.value === 'yes',
  })
})

const totalQuestions = 1 + CAT_QUESTIONS.length + 2 // mMRC + 8 CAT + moderate + hospitalized
const answeredCount = computed(() => {
  let n = 0
  if (mmrc.value !== null) n += 1
  for (const q of CAT_QUESTIONS) if (catAnswers.value[q] !== null) n += 1
  if (moderateCount.value !== null) n += 1
  if (hospitalized.value !== null) n += 1
  return n
})
const progressPct = computed(() => (answeredCount.value / totalQuestions) * 100)

const groupColors = {
  A: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
  B: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-200' },
  E: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-200' },
}

function reset() {
  mmrc.value = null
  for (const q of CAT_QUESTIONS) catAnswers.value[q] = null
  moderateCount.value = null
  hospitalized.value = null
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('copdAssessment.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('copdAssessment.description') }}</p>
    </div>

    <!-- Intro / progress -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6">
      <p class="text-sm text-stone-600 mb-4">{{ t('copdAssessment.introNote') }}</p>
      <div class="flex items-center gap-4">
        <div class="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <div class="h-full bg-stone-900 transition-all duration-200" :style="{ width: progressPct + '%' }"></div>
        </div>
        <span class="text-xs font-semibold text-stone-500 tabular-nums">{{ answeredCount }} / {{ totalQuestions }}</span>
      </div>
    </div>

    <!-- mMRC -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6" data-testid="section-mmrc">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('copdAssessment.sections.mmrc') }}</h2>
      <p class="text-sm text-stone-600 mb-4">{{ t('copdAssessment.mmrc.title') }}</p>
      <div class="space-y-2">
        <button
          v-for="opt in tm('copdAssessment.mmrc.options')"
          :key="opt.value"
          @click="mmrc = opt.value"
          :data-testid="`option-mmrc-${opt.value}`"
          :class="mmrc === opt.value
            ? 'bg-stone-900 text-white border-stone-900'
            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'"
          class="w-full text-left border rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150 flex items-center gap-3"
        >
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold tabular-nums shrink-0"
            :class="mmrc === opt.value ? 'bg-white text-stone-900' : 'bg-stone-100 text-stone-600'"
          >{{ opt.value }}</span>
          <span>{{ opt.label }}</span>
        </button>
      </div>
    </div>

    <!-- CAT -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6" data-testid="section-cat">
      <h2 class="text-base font-semibold text-stone-900 mb-4">{{ t('copdAssessment.sections.cat') }}</h2>
      <div class="space-y-6">
        <div
          v-for="qKey in CAT_QUESTIONS"
          :key="qKey"
          :data-testid="'cat-' + qKey"
        >
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('copdAssessment.cat.labels.' + qKey) }}</div>
          <div class="text-sm text-stone-700 mb-3">
            <span class="font-medium">{{ t('copdAssessment.cat.questions.' + qKey + '.low') }}</span>
            <span class="text-stone-400"> &harr; </span>
            <span class="font-medium">{{ t('copdAssessment.cat.questions.' + qKey + '.high') }}</span>
          </div>
          <div class="grid grid-cols-6 gap-2">
            <button
              v-for="v in [0, 1, 2, 3, 4, 5]"
              :key="v"
              @click="catAnswers[qKey] = v"
              :data-testid="`option-${qKey}-${v}`"
              :class="catAnswers[qKey] === v
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'"
              class="border rounded-lg py-2 text-sm font-semibold tabular-nums transition-colors duration-150"
            >{{ v }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Exacerbations -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-6" data-testid="section-exacerbations">
      <h2 class="text-base font-semibold text-stone-900 mb-4">{{ t('copdAssessment.sections.exacerbations') }}</h2>

      <p class="text-sm text-stone-600 mb-3">{{ t('copdAssessment.exacerbations.moderate.title') }}</p>
      <div class="space-y-2 mb-6">
        <button
          v-for="opt in tm('copdAssessment.exacerbations.moderate.options')"
          :key="opt.value"
          @click="moderateCount = opt.value"
          :data-testid="`option-moderate-${opt.value}`"
          :class="moderateCount === opt.value
            ? 'bg-stone-900 text-white border-stone-900'
            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'"
          class="w-full text-left border rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150"
        >{{ opt.label }}</button>
      </div>

      <p class="text-sm text-stone-600 mb-3">{{ t('copdAssessment.exacerbations.hospitalized.title') }}</p>
      <div class="space-y-2">
        <button
          v-for="opt in tm('copdAssessment.exacerbations.hospitalized.options')"
          :key="opt.value"
          @click="hospitalized = opt.value"
          :data-testid="`option-hospitalized-${opt.value}`"
          :class="hospitalized === opt.value
            ? 'bg-stone-900 text-white border-stone-900'
            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'"
          class="w-full text-left border rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150"
        >{{ opt.label }}</button>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="result" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-6">{{ t('copdAssessment.results.title') }}</h2>

      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[groupColors[result.goldGroup].bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('copdAssessment.results.groupLabel') }} {{ result.goldGroup }}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('copdAssessment.results.groupLabel') }}</div>
          <div class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="result-group">{{ result.goldGroup }}</div>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('copdAssessment.results.catLabel') }}</div>
          <div class="flex items-baseline gap-2">
            <span data-testid="result-cat" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.catScore }}</span>
            <span class="text-sm text-stone-400">{{ t('copdAssessment.results.catScale') }}</span>
          </div>
          <p class="text-xs text-stone-500 mt-1">{{ t('copdAssessment.results.categoryHints.' + result.catCategory) }}</p>
        </div>
        <div>
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('copdAssessment.results.mmrcLabel') }}</div>
          <div class="flex items-baseline gap-2">
            <span data-testid="result-mmrc" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.mmrc }}</span>
            <span class="text-sm text-stone-400">{{ t('copdAssessment.results.mmrcScale') }}</span>
          </div>
        </div>
      </div>

      <div :class="[groupColors[result.goldGroup].border, 'border rounded-lg px-4 py-3 bg-stone-50']">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('copdAssessment.results.groupHints.' + result.goldGroup) }}</p>
      </div>

      <div class="mt-6 pt-4 border-t border-stone-100">
        <button @click="reset" data-testid="reset"
          class="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors duration-150">{{ t('copdAssessment.reset') }}</button>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('copdAssessment.incompleteHint') }}</p>
    </div>

    <!-- ABE matrix -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('copdAssessment.scaleTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(row, i) in tm('copdAssessment.scaleRows')"
          :key="i"
          class="flex items-start justify-between border-b border-stone-100 pb-3 last:border-0 last:pb-0 gap-4"
        >
          <div class="flex items-center gap-3">
            <div :class="[
              row.group === 'A' ? 'bg-green-600' : row.group === 'B' ? 'bg-orange-500' : 'bg-red-500',
              'w-8 h-8 rounded-full shrink-0 text-white text-xs font-bold flex items-center justify-center',
            ]">{{ row.group }}</div>
            <div>
              <span class="text-sm text-stone-900 font-medium">{{ row.label }}</span>
              <p class="text-xs text-stone-500">{{ row.criteria }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('copdAssessment.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('copdAssessment.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('copdAssessment.disclaimer') }}</p>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="copdAssessment" />
    <AdSlot class="mt-8" />
  </div>
</template>
