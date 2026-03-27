<script setup>
import { ref, computed } from 'vue'
import { useHead } from '../composables/useHead.js'
import BlogBanner from '../components/BlogBanner.vue'

useHead({
  title: 'Blutdruck-Rechner — Blutdruckwerte einordnen | Health Calculators',
  description: 'Blutdruckwerte eingeben und sofort die Kategorie erfahren: Normal, Erhöht, Grad 1, Grad 2 oder Krise. Kostenlos und ohne Anmeldung.',
  path: '/blutdruck-rechner',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blutdruck-Rechner',
    url: 'https://jenslaufer.github.io/health-calculators/blutdruck-rechner',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
})

const systolic = ref(null)
const diastolic = ref(null)

const categories = [
  { label: 'Normal', color: 'text-green-600', bg: 'bg-green-600', sysMax: 119, diaMax: 79 },
  { label: 'Erhöht', color: 'text-yellow-500', bg: 'bg-yellow-500', sysMax: 129, diaMax: 79 },
  { label: 'Bluthochdruck Grad 1', color: 'text-orange-500', bg: 'bg-orange-500', sysMax: 139, diaMax: 89 },
  { label: 'Bluthochdruck Grad 2', color: 'text-red-500', bg: 'bg-red-500', sysMax: 180, diaMax: 120 },
  { label: 'Hypertensive Krise', color: 'text-red-700', bg: 'bg-red-700', sysMax: Infinity, diaMax: Infinity },
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

const recommendations = {
  'Normal': 'Ihre Blutdruckwerte sind optimal. Halten Sie Ihren gesunden Lebensstil bei: ausgewogene Ernährung, regelmäßige Bewegung und ausreichend Schlaf.',
  'Erhöht': 'Ihre Werte sind leicht erhöht. Reduzieren Sie Salzkonsum, bewegen Sie sich regelmäßig und kontrollieren Sie Ihren Blutdruck regelmäßig.',
  'Bluthochdruck Grad 1': 'Sprechen Sie mit Ihrem Arzt über Lebensstiländerungen und mögliche Behandlung. Regelmäßige Kontrolle ist wichtig.',
  'Bluthochdruck Grad 2': 'Suchen Sie zeitnah Ihren Arzt auf. Bluthochdruck Grad 2 erfordert in der Regel eine medikamentöse Behandlung.',
  'Hypertensive Krise': 'Rufen Sie sofort den Notruf (112). Hypertensive Krisen erfordern eine sofortige medizinische Behandlung.',
}
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Blutdruck-Rechner</h1>
      <p class="text-base text-stone-500 font-normal">Geben Sie Ihre Blutdruckwerte ein und erfahren Sie sofort Ihre Kategorie.</p>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-6">
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label for="systolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            Systolisch (mmHg)
          </label>
          <input
            id="systolic"
            v-model.number="systolic"
            type="number"
            placeholder="120"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
        <div>
          <label for="diastolic" class="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            Diastolisch (mmHg)
          </label>
          <input
            id="diastolic"
            v-model.number="diastolic"
            type="number"
            placeholder="80"
            class="w-full border border-stone-300 rounded-lg px-4 py-3.5 text-stone-900 text-base font-medium bg-white focus:outline-none focus:border-stone-600 focus:bg-stone-50 transition-all duration-150"
          />
        </div>
      </div>

      <div v-if="result" class="pt-5 border-t border-stone-100">
        <div class="flex items-baseline gap-3 mb-4">
          <span data-testid="systolic-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ systolic }}</span>
          <span class="text-2xl text-stone-400 font-light">/</span>
          <span data-testid="diastolic-value" class="text-5xl font-bold text-stone-900 tabular-nums tracking-tight leading-none">{{ diastolic }}</span>
          <span class="text-sm text-stone-400 ml-1">mmHg</span>
        </div>
        <p data-testid="category" :class="result.color" class="text-lg font-semibold mb-4">{{ result.label }}</p>

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
          <div class="flex-1">Normal</div>
          <div class="flex-1 text-center">Erhöht</div>
          <div class="flex-1 text-center">Grad 1</div>
          <div class="flex-1 text-center">Grad 2</div>
          <div class="flex-[0.5] text-right">Krise</div>
        </div>

        <div data-testid="recommendation" class="bg-stone-50 border border-stone-200 rounded-lg p-4">
          <p class="text-sm text-stone-600 leading-relaxed">{{ recommendations[result.label] }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
      <h2 class="text-lg font-semibold text-stone-900 mb-3">Blutdruck-Kategorien</h2>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            <span class="text-sm text-stone-600">Normal</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&lt; 120 / &lt; 80</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <span class="text-sm text-stone-600">Erhöht</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">120–129 / &lt; 80</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm text-stone-600">Bluthochdruck Grad 1</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">130–139 / 80–89</span>
        </div>
        <div class="flex items-center justify-between border-b border-stone-100 pb-3.5">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm text-stone-600">Bluthochdruck Grad 2</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&ge; 140 / &ge; 90</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-red-700"></div>
            <span class="text-sm text-stone-600">Hypertensive Krise</span>
          </div>
          <span class="text-sm font-medium text-stone-900 tabular-nums">&gt; 180 / &gt; 120</span>
        </div>
      </div>
    </div>

    <BlogBanner calculator-path="/blutdruck-rechner" />
  </div>
</template>
