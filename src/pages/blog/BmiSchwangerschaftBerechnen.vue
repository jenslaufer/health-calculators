<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'BMI in der Schwangerschaft berechnen — Vor-Schwangerschafts-BMI & IOM 2009 | Health Calculators',
  description: 'Vor-Schwangerschafts-BMI berechnen und nach WHO-Klassifikation einordnen. Empfohlene Gewichtszunahme nach IOM 2009 für Einlinge und Zwillinge — verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BMI in der Schwangerschaft berechnen — Vor-Schwangerschafts-BMI & IOM 2009',
    description: 'Vor-Schwangerschafts-BMI berechnen und nach WHO-Klassifikation einordnen. Empfohlene Gewichtszunahme nach IOM 2009 für Einlinge und Zwillinge.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-10',
    dateModified: '2026-05-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/bmi-schwangerschaft-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">BMI in der Schwangerschaft berechnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">10. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Vor-Schwangerschafts-BMI</strong> ist die wichtigste Kennzahl für deine empfohlene
          Gewichtszunahme in der Schwangerschaft. Er entscheidet, ob 5 kg, 12 kg oder 18 kg das richtige Ziel sind.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Institute of Medicine (IOM) hat 2009 evidenzbasierte Richtwerte veröffentlicht — sie gelten weltweit als
          Goldstandard. Sie nutzen die WHO-BMI-Klassifikation und schützen Mutter und Kind vor zu wenig oder zu viel Zunahme.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So berechnest du den BMI in der Schwangerschaft</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wichtig: Verwende dein <strong>Gewicht VOR der Schwangerschaft</strong>, nicht dein aktuelles. Die Formel ist
          die gleiche wie beim normalen <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link>:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-6 text-center">
          <p class="text-lg font-semibold text-stone-900">BMI = Gewicht (kg) ÷ Körpergröße² (m)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: 65 kg Vor-Gewicht bei 1,68 m Körpergröße ergibt einen BMI von 65 ÷ (1,68 × 1,68) = <strong>23,0</strong> —
          also <em>Normalgewicht</em>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI-Kategorien & empfohlene Zunahme (IOM 2009)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Vor-Schwangerschafts-BMI</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfohlene Zunahme</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">&lt; 18,5</td>
                <td class="px-6 py-3 font-medium text-blue-700">Untergewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">12,5 – 18 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">18,5 – 24,9</td>
                <td class="px-6 py-3 font-medium text-emerald-700">Normalgewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">11,5 – 16 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">25 – 29,9</td>
                <td class="px-6 py-3 font-medium text-yellow-700">Übergewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">7 – 11,5 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">&ge; 30</td>
                <td class="px-6 py-3 font-medium text-red-700">Adipositas</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">5 – 9 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der BMI vor der Schwangerschaft zählt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Studien zeigen einen klaren Zusammenhang: Untergewichtige Frauen mit zu wenig Zunahme haben ein höheres Risiko
          für Frühgeburten und niedriges Geburtsgewicht. Frauen mit Übergewicht oder Adipositas, die zu viel zunehmen,
          haben höhere Risiken für Schwangerschaftsdiabetes, Präeklampsie und Kaiserschnitt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die IOM-2009-Richtwerte balancieren beide Risiken aus. Der Vor-Schwangerschafts-BMI ist also kein Etikett —
          er ist die Grundlage für eine individuell sichere Empfehlung.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deinen BMI in der Schwangerschaft berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Vor-Schwangerschafts-BMI mit IOM-Empfehlung — kostenlos, ohne Anmeldung.</p>
        <router-link
          :to="localePath('pregnancyBMI')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zwillinge: höhere Zunahme empfohlen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Zwillingsschwangerschaften gilt die gleiche BMI-Kategorisierung — aber die empfohlene Gesamtzunahme ist
          deutlich höher:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="space-y-2 text-sm text-stone-700">
            <div class="flex justify-between"><span>Normalgewicht (BMI 18,5–24,9)</span><span class="font-semibold tabular-nums">17 – 25 kg</span></div>
            <div class="flex justify-between"><span>Übergewicht (BMI 25–29,9)</span><span class="font-semibold tabular-nums">14 – 23 kg</span></div>
            <div class="flex justify-between"><span>Adipositas (BMI ≥ 30)</span><span class="font-semibold tabular-nums">11 – 19 kg</span></div>
          </div>
        </div>
        <p class="text-sm text-stone-500">
          Für untergewichtige Zwillingsschwangerschaften gibt das IOM keinen separaten Wert vor — Empfehlung erfolgt individuell durch den Frauenarzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Soll ich den BMI während der Schwangerschaft regelmäßig nachmessen?</h3>
            <p class="text-sm text-stone-600">
              Nein. Der BMI in der Schwangerschaft bezieht sich immer auf das Vor-Gewicht. Für den Verlauf nutzt du
              besser die <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">wöchentliche Gewichtszunahme</router-link>.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Was tun, wenn ich mein Vor-Gewicht nicht genau kenne?</h3>
            <p class="text-sm text-stone-600">
              Schätze das Gewicht von vor Eintritt der Schwangerschaft so gut wie möglich. Krankenkassen, Arztpraxen oder
              Fitness-Apps haben oft historische Daten. Auch grobe Werte sind besser als ein aktuelles Schwangerschaftsgewicht.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Mein BMI war 24,8 — gilt für mich Normalgewicht oder Übergewicht?</h3>
            <p class="text-sm text-stone-600">
              Bei einem BMI von 24,8 zählt formal Normalgewicht (Cutoff: 25,0). Sprich aber mit deiner Gynäkologin —
              individuelle Faktoren wie Muskelmasse oder Familiengeschichte können die Empfehlung beeinflussen.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Vor-Schwangerschafts-BMI bestimmt deine empfohlene Gewichtszunahme nach IOM 2009. Berechne ihn mit unserem
          <router-link :to="localePath('pregnancyBMI')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner Schwangerschaft</router-link>,
          verfolge die wöchentliche Zunahme mit dem
          <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Gewichtszunahme-Rechner</router-link>
          und ermittle deine Schwangerschaftswoche mit dem
          <router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schwangerschafts-Rechner</router-link>.
        </p>
      </div>

      <RelatedArticles slug="bmi-schwangerschaft-berechnen" />
    </div>
  </article>
</template>
