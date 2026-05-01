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
      name: 'Was ist der PSA-Wert?',
      acceptedAnswer: { '@type': 'Answer', text: 'PSA (prostataspezifisches Antigen) ist ein Eiweiß der Prostata. Erhöhte Werte können auf Krebs, BPH oder Prostatitis hinweisen — nicht jeder hohe Wert bedeutet Krebs.' },
    },
    {
      '@type': 'Question',
      name: 'Welcher PSA-Wert ist normal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Altersadjustierte Obergrenzen nach Oesterling: 40–49 → 2.5, 50–59 → 3.5, 60–69 → 4.5, 70–79 → 6.5 ng/mL.' },
    },
    {
      '@type': 'Question',
      name: 'Wie verändert eine Familienanamnese das Risiko?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ein erstgradiger Verwandter (Vater, Bruder) mit Prostatakrebs vor dem 65. Lebensjahr verdoppelt das Risiko. Bei zwei Betroffenen vervierfacht es sich.' },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Prostatakrebs-Risiko berechnen',
  step: [
    { '@type': 'HowToStep', name: 'PSA-Wert eingeben', text: 'PSA aus dem Laborbefund (in ng/mL) eintragen.' },
    { '@type': 'HowToStep', name: 'Alter wählen', text: 'Alter eingeben — der Schwellenwert wird automatisch altersadjustiert.' },
    { '@type': 'HowToStep', name: 'Familienanamnese angeben', text: 'Vater, Bruder oder Sohn mit Prostatakrebs vor dem 65. Lebensjahr — Risiko etwa doppelt so hoch.' },
    { '@type': 'HowToStep', name: 'Risiko einordnen', text: 'Niedrig, moderat, hoch oder sehr hoch — mit klarer Empfehlung zur weiteren Abklärung.' },
  ],
}

