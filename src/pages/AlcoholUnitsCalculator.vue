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
  title: t('alcoholUnits.meta.title'),
  description: t('alcoholUnits.meta.description'),
  routeKey: 'alcoholUnits',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Alcohol Unit Calculator',
    url: 'https://healthcalculator.app/alcohol-units',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Pure calculation functions

const GRAMS_PER_UK_UNIT = 8
const KCAL_PER_GRAM_ALCOHOL = 7

function calcUnitsPerDrink(volumeMl, abvPct) {
  return (volumeMl * abvPct) / 1000
}

function calcGramsFromUnits(units) {
  return units * GRAMS_PER_UK_UNIT
}

function calcCaloriesFromGrams(grams) {
  return Math.round(grams * KCAL_PER_GRAM_ALCOHOL)
}

function getRiskLevel(units) {
  if (units === 0) return 'none'
  if (units <= 14) return 'low'
  if (units <= 28) return 'increasing'
  if (units <= 50) return 'high'
  return 'very_high'
}

const GUIDELINE_LIMITS = {
  uk_nhs: { male: 14, female: 14 },
  de_dhs: { male: 21, female: 10.5 },
  us_niaaa: { male: 24.5, female: 12.25 },
}

// State

const sex = ref('male')
const showCost = ref(false)

const DRINK_DEFAULTS = {
  beer:      { volume: 500, abv: 5.0 },
  wine:      { volume: 175, abv: 12.0 },
  spirits:   { volume: 40,  abv: 40.0 },
  cocktails: { volume: 200, abv: 15.0 },
}

const drinks = ref([
  { key: 'beer',      count: 0, volume: 500, abv: 5.0,  cost: 0 },
  { key: 'wine',      count: 0, volume: 175, abv: 12.0, cost: 0 },
  { key: 'spirits',   count: 0, volume: 40,  abv: 40.0, cost: 0 },
  { key: 'cocktails', count: 0, volume: 200, abv: 15.0, cost: 0 },
])

// Computed

const drinkDetails = computed(() =>
  drinks.value.map(d => ({
    ...d,
    units: calcUnitsPerDrink(d.volume, d.abv),
    totalUnits: d.count * calcUnitsPerDrink(d.volume, d.abv),
  }))
)

const totalUnits = computed(() =>
  drinkDetails.value.reduce((sum, d) => sum + d.totalUnits, 0)
)

const totalGrams = computed(() => calcGramsFromUnits(totalUnits.value))

const totalCalories = computed(() => calcCaloriesFromGrams(totalGrams.value))

const totalCost = computed(() => {
  if (!showCost.value) return null
  return drinks.value.reduce((sum, d) => sum + d.count * (d.cost || 0), 0)
})

const riskLevel = computed(() => getRiskLevel(totalUnits.value))

const guidelineStatus = computed(() =>
  ['uk_nhs', 'de_dhs', 'us_niaaa'].map(key => {
    const limit = GUIDELINE_LIMITS[key][sex.value]
    const pct = limit > 0 ? totalUnits.value / limit : 0
    return { key, limit, pct, exceeds: pct > 1 }
  })
)

