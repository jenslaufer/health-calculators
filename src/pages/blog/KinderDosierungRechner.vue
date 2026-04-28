<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie berechnet man die Dosis für Kinder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Standardformel ist Dosis (mg) = Körpergewicht (kg) × mg pro kg. Für Paracetamol gelten 10–15 mg/kg pro Einzeldosis, für Ibuprofen 7–10 mg/kg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viele mL Saft soll ich geben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volumen (mL) = Dosis (mg) ÷ Konzentration (mg/mL). Bei 300 mg Paracetamol und 24 mg/mL ergeben sich 12,5 mL Saft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Tageshöchstdosis darf nicht überschritten werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paracetamol max. 60 mg/kg/Tag (max. 4 g), Ibuprofen max. 30 mg/kg/Tag (max. 2,4 g), Amoxicillin 20–90 mg/kg/Tag je nach Indikation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ab welchem Alter ist Ibuprofen erlaubt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ibuprofen ist ab dem 3. Lebensmonat und einem Körpergewicht von mindestens 5 kg zugelassen. Bei jüngeren Säuglingen Paracetamol bevorzugt.',
      },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Kinder-Dosierung berechnen',
  description: 'In drei Schritten zur sicheren gewichtsbasierten Dosierung von Paracetamol, Ibuprofen oder Amoxicillin.',
  step: [
    { '@type': 'HowToStep', name: 'Körpergewicht in kg eingeben', text: 'Aktuelles Körpergewicht des Kindes wiegen und in kg eingeben.' },
    { '@type': 'HowToStep', name: 'Wirkstoff wählen', text: 'Paracetamol, Ibuprofen oder Amoxicillin auswählen — die mg/kg-Empfehlung wird automatisch eingetragen.' },
    { '@type': 'HowToStep', name: 'Konzentration des Saftes angeben', text: 'Konzentration der Lösung (z.B. 24 mg/mL) eingeben, um das Volumen in mL zu erhalten.' },
  ],
}