useHead({
  title: 'Prostatakrebs-Risiko berechnen: PSA, Alter & Familienanamnese verstehen | Health Calculators',
  description: 'Prostatakrebs-Risiko berechnen — PSA-Wert, altersadjustierte Schwellenwerte und Familienanamnese richtig einordnen. Mit Empfehlungen nach AWMF-Leitlinie.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Prostatakrebs-Risiko berechnen: Was PSA, Alter und Familienanamnese wirklich aussagen',
      description: 'Prostatakrebs-Risiko berechnen — PSA-Wert, altersadjustierte Schwellenwerte und Familienanamnese richtig einordnen. Mit Empfehlungen nach AWMF-Leitlinie.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/prostatakrebs-risiko-berechnen',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Prostatakrebs-Risiko berechnen: Was PSA, Alter und Familienanamnese wirklich aussagen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">30. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Prostatakrebs ist die häufigste Krebserkrankung bei Männern in Deutschland — und gleichzeitig eine, die bei früher Erkennung sehr gute Heilungschancen hat. Der <strong>PSA-Wert</strong> ist der wichtigste Screening-Marker, doch ein einzelner Zahlenwert reicht selten zur Einordnung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, wie du PSA, Alter und Familienanamnese gemeinsam interpretierst — und wann eine weitere Abklärung sinnvoll ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der PSA-Wert?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das prostataspezifische Antigen (PSA) ist ein Eiweiß, das ausschließlich von Prostatazellen produziert wird. Bei Krebs, gutartiger Vergrößerung (BPH) oder Entzündung gelangt vermehrt PSA ins Blut. Das macht den Wert zu einem sensiblen, aber unspezifischen Marker — er steigt aus vielen Gründen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Altersadjustierte PSA-Schwellenwerte</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Prostata wächst mit zunehmendem Alter — der PSA-Wert steigt physiologisch mit. Die <strong>Oesterling-Schwellenwerte</strong> (JAMA 1993) berücksichtigen das:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Altersgruppe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PSA-Obergrenze</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">40–49 Jahre</td><td class="px-6 py-3 text-stone-600">2.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">50–59 Jahre</td><td class="px-6 py-3 text-stone-600">3.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">60–69 Jahre</td><td class="px-6 py-3 text-stone-600">4.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">70–79 Jahre</td><td class="px-6 py-3 text-stone-600">6.5 ng/mL</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein PSA von 3.0 ng/mL ist bei einem 45-Jährigen auffällig, bei einem 70-Jährigen aber im Normbereich.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikokategorien nach PSA</h2>
        <div class="space-y-3">
          <div class="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Niedrig: PSA &lt; Schwellenwert</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Routinekontrolle nach AWMF-Leitlinie alle 2–4 Jahre, je nach Ausgangswert.</p>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Moderat: Schwellenwert bis 10 ng/mL (Graubereich)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Etwa 25–30 % dieser Männer haben Prostatakrebs. Verlaufskontrolle in 3–6 Monaten, freies PSA, mpMRT erwägen.</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Hoch: 10–20 ng/mL</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Karzinom-Wahrscheinlichkeit 50–67 %. Urologische Abklärung mit MRT und ggf. Fusionsbiopsie zeitnah indiziert.</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Sehr hoch: &gt; 20 ng/mL</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Klinisch signifikantes Karzinom hochwahrscheinlich. Sofortige urologische Abklärung mit Staging.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Familienanamnese: Der Risikofaktor mit dem größten Hebel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hat ein erstgradiger Verwandter (Vater, Bruder) Prostatakrebs vor dem 65. Lebensjahr, <strong>verdoppelt</strong> sich dein Risiko. Bei zwei Betroffenen <strong>vervierfacht</strong> es sich. Die AWMF-Leitlinie empfiehlt für diese Männer ein Beratungsgespräch ab 40 (statt 45) Jahren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Auch BRCA1/2-Mutationen — sonst eher mit Brustkrebs assoziiert — erhöhen das Prostatakrebsrisiko deutlich.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bei einem auffälligen Wert passiert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die moderne Diagnostik hat sich gewandelt — die Standard-Stanzbiopsie ist nicht mehr der erste Schritt. Heute gilt:
        </p>
        <ol class="list-decimal list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>PSA-Wiederholung</strong> nach 4–6 Wochen (auch nach längerer sexueller Abstinenz, ohne Radfahren).</li>
          <li><strong>Freies PSA</strong> (% fPSA): unter 15 % Tumor-typisch, über 25 % spricht für BPH.</li>
          <li><strong>Multiparametrische MRT</strong> der Prostata (mpMRT) als Triage.</li>
          <li><strong>Gezielte Fusionsbiopsie</strong> nur bei MRT-Auffälligkeiten (PI-RADS 3–5).</li>
        </ol>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Prostatakrebs-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">PSA-Wert, Alter und Familienanamnese — mit altersadjustierten Schwellenwerten und klarer Empfehlung. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('prostateRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Krebsrisiko hängt eng mit Lebensstil und biologischem Altern zusammen. Vergleiche dein Ergebnis mit deiner
          <router-link :to="localeBlogPath('lebenserwartung-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lebenserwartung</router-link>,
          deinem
          <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologischen Alter</router-link>
          und deinem
          <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link>
          — drei Werte, die zusammen ein klares Bild deines metabolischen Gesundheitsstatus geben.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der PSA-Wert allein sagt wenig. Erst die Kombination aus altersadjustiertem Schwellenwert, PSA-Verlauf und Familienanamnese macht eine seriöse Risikoeinschätzung möglich. Berechne deine Risikoeinordnung mit unserem
          <router-link :to="localePath('prostateRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Prostatakrebs-Risiko-Rechner</router-link> — und besprich auffällige Werte zeitnah mit einem Urologen.
        </p>
      </div>

      <RelatedArticles slug="prostatakrebs-risiko-berechnen" />
    </div>
  </article>
</template>
