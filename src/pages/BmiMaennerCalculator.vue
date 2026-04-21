<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import { calcBmi, getBmiCategory, getBmiBarPosition } from '../composables/useBmi.js'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import AdSlot from '../components/AdSlot.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('bmiMaenner.faq') || [])

useHead(() => ({
  title: t('bmiMaenner.meta.title'),
  description: t('bmiMaenner.meta.description'),
  routeKey: 'bmiMaenner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('bmiMaenner.title'),
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
}))

const height = ref(null)
const weight = ref(null)
const unit = ref('metric')

const bmi = computed(() => calcBmi(weight.value, height.value, unit.value))
const category = computed(() => getBmiCategory(bmi.value))
const bmiFormatted = computed(() => bmi.value?.toFixed(1))
const barPosition = computed(() => getBmiBarPosition(bmi.value))
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bmiMaenner.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bmiMaenner.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
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
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.height', { unit: t('common.' + (unit === 'metric' ? 'cm' : 'inches')) }) }}
          </label>
          <input
            v-model.number="height"
            type="number"
            data-testid="height-input"
            :placeholder="unit === 'metric' ? '180' : '71'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('common.weight', { unit: t('common.' + (unit === 'metric' ? 'kg' : 'lbs')) }) }}
          </label>
          <input
            v-model.number="weight"
            type="number"
            data-testid="weight-input"
            :placeholder="unit === 'metric' ? '80' : '176'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <div v-if="bmi" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex items-baseline gap-3 mb-4">
        <span data-testid="bmi-result" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ bmiFormatted }}</span>
        <span data-testid="bmi-category" :class="category.color" class="text-lg font-semibold">{{ t(category.label) }}</span>
      </div>

      <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-1.5">
        <div class="absolute inset-0 flex">
          <div class="flex-1 bg-blue-400/8"></div>
          <div class="flex-1 bg-green-600"></div>
          <div class="flex-1 bg-yellow-500"></div>
          <div class="flex-1 bg-red-500"></div>
        </div>
        <div
          class="absolute top-0 w-1 h-full bg-stone-900 rounded-full transform"
          :style="{ left: barPosition + '%' }"
        ></div>
      </div>
      <div class="flex text-[10px] text-stone-400 tabular-nums">
        <div class="flex-1">18.5</div>
        <div class="flex-1 text-center">25</div>
        <div class="flex-1 text-center">30</div>
        <div class="flex-1 text-right">40</div>
      </div>
    </div>

    <div data-testid="bmi-categories-table" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bmi.categories') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-start justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-blue-400/8 border border-stone-300 flex-shrink-0 mt-0.5"></div>
            <div>
              <span class="text-sm text-stone-600">{{ t('bmi.underweight') }}</span>
              <p class="text-xs text-stone-400 mt-0.5">Erhöhtes Risiko für Muskelverlust und Immunschwäche</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums ml-4 flex-shrink-0">&lt; 18.5</span>
        </div>
        <div class="flex items-start justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-green-600 flex-shrink-0 mt-0.5"></div>
            <div>
              <span class="text-sm text-stone-600">{{ t('bmi.normal') }}</span>
              <p class="text-xs text-stone-400 mt-0.5">Gilt für erwachsene Männer bis 65 Jahre (DGE)</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums ml-4 flex-shrink-0">18.5 – 24.9</span>
        </div>
        <div class="flex items-start justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500 flex-shrink-0 mt-0.5"></div>
            <div>
              <span class="text-sm text-stone-600">{{ t('bmi.overweight') }}</span>
              <p class="text-xs text-stone-400 mt-0.5">Bei hoher Muskelmasse nicht zwangsläufig gesundheitlich riskant</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums ml-4 flex-shrink-0">25.0 – 29.9</span>
        </div>
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></div>
            <div>
              <span class="text-sm text-stone-600">{{ t('bmi.obese') }}</span>
              <p class="text-xs text-stone-400 mt-0.5">Deutlich erhöhtes kardiovaskuläres und metabolisches Risiko</p>
            </div>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums ml-4 flex-shrink-0">&ge; 30.0</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('bmiMaenner.contentHeading') }}</h2>
      <div class="space-y-4 text-sm text-stone-600 leading-relaxed">
        <p v-for="(para, i) in t('bmiMaenner.content').split('\n\n')" :key="i">{{ para }}</p>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ t('bmiMaenner.relatedTitle') }}</h2>
      <div class="grid gap-3 sm:grid-cols-3">
        <router-link
          data-testid="link-bmi"
          :to="localePath('bmi')"
          class="block p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <div class="text-sm font-semibold text-stone-900 mb-1">BMI-Rechner</div>
          <div class="text-xs text-stone-500">Allgemeiner Body-Mass-Index</div>
        </router-link>
        <router-link
          data-testid="link-whr"
          :to="localePath('waistHipRatio')"
          class="block p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <div class="text-sm font-semibold text-stone-900 mb-1">Taille-Hüft-Verhältnis</div>
          <div class="text-xs text-stone-500">WHO-Risikobewertung</div>
        </router-link>
        <router-link
          data-testid="link-bodyfat"
          :to="localePath('bodyFat')"
          class="block p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <div class="text-sm font-semibold text-stone-900 mb-1">Körperfett-Rechner</div>
          <div class="text-xs text-stone-500">US-Navy-Methode</div>
        </router-link>
      </div>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <AdSlot class="mt-8" />
  </div>
</template>
