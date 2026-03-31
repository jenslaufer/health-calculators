<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('bloodPressure.meta.title'),
  description: t('bloodPressure.meta.description'),
  routeKey: 'bloodPressure',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blutdruck-Rechner',
    url: 'https://jenslaufer.github.io/health-calculators/blutdruck-rechner',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
}))

const systolic = ref(null)
const diastolic = ref(null)

const categories = [
  { key: 'normal', color: 'text-green-600', bg: 'bg-green-600', sysMax: 119, diaMax: 79 },
  { key: 'elevated', color: 'text-yellow-500', bg: 'bg-yellow-500', sysMax: 129, diaMax: 79 },
  { key: 'stage1', color: 'text-orange-500', bg: 'bg-orange-500', sysMax: 139, diaMax: 89 },
  { key: 'stage2', color: 'text-red-500', bg: 'bg-red-500', sysMax: 180, diaMax: 120 },
  { key: 'crisis', color: 'text-red-700', bg: 'bg-red-700', sysMax: Infinity, diaMax: Infinity },
]

const result = computed(() => {
  if (!systolic.value || !diastolic.value) return null
  const sys = systolic.value
  const dia = diastolic.value

  if (sys > 180 || dia > 120) return categories[4]
  if (sys >= 140 || dia >= 90) return categories[3]
  if (sys >= 130 || dia >= 80) return categories[2]
  if (sys >= 120 && dia < 80) return categories[1]
  return categories[0]
})

const recommendationKeys = {
  normal: 'bloodPressure.recNormal',
  elevated: 'bloodPressure.recElevated',
  stage1: 'bloodPressure.recStage1',
  stage2: 'bloodPressure.recStage2',
  crisis: 'bloodPressure.recCrisis',
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link :to="localePath('home')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; {{ t('common.backToAll') }}</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bloodPressure.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bloodPressure.description') }}</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label for="systolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('bloodPressure.systolic') }}
          </label>
          <input id="systolic" v-model.number="systolic" type="number" placeholder="120"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
        <div>
          <label for="diastolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            {{ t('bloodPressure.diastolic') }}
          </label>
          <input id="diastolic" v-model.number="diastolic" type="number" placeholder="80"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150" />
        </div>
      </div>

      <div v-if="result" class="pt-5 border-t border-stone-100">
        <div class="flex items-baseline gap-3 mb-4">
          <span data-testid="systolic-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ systolic }}</span>
          <span class="text-2xl text-stone-400 font-light">/</span>
          <span data-testid="diastolic-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ diastolic }}</span>
          <span class="text-sm text-stone-400 ml-1">mmHg</span>
        </div>
        <p data-testid="category" :class="result.color" class="text-lg font-semibold mb-4">{{ t('bloodPressure.' + result.key) }}</p>

        <div class="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-1.5">
          <div class="absolute inset-0 flex">
            <div class="flex-1 bg-green-600"></div>
            <div class="flex-1 bg-yellow-500"></div>
            <div class="flex-1 bg-orange-500"></div>
            <div class="flex-1 bg-red-500"></div>
            <div class="flex-[0.5] bg-red-700"></div>
          </div>
        </div>
        <div class="flex text-[10px] text-stone-400 tabular-nums mb-6">
          <div class="flex-1">{{ t('bloodPressure.scaleNormal') }}</div>
          <div class="flex-1 text-center">{{ t('bloodPressure.scaleElevated') }}</div>
          <div class="flex-1 text-center">{{ t('bloodPressure.scaleStage1') }}</div>
          <div class="flex-1 text-center">{{ t('bloodPressure.scaleStage2') }}</div>
          <div class="flex-[0.5] text-right">{{ t('bloodPressure.scaleCrisis') }}</div>
        </div>

        <div data-testid="recommendation" class="bg-stone-50 border border-stone-200 rounded-lg p-4">
          <p class="text-sm text-stone-600 leading-relaxed">{{ t(recommendationKeys[result.key]) }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bloodPressure.categoriesTitle') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            <span class="text-sm text-stone-600">{{ t('bloodPressure.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&lt; 120 / &lt; 80</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <span class="text-sm text-stone-600">{{ t('bloodPressure.elevated') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">120–129 / &lt; 80</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">{{ t('bloodPressure.stage1') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">130–139 / 80–89</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('bloodPressure.stage2') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&ge; 140 / &ge; 90</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-700"></div>
            <span class="text-sm text-stone-600">{{ t('bloodPressure.crisis') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&gt; 180 / &gt; 120</span>
        </div>
      </div>
    </div>

    <BlogBanner calculator-key="bloodPressure" />
    <AffiliateBanner />
  </div>
</template>
