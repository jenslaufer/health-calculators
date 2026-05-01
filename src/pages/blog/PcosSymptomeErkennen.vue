<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist PCOS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das polyzystische Ovarialsyndrom ist eine hormonelle Störung mit erhöhten Androgenen, Zyklusstörungen und häufig polyzystischen Eierstöcken — etwa 5–10 % der Frauen sind betroffen.' },
    },
    {
      '@type': 'Question',
      name: 'Was sind die Rotterdam-Kriterien?',
      acceptedAnswer: { '@type': 'Answer', text: 'Internationaler Diagnose-Standard (ESHRE/ASRM 2003): Zyklusstörung, Hyperandrogenismus oder polyzystische Ovarien — 2 von 3 reichen aus.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Symptome sind typisch?',
      acceptedAnswer: { '@type': 'Answer', text: 'Unregelmäßige oder ausbleibende Zyklen, Akne, Hirsutismus, androgener Haarausfall, Gewichtszunahme, Acanthosis nigricans und unerfüllter Kinderwunsch.' },
    },
  ],
}

useHead({
  title: 'PCOS-Symptome erkennen: Rotterdam-Kriterien, Anzeichen & nächste Schritte | Health Calculators',
  description: 'PCOS-Symptome erkennen — Zyklusstörungen, Hyperandrogenismus, Acanthosis nigricans und Kinderwunsch. Mit Rotterdam-Kriterien, Diagnose-Pfad und PCOS-Symptom-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PCOS-Symptome erkennen: Rotterdam-Kriterien, Anzeichen und der Weg zur Diagnose',
      description: 'PCOS-Symptome erkennen — Zyklusstörungen, Hyperandrogenismus, Acanthosis nigricans und Kinderwunsch. Mit Rotterdam-Kriterien, Diagnose-Pfad und PCOS-Symptom-Rechner.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-01',
      dateModified: '2026-05-01',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/pcos-symptome-erkennen',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PCOS-Symptome erkennen: Rotterdam-Kriterien, Anzeichen und der Weg zur Diagnose</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">1. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>polyzystische Ovarialsyndrom (PCOS)</strong> ist die häufigste Hormonstörung bei Frauen im fortpflanzungsfähigen Alter — und gleichzeitig die am häufigsten übersehene. Etwa <strong>5–10 % aller Frauen</strong> sind betroffen, doch viele bekommen ihre Diagnose erst nach Jahren der Beschwerden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel zeigt dir die typischen Symptome, die internationalen Rotterdam-Kriterien und den klaren Weg zur Diagnose — damit du mit einem fundierten Verdacht in die gynäkologische Praxis gehen kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Rotterdam-Kriterien (2 von 3 reichen)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Seit 2003 sind die <strong>Rotterdam-Kriterien</strong> (ESHRE/ASRM) der internationale Goldstandard für die PCOS-Diagnose. Du erfüllst PCOS, wenn zwei der drei folgenden Kriterien zutreffen:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">1. Zyklusstörung (Oligo- oder Anovulation)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Zyklen länger als 35 Tage, kürzer als 21 Tage, oder weniger als 8 Perioden pro Jahr.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">2. Hyperandrogenismus</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Klinisch (Hirsutismus, Akne, androgener Haarausfall) oder im Labor (Testosteron, freier Androgenindex).</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">3. Polyzystische Ovarien im Ultraschall</h3>
            <p class="text-sm text-stone-600 leading-relaxed">≥ 20 Follikel pro Ovar oder Ovarvolumen ≥ 10 ml — beurteilt durch transvaginale Sonografie.</p>
          </div>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed mt-4">
          Wichtig: Andere Ursachen (Hyperprolaktinämie, Schilddrüse, AGS) müssen vorher ausgeschlossen sein.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typische Symptome — und was sie bedeuten</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hintergrund</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unregelmäßige Zyklen</td><td class="px-6 py-3 text-stone-600">Anovulation durch gestörte LH/FSH-Regulation</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hirsutismus</td><td class="px-6 py-3 text-stone-600">Erhöhte Androgene, modifizierter Ferriman-Gallwey ≥ 8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Akne, fettige Haut</td><td class="px-6 py-3 text-stone-600">Talgproduktion durch Testosteron-Wirkung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Haarausfall am Kopf</td><td class="px-6 py-3 text-stone-600">Androgene Alopezie, scheitelbetontes Lichten</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Gewichtszunahme, Bauchfett</td><td class="px-6 py-3 text-stone-600">Insulinresistenz und gestörte Glucose-Verwertung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Acanthosis nigricans</td><td class="px-6 py-3 text-stone-600">Dunkle Hautstellen — direkter Marker für Insulinresistenz</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unerfüllter Kinderwunsch</td><td class="px-6 py-3 text-stone-600">Anovulation als häufigste Ursache von Infertilität bei PCOS</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Insulinresistenz: der oft übersehene Treiber</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bis zu 70 % der Frauen mit PCOS haben eine <strong>Insulinresistenz</strong> — unabhängig vom Gewicht. Das hohe Insulin steigert die Androgenproduktion in den Ovarien und blockiert SHBG in der Leber, sodass mehr freies Testosteron aktiv wird. Acanthosis nigricans (dunkle, samtige Hautstellen in Hautfalten) ist der klinische Hinweis schlechthin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein erhöhter Nüchterninsulinspiegel oder ein auffälliger oraler Glukosetoleranztest gehören deshalb in jede PCOS-Abklärung. Lies dazu den Artikel zum
          <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link> — die metabolische Verbindung ist eng.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine PCOS-Symptome prüfen</h3>
        <p class="text-stone-300 text-sm mb-5">Bewerte 9 typische Anzeichen entlang der Rotterdam-Kriterien — mit klarer Empfehlung für die nächsten Schritte. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('pcosSymptoms')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Symptom-Check starten &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Der Weg zur Diagnose</h2>
        <ol class="list-decimal list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>Zyklusprotokoll</strong> über 3–6 Monate (Apps wie Period-Tracker oder Basaltemperatur).</li>
          <li><strong>Hormonstatus</strong> in der frühen Follikelphase (Tag 2–5): Testosteron, SHBG, freier Androgenindex, DHEAS, LH/FSH, Östradiol, Prolaktin, TSH, 17-OH-Progesteron.</li>
          <li><strong>Stoffwechsel-Labor</strong>: Nüchterninsulin, HbA1c, OGTT, Lipide.</li>
          <li><strong>Transvaginaler Ultraschall</strong> in der Follikelphase für Follikelzahl und Ovarvolumen.</li>
          <li><strong>Differentialdiagnose</strong> ausschließen: Hyperprolaktinämie, Schilddrüse, NCAH (17-OH-Progesteron), Cushing.</li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was hilft? Therapie auf den Punkt</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebensstil</h3>
            <p class="text-sm text-stone-600 leading-relaxed">5–10 % Gewichtsabnahme bringt bei Übergewicht oft schon den Zyklus zurück und senkt Androgene messbar. Krafttraining hilft gegen Insulinresistenz.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Medikamente</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Metformin (Insulinresistenz), kombinierte Pille (Zyklus, Akne, Hirsutismus), Spironolacton (Antiandrogen), Letrozol bei Kinderwunsch.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Nahrungsergänzung</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Inositol (Myo-/D-Chiro 40:1) hat in Studien Zyklus und Eisprung verbessert. Vitamin D bei Mangel ergänzen.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PCOS hängt eng mit Eisprung, Zyklus und Stoffwechsel zusammen. Verfolge deinen Zyklus mit dem
          <router-link :to="localeBlogPath('zyklusrechner-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Zyklusrechner</router-link>,
          plane den
          <router-link :to="localeBlogPath('eisprung-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eisprung</router-link>
          und prüfe dein
          <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link>
          — drei Werte, die zusammen ein klares Bild deines reproduktiv-metabolischen Status zeichnen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          PCOS ist eine Diagnose mit Hebel: einmal erkannt, sind Lebensstil und Medikamente sehr wirksam — Zyklus, Haut, Haare und Fertilität verbessern sich oft deutlich. Der erste Schritt ist, die Symptome ernst zu nehmen. Starte mit dem
          <router-link :to="localePath('pcosSymptoms')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PCOS-Symptom-Rechner</router-link> und gehe mit dem Ergebnis fundiert in die nächste Sprechstunde.
        </p>
      </div>

      <RelatedArticles slug="pcos-symptome-erkennen" />
    </div>
  </article>
</template>
