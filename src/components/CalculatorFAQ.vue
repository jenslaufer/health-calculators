<script setup>
import { computed, h } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
  title: { type: String, default: '' },
})

const jsonLd = computed(() => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  return JSON.stringify(data).replace(/</g, '\\u003c')
})

// Render <script> via render function to bypass Vue's template parser,
// keeping the JSON-LD inline in the SSR-emitted HTML.
const FaqJsonLd = (p) => h('script', { type: 'application/ld+json', innerHTML: p.data })
FaqJsonLd.props = ['data']
</script>

<template>
  <section
    v-if="questions.length"
    class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mt-6"
    data-testid="calculator-faq"
  >
    <h2 class="text-lg font-semibold text-stone-900 mb-4">{{ title }}</h2>
    <div class="space-y-3">
      <details
        v-for="(item, i) in questions"
        :key="i"
        class="group border-b border-stone-100 pb-3 last:border-0"
      >
        <summary class="font-medium text-stone-800 cursor-pointer text-sm py-1 list-none flex items-start justify-between gap-3">
          <span>{{ item.q }}</span>
          <span class="text-stone-400 text-xs mt-1 transition-transform group-open:rotate-45">+</span>
        </summary>
        <div class="mt-2 text-sm text-stone-600 leading-relaxed">{{ item.a }}</div>
      </details>
    </div>
    <FaqJsonLd :data="jsonLd" />
  </section>
</template>
