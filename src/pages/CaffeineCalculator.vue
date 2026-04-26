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
  title: t('caffeine.meta.title'),
  description: t('caffeine.meta.description'),
  routeKey: 'caffeine',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Caffeine Calculator',
    url: 'https://healthcalculator.app/caffeine-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

// Drink database
const DRINKS = {
  coffee:        { mgPerUnit: 95 },
  espresso:      { mgPerUnit: 63 },
  doubleEspresso:{ mgPerUnit: 126 },
  blackTea:      { mgPerUnit: 47 },
  greenTea:      { mgPerUnit: 28 },
  energyDrink:   { mgPerUnit: 80 },
  cola:          { mgPerUnit: 34 },
}

const HALF_LIFE_HOURS = 5
const FDA_LIMIT = 400
const SLEEP_THRESHOLD = 100

function nowTimeString() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

let nextId = 1
const drinks = ref([{ id: nextId++, type: 'coffee', quantity: 1, time: nowTimeString() }])

function addDrink() {
  drinks.value.push({ id: nextId++, type: 'coffee', quantity: 1, time: nowTimeString() })
}

function removeDrink(id) {
  drinks.value = drinks.value.filter(d => d.id !== id)
}

function parseTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number)
  const d = new Date()
  d.setHours(h, m, 0, 0)
  return d
}

function caffeineRemaining(doseMg, consumedAt, now) {
  const hoursElapsed = (now - consumedAt) / (1000 * 60 * 60)
  if (hoursElapsed < 0) return doseMg
  return doseMg * Math.pow(0.5, hoursElapsed / HALF_LIFE_HOURS)
}

const validDrinks = computed(() =>
  drinks.value.filter(d => d.type && d.quantity > 0 && d.time)
)

const hasResults = computed(() => validDrinks.value.length > 0)

const totalCaffeine = computed(() => {
  if (!hasResults.value) return 0
  const now = new Date()
  return validDrinks.value.reduce((sum, d) => {
    const doseMg = DRINKS[d.type].mgPerUnit * d.quantity
    return sum + caffeineRemaining(doseMg, parseTime(d.time), now)
  }, 0)
})

const dailyIntake = computed(() => {
  return validDrinks.value.reduce((sum, d) => {
    return sum + DRINKS[d.type].mgPerUnit * d.quantity
  }, 0)
})

const limitPercent = computed(() => Math.min(Math.round((dailyIntake.value / FDA_LIMIT) * 100), 100))
const overLimit = computed(() => dailyIntake.value > FDA_LIMIT)

const sleepTime = computed(() => {
  const total = totalCaffeine.value
  const now = new Date()
  if (total <= SLEEP_THRESHOLD) return now
  const hoursToSafe = -HALF_LIFE_HOURS * Math.log2(SLEEP_THRESHOLD / total)
  return new Date(now.getTime() + hoursToSafe * 60 * 60 * 1000)
})

const sleepTimeStr = computed(() => {
  const d = sleepTime.value
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
})

// Decay chart: caffeine level at now, +2h, +4h, +6h, +8h
const decayPoints = computed(() => {
  if (!hasResults.value) return []
  const total = totalCaffeine.value
  return [0, 2, 4, 6, 8].map(h => ({
    label: h === 0 ? t('caffeine.now') : `+${h}h`,
    mg: Math.round(total * Math.pow(0.5, h / HALF_LIFE_HOURS)),
  }))
})

const maxDecayMg = computed(() => {
  if (!decayPoints.value.length) return 1
  return Math.max(...decayPoints.value.map(p => p.mg), 1)
})

const drinkKeys = Object.keys(DRINKS)
</script>

