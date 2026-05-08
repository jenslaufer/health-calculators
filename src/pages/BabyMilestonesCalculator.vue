<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import {
  BRACKETS,
  findBracket,
  getMilestones,
  getExpectedSize,
  ageFromBirthDate,
} from '../utils/babyMilestones.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('babyMilestones.faq') || [])

useHead(() => ({
  title: t('babyMilestones.meta.title'),
  description: t('babyMilestones.meta.description'),
  routeKey: 'babyMilestones',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Baby Milestones Calculator',
    url: 'https://healthcalculator.app/baby-milestones-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const mode = ref('age')
const ageMonths = ref(6)
const birthDate = ref('')
const unit = ref('metric')

const today = new Date().toISOString().slice(0, 10)
const asOf = ref(today)

const computedAge = computed(() => {
  if (mode.value === 'birthDate') {
    const r = ageFromBirthDate(birthDate.value, asOf.value)
    return r === null ? null : Math.max(0, r)
  }
  return typeof ageMonths.value === 'number' && Number.isFinite(ageMonths.value) ? ageMonths.value : null
})

const result = computed(() => {
  if (computedAge.value === null) return null
  return getMilestones(computedAge.value)
})

const expectedSize = computed(() => {
  if (computedAge.value === null) return null
  return getExpectedSize(computedAge.value)
})

const displayWeight = computed(() => {
  if (!expectedSize.value) return null
  return unit.value === 'metric'
    ? { value: expectedSize.value.weightKg.toFixed(1), unit: 'kg' }
    : { value: (expectedSize.value.weightKg * 2.20462).toFixed(1), unit: 'lbs' }
})

const displayLength = computed(() => {
  if (!expectedSize.value) return null
  return unit.value === 'metric'
    ? { value: expectedSize.value.lengthCm.toFixed(0), unit: 'cm' }
    : { value: (expectedSize.value.lengthCm / 2.54).toFixed(1), unit: 'in' }
})

function selectBracket(b) {
  mode.value = 'age'
  ageMonths.value = b
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('babyMilestones.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('babyMilestones.description') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6">
      <p class="text-xs text-stone-600 leading-relaxed">{{ t('babyMilestones.introNote') }}</p>
    </div>

    <!-- Input panel -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <!-- Mode toggle -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button
          @click="mode = 'age'"
          data-testid="mode-age"
          :class="mode === 'age' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('babyMilestones.modeAge') }}</button>
        <button
          @click="mode = 'birthDate'"
          data-testid="mode-birth-date"
          :class="mode === 'birthDate' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('babyMilestones.modeBirthDate') }}</button>
      </div>

      <!-- Age input -->
      <div v-if="mode === 'age'">
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('babyMilestones.ageMonthsLabel') }}</label>
        <input
          v-model.number="ageMonths"
          type="number"
          min="0"
          max="36"
          step="1"
          :placeholder="t('babyMilestones.ageMonthsPlaceholder')"
          data-testid="age-months"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />

        <!-- Quick-pick chips -->
        <div class="flex gap-2 flex-wrap mt-4">
          <button
            v-for="b in BRACKETS"
            :key="b"
            @click="selectBracket(b)"
            :data-testid="`bracket-${b}`"
            :class="findBracket(ageMonths) === b
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'"
            class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-150 tabular-nums"
          >{{ b }} {{ t('babyMilestones.monthsShort') }}</button>
        </div>
      </div>

      <!-- Birth date input -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('babyMilestones.birthDateLabel') }}</label>
          <input
            v-model="birthDate"
            type="date"
            data-testid="birth-date"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('babyMilestones.asOfLabel') }}</label>
          <input
            v-model="asOf"
            type="date"
            data-testid="as-of"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div v-if="computedAge !== null" class="md:col-span-2 bg-stone-50 rounded-lg p-3">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('babyMilestones.computedAge') }}</p>
          <p data-testid="computed-age" class="text-base font-bold text-stone-900 tabular-nums">{{ computedAge.toFixed(1) }} {{ t('babyMilestones.monthsShort') }}</p>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-baseline gap-3 mb-6">
        <span class="text-xs font-semibold text-stone-500 uppercase tracking-widest">{{ t('babyMilestones.checkpointLabel') }}:</span>
        <span data-testid="result-bracket" class="text-2xl font-bold text-stone-900 tabular-nums tracking-tight">{{ t('babyMilestones.checkpoints.' + result.bracket) }}</span>
      </div>

      <!-- Domain grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div
          v-for="domain in ['motor', 'language', 'social', 'cognitive']"
          :key="domain"
          :data-testid="'domain-' + domain"
          class="bg-stone-50 rounded-lg p-4"
        >
          <h3 class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('babyMilestones.domains.' + domain) }}</h3>
          <ul class="space-y-2">
            <li
              v-for="m in result[domain]"
              :key="m"
              class="flex items-start gap-2 text-sm text-stone-700 leading-snug"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
              <span>{{ t('babyMilestones.milestones.' + m) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Warnings -->
      <div data-testid="warnings" class="border border-orange-200 bg-orange-50 rounded-lg p-4 mb-6">
        <h3 class="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-2">{{ t('babyMilestones.warningsTitle') }}</h3>
        <p class="text-sm text-orange-800 mb-2">{{ t('babyMilestones.warningsIntro') }}</p>
        <ul class="space-y-1.5">
          <li
            v-for="w in result.warnings"
            :key="w"
            class="flex items-start gap-2 text-sm text-orange-900 leading-snug"
          >
            <span class="text-orange-500 shrink-0">!</span>
            <span>{{ t('babyMilestones.milestones.' + w) }}</span>
          </li>
        </ul>
      </div>

      <!-- Expected size -->
      <div v-if="expectedSize" class="border border-stone-200 rounded-lg p-4">
        <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
          <h3 class="text-xs font-semibold text-stone-500 uppercase tracking-widest">{{ t('babyMilestones.expectedSizeTitle') }}</h3>
          <div class="flex gap-1.5">
            <button
              @click="unit = 'metric'"
              data-testid="unit-metric"
              :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2.5 py-1 rounded text-xs font-medium transition-colors duration-150"
            >{{ t('common.metric') }}</button>
            <button
              @click="unit = 'imperial'"
              data-testid="unit-imperial"
              :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="px-2.5 py-1 rounded text-xs font-medium transition-colors duration-150"
            >{{ t('common.imperial') }}</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div>
            <p class="text-xs text-stone-500">{{ t('babyMilestones.weight') }}</p>
            <p data-testid="expected-weight" class="text-xl font-bold text-stone-900 tabular-nums">{{ displayWeight.value }} {{ displayWeight.unit }}</p>
          </div>
          <div>
            <p class="text-xs text-stone-500">{{ t('babyMilestones.length') }}</p>
            <p data-testid="expected-length" class="text-xl font-bold text-stone-900 tabular-nums">{{ displayLength.value }} {{ displayLength.unit }}</p>
          </div>
        </div>
        <p class="text-xs text-stone-500 mt-3 leading-relaxed">{{ t('babyMilestones.expectedSizeNote') }}</p>
      </div>
    </div>

    <!-- How it works -->
    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('babyMilestones.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('babyMilestones.howItWorksText') }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('babyMilestones.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <BlogArticleLink calculator-key="babyMilestones" />
  </div>
</template>
