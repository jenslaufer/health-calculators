<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Schilddrüsenwerte verstehen: TSH, T3 und T4 richtig deuten | Health Calculators',
  description: 'TSH, freies T3 und freies T4 in einen Befund einordnen. Hypothyreose, Hyperthyreose, subklinische Formen und welche Werte was bedeuten.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Schilddrüsenwerte verstehen: TSH, T3 und T4 richtig deuten',
    description: 'TSH, freies T3 und freies T4 in einen Befund einordnen. Hypothyreose, Hyperthyreose, subklinische Formen und welche Werte was bedeuten.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/schilddruesenfunktion-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schilddrüsenwerte verstehen: TSH, T3 und T4 richtig deuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">5. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Laborbefund nennt drei Werte: <strong>TSH</strong>, <strong>freies T4</strong> und <strong>freies T3</strong>. Was bedeutet erhöht? Wann ist eine Behandlung nötig — und wann nur eine Kontrolle?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt das Hormon-Zusammenspiel von Hypophyse und Schilddrüse, die Referenzbereiche der ATA und die acht typischen Befundmuster.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie die Schilddrüse gesteuert wird</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Schilddrüse produziert <strong>T4 (Thyroxin, ~80 %)</strong> und <strong>T3 (Trijodthyronin, ~20 %)</strong>. T3 ist die biologisch aktive Form — sie wirkt direkt auf die Zellen und steuert Stoffwechsel, Herzfrequenz und Körpertemperatur. T4 ist die Speicherform und wird in den Geweben bei Bedarf in T3 umgewandelt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Hypophyse („Hirnanhangsdrüse") regelt die Produktion über <strong>TSH (Thyreoidea-stimulierendes Hormon)</strong>. Das Prinzip: negative Rückkopplung. Sind die Schilddrüsenhormone zu niedrig, schüttet die Hypophyse mehr TSH aus — und umgekehrt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Daraus folgt das Grundprinzip der Diagnostik: <strong>TSH spiegelt die Funktion umgekehrt wider</strong>. Hohe TSH-Werte sprechen für eine Unterfunktion, niedrige Werte für eine Überfunktion.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Referenzbereiche</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Normalbereich</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alternative Einheit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">TSH</td>
                <td class="px-6 py-3 text-stone-600">0,4 – 4,0 mIU/L</td>
                <td class="px-6 py-3 text-stone-600">= µIU/mL</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Freies T4</td>
                <td class="px-6 py-3 text-stone-600">0,8 – 1,8 ng/dL</td>
                <td class="px-6 py-3 text-stone-600">10,3 – 23,2 pmol/L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Freies T3</td>
                <td class="px-6 py-3 text-stone-600">2,3 – 4,2 pg/mL</td>
                <td class="px-6 py-3 text-stone-600">3,5 – 6,5 pmol/L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Quelle: American Thyroid Association (ATA). Schwangerschaft, Alter und Labormethode können die Bereiche verschieben.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die acht typischen Befundmuster</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">TSH</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">fT4</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Befund</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-green-600 font-semibold">Euthyreote Funktion</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Hoch</td><td class="px-6 py-3 text-stone-900">Niedrig</td><td class="px-6 py-3 text-red-600 font-semibold">Primäre Hypothyreose</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Hoch</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-yellow-600 font-semibold">Subklinische Hypothyreose</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Niedrig</td><td class="px-6 py-3 text-stone-900">Hoch</td><td class="px-6 py-3 text-red-600 font-semibold">Primäre Hyperthyreose</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Niedrig</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-yellow-600 font-semibold">Subklinische Hyperthyreose</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hypothyreose — wenn die Schilddrüse zu wenig produziert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Häufigste Ursache: <strong>Hashimoto-Thyreoiditis</strong>. Das Immunsystem zerstört langsam Schilddrüsengewebe. Folge: T4 sinkt, TSH steigt. Typische Symptome: Müdigkeit, Gewichtszunahme, Frieren, Verstopfung, trockene Haut, depressive Verstimmung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Behandlung: Levothyroxin als Tablette nüchtern. Ziel: TSH zwischen 0,5 und 2,5 mIU/L. Subklinische Formen (TSH erhöht, T4 normal) werden oft erst bei TSH &gt; 10 mIU/L oder Symptomen behandelt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hyperthyreose — wenn die Schilddrüse zu viel produziert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hauptursachen: <strong>Morbus Basedow</strong> (Autoimmunerkrankung mit TRAK-Antikörpern), autonome Adenome, Schilddrüsenentzündungen. Symptome: Herzrasen, Gewichtsverlust trotz Appetit, Schwitzen, Nervosität, Schlafstörungen, Tremor.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Behandlung je nach Ursache: Thyreostatika (Carbimazol), Radiojodtherapie oder Operation. Subklinische Formen erfordern Verlaufskontrolle wegen Risiken für Vorhofflimmern und Knochendichte.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deine Schilddrüsenwerte einordnen</h3>
        <p class="text-stone-300 text-sm mb-5">TSH, freies T3 und freies T4 eintragen — sofortige Einordnung in eines der acht Muster nach ATA-Leitlinien.</p>
        <router-link
          :to="localePath('thyroidFunction')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schilddrüsenhormone steuern den <router-link :to="localeBlogPath('grundumsatz-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Grundumsatz</router-link> direkt — eine Unterfunktion senkt ihn um bis zu 15 %. Auch dein <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Gesamtenergiebedarf</router-link> hängt davon ab. Bei begleitenden Stoffwechselstörungen lohnt sich ein Blick auf das <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link>, da Hashimoto und Typ-1-Diabetes häufig gemeinsam auftreten.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          TSH ist der empfindlichste Marker — bei Auffälligkeiten ergänzen freies T4 und freies T3 das Bild. Subklinische Formen sind häufig und brauchen oft nur Kontrolle, manifeste Formen eine Behandlung. Nutze unseren <router-link :to="localePath('thyroidFunction')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schilddrüsen-Rechner</router-link> als Orientierung, nicht als Diagnose-Ersatz.
        </p>
      </div>

      <RelatedArticles slug="schilddruesenfunktion-berechnen" />
    </div>
  </article>
</template>
