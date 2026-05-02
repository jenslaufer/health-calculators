<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Haarausfall bei Männern: Norwood-Hamilton-Skala, Ursachen und Behandlung | Health Calculators',
  description: 'Androgenetischen Haarausfall mit der Norwood-Hamilton-Skala einschätzen. Stadien, Ursachen, Minoxidil/Finasterid und Haartransplantation — evidenzbasiert und kostenlos.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Haarausfall bei Männern: Norwood-Hamilton-Skala, Ursachen und Behandlung',
    description: 'Androgenetischen Haarausfall mit der Norwood-Hamilton-Skala einschätzen. Stadien, Ursachen, Minoxidil/Finasterid und Haartransplantation — evidenzbasiert und kostenlos.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-02',
    dateModified: '2026-05-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/haarausfall-norwood-skala',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Haarausfall bei Männern: Norwood-Hamilton-Skala, Ursachen und Behandlung</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Etwa <strong>50 % der Männer haben mit 50 sichtbaren Haarausfall</strong> — bei den 70-Jährigen sind es 80 %. Die Ursache ist meistens dieselbe: <strong>androgenetische Alopezie</strong>, ein genetisch bedingter Verlust durch Empfindlichkeit der Haarfollikel gegenüber DHT (Dihydrotestosteron).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die <strong>Norwood-Hamilton-Skala</strong> ist seit 1975 der klinische Standard, um das Stadium des Verlusts in 8 Stufen einzuordnen. Dieser Artikel erklärt die Skala, die häufigsten Ursachen und welche Therapie wann sinnvoll ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die Norwood-Hamilton-Skala?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          James Hamilton beschrieb 1951 erstmals systematisch die typischen Muster des männlichen Haarausfalls. <strong>O'Tar Norwood</strong> erweiterte das Schema 1975 um Zwischenstadien — vor allem das wichtige <strong>Stadium 3-Vertex</strong>, in dem zusätzlich zur Stirn auch der Wirbel betroffen ist.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Heute wird die Skala weltweit in der dermatologischen Praxis, in klinischen Studien und in der Haartransplantation als Standard verwendet — die Reproduzierbarkeit zwischen Selbst- und Arzt-Bewertung liegt bei <strong>Kappa 0,77–0,82</strong> (sehr gut).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 8 Stadien im Überblick</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stadium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beschreibung</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">1</td><td class="px-6 py-3 text-stone-600">Jugendliche Haarlinie</td><td class="px-6 py-3 text-stone-600">Beobachten</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2</td><td class="px-6 py-3 text-stone-600">Reife Haarlinie, leichte Schläfendreiecke</td><td class="px-6 py-3 text-stone-600">Foto-Baseline</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3</td><td class="px-6 py-3 text-stone-600">M-Form, klinisch relevant</td><td class="px-6 py-3 text-stone-600">Minoxidil / Finasterid</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3-Vertex</td><td class="px-6 py-3 text-stone-600">M-Form plus Tonsur</td><td class="px-6 py-3 text-stone-600">Kombi-Therapie</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4</td><td class="px-6 py-3 text-stone-600">Tiefe Geheimratsecken + Tonsur</td><td class="px-6 py-3 text-stone-600">Therapie + ggf. Transplantation</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5</td><td class="px-6 py-3 text-stone-600">Bereiche verschmelzen</td><td class="px-6 py-3 text-stone-600">Transplantation evaluieren</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6</td><td class="px-6 py-3 text-stone-600">Haarband verschwunden</td><td class="px-6 py-3 text-stone-600">Transplantation / Mikropigmentierung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7</td><td class="px-6 py-3 text-stone-600">Nur Seitenkranz</td><td class="px-6 py-3 text-stone-600">Mikropigmentierung / Akzeptanz</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Männer Haare verlieren — die Biologie</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Im Zentrum steht <strong>DHT (Dihydrotestosteron)</strong> — ein potentes Androgen, das aus Testosteron durch das Enzym <em>5-alpha-Reduktase</em> entsteht. Bei genetisch empfindlichen Haarfollikeln (vor allem an Stirn und Wirbel) bindet DHT an Androgenrezeptoren und löst eine schrittweise <strong>Miniaturisierung</strong> aus: Der Haarzyklus verkürzt sich, neue Haare werden dünner und kürzer, bis der Follikel ganz aufhört zu produzieren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wichtig: Die Haare an Hinterkopf und Seiten — der spätere <strong>Spenderbereich</strong> für Transplantationen — sind genetisch DHT-resistent und bleiben fast immer erhalten. Das ist die biologische Grundlage, warum Haartransplantationen überhaupt funktionieren.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-sm text-stone-600 leading-relaxed">
            <strong>Vererbung:</strong> Androgenetischer Haarausfall ist zu rund 80 % genetisch bedingt. Nicht nur die mütterliche Linie spielt eine Rolle (das ist ein verbreitetes Missverständnis) — Studien zeigen Beiträge von beiden Elternteilen.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was wirklich hilft — evidenzbasiert</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Minoxidil 5 % (topisch)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              FDA- und EMA-zugelassen. Verlängert die Wachstumsphase und stimuliert die Durchblutung. Wirkung nach 3–6 Monaten sichtbar, lebenslang anzuwenden — beim Absetzen kommt der Verlust zurück. Erfolg: 60–70 % stoppen den Verlust, 30–40 % bekommen sichtbar dichteres Haar.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Finasterid 1 mg (oral)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hemmt die 5-alpha-Reduktase und senkt DHT um etwa 70 %. In Studien stoppt es den Verlust bei 90 % und verbessert die Dichte bei 65 % der Männer. Verschreibungspflichtig. Nebenwirkungen (Libido, Stimmung) bei 1–3 %, meist reversibel — vorab gut mit dem Arzt besprechen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Haartransplantation (FUE / FUT)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ab Stadium 3–4 sinnvoll, wenn der Verlust stabilisiert ist. <strong>FUE</strong> entnimmt einzelne Follikel-Einheiten — wenig Narben, längere OP-Zeit. <strong>FUT</strong> entnimmt einen Streifen und teilt ihn — dichteres Ergebnis, sichtbare Narbe. Realistisch: kein voller Schopf wie mit 18, aber eine ästhetisch dichte Linie.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Skalp-Mikropigmentierung (SMP)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Tätowierähnliche Punkte simulieren Stoppelhaar — vor allem bei Stadium 6–7 oder als Ergänzung zur Transplantation. Kein nachwachsendes Haar, aber visuell dichteres Erscheinungsbild bei Kurzhaarschnitten.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Norwood-Stadium ermitteln</h3>
        <p class="text-stone-300 text-sm mb-5">4 Fragen, sofortiges Stadium nach Norwood-Hamilton, anonym und ohne Anmeldung — direkt im Browser.</p>
        <router-link
          :to="localePath('malePattern')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos einschätzen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zum Arzt?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Norwood-Stadien beschreiben nur den typischen androgenetischen Haarausfall. Bei <strong>plötzlichem, fleckigem oder schubweisem</strong> Verlust solltest du einen Dermatologen aufsuchen — andere Ursachen müssen ausgeschlossen werden:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Eisenmangel</strong> (vor allem bei Vegetariern oder Sportlern)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schilddrüsenstörungen</strong> (Hyper- und Hypothyreose)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Alopecia areata</strong> (kreisrunder Haarausfall — autoimmun)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Telogenes Effluvium</strong> (Stress, Operation, hohes Fieber 2–3 Monate vorher)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Medikamente</strong> (Chemotherapie, Beta-Blocker, manche Antidepressiva)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Männergesundheit hängt zusammen — neben dem Haarstatus lohnt sich ein Blick auf den
          <router-link :to="localeBlogPath('testosteronwert-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Testosteron-Rechner</router-link>
          (Hypogonadismus ausschließen), den
          <router-link :to="localeBlogPath('erektile-dysfunktion-test')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">IIEF-5-Test</router-link>
          für erektile Funktion und das
          <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologische Alter</router-link>
          als Gesamt-Marker.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Norwood-Hamilton-Skala gibt dir eine klare Sprache für ein Thema, das viele Männer schweigend erleben. Wer früh sein Stadium kennt (typischerweise Stadium 2–3), hat die besten Chancen, den Verlust mit Minoxidil oder Finasterid zu stoppen. Nutze unseren
          <router-link :to="localePath('malePattern')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Norwood-Rechner</router-link>
          für die anonyme Selbsteinschätzung — und sprich bei auffälligen Stadien mit einem Dermatologen.
        </p>
      </div>

      <RelatedArticles slug="haarausfall-norwood-skala" />
    </div>
  </article>
</template>
