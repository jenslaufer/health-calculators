<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '../composables/useHead.js'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'

const { t } = useI18n()
const { localePath } = useLocaleRouter()

useHead(() => ({
  title: t('home.meta.title'),
  description: t('home.meta.description'),
  routeKey: 'home',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t('nav.brand'),
    url: 'https://jenslaufer.github.io/health-calculators/',
    description: t('home.meta.description'),
  },
}))

const groups = computed(() => [
  {
    label: t('home.groups.bodyComposition'),
    items: [
      { name: t('home.calculators.bmi.name'), description: t('home.calculators.bmi.description'), path: localePath('bmi') },
      { name: t('home.calculators.bodyFat.name'), description: t('home.calculators.bodyFat.description'), path: localePath('bodyFat') },
      { name: t('home.calculators.idealWeight.name'), description: t('home.calculators.idealWeight.description'), path: localePath('idealWeight') },
      { name: t('home.calculators.waistHipRatio.name'), description: t('home.calculators.waistHipRatio.description'), path: localePath('waistHipRatio') },
    ],
  },
  {
    label: t('home.groups.nutritionEnergy'),
    items: [
      { name: t('home.calculators.bmr.name'), description: t('home.calculators.bmr.description'), path: localePath('bmr') },
      { name: t('home.calculators.tdee.name'), description: t('home.calculators.tdee.description'), path: localePath('tdee') },
      { name: t('home.calculators.macro.name'), description: t('home.calculators.macro.description'), path: localePath('macro') },
      { name: t('home.calculators.water.name'), description: t('home.calculators.water.description'), path: localePath('water') },
      { name: t('home.calculators.calorieDeficit.name'), description: t('home.calculators.calorieDeficit.description'), path: localePath('calorieDeficit') },
    ],
  },
  {
    label: t('home.groups.fitnessRecovery'),
    items: [
      { name: t('home.calculators.heartRate.name'), description: t('home.calculators.heartRate.description'), path: localePath('heartRate') },
      { name: t('home.calculators.sleep.name'), description: t('home.calculators.sleep.description'), path: localePath('sleep') },
      { name: t('home.calculators.bloodPressure.name'), description: t('home.calculators.bloodPressure.description'), path: localePath('bloodPressure') },
    ],
  },
  {
    label: t('home.groups.pregnancy'),
    items: [
      { name: t('home.calculators.pregnancy.name'), description: t('home.calculators.pregnancy.description'), path: localePath('pregnancy') },
      { name: t('home.calculators.ovulation.name'), description: t('home.calculators.ovulation.description'), path: localePath('ovulation') },
    ],
  },
])
</script>

<template>
  <div>
    <div class="mb-12">
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">{{ t('home.heading') }}</h1>
      <p class="text-base text-stone-500 font-normal leading-relaxed">{{ t('home.subtitle') }}</p>
    </div>

    <div>
      <div v-for="group in groups" :key="group.label" class="mb-10">
        <h2 class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">{{ group.label }}</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link
            v-for="calc in group.items"
            :key="calc.path"
            :to="calc.path"
            class="group block p-8 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-stone-400 hover:shadow-md transition-all duration-200"
          >
            <h2 class="text-base font-semibold text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
              {{ calc.name }}
            </h2>
            <p class="text-sm text-stone-500 leading-relaxed">
              {{ calc.description }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
