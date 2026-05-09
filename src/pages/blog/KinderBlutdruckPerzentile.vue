<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Blutdruck bei Kindern: Perzentile verstehen und richtig einordnen | Health Calculators',
  description: 'Kinder-Blutdruck nach AAP-2017-Perzentile bewerten — warum Alter, Geschlecht und Größe entscheidend sind. Normal, hochnormal, Hypertonie Stadium 1 oder 2 — verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Blutdruck bei Kindern: Perzentile verstehen und richtig einordnen',
      description: 'Wie die AAP-2017-Leitlinie den Blutdruck bei Kindern und Jugendlichen einordnet. Risikozonen, Manschetten-Auswahl, Ursachen und was Eltern tun können.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kinder-blutdruck-perzentile',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was bedeutet Hypertonie bei Kindern?',
          acceptedAnswer: { '@type': 'Answer', text: 'Blutdruck ab dem 95. Perzentil für Alter, Geschlecht und Größe, gemessen an mindestens drei verschiedenen Tagen. Ab 13 Jahren gelten die Erwachsenen-Werte (≥130/80 mmHg = Stadium 1).' },
        },
        {
          '@type': 'Question',
          name: 'Warum ist die Manschettengröße so wichtig?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eine zu kleine Manschette täuscht zu hohe Werte vor — der häufigste Messfehler bei Kindern. Die Blase muss 80 % des Armumfangs umfassen.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Blutdruck bei Kindern: Perzentile verstehen und richtig einordnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">9. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bluthochdruck galt lange als Erwachsenenkrankheit. Heute weiß man: Etwa <strong>3,5 % der Kinder</strong> haben eine bestätigte Hypertonie — bei adipösen Kindern bis zu 25 %. Unbehandelt verkürzt sie das Leben. Die gute Nachricht: Wer früh erkannt wird, hat exzellente Chancen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die <strong>AAP-Leitlinie 2017</strong> liefert das Werkzeug — eine altersgenaue, geschlechts- und größenabhängige Tabelle. Anders als bei Erwachsenen reicht ein einzelner Grenzwert nicht. Was bei Kindern gemessen wird, muss in eine Perzentile eingeordnet werden. Und das ist kein Hexenwerk.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum „120/80" bei Kindern fast nichts aussagt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          120/80 mmHg ist beim 5-jährigen Kind ein <strong>klarer Hypertonie-Wert</strong> (Stadium 2). Bei einem 16-Jährigen liegt er an der Grenze zum hochnormalen Bereich. Der Unterschied: Ein 5-Jähriger ist klein, sein Herz pumpt gegen einen kürzeren Gefäßbaum — der physiologische Druck ist geringer. Mit Wachstum und Reifung steigt er kontinuierlich an.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Deshalb arbeitet die Pädiatrie mit <em>Perzentilen</em>: Wo liegt mein Kind im Vergleich zu gleichaltrigen, gleichgeschlechtlichen Kindern derselben Größe? Erst diese Frage beantwortet, ob ein Wert auffällig ist. Unser <router-link :to="localePath('pediatricBloodPressure')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Kinder-Blutdruck-Rechner</router-link> nimmt dir diese Einordnung ab.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Risikozonen</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bereich</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zone</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">&lt; 90. Perzentil</td>
                <td class="px-6 py-3 text-stone-600">Normal</td>
                <td class="px-6 py-3 text-stone-600">Routine bei Vorsorge</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">90. – 95. Perzentil</td>
                <td class="px-6 py-3 text-stone-600">Hochnormal</td>
                <td class="px-6 py-3 text-stone-600">Wiederholung nach 6 Monaten, Lebensstil</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">95. – 95.+12 mmHg</td>
                <td class="px-6 py-3 text-stone-600">Hypertonie Stadium 1</td>
                <td class="px-6 py-3 text-stone-600">2 weitere Messungen, ggf. Kinderkardiologie</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">&gt; 95.+12 mmHg</td>
                <td class="px-6 py-3 text-stone-600">Hypertonie Stadium 2</td>
                <td class="px-6 py-3 text-stone-600">Ärztliche Vorstellung in 1 Woche</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ab dem <strong>13. Geburtstag</strong> wechselt die AAP-Logik auf die Erwachsenenwerte (AHA): hochnormal ab 120/80, Stadium 1 ab 130/80, Stadium 2 ab 140/90. So bleibt der Übergang zur Erwachsenenmedizin nahtlos.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die richtige Manschettengröße — der häufigste Fehler</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine zu kleine Manschette „klemmt" und liefert falsch hohe Werte. Bei Kindern eine extrem häufige Fehlerquelle. Faustregel: Die <strong>aufblasbare Blase muss 80 % des Armumfangs umfassen</strong>, ihre Breite etwa 40 % der Oberarm-Länge betragen. In der Praxis bedeutet das oft eine Erwachsenen-Standard- statt Kinder-Manschette ab Schulalter.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Ruhig sitzen, 5 Min. Pause</strong> — keine Aufregung, kein Sport vorher.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Arm auf Herzhöhe</strong> — frei aufgelegt, nicht verkrampft.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Mehrere Messungen, mehrere Tage</strong> — eine Einzelmessung ist nie diagnostisch.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ursachen — Junge Kinder vs. Jugendliche</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei jüngeren Kindern überwiegen <strong>sekundäre Ursachen</strong>: Nierenerkrankungen (Reflux, Glomerulonephritis), Aortenisthmusstenose, endokrine Störungen (Schilddrüse, Nebenniere). Hier liefert oft die Bildgebung die Antwort.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei <strong>Jugendlichen ab 6 Jahren</strong> dominiert die primäre Hypertonie — eng verknüpft mit Übergewicht, Bewegungsmangel, Schlafapnoe und positiver Familienanamnese. Hier entscheidet der Lebensstil oft mehr als jede Tablette.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was Eltern tun können</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>60 Min. Bewegung täglich</strong> — Spielplatz, Rad, Sportverein. Senkt Blutdruck nachweislich um 5–10 mmHg.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Salzarm, gemüsereich</strong> — Fertigprodukte sind die Salzfalle Nr. 1. Frisch kochen schlägt jede Diät.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schlaf prüfen</strong> — 9–11 h für Schulkinder, 8–10 h für Teens. Schnarchen abklären lassen (OSAS!).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Bildschirmzeit begrenzen</strong> — &lt; 2 h passive Mediennutzung. Mehr Bewegung, weniger snacking.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Übergewicht angehen</strong> — schon 5 % Gewichtsabnahme senken den Blutdruck spürbar.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen &amp; Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blutdruck richtig messen</strong> — Technik, Manschette und Fehlerquellen für Erwachsene und Kinder. Zum <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Mess-Guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsperzentile</strong> — Größe und Gewicht deines Kindes im Vergleich. Zum <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Perzentile-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Kinder-Dosierung</strong> — Medikamente kindgerecht berechnen. Zum <router-link :to="localeBlogPath('kinder-dosierung-rechner')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Dosierungs-Rechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt den Blutdruck deines Kindes einordnen</h3>
        <p class="text-stone-300 text-sm mb-5">AAP-2017-Perzentile, anonym, sofort. Mit Schwellenwerten und Empfehlung.</p>
        <router-link
          :to="localePath('pediatricBloodPressure')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Kinder-Blutdruck-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ab welchem Alter wird Blutdruck gemessen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ab dem 3. Geburtstag bei jeder Vorsorgeuntersuchung. Bei Risikokindern (Frühgeburt, Adipositas, Nierenerkrankung, Herzfehler) auch früher und häufiger. Säuglinge unter 1 Jahr werden mit anderen Referenzwerten beurteilt.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was ist „White-Coat-Hypertonie"?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Erhöhte Werte ausschließlich in der Praxis, normale zuhause. Tritt bei bis zu 30 % der Kinder auf. Eine 24-Stunden-Blutdruckmessung schafft Klarheit — und erspart unnötige Therapie.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Sind Medikamente nötig?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Erst nach 6 Monaten Lebensstilintervention oder bei Stadium 2, sekundären Ursachen oder Endorganschäden. Erstwahl ist meistens ein ACE-Hemmer oder Calcium-Antagonist — die Entscheidung trifft der Kinderkardiologe.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Symptome sind ein Alarmzeichen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Heftige Kopfschmerzen, Sehstörungen, Erbrechen, Nasenbluten ohne Anlass, Brustschmerz oder Bewusstseinsstörung. Hier sofort 112 oder Kindernotaufnahme — nicht abwarten.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