useHead({
  title: 'Kinder-Dosierung berechnen — Sichere gewichtsbasierte Dosis | Health Calculators',
  description: 'Wie berechnet man die richtige Medikamentendosis für Kinder? Paracetamol, Ibuprofen und Amoxicillin nach Körpergewicht — mit Tabellen, Tageshöchstdosis und Volumenangabe.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Kinder-Dosierung berechnen — Sichere gewichtsbasierte Dosis',
      description: 'Gewichtsbasierte Dosierung von Paracetamol, Ibuprofen und Amoxicillin für Kinder einfach erklärt.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kinder-dosierung-rechner',
      },
    },
    faqJsonLd,
    howToJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kinder-Dosierung berechnen — Sichere gewichtsbasierte Dosis</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">28. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die richtige Medikamentendosis für Kinder ist <strong>immer gewichtsabhängig</strong> — anders als bei Erwachsenen, wo eine pauschale Dosis verwendet wird. Eine zu hohe Dosis kann schwere Nebenwirkungen verursachen, eine zu niedrige bleibt wirkungslos.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die Berechnung für die drei häufigsten Kinderarzneimittel: <strong>Paracetamol</strong>, <strong>Ibuprofen</strong> und <strong>Amoxicillin</strong>. Du lernst die Formeln, Tageshöchstdosen, typischen Saftkonzentrationen und Sicherheitswarnungen.
        </p>
      </div>

      <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p class="text-sm text-red-800 font-medium">
          Wichtiger Hinweis: Dies ist keine medizinische Beratung. Die Dosierung von Kindermedikamenten muss immer von einer Ärztin, einem Arzt oder einer Apothekerin bestätigt werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Grundformel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alle gewichtsbasierten Pädiatrie-Dosierungen folgen einer einfachen Formel:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Dosis (mg) = Körpergewicht (kg) × mg pro kg</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für die Volumenberechnung des Saftes:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Volumen (mL) = Dosis (mg) ÷ Konzentration (mg/mL)</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Paracetamol</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Einzeldosis:</strong> 10–15 mg/kg</li>
          <li><strong>Tagesmaximum:</strong> 60 mg/kg/Tag (max. 4 g bei größeren Kindern)</li>
          <li><strong>Intervall:</strong> alle 4–6 Stunden, max. 4 Dosen/Tag</li>
          <li><strong>Saftkonzentration:</strong> meist 24 mg/mL</li>
          <li><strong>Beispiel:</strong> 20 kg × 15 mg/kg = 300 mg = 12,5 mL Saft</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Paracetamol ist ab Geburt zugelassen. Wichtig: Eine Überdosierung kann auch ohne anfängliche Symptome zu schweren Leberschäden führen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ibuprofen</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Einzeldosis:</strong> 7–10 mg/kg</li>
          <li><strong>Tagesmaximum:</strong> 30 mg/kg/Tag (max. 2,4 g)</li>
          <li><strong>Intervall:</strong> alle 6–8 Stunden</li>
          <li><strong>Saftkonzentration:</strong> 20 mg/mL oder 40 mg/mL</li>
          <li><strong>Beispiel:</strong> 15 kg × 10 mg/kg = 150 mg = 7,5 mL bei 20 mg/mL</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Ibuprofen ist ab dem 3. Lebensmonat und einem Körpergewicht von mindestens 5 kg zugelassen. Bei kleineren Kindern Paracetamol bevorzugt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Amoxicillin</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Standarddosis:</strong> 20–45 mg/kg/Tag, aufgeteilt auf 2–3 Gaben</li>
          <li><strong>Hochdosis (z.B. Otitis media):</strong> 80–90 mg/kg/Tag</li>
          <li><strong>Intervall:</strong> alle 8–12 Stunden</li>
          <li><strong>Saftkonzentration:</strong> 50 mg/mL (typische Suspension)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Wahl zwischen Standard- und Hochdosis hängt von Alter, Erreger und Indikation ab. Immer ärztlich verordnen lassen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Sicherheitswarnungen</h2>
        <ul class="space-y-3 text-base text-stone-600">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Gewicht unter 3 kg:</strong> Neugeborene benötigen ärztlich überwachte Dosierung — nicht selbst dosieren.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Gewicht über 80 kg:</strong> Wahrscheinlich Erwachsenen-Dosierung verwenden, nicht die pädiatrische mg/kg-Formel.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Über der empfohlenen Einzeldosis:</strong> Niemals höher dosieren als die Fachinformation angibt — kein „Sicherheitspuffer" von oben.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Bei Verdacht auf Überdosierung:</strong> Sofort Giftnotruf oder Notaufnahme kontaktieren.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsperzentile</strong> — Gewicht und Größe des Kindes mit der WHO-Norm vergleichen. Zum <router-link :to="localePath('childGrowth')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Wachstumsperzentilen-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Körperoberfläche</strong> — Manche Medikamente werden nach BSA dosiert (z.B. Onkologie). Zum <router-link :to="localePath('bsa')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">BSA-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>BMI</strong> — Body-Mass-Index für ältere Kinder und Jugendliche einordnen. Zum <router-link :to="localePath('bmi')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">BMI-Rechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Kinder-Dosis berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Wirkstoff wählen, Gewicht eingeben — sofort Einzel- und Tagesdosis in mg und mL.</p>
        <router-link
          :to="localePath('childDosage')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Kinder-Dosierungsrechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie berechnet man die Dosis für Kinder?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Die Standardformel ist Dosis (mg) = Körpergewicht (kg) × mg pro kg. Für Paracetamol gelten 10–15 mg/kg pro Einzeldosis, für Ibuprofen 7–10 mg/kg. Diese Werte stammen aus pädiatrischen Fachinformationen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie viele mL Saft soll ich geben?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Volumen (mL) = Dosis (mg) ÷ Konzentration (mg/mL). Bei 300 mg Paracetamol und 24 mg/mL ergeben sich 12,5 mL Saft.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Tageshöchstdosis darf nicht überschritten werden?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Paracetamol max. 60 mg/kg/Tag (max. 4 g), Ibuprofen max. 30 mg/kg/Tag (max. 2,4 g), Amoxicillin 20–90 mg/kg/Tag je nach Indikation.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ab welchem Alter ist Ibuprofen erlaubt?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ibuprofen ist ab dem 3. Lebensmonat und einem Körpergewicht von mindestens 5 kg zugelassen. Bei jüngeren Säuglingen Paracetamol bevorzugt.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
