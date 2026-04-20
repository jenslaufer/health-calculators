<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Body Temperature Calculator — Fever, Normal Range & Hypothermia | Health Calculators',
  description: 'What is a normal body temperature? Learn about fever, hypothermia, temperature variation by site, and when to see a doctor. With free body temperature calculator.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Body Temperature Calculator — Fever, Normal Range & Hypothermia',
    description: 'What is a normal body temperature? Learn about fever, hypothermia, temperature variation by site, and when to see a doctor.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-20',
    dateModified: '2026-04-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/body-temperature-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Body Temperature Calculator — Fever, Normal Range & Hypothermia</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 20, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Most people know that 37 °C (98.6 °F) is "normal" body temperature. But that figure comes from a 19th-century average — modern research shows healthy adults range from <strong>36.1 to 37.2 °C (97–99 °F)</strong> depending on age, time of day, and measurement site.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this guide you'll learn how to interpret temperature readings, when a high temperature counts as fever, how to convert between Celsius and Fahrenheit, and when to seek medical help.
        </p>
      </div>

      <!-- What is normal? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is a normal body temperature?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The widely cited <strong>37 °C (98.6 °F)</strong> comes from a study by German physician Carl Wunderlich published in 1851. A large 2020 study in eLife found the average oral temperature in healthy US adults is closer to <strong>36.6 °C (97.9 °F)</strong> — and has been gradually decreasing over the past century.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Normal temperature is not a single number but a range. The accepted oral range for healthy adults is <strong>36.1–37.2 °C (97.0–99.0 °F)</strong>. Anything above 38 °C (100.4 °F) orally is generally defined as fever.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-base font-semibold text-stone-900">Normal oral temperature: 36.1–37.2 °C (97.0–99.0 °F)</p>
          <p class="text-sm text-stone-500 mt-2">Fever threshold: ≥ 38.0 °C (100.4 °F)</p>
        </div>
      </div>

      <!-- Celsius to Fahrenheit -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Celsius to Fahrenheit — the formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The exact conversion formulas are:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">°F = (°C × 9/5) + 32</p>
          <p class="text-base font-semibold text-stone-900">°C = (°F − 32) × 5/9</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">°C</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">°F</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Hypothermia</td><td class="px-6 py-3 tabular-nums">&lt; 35.0</td><td class="px-6 py-3 tabular-nums">&lt; 95.0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Below normal</td><td class="px-6 py-3 tabular-nums">35.0–36.0</td><td class="px-6 py-3 tabular-nums">95.0–96.8</td></tr>
              <tr class="bg-green-50"><td class="px-6 py-3 font-semibold text-stone-700">Normal</td><td class="px-6 py-3 font-semibold tabular-nums">36.1–37.2</td><td class="px-6 py-3 font-semibold tabular-nums">97.0–99.0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Elevated</td><td class="px-6 py-3 tabular-nums">37.3–38.0</td><td class="px-6 py-3 tabular-nums">99.1–100.4</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Fever</td><td class="px-6 py-3 tabular-nums">38.1–39.0</td><td class="px-6 py-3 tabular-nums">100.6–102.2</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">High fever</td><td class="px-6 py-3 tabular-nums">39.1–40.0</td><td class="px-6 py-3 tabular-nums">102.4–104.0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Very high fever</td><td class="px-6 py-3 tabular-nums">&gt; 40.0</td><td class="px-6 py-3 tabular-nums">&gt; 104.0</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Measurement sites -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Measurement sites — which is most accurate?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Temperature varies by where you measure it. Rectal measurement most closely reflects core body temperature and is the gold standard in clinical settings. Oral, axillary (armpit), and tympanic (ear) readings are practical but slightly less accurate.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Rectal (most accurate)</p>
            <p class="text-sm text-stone-500">36.6–38.0 °C (97.9–100.4 °F). Gold standard. Used for infants and ICU patients.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Oral</p>
            <p class="text-sm text-stone-500">35.5–37.5 °C (95.9–99.5 °F). Convenient and accurate in adults. Wait 15 min after eating or drinking.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Axillary (armpit)</p>
            <p class="text-sm text-stone-500">34.7–37.3 °C (94.5–99.1 °F). Least accurate. Add ~0.5 °C to estimate core temperature.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Tympanic (ear)</p>
            <p class="text-sm text-stone-500">35.8–38.0 °C (96.4–100.4 °F). Fast but requires proper technique for accuracy.</p>
          </div>
        </div>
      </div>

      <!-- When to see a doctor -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When to see a doctor</h2>
        <div class="space-y-3 mb-4">
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-red-800 mb-1">Seek emergency care immediately</p>
            <ul class="text-sm text-red-700 space-y-1 list-disc list-inside">
              <li>Temperature above 40 °C (104 °F) at any age</li>
              <li>Any fever in infants under 3 months</li>
              <li>Temperature below 35 °C (95 °F) — hypothermia</li>
              <li>Fever with stiff neck, severe headache, confusion, or rash</li>
            </ul>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-orange-800 mb-1">See a doctor within 24 hours</p>
            <ul class="text-sm text-orange-700 space-y-1 list-disc list-inside">
              <li>Fever above 39 °C (102.2 °F) lasting more than 1 day</li>
              <li>Any fever in children under 2 years lasting more than 1 day</li>
              <li>Fever lasting more than 3 days in adults</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Natural variation -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Natural temperature variation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Body temperature is not fixed — it follows a circadian rhythm, rising and falling by up to <strong>0.5 °C</strong> throughout the day:
        </p>
        <ul class="list-disc list-inside space-y-2 text-stone-600 mb-4 text-base">
          <li><strong>Lowest:</strong> early morning (around 4–6 am), typically 36.0–36.4 °C</li>
          <li><strong>Highest:</strong> late afternoon (around 4–6 pm), typically 36.8–37.2 °C</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Other factors that raise temperature slightly include physical exercise, ovulation (by ~0.3 °C), hot drinks, and warm clothing. Factors that lower it include sleep, fasting, and cold exposure.
        </p>
      </div>

    </div>

    <RelatedArticlesEn slug="body-temperature-calculator" />
  </article>
</template>
