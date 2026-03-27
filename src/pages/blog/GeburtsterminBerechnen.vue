<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'

useHead({
  title: 'Geburtstermin berechnen: Naegele-Regel, SSW & Trimester erklärt | Health Calculators',
  description: 'Geburtstermin berechnen mit der Naegele-Regel. Schwangerschaftswochen, Trimester, Zykluslänge und warum der errechnete Termin nur ein Schätzwert ist.',
  path: '/blog/geburtstermin-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Geburtstermin berechnen: Naegele-Regel, SSW & Trimester erklärt',
    description: 'Geburtstermin berechnen mit der Naegele-Regel. Schwangerschaftswochen, Trimester, Zykluslänge und warum der errechnete Termin nur ein Schätzwert ist.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/geburtstermin-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Geburtstermin berechnen: Naegele-Regel, SSW &amp; Trimester erklärt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">27. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Du bist schwanger — herzlichen Glückwunsch! Eine der ersten Fragen lautet: <strong>Wann kommt das Baby?</strong> Der <strong>errechnete Geburtstermin</strong> (ET) gibt dir eine Orientierung für die nächsten 40 Wochen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie der Geburtstermin berechnet wird, was die Naegele-Regel ist, wie Schwangerschaftswochen und Trimester zusammenhängen — und warum nur etwa 4 % aller Babys am errechneten Termin geboren werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die Naegele-Regel?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Naegele-Regel</strong> ist die weltweit am häufigsten verwendete Methode zur Berechnung des voraussichtlichen Geburtstermins. Sie wurde im 19. Jahrhundert vom deutschen Gynäkologen Franz Naegele entwickelt und basiert auf einer einfachen Formel:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Naegele-Formel (bei 28-Tage-Zyklus)</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Erster Tag der letzten Periode <strong>+ 7 Tage − 3 Monate + 1 Jahr</strong>
          </p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Formel geht von einem <strong>28-Tage-Zyklus</strong> aus und nimmt an, dass der Eisprung am 14. Tag stattfindet. Daraus ergibt sich eine Schwangerschaftsdauer von <strong>280 Tagen</strong> (40 Wochen) ab dem ersten Tag der letzten Menstruation.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Ist der erste Tag deiner letzten Periode der 1. Januar 2026, ergibt sich: 1. Januar + 7 Tage = 8. Januar, minus 3 Monate = 8. Oktober 2025, plus 1 Jahr = <strong>8. Oktober 2026</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie berechnet man den Geburtstermin?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Es gibt mehrere Wege, den Geburtstermin zu bestimmen. Alle basieren auf demselben Prinzip: dem geschätzten Zeitpunkt der Empfängnis plus der durchschnittlichen Schwangerschaftsdauer.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nach der letzten Periode (Naegele-Regel)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die gängigste Methode. Du brauchst nur den ersten Tag deiner letzten Menstruation. Unser <router-link to="/pregnancy" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Geburtstermin-Rechner</router-link> nutzt genau diese Berechnung.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nach dem Empfängnisdatum</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn du das genaue Empfängnisdatum kennst, addierst du 266 Tage (38 Wochen). Dieser Wert ist genauer, weil er den Eisprung nicht schätzen muss.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nach dem Ultraschall</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Im ersten Trimester kann der Arzt die Scheitel-Steiß-Länge (SSL) messen. Diese Methode gilt als die genaueste und korrigiert bei Abweichungen oft den errechneten Termin.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zykluslänge und Einfluss auf den Termin</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Standard-Naegele-Regel setzt einen <strong>28-Tage-Zyklus</strong> voraus. Doch viele Frauen haben kürzere oder längere Zyklen. Das verschiebt den Eisprung — und damit den Geburtstermin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>erweiterte Naegele-Regel</strong> berücksichtigt das: Weicht dein Zyklus von 28 Tagen ab, wird die Differenz zum errechneten Termin addiert oder subtrahiert.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Erweiterte Formel</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Errechneter Termin (28-Tage-Zyklus) <strong>+ (Zykluslänge − 28) Tage</strong>
          </p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Bei einem 32-Tage-Zyklus verschiebt sich der Termin um 4 Tage nach hinten. Bei einem 25-Tage-Zyklus rückt er 3 Tage nach vorne. Unser <router-link to="/pregnancy" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Geburtstermin-Rechner</router-link> passt den Termin automatisch an deine Zykluslänge an.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Geburtstermin berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Basierend auf der Naegele-Regel — angepasst an deine Zykluslänge.</p>
        <router-link
          to="/pregnancy"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schwangerschaftswochen (SSW) verstehen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Schwangerschaft wird in <strong>40 Wochen</strong> eingeteilt, gezählt ab dem ersten Tag der letzten Periode. Das bedeutet: In den ersten zwei Wochen bist du medizinisch gesehen schon „schwanger", obwohl die Befruchtung noch nicht stattgefunden hat.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Angabe <strong>SSW 12+3</strong> bedeutet: 12 vollendete Wochen und 3 Tage — du bist also in der 13. Schwangerschaftswoche. Diese Zählweise ist international Standard und wird im Mutterpass dokumentiert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Jede Woche bringt neue Entwicklungsschritte. Der <router-link to="/pregnancy" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schwangerschaftsrechner</router-link> zeigt dir, in welcher SSW du dich befindest und welche Meilensteine anstehen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Trimester</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die 40 Wochen werden in drei <strong>Trimester</strong> aufgeteilt. Jedes Trimester hat eigene Schwerpunkte für die Entwicklung des Babys und das Befinden der Mutter.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Trimester (SSW 1–12)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alle Organe werden angelegt. Das Herz beginnt zu schlagen (SSW 6). Am Ende des ersten Trimesters ist der Embryo etwa 6 cm groß. Häufige Begleiterscheinungen: Übelkeit, Müdigkeit, empfindliche Brüste.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Trimester (SSW 13–27)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das Baby wächst schnell. Ab SSW 20 spüren die meisten Frauen die ersten Kindsbewegungen. Das Geschlecht ist erkennbar. Viele Schwangere fühlen sich in dieser Phase am wohlsten.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Trimester (SSW 28–40)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das Baby reift und nimmt deutlich an Gewicht zu. Die Lunge entwickelt sich vollständig. Ab SSW 37 gilt das Baby als „reif geboren". In den letzten Wochen dreht es sich meist in die Geburtsposition.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wichtige Meilensteine der Schwangerschaft</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Neben den Trimestern gibt es einzelne Meilensteine, die besonders bedeutsam sind:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <ul class="space-y-3 text-sm text-stone-500">
            <li><strong class="text-stone-700">SSW 6:</strong> Erster Herzschlag im Ultraschall sichtbar</li>
            <li><strong class="text-stone-700">SSW 12:</strong> Ende der kritischen Frühphase — Fehlgeburtsrisiko sinkt deutlich</li>
            <li><strong class="text-stone-700">SSW 20:</strong> Halbzeit — der große Organultraschall steht an</li>
            <li><strong class="text-stone-700">SSW 24:</strong> Überlebensfähigkeit außerhalb des Mutterleibs (mit intensivmedizinischer Betreuung)</li>
            <li><strong class="text-stone-700">SSW 28:</strong> Beginn des dritten Trimesters</li>
            <li><strong class="text-stone-700">SSW 37:</strong> Das Baby gilt als „reif geboren"</li>
            <li><strong class="text-stone-700">SSW 40:</strong> Errechneter Geburtstermin</li>
            <li><strong class="text-stone-700">SSW 42:</strong> Übertragung — Einleitung wird empfohlen</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der errechnete Termin nur ein Schätzwert ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der errechnete Geburtstermin ist kein festes Datum. Statistisch kommen nur <strong>etwa 4 % aller Babys</strong> genau am ET zur Welt. Der Großteil wird in einem Zeitfenster von <strong>zwei Wochen vor bis zwei Wochen nach</strong> dem Termin geboren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Gründe für die Ungenauigkeit sind vielfältig:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600 mb-4">
          <li>Der genaue Zeitpunkt des Eisprungs ist selten bekannt</li>
          <li>Die Zykluslänge variiert von Frau zu Frau und von Zyklus zu Zyklus</li>
          <li>Erste Schwangerschaften dauern im Schnitt etwas länger</li>
          <li>Genetische Faktoren beeinflussen die Schwangerschaftsdauer</li>
          <li>Die Naegele-Regel basiert auf Durchschnittswerten des 19. Jahrhunderts</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Betrachte den Geburtstermin daher als <strong>Orientierungswert</strong>. Dein Arzt wird den Termin bei Bedarf anhand von Ultraschallmessungen anpassen. Eine Geburt zwischen SSW 37 und SSW 42 gilt als normal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Geburtstermin und Gesundheit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine gesunde Schwangerschaft erfordert Aufmerksamkeit für Ernährung, Bewegung und Erholung. Einige unserer Rechner können dich dabei unterstützen:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600">
          <li>Dein <router-link to="/blog/wasserbedarf-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarf</router-link> steigt in der Schwangerschaft — berechne ihn mit unserem Rechner</li>
          <li>Achte auf die richtige <router-link to="/blog/makronaehrstoffe-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Verteilung der Makronährstoffe</router-link> für dich und dein Baby</li>
          <li>Ein gesunder <router-link to="/blog/bmi-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> vor der Schwangerschaft ist ein guter Ausgangspunkt</li>
        </ul>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Geburtstermin gibt dir einen wichtigen Anhaltspunkt, ist aber kein exaktes Datum. Die Naegele-Regel liefert eine bewährte Schätzung, die du mit unserem <router-link to="/pregnancy" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Geburtstermin-Rechner</router-link> sekundenschnell ermitteln kannst. Denk daran: Jede Schwangerschaft ist einzigartig — vertraue auf deinen Körper und dein ärztliches Team.
        </p>
      </div>

      <RelatedArticles slug="geburtstermin-berechnen" />
    </div>
  </article>
</template>
