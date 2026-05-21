<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { calculatorMetas } from '../discovery.js'

const { localePath, locale } = useLocaleRouter()
const { t } = useI18n()

const props = defineProps({
  calcKey: { type: String, required: true },
})

const related = computed(() => {
  const current = calculatorMetas.find(m => m.key === props.calcKey)
  if (!current) return []
  return calculatorMetas
    .filter(m => m.group === current.group && m.key !== props.calcKey)
    .sort((a, b) => a.key.localeCompare(b.key))
    .slice(0, 4)
})

const heading = computed(() => (locale.value === 'en' ? 'Related Calculators' : 'Verwandte Rechner'))
</script>

<template>
  <div v-if="related.length" data-testid="related-calculators">
    <h2 class="text-2xl font-bold text-stone-900 mb-4">{{ heading }}</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <router-link
        v-for="calc in related"
        :key="calc.key"
        :to="localePath(calc.key)"
        class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
      >
        <h3 class="text-base font-semibold text-stone-900 mb-1">{{ t(`home.calculators.${calc.key}.name`) }}</h3>
        <p class="text-sm text-stone-500 leading-relaxed">{{ t(`home.calculators.${calc.key}.description`) }}</p>
      </router-link>
    </div>
  </div>
</template>
