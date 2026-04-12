<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bsa.meta.title'),
  description: t('bsa.meta.description'),
  routeKey: 'bsa',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Body Surface Area Calculator',
    url: 'https://healthcalculator.app/body-surface-area-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const unit = ref('metric')
const formula = ref('dubois')

const heightCm = ref(null)
const weightKg = ref(null)
const heightFt = ref(null)
const heightIn = ref(null)
const weightLbs = ref(null)

const effectiveHeightCm = computed(() => {
  if (unit.value === 'metric') return heightCm.value
  const ft = heightFt.value || 0
  const inches = heightIn.value || 0
  if (ft === 0 && inches === 0) return null
  return (ft * 12 + inches) * 2.54
})

const effectiveWeightKg = computed(() => {
  if (unit.value === 'metric') return weightKg.value
  if (!weightLbs.value) return null
  return weightLbs.value * 0.453592
})

function dubois(h, w) {
  return 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425)
}

function mosteller(h, w) {
  return Math.sqrt((h * w) / 3600)
}

function haycock(h, w) {
  return 0.024265 * Math.pow(h, 0.3964) * Math.pow(w, 0.5378)
}

function boyd(h, w) {
  const wg = w * 1000
  return 0.0003207 * Math.pow(h, 0.3) * Math.pow(wg, 0.7285 - 0.0188 * Math.log10(wg))
}

const formulaFns = { dubois, mosteller, haycock, boyd }
const formulaKeys = ['dubois', 'mosteller', 'haycock', 'boyd']

const hasInputs = computed(() => {
  const h = effectiveHeightCm.value
  const w = effectiveWeightKg.value
  return h && w && h > 0 && w > 0
})

const bsa = computed(() => {
  if (!hasInputs.value) return null
  return formulaFns[formula.value](effectiveHeightCm.value, effectiveWeightKg.value)
})

const allBsa = computed(() => {
  if (!hasInputs.value) return null
  const h = effectiveHeightCm.value
  const w = effectiveWeightKg.value
  return {
    dubois: dubois(h, w),
    mosteller: mosteller(h, w),
    haycock: haycock(h, w),
    boyd: boyd(h, w),
  }
})
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bsa.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bsa.description') }}</p>
    </div>

    <!-- Inputs -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <!-- Unit toggle -->
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

      <!-- Height + Weight -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <!-- Metric height -->
        <div v-if="unit === 'metric'">
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.height', { unit: t('common.cm') }) }}
          </label>
          <input
            v-model.number="heightCm"
            data-testid="input-height-cm"
            type="number"
            placeholder="170"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <!-- Imperial height: ft + in -->
        <div v-else>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('bsa.heightFt') }}
          </label>
          <div class="flex gap-2">
            <input
              v-model.number="heightFt"
              data-testid="input-height-ft"
              type="number"
              placeholder="5"
              class="w-1/2 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
            <input
              v-model.number="heightIn"
              data-testid="input-height-in"
              type="number"
              placeholder="7"
              :title="t('bsa.heightIn')"
              class="w-1/2 border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
            />
          </div>
          <div class="flex text-[10px] text-stone-400 mt-1 gap-2">
            <span class="w-1/2 pl-1">ft</span>
            <span class="w-1/2 pl-1">in</span>
          </div>
        </div>

        <!-- Weight -->
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
          </label>
          <input
            v-if="unit === 'metric'"
            v-model.number="weightKg"
            data-testid="input-weight-kg"
            type="number"
            placeholder="70"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
          <input
            v-else
            v-model.number="weightLbs"
            data-testid="input-weight-lbs"
            type="number"
            placeholder="154"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <!-- Formula selector -->
      <div>
        <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
          {{ t('bsa.formula') }}
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="key in formulaKeys"
            :key="key"
            @click="formula = key"
            :class="formula === key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            :data-testid="`btn-formula-${key}`"
          >{{ t(`bsa.formula${key.charAt(0).toUpperCase() + key.slice(1)}`) }}</button>
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <!-- Result -->
    <div v-if="bsa" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex items-baseline gap-3 mb-6">
        <span data-testid="bsa-result" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ bsa.toFixed(2) }}</span>
        <span class="text-2xl font-light text-stone-500">m²</span>
        <span class="text-sm font-medium text-stone-400 ml-1">{{ t(`bsa.formula${formula.charAt(0).toUpperCase() + formula.slice(1)}`) }}</span>
      </div>

      <!-- Formula comparison table -->
      <div class="border-t border-stone-100 pt-6" v-if="allBsa">
        <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{{ t('bsa.comparison') }}</div>
        <div class="space-y-2.5">
          <div
            v-for="key in formulaKeys"
            :key="key"
            class="flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors"
            :class="formula === key ? 'bg-stone-900 text-white' : 'bg-stone-50'"
          >
            <span class="text-sm font-medium" :class="formula === key ? 'text-white' : 'text-stone-700'">
              {{ t(`bsa.formula${key.charAt(0).toUpperCase() + key.slice(1)}`) }}
              <span v-if="formula === key" class="ml-2 text-[10px] font-semibold uppercase tracking-widest opacity-60">{{ t('bsa.selectedLabel') }}</span>
            </span>
            <span class="text-sm font-bold tabular-nums" :class="formula === key ? 'text-white' : 'text-stone-900'">
              {{ allBsa[key].toFixed(2) }} m²
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Medical context -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('bsa.contextTitle') }}</h2>
      <div class="space-y-4">
        <div class="border-b border-stone-100 pb-4">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('bsa.contextDrug') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('bsa.contextDrugText') }}</p>
        </div>
        <div class="border-b border-stone-100 pb-4">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('bsa.contextBurn') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('bsa.contextBurnText') }}</p>
        </div>
        <div>
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t('bsa.contextRenal') }}</div>
          <p class="text-sm text-stone-500 leading-relaxed">{{ t('bsa.contextRenalText') }}</p>
        </div>
      </div>
    </div>

    <!-- Normal range + formula reference -->
    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bsa.formulaInfo') }}</h2>
      <div class="space-y-3.5">
        <div v-for="key in formulaKeys" :key="key" class="border-b border-stone-100 pb-3.5 last:border-0">
          <div class="text-sm font-semibold text-stone-800 mb-1">{{ t(`bsa.formula${key.charAt(0).toUpperCase() + key.slice(1)}`) }}</div>
          <p class="text-sm text-stone-500">{{ t(`bsa.formula${key.charAt(0).toUpperCase() + key.slice(1)}Desc`) }}</p>
        </div>
      </div>
    </div>

    <BlogBanner calculator-key="bsa" />
    <AdSlot class="mt-8" />
  </div>
</template>
