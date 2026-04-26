<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('smokingCost.meta.title'),
  description: t('smokingCost.meta.description'),
  routeKey: 'smokingCost',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Smoking Cost Calculator',
    url: 'https://healthcalculator.app/smoking-cost-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
}))

const cigarettesPerDay = ref(null)
const pricePerPack = ref(null)
const packSize = ref(20)
const currency = ref('EUR')

const CURRENCY_SYMBOLS = { EUR: '€', USD: '$', GBP: '£' }
const currencySymbol = computed(() => CURRENCY_SYMBOLS[currency.value] || '€')

const dailyCost = computed(() => {
  if (!cigarettesPerDay.value || !pricePerPack.value) return null
  if (cigarettesPerDay.value <= 0 || pricePerPack.value <= 0) return null
  const ps = packSize.value > 0 ? packSize.value : 20
  return (cigarettesPerDay.value / ps) * pricePerPack.value
})

const weeklyCost = computed(() => dailyCost.value !== null ? dailyCost.value * 7 : null)
const monthlyCost = computed(() => dailyCost.value !== null ? dailyCost.value * 30.44 : null)
const yearlyCost = computed(() => dailyCost.value !== null ? dailyCost.value * 365 : null)

// Future value of annuity: monthly contributions at given annual rate
function futureValueAnnuity(monthlyPayment, annualRate, years) {
  const r = annualRate / 12
  const n = years * 12
  return monthlyPayment * ((Math.pow(1 + r, n) - 1) / r)
}

const fiveYearSavings = computed(() => yearlyCost.value !== null ? yearlyCost.value * 5 : null)
const tenYearSavings = computed(() => yearlyCost.value !== null ? yearlyCost.value * 10 : null)
const fiveYearInvestment = computed(() =>
  monthlyCost.value !== null ? futureValueAnnuity(monthlyCost.value, 0.07, 5) : null
)
const tenYearInvestment = computed(() =>
  monthlyCost.value !== null ? futureValueAnnuity(monthlyCost.value, 0.07, 10) : null
)

const hasResults = computed(() => dailyCost.value !== null)

// "What you could buy" examples keyed to their approximate EUR cost
const WHAT_TO_BUY = [
  { key: 'vacation', cost: 1500 },
  { key: 'smartphone', cost: 1000 },
  { key: 'laptop', cost: 900 },
  { key: 'ebike', cost: 1800 },
  { key: 'gym', cost: 360 },
  { key: 'streaming', cost: 144 },
]

const affordableItems = computed(() => {
  if (!yearlyCost.value) return []
  return WHAT_TO_BUY.filter(item => yearlyCost.value >= item.cost).map(item => ({
    key: item.key,
    count: Math.floor(yearlyCost.value / item.cost),
  }))
})

function fmt(value) {
  if (value === null || value === undefined) return '—'
  return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('smokingCost.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('smokingCost.description') }}</p>
  </div>

  <!-- Inputs -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('smokingCost.inputsLabel') }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <!-- Cigarettes per day -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('smokingCost.cigarettesPerDay') }}</label>
        <input
          v-model.number="cigarettesPerDay"
          type="number"
          min="1"
          max="100"
          placeholder="20"
          data-testid="cigarettes-per-day"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <!-- Price per pack -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('smokingCost.pricePerPack') }}</label>
        <input
          v-model.number="pricePerPack"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="7.00"
          data-testid="price-per-pack"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <!-- Pack size -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('smokingCost.packSize') }}</label>
        <input
          v-model.number="packSize"
          type="number"
          min="1"
          max="40"
          placeholder="20"
          data-testid="pack-size"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        />
      </div>

      <!-- Currency -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('smokingCost.currency') }}</label>
        <select
          v-model="currency"
          data-testid="currency"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
        >
          <option value="EUR">EUR (€)</option>
          <option value="USD">USD ($)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>
    </div>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('smokingCost.costsLabel') }}</p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-2">
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('smokingCost.daily') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-stone-900 tabular-nums leading-none" data-testid="daily-cost">{{ fmt(dailyCost) }}</span>
          <span class="text-base text-stone-400">{{ currencySymbol }}</span>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('smokingCost.weekly') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-stone-900 tabular-nums leading-none" data-testid="weekly-cost">{{ fmt(weeklyCost) }}</span>
          <span class="text-base text-stone-400">{{ currencySymbol }}</span>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('smokingCost.monthly') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-stone-900 tabular-nums leading-none" data-testid="monthly-cost">{{ fmt(monthlyCost) }}</span>
          <span class="text-base text-stone-400">{{ currencySymbol }}</span>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('smokingCost.yearly') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-red-500 tabular-nums leading-none" data-testid="yearly-cost">{{ fmt(yearlyCost) }}</span>
          <span class="text-base text-stone-400">{{ currencySymbol }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Long-term & investment comparison -->
  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">{{ t('smokingCost.longTermLabel') }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <!-- 5 years -->
      <div class="bg-stone-50 rounded-xl p-6">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('smokingCost.fiveYears') }}</p>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm text-stone-500">{{ t('smokingCost.spent') }}</span>
            <span class="text-lg font-bold text-red-500 tabular-nums" data-testid="five-year-savings">{{ fmt(fiveYearSavings) }} {{ currencySymbol }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-stone-500">{{ t('smokingCost.investedAt7') }}</span>
            <span class="text-lg font-bold text-emerald-600 tabular-nums" data-testid="five-year-investment">{{ fmt(fiveYearInvestment) }} {{ currencySymbol }}</span>
          </div>
        </div>
      </div>

      <!-- 10 years -->
      <div class="bg-stone-50 rounded-xl p-6">
        <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('smokingCost.tenYears') }}</p>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm text-stone-500">{{ t('smokingCost.spent') }}</span>
            <span class="text-lg font-bold text-red-500 tabular-nums" data-testid="ten-year-savings">{{ fmt(tenYearSavings) }} {{ currencySymbol }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-stone-500">{{ t('smokingCost.investedAt7') }}</span>
            <span class="text-lg font-bold text-emerald-600 tabular-nums" data-testid="ten-year-investment">{{ fmt(tenYearInvestment) }} {{ currencySymbol }}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="text-xs text-stone-400 mt-4">{{ t('smokingCost.investmentNote') }}</p>
  </div>

  <!-- What you could buy instead -->
  <div v-if="hasResults && affordableItems.length > 0" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('smokingCost.couldBuyLabel') }}</p>
    <p class="text-sm text-stone-400 mb-6">{{ t('smokingCost.couldBuySubtitle') }}</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div
        v-for="item in affordableItems"
        :key="item.key"
        class="bg-stone-50 rounded-xl p-4 text-center"
      >
        <p class="text-2xl mb-2">{{ t(`smokingCost.examples.${item.key}.emoji`) }}</p>
        <p class="text-sm font-semibold text-stone-700">{{ t(`smokingCost.examples.${item.key}.label`) }}</p>
        <p v-if="item.count > 1" class="text-xs text-stone-400 mt-1">{{ item.count }}×</p>
      </div>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <BlogArticleLink calculator-key="smokingCost" />
</template>