const riskColors = {
  none:      { bg: 'bg-stone-50',  border: 'border-stone-200', text: 'text-stone-600',  badge: 'bg-stone-100 text-stone-700' },
  low:       { bg: 'bg-green-50',  border: 'border-green-200', text: 'text-green-700',  badge: 'bg-green-100 text-green-800' },
  increasing:{ bg: 'bg-yellow-50', border: 'border-yellow-200',text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800' },
  high:      { bg: 'bg-orange-50', border: 'border-orange-200',text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
  very_high: { bg: 'bg-red-50',    border: 'border-red-200',   text: 'text-red-700',    badge: 'bg-red-100 text-red-800' },
}

function barWidth(pct) {
  return Math.min(pct * 100, 100)
}

function barColor(exceeds) {
  return exceeds ? 'bg-red-500' : 'bg-green-500'
}

function resetDrink(drink) {
  const defaults = DRINK_DEFAULTS[drink.key]
  drink.volume = defaults.volume
  drink.abv = defaults.abv
}
</script>

<template>
  <div>
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-6 inline-block">
      ← {{ t('common.backToAll') }}
    </router-link>

    <h1 class="text-3xl font-bold tracking-tight text-stone-900 mb-2">{{ t('alcoholUnits.title') }}</h1>
    <p class="text-base text-stone-500 leading-relaxed mb-8">{{ t('alcoholUnits.description') }}</p>

    <!-- Sex selector -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">
        {{ t('alcoholUnits.sex') }}
      </label>
      <div class="flex gap-2 w-fit" data-testid="sex-selector">
        <button
          v-for="s in ['male', 'female']"
          :key="s"
          @click="sex = s"
          :class="sex === s ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
          class="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150"
          :data-testid="`sex-${s}`"
        >{{ t(`alcoholUnits.${s}`) }}</button>
      </div>
    </div>

    <!-- Drink inputs -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">
        {{ t('alcoholUnits.drinkTypes') }}
      </h2>

      <div class="space-y-6">
        <div
          v-for="drink in drinks"
          :key="drink.key"
          class="border border-stone-100 rounded-xl p-5"
          :data-testid="`drink-${drink.key}`"
        >
          <div class="flex items-start justify-between mb-4">
            <div>
              <p class="text-sm font-semibold text-stone-900">{{ t(`alcoholUnits.drinkType.${drink.key}`) }}</p>
              <p class="text-xs text-stone-400 mt-0.5">{{ t(`alcoholUnits.drinkDesc.${drink.key}`) }}</p>
            </div>
            <span class="text-xs text-stone-400 tabular-nums mt-0.5" :data-testid="`units-per-drink-${drink.key}`">
              {{ calcUnitsPerDrink(drink.volume, drink.abv).toFixed(1) }} {{ t('alcoholUnits.unitsPerDrink') }}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <!-- Count -->
            <div>
              <label class="block text-xs text-stone-500 mb-1.5">{{ t('alcoholUnits.countLabel') }}</label>
              <input
                v-model.number="drink.count"
                type="number"
                min="0"
                max="100"
                step="1"
                class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 tabular-nums"
                :data-testid="`count-${drink.key}`"
              />
            </div>
            <!-- Volume -->
            <div>
              <label class="block text-xs text-stone-500 mb-1.5">{{ t('alcoholUnits.volumeLabel') }}</label>
              <input
                v-model.number="drink.volume"
                type="number"
                min="1"
                max="2000"
                step="1"
                class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 tabular-nums"
                :data-testid="`volume-${drink.key}`"
              />
            </div>
            <!-- ABV -->
            <div>
              <label class="block text-xs text-stone-500 mb-1.5">{{ t('alcoholUnits.abvLabel') }}</label>
              <input
                v-model.number="drink.abv"
                type="number"
                min="0.1"
                max="100"
                step="0.1"
                class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 tabular-nums"
                :data-testid="`abv-${drink.key}`"
              />
            </div>
            <!-- Cost (optional) -->
            <div v-if="showCost">
              <label class="block text-xs text-stone-500 mb-1.5">{{ t('alcoholUnits.costLabel') }}</label>
              <input
                v-model.number="drink.cost"
                type="number"
                min="0"
                step="0.1"
                class="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 tabular-nums"
                :data-testid="`cost-${drink.key}`"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Cost toggle -->
      <div class="mt-5 pt-5 border-t border-stone-100">
        <button
          @click="showCost = !showCost"
          class="text-sm text-stone-500 hover:text-stone-800 transition-colors"
          data-testid="cost-toggle"
        >
          <span v-if="showCost">− {{ t('alcoholUnits.costToggle') }}</span>
          <span v-else>+ {{ t('alcoholUnits.costToggle') }}</span>
        </button>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Results -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-5">{{ t('alcoholUnits.results') }}</h2>

      <!-- Primary metrics -->
      <div class="grid grid-cols-2 gap-4 mb-5" :class="totalCost !== null ? 'sm:grid-cols-4' : 'sm:grid-cols-3'">
        <div class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 leading-tight">
            {{ t('alcoholUnits.totalUnits') }}
          </p>
          <span
            class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900"
            data-testid="total-units"
          >{{ totalUnits.toFixed(1) }}</span>
        </div>
        <div class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 leading-tight">
            {{ t('alcoholUnits.totalGrams') }}
          </p>
          <span
            class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900"
            data-testid="total-grams"
          >{{ Math.round(totalGrams) }}</span>
          <span class="text-sm text-stone-400 ml-1">g</span>
        </div>
        <div class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 leading-tight">
            {{ t('alcoholUnits.caloriesLabel') }}
          </p>
          <span
            class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900"
            data-testid="total-calories"
          >{{ totalCalories }}</span>
          <span class="text-sm text-stone-400 ml-1">kcal</span>
        </div>
        <div v-if="totalCost !== null" class="bg-stone-50 rounded-xl p-5">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 leading-tight">
            {{ t('alcoholUnits.weeklyCost') }}
          </p>
          <span
            class="text-4xl font-bold tabular-nums tracking-tight leading-none text-stone-900"
            data-testid="total-cost"
          >{{ totalCost.toFixed(2) }}</span>
          <span class="text-sm text-stone-400 ml-1">€</span>
        </div>
      </div>

      <!-- Risk category -->
      <div
        :class="[riskColors[riskLevel].bg, riskColors[riskLevel].border]"
        class="border rounded-xl p-5 mb-5"
        data-testid="risk-category"
      >
        <div class="flex items-center justify-between mb-2">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest">
            {{ t('alcoholUnits.riskCategory') }}
          </p>
          <span
            :class="riskColors[riskLevel].badge"
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            data-testid="risk-badge"
          >{{ t(`alcoholUnits.risk.${riskLevel}`) }}</span>
        </div>
        <p :class="riskColors[riskLevel].text" class="text-sm leading-relaxed">
          {{ t(`alcoholUnits.riskDesc.${riskLevel}`) }}
        </p>
      </div>

      <!-- Guidelines comparison -->
      <div class="mb-1">
        <h3 class="text-sm font-semibold text-stone-900 mb-4">{{ t('alcoholUnits.guidelinesTitle') }}</h3>
        <div class="space-y-4" data-testid="guidelines-comparison">
          <div v-for="g in guidelineStatus" :key="g.key" :data-testid="`guideline-${g.key}`">
            <div class="flex items-center justify-between mb-1.5">
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-stone-900">{{ t(`alcoholUnits.guidelines.${g.key}`) }}</span>
                <span class="text-xs text-stone-400">{{ t(`alcoholUnits.guidelineDesc.${g.key}`) }}</span>
              </div>
              <span
                :class="g.exceeds ? 'text-red-600' : 'text-green-600'"
                class="text-xs font-semibold whitespace-nowrap ml-2"
              >
                <template v-if="!g.exceeds">
                  {{ totalUnits.toFixed(1) }} {{ t('alcoholUnits.of') }} {{ g.limit }} {{ t('alcoholUnits.units') }} ({{ t('alcoholUnits.guidelineWithin') }})
                </template>
                <template v-else>
                  {{ t('alcoholUnits.guidelineExceeds') }} {{ (totalUnits - g.limit).toFixed(1) }} {{ t('alcoholUnits.units') }}
                </template>
              </span>
            </div>
            <div class="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                :class="barColor(g.exceeds)"
                class="h-full rounded-full transition-all duration-300"
                :style="{ width: barWidth(g.pct) + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Health effects -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-5">{{ t('alcoholUnits.healthEffectsTitle') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="effect in ['liver', 'cancer', 'cardiovascular', 'sleep']"
          :key="effect"
          class="bg-stone-50 rounded-xl p-5"
        >
          <p class="text-sm font-semibold text-stone-900 mb-2">{{ t(`alcoholUnits.healthEffects.${effect}`) }}</p>
          <p class="text-xs text-stone-500 leading-relaxed">{{ t(`alcoholUnits.healthEffects.${effect}Desc`) }}</p>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
      <p class="text-xs text-stone-500 leading-relaxed">
        <strong class="text-stone-700">{{ t('alcoholUnits.disclaimerTitle') }}:</strong>
        {{ t('alcoholUnits.disclaimer') }}
      </p>
    </div>

    <BlogArticleLink calculator-key="alcoholUnits" />
    <AdSlot class="mt-8" />
  </div>
</template>
