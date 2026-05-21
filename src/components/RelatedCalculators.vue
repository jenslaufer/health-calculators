<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRouter } from '../composables/useLocaleRouter.js'
import { getRelatedCalculators } from '../discovery.js'

const { localePath, locale } = useLocaleRouter()
const { t } = useI18n()

const props = defineProps({
  calcKey: { type: String, required: true },
})

const related = computed(() => getRelatedCalculators(props.calcKey))
const heading = computed(() => locale.value === 'de' ? 'Verwandte Rechner' : 'Related Calculators')
const cta = computed(() => locale.value === 'de' ? 'Berechnen' : 'Calculate')
</script>

<template>
  <div v-if="related.length" class="mt-10" data-testid="related-calculators">
    <h2 class="text-2xl font-bold text-stone-900 mb-4">{{ heading }}</h2>
    <div class="space-y-4">
      <router-link
        v-for="meta in related"
        :key="meta.key"
        :to="localePath(meta.key)"
        class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
      >
        <h3 class="text-base font-semibold text-stone-900 mb-1">{{ t(`${meta.key}.meta.title`, meta.key) }}</h3>
        <span class="text-sm font-medium text-stone-900 mt-2 inline-block">{{ cta }} &rarr;</span>
      </router-link>
    </div>
  </div>
</template>
