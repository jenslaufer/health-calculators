<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Testosteronwert berechnen: Frei vs. gebunden, SHBG und was die Werte bedeuten | Health Calculators',
  description: 'Freies Testosteron aus Gesamt-T, SHBG und Albumin berechnen — mit der Vermeulen-Formel. Referenzbereiche, Symptome bei Mangel und natürliche Maßnahmen.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Testosteronwert berechnen: Frei vs. gebunden, SHBG und was die Werte bedeuten',
    description: 'Freies Testosteron aus Gesamt-T, SHBG und Albumin berechnen — mit der Vermeulen-Formel. Referenzbereiche, Symptome bei Mangel und natürliche Maßnahmen.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/testosteronwert-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Testosteronwert berechnen: Frei vs. gebunden, SHBG und was die Werte bedeuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">1. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein normaler <strong>Gesamt-Testosteron</strong>-Wert sagt nicht das ganze Bild. Entscheidend ist das <strong>freie Testosteron</strong> — die biologisch aktive Fraktion, die deine Muskeln, Libido und Energie tatsächlich erreicht. Bei hohem SHBG kann der freie Anteil im Mangel sein, obwohl Gesamt-T „normal" aussieht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die <strong>Vermeulen-Formel</strong>, die Referenzbereiche und was niedrige Werte für deine Gesundheit bedeuten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie Testosteron im Blut zirkuliert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Im Blut verteilt sich Testosteron auf drei Fraktionen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fraktion</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Anteil</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivität</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Frei</td><td class="px-6 py-3 text-stone-600">1–3 %</td><td class="px-6 py-3 text-stone-600">Voll wirksam</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Albumin-gebunden</td><td class="px-6 py-3 text-stone-600">~54 %</td><td class="px-6 py-3 text-stone-600">Schwach wirksam (bioverfügbar)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SHBG-gebunden</td><td class="px-6 py-3 text-stone-600">~44 %</td><td class="px-6 py-3 text-stone-600">Inaktiv</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          SHBG (sexualhormon-bindendes Globulin) bindet Testosteron mit hoher Affinität. Steigt SHBG, sinkt das freie Testosteron — auch wenn die Produktion gleich bleibt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Vermeulen-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die 1999 publizierte Formel von Alex Vermeulen ist heute der Goldstandard zur Berechnung des freien Testosterons aus Routine-Laborwerten — und liefert Werte, die hochkorreliert mit der direkten Massenspektrometrie sind.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>N</strong> = K<sub>A</sub> &times; (Albumin / 69 000) + 1</p>
          <p class="mb-2"><strong>a</strong> &times; FT² + <strong>b</strong> &times; FT + c = 0</p>
          <p class="mb-2">a = N &times; K<sub>T</sub></p>
          <p class="mb-2">b = N + K<sub>T</sub> &times; (SHBG &minus; Total)</p>
          <p>c = &minus;Total</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          K<sub>T</sub> = 1·10⁹ L/mol (SHBG-Bindung), K<sub>A</sub> = 3,6·10⁴ L/mol (Albumin-Bindung). Die quadratische Lösung liefert das freie Testosteron in nmol/L.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Referenzbereiche (Erwachsene Männer)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Normal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Niedrig</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Gesamt-T</td><td class="px-6 py-3 text-stone-600">8,6 – 29 nmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 8 nmol/L</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Freies T</td><td class="px-6 py-3 text-stone-600">200 – 620 pmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 200 pmol/L</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SHBG</td><td class="px-6 py-3 text-stone-600">10 – 57 nmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 10 oder &gt; 70</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die <strong>Endocrine Society</strong> definiert Hypogonadismus als Gesamt-Testosteron &lt; 8 nmol/L (≈ 230 ng/dL) plus klinische Symptome. Werte zwischen 8 und 12 nmol/L liegen in der Grauzone.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Symptome bei niedrigem Testosteron</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Sexuell</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Libidoverlust, erektile Dysfunktion, ausbleibende Morgenerektionen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Körperlich</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Muskelschwund trotz Training, Zunahme von Bauchfett, geringere Knochendichte, Hitzewallungen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mental</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Antriebslosigkeit, depressive Verstimmung, Konzentrationsprobleme, Schlafstörungen.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was die Werte beeinflusst</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Testosteron unterliegt einer ausgeprägten <strong>Tagesrhythmik</strong>. Die Spitze liegt zwischen 7 und 10 Uhr morgens, der Tiefpunkt am späten Nachmittag. Einmalige Messungen am Nachmittag können um 20–40 % unter dem Morgenwert liegen — und so falsch-positiv einen Mangel suggerieren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>SHBG</strong> wird durch Schilddrüsenüberfunktion, Östrogen-Therapie, fortgeschrittenes Alter und Lebererkrankungen erhöht. Es sinkt bei Adipositas, Insulinresistenz und Cushing-Syndrom — letzteres kann das freie T künstlich anheben, obwohl die hormonelle Achse gestört ist.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt freies Testosteron berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sofortergebnis mit Vermeulen-Formel, Referenzbereich-Vergleich und Hypogonadismus-Hinweis — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('testosteroneLevel')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Natürliche Maßnahmen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei einem leichten Mangel zeigen Studien 10–20 % höhere Testosteronspiegel durch:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Krafttraining</strong> mit schweren Verbundübungen (Kniebeuge, Kreuzheben, Bankdrücken) 3× pro Woche</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schlaf</strong>: 7–9 Stunden pro Nacht — schon eine Woche mit 5 Stunden senkt T um 10–15 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vitamin D</strong> auf 40–60 ng/mL halten und Zink-Versorgung sicherstellen</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gewichtsabnahme</strong> bei Adipositas — pro 10 kg Verlust steigt Testosteron um ca. 2 nmol/L</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Alkohol reduzieren</strong> — chronischer Konsum senkt T um 15–25 %</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Niedriges Testosteron tritt häufig zusammen mit anderen Risikofaktoren auf. Prüfe deinen <router-link :to="localeBlogPath('prostatakrebs-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Prostatakrebs-Risiko-Score</router-link> ab 45, dein <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologisches Alter</router-link> als Ganzheits-Marker und decke deinen <router-link :to="localeBlogPath('proteinbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Proteinbedarf</router-link>, um den Muskelaufbau zu unterstützen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Gesamt-Testosteron allein reicht nicht — das freie Testosteron ist der bessere Marker für tatsächliche Symptome. Mit der Vermeulen-Formel kannst du es aus Routine-Laborwerten ableiten. Bei niedrigen Werten und Symptomen lohnt der Gang zum Endokrinologen oder Urologen. Nutze unseren <router-link :to="localePath('testosteroneLevel')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Testosteron-Rechner</router-link> für eine erste Einordnung.
        </p>
      </div>

      <RelatedArticles slug="testosteronwert-berechnen" />
    </div>
  </article>
</template>
