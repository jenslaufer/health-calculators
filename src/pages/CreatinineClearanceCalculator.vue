<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { evaluateCreatinineClearance } from '../utils/creatinineClearance.js'
import RelatedCalculators from '../components/RelatedCalculators.vue'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('creatinineClearance.faq') || [])

useHead(() => ({
  title: t('creatinineClearance.meta.title'),
  description: t('creatinineClearance.meta.description'),
  routeKey: 'creatinineClearance',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Creatinine Clearance Calculator',
    url: 'https://healthcalculator.app/creatinine-clearance-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const sex = ref('male')
const age = ref(null)
const weight = ref(null)
const creatinine = ref(null)
const creatinineUnit = ref('mg/dL')

const weightUnit = computed(() => (unit.value === 'metric' ? 'kg' : 'lbs'))

const result = computed(() =>
  evaluateCreatinineClearance({
    age: age.value,
    weight: weight.value,
    weightUnit: weightUnit.value,
    creatinine: creatinine.value,
    creatinineUnit: creatinineUnit.value,
    sex: sex.value,
  }),
)

const interpretation = computed(() => {
  if (!result.value) return null
  const k = result.value.category
  const map = {
    normal: { color: 'text-green-600', bg: 'bg-green-600' },
    mild: { color: 'text-green-500', bg: 'bg-green-500' },
    moderate: { color: 'text-orange-500', bg: 'bg-orange-500' },
    severe: { color: 'text-red-500', bg: 'bg-red-500' },
    kidneyFailure: { color: 'text-red-700', bg: 'bg-red-700' },
  }
  return { key: k, ...map[k] }
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('creatinineClearance.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('creatinineClearance.description') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex gap-2 mb-6">
        <button
          @click="unit = 'metric'"
          :class="unit === 'metric' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('common.metric') }}</button>
        <button
          @click="unit = 'imperial'"
          :class="unit === 'imperial' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        >{{ t('common.imperial') }}</button>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('common.gender') }}</label>
          <div class="flex gap-2">
            <button @click="sex = 'male'" data-testid="sex-male"
              :class="sex === 'male' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('common.male') }}</button>
            <button @click="sex = 'female'" data-testid="sex-female"
              :class="sex === 'female' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
              class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
            >{{ t('common.female') }}</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('creatinineClearance.age') }}</label>
          <input v-model.number="age" type="number" placeholder="40" data-testid="age"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
          </label>
          <input v-model.number="weight" type="number" :placeholder="unit === 'metric' ? '80' : '176'" data-testid="weight"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('creatinineClearance.creatinine') }}</label>
          <div class="flex gap-2">
            <input v-model.number="creatinine" type="number" step="0.01" :placeholder="creatinineUnit === 'mg/dL' ? '1.0' : '88'" data-testid="creatinine"
              class="flex-1 min-w-0 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
            <select v-model="creatinineUnit" data-testid="creatinine-unit"
              class="border border-stone-300 rounded-lg px-3 py-3.5 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600">
              <option value="mg/dL">mg/dL</option>
              <option value="umol/L">µmol/L</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <span
          data-testid="result-status"
          :class="[interpretation.bg, 'text-white text-sm font-semibold px-3 py-1 rounded-full']"
        >{{ t('creatinineClearance.categories.' + interpretation.key) }}</span>
      </div>

      <div class="mb-6">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('creatinineClearance.crClLabel') }}</div>
        <div class="flex items-baseline gap-3">
          <span data-testid="result-crcl" class="text-6xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ result.crcl.toFixed(1) }}</span>
          <span class="text-base text-stone-400">mL/min</span>
        </div>
      </div>

      <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-red-700 via-red-500 via-orange-500 via-green-500 to-green-600 rounded-full" style="width: 100%"></div>
        <div class="absolute top-0 h-full w-0.5 bg-stone-900" :style="{ left: Math.min(result.crcl / 130 * 100, 100) + '%' }"></div>
      </div>

      <div class="border border-stone-200 rounded-lg px-4 py-3 bg-stone-50">
        <p data-testid="result-hint" class="text-sm text-stone-700 leading-relaxed">{{ t('creatinineClearance.hints.' + interpretation.key) }}</p>
      </div>
    </div>

    <div v-else class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p data-testid="incomplete-hint" class="text-sm text-stone-500">{{ t('creatinineClearance.incompleteHint') }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-stone-50 border-b border-stone-200">
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('creatinineClearance.crClRange') }}</th>
            <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('creatinineClearance.classification') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-100">
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 90</td>
            <td class="px-6 py-3 text-stone-600">{{ t('creatinineClearance.categories.normal') }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 – 89</td>
            <td class="px-6 py-3 text-stone-600">{{ t('creatinineClearance.categories.mild') }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30 – 59</td>
            <td class="px-6 py-3 text-stone-600">{{ t('creatinineClearance.categories.moderate') }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 29</td>
            <td class="px-6 py-3 text-stone-600">{{ t('creatinineClearance.categories.severe') }}</td>
          </tr>
          <tr>
            <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 15</td>
            <td class="px-6 py-3 text-stone-600">{{ t('creatinineClearance.categories.kidneyFailure') }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
      <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('creatinineClearance.howItWorks') }}</h2>
      <p class="text-sm text-stone-500 leading-relaxed">{{ t('creatinineClearance.howItWorksText') }}</p>
    </div>

    <div class="bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">{{ t('creatinineClearance.disclaimer') }}</p>
    </div>

    <AdSlot class="mt-8" />
    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
    <RelatedCalculators calc-key="creatinineClearance" class="mt-8" />

    <BlogArticleLink calculator-key="creatinineClearance" />
  </div>
</template>
