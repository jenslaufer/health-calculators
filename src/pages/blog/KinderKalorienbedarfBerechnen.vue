<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kinder-Kalorienbedarf berechnen: Wie viele Kalorien braucht mein Kind? | Health Calculators',
  description: 'Wie viele Kalorien braucht ein Kind pro Tag? IOM-Formel, Tabelle nach Alter und Aktivität, Wachstum, Pubertät — alles, was Eltern wissen müssen.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Kinder-Kalorienbedarf berechnen: Wie viele Kalorien braucht mein Kind?',
      description: 'IOM-EER-Formel, Tabellen nach Alter und Aktivität, Pubertätsschub und praktische Tipps für Eltern.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kinder-kalorienbedarf-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viele Kalorien braucht ein Kind pro Tag?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sehr stark altersabhängig — von rund 1000 kcal bei 2-Jährigen bis 2800 kcal bei aktiven 14-jährigen Jungen. Geschlecht, Aktivität und Wachstumsphase bestimmen den genauen Bedarf.' },
        },
        {
          '@type': 'Question',
          name: 'Welche Formel nutzt der Rechner?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die Estimated Energy Requirement (EER) des U.S. Institute of Medicine (DRI 2002/2005). Sie gilt als Standard in Pädiatrie und Ernährungswissenschaft.' },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kinder-Kalorienbedarf berechnen: Wie viele Kalorien braucht mein Kind?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eltern fragen sich oft: <strong>Isst mein Kind genug? Oder zu viel?</strong> Der Kalorienbedarf von Kindern unterscheidet sich stark vom Erwachsenenbedarf — er ist <strong>pro Kilogramm Körpergewicht höher</strong>, weil Wachstum, Hirnentwicklung und Bewegungsdrang Energie verschlingen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die <strong>Estimated Energy Requirement (EER)</strong> des U.S. Institute of Medicine ist der pädiatrische Standard. Sie berücksichtigt Alter, Geschlecht, Größe, Gewicht und ein altersgerechtes Aktivitätsniveau — und liefert eine realistische Tageszahl statt grober Faustregeln.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Kinder mehr Kalorien pro kg brauchen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein 6-jähriges Kind mit 22 kg braucht ca. 1500 kcal — also rund <strong>68 kcal pro kg</strong>. Ein 80 kg schwerer Erwachsener mit Bürotätigkeit kommt mit ca. 30 kcal/kg aus. Der Grund: Wachstum baut neues Gewebe auf, das Gehirn wächst rasant, und Kinder bewegen sich im Alltag deutlich mehr — selbst „ruhige" Kinder sind aktiver als die meisten Erwachsenen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das ist auch der Grund, warum die alte Faustregel „Kalorienbedarf = Körpergewicht × 30" für Kinder krass falsch liegt. Der Bedarf hängt vor allem vom <em>Alter</em> ab — und vom Aktivitätsniveau.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Richtwerte nach Alter und Geschlecht (kcal/Tag)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Junge (moderat)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Mädchen (moderat)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktiv (zusätzlich)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1–3 Jahre</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1000–1200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">950–1150</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+100–200</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">4–8 Jahre</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1400–1600</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1300–1500</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+200–400</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">9–13 Jahre</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1800–2200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1600–2000</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+400–600</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">14–18 Jahre</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2400–2800</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1800–2200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+400–800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Diese Werte sind <strong>Mittel über die Altersspanne</strong>. Innerhalb einer Altersgruppe variieren sie mit Größe und Wachstumsgeschwindigkeit. Der genaue Wert kommt aus dem Rechner.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Aktivitätsstufen — was sie bedeuten</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sedentary</strong> — Schule, Hausaufgaben, Bildschirm. Kaum geplante Bewegung. PA-Faktor 1.00.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Low active</strong> — typischer Schulalltag mit Gehen, Spielen draußen, gelegentlichem Sportunterricht. PA 1.13 (Junge) / 1.16 (Mädchen).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Active</strong> — regelmäßiges Vereinstraining (2–4×/Woche), aktiver Lebensstil. PA 1.26 / 1.31.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Very active</strong> — Leistungssport, mehrere Stunden tägliches Training, Wettkampfniveau. PA 1.42 / 1.56.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Pubertätsschub: Bedarf explodiert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Zwischen 10 und 16 Jahren steigt der Energiebedarf <strong>schubweise</strong>. Wachstumshormone schießen hoch, Knochen werden länger, Muskeln wachsen. Ein 14-jähriger Junge im Sport kann in dieser Phase <strong>3000 kcal und mehr</strong> brauchen — temporär mehr als viele Erwachsene.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Eltern bemerken das oft: Plötzlich verschwindet der gesamte Kühlschrank-Inhalt, Portionen werden riesig. Das ist normal — und endet, sobald das Längenwachstum abgeschlossen ist (Mädchen meist mit 14–16, Jungen mit 16–18).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was zählt mehr als die Zahl</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sättigungsgefühl</strong> — Kinder regulieren ihren Hunger sehr gut. Erzwungenes Aufessen oder strenge Portionen stört diese Selbstregulation.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lebensmittelqualität</strong> — Vollkorn, Gemüse, Eiweiß, gesunde Fette. Eine 1500-kcal-Pizza-Diät ist nicht dasselbe wie 1500 kcal aus ausgewogener Kost.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumskurve</strong> — wichtiger als Tageskalorien. Wenn Größe und Gewicht stabil auf einer Perzentile bleiben, passt der Bedarf.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Mahlzeiten-Rhythmus</strong> — 3 Hauptmahlzeiten + 1–2 Snacks. Kinder brauchen häufiger Energie als Erwachsene.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen &amp; Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>TDEE (Erwachsene)</strong> — Kalorienbedarf für Erwachsene mit der Mifflin-St-Jeor-Formel. Zum <router-link :to="localeBlogPath('tdee-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">TDEE-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsperzentile</strong> — wo liegt dein Kind im Vergleich zur Norm? Zum <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Wachstumsperzentile-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby-Trinkmenge</strong> — für Säuglinge unter 1 Jahr gilt eine eigene Berechnung nach kg Körpergewicht. Zum <router-link :to="localeBlogPath('baby-trinkmenge-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Trinkmengen-Rechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt den Kalorienbedarf deines Kindes berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">IOM-Formel, anonym, sofort. Mit metrischen und imperialen Einheiten.</p>
        <router-link
          :to="localePath('childCalories')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Kinder-Kalorienbedarf-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Soll ich Kalorien für mein Kind zählen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei gesunden Kindern: nein. Wachstumskurve, Sättigungsgefühl und Energie sind die besseren Indikatoren. Der Rechner hilft beim Einordnen, etwa wenn ein Kind plötzlich viel mehr oder weniger isst — oder bei Sportlerkindern.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Teenager isst riesige Mengen — ist das normal?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Sehr wahrscheinlich ja. Während des Pubertätsschubs steigt der Bedarf um 30–50 %. Solange Wachstum und Allgemeinzustand gut sind, ist der Hunger ein Signal des Körpers, nicht der Bequemlichkeit.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Kind ist übergewichtig — soll ich die Kalorien reduzieren?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nicht ohne ärztlichen Rat. Bei Kindern wird in der Regel nicht auf Gewichtsabnahme, sondern auf Gewichts-stabilisierung gesetzt — der wachsende Körper „dehnt" das Gewicht aus. Sprich mit Kinderarzt oder Ernährungsberatung.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ab wann gilt der Rechner?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ab 1 Jahr. Für Babys unter 12 Monaten gelten andere Empfehlungen — siehe Baby-Trinkmenge-Rechner. Bei Kleinkindern (1–2 Jahre) verwendet der Rechner die festen IOM-Referenzwerte ohne Größe und Gewicht.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
