<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcBreastCancerRisk, riskCategory } from '../utils/breastCancerRisk.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('breastCancerRisk.faq') || [])

useHead(() => ({
  title: t('breastCancerRisk.meta.title'),
  description: t('breastCancerRisk.meta.description'),
  routeKey: 'breastCancerRisk',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Breast Cancer Risk Calculator',
    url: 'https://healthcalculator.app/en/breast-cancer-risk-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const age = ref(null)
const menarcheBracket = ref('14+')
const firstBirthBracket = ref('<20')
const firstDegreeRelatives = ref('0')
const biopsies = ref('0')
const atypicalHyperplasia = ref(false)

const menarcheValue = computed(() => {
  if (menarcheBracket.value === '<12') return 11
  if (menarcheBracket.value === '12-13') return 12
  return 14
})

const firstBirthInputs = computed(() => {
  switch (firstBirthBracket.value) {
    case 'nulliparous': return { nulliparous: true, ageAtFirstBirth: null }
    case '<20': return { nulliparous: false, ageAtFirstBirth: 19 }
    case '20-24': return { nulliparous: false, ageAtFirstBirth: 22 }
    case '25-29': return { nulliparous: false, ageAtFirstBirth: 27 }
    case '30+': return { nulliparous: false, ageAtFirstBirth: 32 }
    default: return { nulliparous: false, ageAtFirstBirth: 19 }
  }
})

const biopsiesNum = computed(() => Number(biopsies.value) || 0)
const relativesNum = computed(() => Number(firstDegreeRelatives.value) || 0)

const result = computed(() => calcBreastCancerRisk({
  age: age.value,
  ageAtMenarche: menarcheValue.value,
  ageAtFirstBirth: firstBirthInputs.value.ageAtFirstBirth,
  nulliparous: firstBirthInputs.value.nulliparous,
  firstDegreeRelatives: relativesNum.value,
  biopsies: biopsiesNum.value,
  atypicalHyperplasia: atypicalHyperplasia.value,
}))

const category = computed(() => result.value ? riskCategory(result.value.fiveYearRisk) : null)

const categoryLabel = computed(() => {
  if (!category.value) return null
  return t(`breastCancerRisk.category${category.value.charAt(0).toUpperCase() + category.value.slice(1)}`)
})

const categoryColor = computed(() => {
  if (!category.value) return ''
  if (category.value === 'low') return 'text-green-600'
  if (category.value === 'average') return 'text-stone-700'
  if (category.value === 'elevated') return 'text-orange-500'
  return 'text-red-600'
})

function pct(v) {
  if (v == null) return '—'
  return (v * 100).toFixed(2) + ' %'
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('breastCancerRisk.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('breastCancerRisk.description') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.age') }}</label>
        <input v-model.number="age" type="number" min="35" max="85" placeholder="50" data-testid="age"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        <p class="text-xs text-stone-400 mt-1">{{ t('breastCancerRisk.ageHelp') }}</p>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.ageAtMenarche') }}</label>
        <select v-model="menarcheBracket" data-testid="menarche"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option value="<12">{{ t('breastCancerRisk.menarcheUnder12') }}</option>
          <option value="12-13">{{ t('breastCancerRisk.menarche1213') }}</option>
          <option value="14+">{{ t('breastCancerRisk.menarche14plus') }}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.firstBirth') }}</label>
        <select v-model="firstBirthBracket" data-testid="first-birth"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option value="nulliparous">{{ t('breastCancerRisk.nulliparous') }}</option>
          <option value="<20">{{ t('breastCancerRisk.firstBirthUnder20') }}</option>
          <option value="20-24">{{ t('breastCancerRisk.firstBirth2024') }}</option>
          <option value="25-29">{{ t('breastCancerRisk.firstBirth2529') }}</option>
          <option value="30+">{{ t('breastCancerRisk.firstBirth30plus') }}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.firstDegreeRelatives') }}</label>
        <select v-model="firstDegreeRelatives" data-testid="relatives"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option value="0">{{ t('breastCancerRisk.relatives0') }}</option>
          <option value="1">{{ t('breastCancerRisk.relatives1') }}</option>
          <option value="2">{{ t('breastCancerRisk.relatives2') }}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.biopsies') }}</label>
        <select v-model="biopsies" data-testid="biopsies"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
          <option value="0">{{ t('breastCancerRisk.biopsies0') }}</option>
          <option value="1">{{ t('breastCancerRisk.biopsies1') }}</option>
          <option value="2">{{ t('breastCancerRisk.biopsies2') }}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('breastCancerRisk.atypicalHyperplasia') }}</label>
        <div class="flex gap-2">
          <button type="button" @click="atypicalHyperplasia = true" data-testid="ah-yes"
            :class="atypicalHyperplasia === true ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('breastCancerRisk.ahYes') }}</button>
          <button type="button" @click="atypicalHyperplasia = false" data-testid="ah-no"
            :class="atypicalHyperplasia === false ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150"
          >{{ t('breastCancerRisk.ahNo') }}</button>
        </div>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <div v-if="result" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <div class="flex items-baseline gap-3 mb-4">
      <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none" data-testid="five-year-risk">{{ pct(result.fiveYearRisk) }}</span>
      <span :class="categoryColor" class="text-lg font-semibold" data-testid="risk-category">{{ categoryLabel }}</span>
    </div>

    <div v-if="result.elevated" class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4" data-testid="elevated-hint">
      <p class="text-sm text-orange-800 font-medium">{{ t('breastCancerRisk.elevatedHint') }}</p>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('breastCancerRisk.averageRisk') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="average-risk">{{ pct(result.averageFiveYearRisk) }}</p>
      </div>
      <div class="bg-stone-50 rounded-lg p-4">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">{{ t('breastCancerRisk.relativeRisk') }}</p>
        <p class="text-lg font-bold text-stone-900 tabular-nums" data-testid="relative-risk">{{ result.relativeRisk.toFixed(2) }} &times;</p>
      </div>
    </div>

    <p class="text-xs text-stone-500 leading-relaxed">{{ t('breastCancerRisk.disclaimer') }}</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-stone-50 border-b border-stone-200">
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('breastCancerRisk.factor') }}</th>
          <th class="text-left px-6 py-3 font-semibold text-stone-700">{{ t('breastCancerRisk.effect') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-100">
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastCancerRisk.ageAtMenarche') }}</td><td class="px-6 py-3 text-stone-600">{{ t('breastCancerRisk.effectMenarcheEarly') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastCancerRisk.firstDegreeRelatives') }}</td><td class="px-6 py-3 text-stone-600">{{ t('breastCancerRisk.effectFamily') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastCancerRisk.atypicalHyperplasia') }}</td><td class="px-6 py-3 text-stone-600">{{ t('breastCancerRisk.effectAH') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastCancerRisk.firstBirth') }}</td><td class="px-6 py-3 text-stone-600">{{ t('breastCancerRisk.effectFirstBirth') }}</td></tr>
        <tr><td class="px-6 py-3 text-stone-900 font-medium">{{ t('breastCancerRisk.age') }}</td><td class="px-6 py-3 text-stone-600">{{ t('breastCancerRisk.effectAge') }}</td></tr>
      </tbody>
    </table>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <h2 class="text-base font-semibold text-stone-900 mb-3">{{ t('breastCancerRisk.howItWorks') }}</h2>
    <p class="text-sm text-stone-500 leading-relaxed">{{ t('breastCancerRisk.howItWorksText') }}</p>
  </div>

  <AdSlot class="mt-8" />
  <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />
  <BlogArticleLink calculator-key="breastCancerRisk" />
</template>