<template>
  <div class="mb-10">
    <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('caffeine.title') }}</h1>
    <p class="text-base text-stone-500 font-normal">{{ t('caffeine.description') }}</p>
  </div>

  <!-- Drink inputs -->
  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
    <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">{{ t('caffeine.drinksLabel') }}</p>

    <div class="space-y-3 mb-4">
      <div
        v-for="(drink, index) in drinks"
        :key="drink.id"
        class="flex flex-wrap gap-3 items-end"
      >
        <!-- Drink type -->
        <div class="flex-1 min-w-[160px]">
          <label v-if="index === 0" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caffeine.drinkType') }}</label>
          <select
            v-model="drink.type"
            :data-testid="`drink-type-${index}`"
            class="w-full border border-stone-300 rounded-lg px-3 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          >
            <option v-for="key in drinkKeys" :key="key" :value="key">{{ t(`caffeine.drinks.${key}`) }}</option>
          </select>
        </div>

        <!-- Quantity -->
        <div class="w-24">
          <label v-if="index === 0" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caffeine.quantity') }}</label>
          <input
            v-model.number="drink.quantity"
            type="number"
            min="1"
            max="20"
            :data-testid="`drink-quantity-${index}`"
            class="w-full border border-stone-300 rounded-lg px-3 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <!-- Time -->
        <div class="w-28">
          <label v-if="index === 0" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">{{ t('caffeine.timeOfConsumption') }}</label>
          <input
            v-model="drink.time"
            type="time"
            :data-testid="`drink-time-${index}`"
            class="w-full border border-stone-300 rounded-lg px-3 py-3 text-stone-900 text-sm font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>

        <!-- Remove button -->
        <div :class="index === 0 ? 'mt-6' : ''">
          <button
            v-if="drinks.length > 1"
            @click="removeDrink(drink.id)"
            :data-testid="`remove-drink-${index}`"
            class="px-3 py-3 rounded-lg text-sm font-medium text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-150"
          >✕</button>
        </div>
      </div>
    </div>

    <button
      @click="addDrink"
      data-testid="add-drink"
      class="text-sm font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-4 py-2 rounded-lg transition-colors duration-150"
    >{{ t('caffeine.addDrink') }}</button>
  </div>

  <AffiliateBanner class="my-6" />

  <!-- Results -->
  <div v-if="hasResults" class="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">

    <!-- Main metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('caffeine.currentLevel') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="total-caffeine">{{ Math.round(totalCaffeine) }}</span>
          <span class="text-lg text-stone-400">mg</span>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('caffeine.dailyIntake') }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="daily-intake">{{ dailyIntake }}</span>
          <span class="text-lg text-stone-400">mg</span>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">{{ t('caffeine.sleepTimeLabel') }}</p>
        <span class="text-4xl font-bold text-stone-900 tabular-nums leading-none" data-testid="sleep-time">{{ sleepTimeStr }}</span>
      </div>
    </div>

    <!-- FDA daily limit bar -->
    <div class="mb-6" data-testid="daily-limit-bar">
      <div class="flex items-center justify-between mb-2">
        <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase">{{ t('caffeine.dailyLimit') }}</p>
        <span class="text-sm font-semibold" :class="overLimit ? 'text-red-500' : 'text-emerald-600'">{{ limitPercent }}%</span>
      </div>
      <div class="bg-stone-100 rounded-full overflow-hidden" style="height: 12px">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="overLimit ? 'bg-red-500' : limitPercent > 75 ? 'bg-amber-500' : 'bg-emerald-500'"
          :style="{ width: limitPercent + '%' }"
        />
      </div>
      <p v-if="overLimit" class="text-xs text-red-500 font-medium mt-2" data-testid="limit-warning">{{ t('caffeine.limitWarning') }}</p>
      <p v-else class="text-xs text-stone-400 mt-2">{{ t('caffeine.limitOk') }}</p>
    </div>

    <!-- Decay chart -->
    <div>
      <p class="text-xs font-semibold text-stone-500 tracking-wide uppercase mb-3">{{ t('caffeine.decayTitle') }}</p>
      <p class="text-xs text-stone-400 mb-3">{{ t('caffeine.halflifeNote') }}</p>
      <div class="space-y-2">
        <div v-for="point in decayPoints" :key="point.label" class="flex items-center gap-3">
          <span class="text-xs text-stone-500 w-10 shrink-0 tabular-nums">{{ point.label }}</span>
          <div class="flex-1 bg-stone-100 rounded-full overflow-hidden" style="height: 20px">
            <div
              class="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-300"
              :class="point.mg < SLEEP_THRESHOLD ? 'bg-emerald-500' : 'bg-stone-400'"
              :style="{ width: Math.max((point.mg / maxDecayMg) * 100, 2) + '%' }"
            >
              <span v-if="point.mg > 20" class="text-xs font-semibold text-white tabular-nums">{{ point.mg }}</span>
            </div>
          </div>
          <span v-if="point.mg <= 20" class="text-xs text-stone-400 tabular-nums">{{ point.mg }} mg</span>
        </div>
      </div>
      <div class="flex items-center gap-2 mt-3">
        <span class="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
        <span class="text-xs text-stone-400">{{ `< ${SLEEP_THRESHOLD} mg — safe to sleep` }}</span>
      </div>
    </div>
  </div>

  <AdSlot class="mt-8" />
  <BlogArticleLink calculator-key="caffeine" />
</template>
