<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { adConfig, routeContextMap } from '../ads/config.js'

const props = defineProps({ context: { type: String, default: '' } })
const route = useRoute()
const { locale } = useI18n()

const affiliate = computed(() => {
  const slug = route.path.split('/')[2] || ''
  const ctx = props.context || routeContextMap[slug] || 'default'
  const config = adConfig[ctx] || adConfig.default
  const lang = locale.value === 'de' ? 'de' : 'en'
  return config.affiliate?.[lang] || adConfig.default.affiliate[lang]
})
</script>

<template>
  <div class="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-6" data-testid="affiliate-banner">
    <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">
      {{ locale === 'de' ? 'Anzeige' : 'Ad' }}
    </p>
    <p class="text-sm text-stone-700 mb-3">{{ affiliate.text }}</p>
    <a
      :href="affiliate.url"
      target="_blank"
      rel="noopener sponsored"
      class="inline-block px-4 py-2 bg-stone-800 text-white text-sm font-semibold rounded-lg hover:bg-stone-700 transition-colors"
    >{{ affiliate.cta }}</a>
  </div>
</template>
