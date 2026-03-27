<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

useHead({
  title: 'Kaloriendefizit-Rechner — Tägliches Kalorienziel berechnen',
  description: 'Berechne dein tägliches Kalorienziel zum Abnehmen. Mifflin-St Jeor-Formel, individuelles Defizit und Sicherheitswarnungen.',
  path: '/kaloriendefizit-rechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kaloriendefizit-Rechner',
    url: 'https://jenslaufer.github.io/health-calculators/kaloriendefizit-rechner',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const gender = ref('male')
const age = ref('')
const height = ref('')
const weight = ref('')
const targetWeight = ref('')
const weeks = ref('')
const activityLevel = ref('1.55')

const activityOptions = [
  { label: 'Sitzend (Bürojob, wenig Bewegung)', value: '1.2' },
  { label: 'Leicht aktiv (1–3 Tage/Woche)', value: '1.375' },
  { label: 'Moderat aktiv (3–5 Tage/Woche)', value: '1.55' },
  { label: 'Sehr aktiv (6–7 Tage/Woche)', value: '1.725' },
  { label: 'Extrem aktiv (Athlet/körperliche Arbeit)', value: '1.9' },
]

const KCAL_PER_KG = 7700

const bmr = computed(() => {
  const a = parseFloat(age.value)
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null
  const base = 10 * w + 6.25 * h - 5 * a - 161
  return gender.value === 'male' ? base + 166 : base
})

const tdee = computed(() => {
  if (!bmr.value) return null
  return bmr.value * parseFloat(activityLevel.value)
})

const weightToLose = computed(() => {
  const w = parseFloat(weight.value)
  const tw = parseFloat(targetWeight.value)
  if (!w || !tw || tw <= 0 || w <= 0 || tw >= w) return null
  return w - tw
})

const totalDays = computed(() => {
  const w = parseFloat(weeks.value)
  if (!w || w <= 0) return null
  return w * 7
})

const dailyDeficit = computed(() => {
  if (!weightToLose.value || !totalDays.value) return null
  return (weightToLose.value * KCAL_PER_KG) / totalDays.value
})

const dailyCalories = computed(() => {
  if (!tdee.value || !dailyDeficit.value) return null
  return tdee.value - dailyDeficit.value
})

const weeklyLoss = computed(() => {
  if (!weightToLose.value || !weeks.value) return null
  return weightToLose.value / parseFloat(weeks.value)
})

const isUnsafe = computed(() => dailyCalories.value !== null && dailyCalories.value < 1200)
const isAggressive = computed(() => weeklyLoss.value !== null && weeklyLoss.value > 1)

const hasResult = computed(() => dailyCalories.value !== null)

const formatNumber = (n) => Math.round(n).toLocaleString()
</script>

<template>
  <div class="mb-10">
    <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
    <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Kaloriendefizit-Rechner</h1>
    <p class="text-base text-stone-500 font-normal">Berechne dein tägliches Kalorienziel zum Abnehmen — basierend auf der Mifflin-St Jeor-Formel.</p>
  </div>

  <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
    <!-- Gender Toggle -->
    <div class="flex gap-2 mb-6">
      <button
        v-for="g in [{ key: 'male', label: 'Mann' }, { key: 'female', label: 'Frau' }]"
        :key="g.key"
        @click="gender = g.key"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="gender === g.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
      >
        {{ g.label }}
      </button>
    </div>

    <!-- Body inputs -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label for="age" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Alter</label>
        <input id="age" v-model="age" type="number" placeholder="30"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="height" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Größe (cm)</label>
        <input id="height" v-model="height" type="number" placeholder="175"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Gewicht (kg)</label>
        <input id="weight" v-model="weight" type="number" placeholder="80"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Goal inputs -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label for="targetWeight" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Zielgewicht (kg)</label>
        <input id="targetWeight" v-model="targetWeight" type="number" placeholder="70"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
      <div>
        <label for="weeks" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Zeitraum (Wochen)</label>
        <input id="weeks" v-model="weeks" type="number" placeholder="12"
          class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
      </div>
    </div>

    <!-- Activity Level -->
    <div class="mb-6">
      <label for="activity" class="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">Aktivitätslevel</label>
      <select id="activity" v-model="activityLevel"
        class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150">
        <option v-for="opt in activityOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
      </select>
    </div>

    <!-- Results -->
    <div v-if="hasResult" class="text-center py-6 border-t border-stone-100">
      <div class="text-5xl font-bold text-stone-900 tabular-nums" data-testid="daily-calories">{{ formatNumber(dailyCalories) }}</div>
      <div class="text-sm text-stone-500 mt-1">kcal / Tag — dein Ziel</div>

      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">TDEE</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1">{{ formatNumber(tdee) }}</div>
          <div class="text-xs text-stone-400">kcal / Tag</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">Tägliches Defizit</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1" data-testid="daily-deficit">{{ formatNumber(dailyDeficit) }}</div>
          <div class="text-xs text-stone-400">kcal</div>
        </div>
        <div class="bg-stone-50 rounded-lg p-4">
          <div class="text-xs font-semibold text-stone-500 tracking-wide uppercase">Abnahme / Woche</div>
          <div class="text-lg font-bold text-stone-900 tabular-nums mt-1" data-testid="weekly-loss">{{ weeklyLoss.toFixed(2) }} kg</div>
          <div class="text-xs text-stone-400">pro Woche</div>
        </div>
      </div>

      <!-- Warnings -->
      <div v-if="isUnsafe" class="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700" data-testid="warning-unsafe">
        Dein Kalorienziel liegt unter 1.200 kcal/Tag. Das ist gesundheitlich bedenklich — bitte sprich mit einem Arzt.
      </div>
      <div v-if="isAggressive" class="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700" data-testid="warning-aggressive">
        Du planst mehr als 1 kg pro Woche abzunehmen. Ein langsameres Tempo ist nachhaltiger und gesünder.
      </div>
    </div>
  </div>

  <BlogBanner calculator-path="/kaloriendefizit-rechner" />
</template>
