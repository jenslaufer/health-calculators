<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import BlogArticleLink from '../components/BlogArticleLink.vue'
import AffiliateBanner from '../components/AffiliateBanner.vue'
import AdSlot from '../components/AdSlot.vue'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calcBmi, getBmiCategory, getBmiBarPosition } from '../composables/useBmi.js'

const { t, tm } = useI18n()
const { localePath } = useLocaleRouter()

const faqItems = computed(() => tm('bmi.faq') || [])

useHead(() => ({
  title: t('bmi.meta.title'),
  description: t('bmi.meta.description'),
  routeKey: 'bmi',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BMI Calculator',
    url: 'https://healthcalculator.app/bmi',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">{{ t('bmi.title') }}</h1>
      <p class="text-base text-stone-500 font-normal">{{ t('bmi.description') }}</p>
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
            :placeholder="unit === 'metric' ? '170' : '67'"
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
            :placeholder="unit === 'metric' ? '70' : '154'"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>
    </div>

    <AffiliateBanner class="my-6" />

    <div v-if="bmi" class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="flex items-baseline gap-3 mb-4">
        <span class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ bmiFormatted }}</span>
        <span :class="category.color" class="text-lg font-semibold">{{ t(category.label) }}</span>
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

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">{{ t('bmi.categories') }}</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-blue-400/8 border border-stone-300"></div>
            <span class="text-sm text-stone-600">{{ t('bmi.underweight') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&lt; 18.5</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            <span class="text-sm text-stone-600">{{ t('bmi.normal') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">18.5 – 24.9</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5 last:border-0">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <span class="text-sm text-stone-600">{{ t('bmi.overweight') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">25.0 – 29.9</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">{{ t('bmi.obese') }}</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&ge; 30.0</span>
        </div>
      </div>
    </div>

    <CalculatorFAQ :questions="faqItems" :title="t('common.faqTitle')" />

    <BlogArticleLink calculator-key="bmi" />

    <AdSlot class="mt-8" />
  </div>
</template>
