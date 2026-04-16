<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'

useHead({
  title: 'Körpertyp bestimmen: Ektomorph, Mesomorph oder Endomorph — Was bin ich?',
  description: 'Körpertyp bestimmen mit der Heath-Carter-Methode. Was bedeuten Ektomorph, Mesomorph und Endomorph? Somatotypen erklärt mit Trainings- und Ernährungsempfehlungen.',
  path: '/de/blog/koerpertyp-bestimmen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Körpertyp bestimmen: Ektomorph, Mesomorph oder Endomorph',
    description: 'Körpertyp bestimmen mit der Heath-Carter-Methode. Was bedeuten Ektomorph, Mesomorph und Endomorph?',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-16',
    dateModified: '2026-04-16',
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/de/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Körpertyp bestimmen: Ektomorph, Mesomorph oder Endomorph</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">16. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Warum nimmt einer kaum zu, egal wie viel er isst — und ein anderer schaut ein Croissant an und sieht es sofort auf der Waage? Die Antwort liegt im <strong>Somatotyp</strong>, dem wissenschaftlichen Konzept des Körperbautyps.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Modell der drei Körpertypen — <strong>Ektomorph</strong>, <strong>Mesomorph</strong> und <strong>Endomorph</strong> — wurde in den 1940er-Jahren vom Psychologen William Sheldon entwickelt und später von Barbara Heath und Jack Carter zur messbaren <em>Heath-Carter-Methode</em> verfeinert. Heute ist es ein nützliches Werkzeug zur Individualisierung von Training und Ernährung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist ein Somatotyp?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Somatotyp beschreibt die relative Ausprägung von drei Körperbaukomponenten auf einer Skala von 0,5 bis 9:
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-blue-800 mb-2">Ektomorphie — Linearität</h3>
            <p class="text-sm text-blue-700">Beschreibt die relative Schlankheit und Länge des Körpers. Hohe Ektomorphie = schlanker Rahmen, niedriges Gewicht im Verhältnis zur Größe.</p>
          </div>
          <div class="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-green-800 mb-2">Mesomorphie — Muskelentwicklung</h3>
            <p class="text-sm text-green-700">Beschreibt die relative Muskelmasse und Knochenstruktur. Hohe Mesomorphie = athletisch, breite Schultern, ausgeprägte Muskulatur.</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-orange-800 mb-2">Endomorphie — Körperfettanteil</h3>
            <p class="text-sm text-orange-700">Beschreibt den relativen Körperfettanteil. Hohe Endomorphie = rundlichere Körperform, Tendenz zur Fettspeicherung.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: Jeder Mensch hat <em>alle drei</em> Komponenten — kein Mensch ist reiner Ektomorph oder reiner Endomorph. Ein Somatotyp wird als Zahlentripel angegeben, z. B. <strong>2-5-3</strong> (Ektomorphie-Mesomorphie-Endomorphie).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Körpertypen im Überblick</h2>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Ektomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Ektomorphe sind schlank, langgliedrig und haben Schwierigkeiten, Gewicht zuzunehmen — ob Muskeln oder Fett. Sie haben einen schnellen Stoffwechsel und einen schlanken Knochenrahmen (erkennbar am kleinen Handgelenkumfang).
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Schmale Schultern und Hüften</li>
            <li>Langer, schlanker Körperbau</li>
            <li>Schneller Stoffwechsel</li>
            <li>Schlechte Reaktion auf Muskelaufbautraining ohne hohe Kalorienaufnahme</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Beispiele: Marathonläufer, Schwimmer, viele Modeltypen</p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Mesomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Mesomorphe gelten als genetisch Begünstigte im Sport: Sie bauen schnell Muskeln auf, haben natürlicherweise niedrigen Körperfettanteil und einen athletischen Körperbau. Breite Schultern, schmale Taille und gute Reaktion auf Training sind typisch.
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Breite Schultern, schlanke Taille</li>
            <li>Ausgeprägte Muskulatur</li>
            <li>Schnelle Anpassung an Training</li>
            <li>Kontrollierter Körperfettanteil bei normaler Ernährung</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Beispiele: Sprinter, Bodybuilder, American-Football-Spieler</p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Endomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Endomorphe haben einen breiteren Körperbau, neigen zur Fettspeicherung und haben oft Schwierigkeiten, Gewicht zu verlieren. Das bedeutet jedoch nicht, dass sie nicht athletisch sein können — viele Kraftsportler und Ringer sind stark endomorphisch.
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Breiterer, rundlicherer Körperbau</li>
            <li>Höherer Körperfettanteil</li>
            <li>Langsamer Stoffwechsel</li>
            <li>Gute natürliche Kraft, aber Fettabbau erfordert mehr Aufwand</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Beispiele: Gewichtheber, Sumoringer, viele Kraftsportler</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gemischte Typen: Die Realität</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die meisten Menschen sind keine reinen Typen, sondern Mischformen:
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
          <div class="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-teal-800 mb-1">Ekto-Mesomorph</div>
            <div class="text-sm text-teal-700">Schlanker, athletischer Typ. Leichter Muskelaufbau bei niedrigem Körperfett.</div>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-yellow-800 mb-1">Endo-Mesomorph</div>
            <div class="text-sm text-yellow-700">Kräftiger, muskulöser Typ mit Neigung zu Fetteinlagerungen.</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-purple-800 mb-1">Ekto-Endomorph</div>
            <div class="text-sm text-purple-700">Schmaler Rahmen, aber verhältnismäßig hoher Körperfettanteil (sog. &ldquo;skinny fat&rdquo;).</div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Heath-Carter-Methode</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die wissenschaftlich fundierte Methode zur Somatotypbestimmung nach Heath und Carter (1990) verwendet präzise Körpermessungen:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-5 mb-4">
          <h3 class="text-sm font-semibold text-stone-700 mb-3">Benötigte Messungen:</h3>
          <ul class="text-sm text-stone-600 space-y-2 list-disc list-inside">
            <li><strong>Ektomorphie:</strong> Größe und Gewicht → Größe-Gewicht-Verhältnis (HWR)</li>
            <li><strong>Endomorphie:</strong> Hautfaltendicke (Trizeps, Rücken, Bauch) — oder Körperfettanteil als Näherungswert</li>
            <li><strong>Mesomorphie:</strong> Knochenbreiten (Humerus, Femur), Muskelumfänge (Arm, Wade)</li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Da Hautfaltenmessungen spezielle Zangen erfordern, nutzt unser Rechner vereinfachte Eingaben: Handgelenkumfang (Knochenstruktur), Schulterbreite und Hüftbreite — ergänzt durch den optionalen Körperfettanteil für präzisere Endomorphiewerte.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deinen Körpertyp jetzt bestimmen</h3>
        <p class="text-stone-300 text-sm mb-5">Mit individuellem Somatotyp, Trainings- und Ernährungsempfehlungen — kostenlos, ohne Anmeldung.</p>
        <router-link
          to="/de/koerpertyp-rechner"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Körpertyp bestimmen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Trainingsempfehlungen nach Körpertyp</h2>

        <div class="space-y-5">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ektomorph: Aufbaufokus</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Schweres Krafttraining mit geringen Wiederholungszahlen (6–8 Reps, 3–5 Sätze). Minimales Cardio. Grundübungen wie Kniebeugen, Kreuzheben und Bankdrücken stehen im Mittelpunkt. Erholung ist genauso wichtig wie das Training selbst.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mesomorph: Vielseitigkeit</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Kombination aus Kraft- und Ausdauertraining. 3–4 Krafteinheiten mit mittlerem Gewicht (8–12 Reps) plus 2–3 Cardio-Sessions. Dieser Typ reagiert gut auf fast jedes Trainingskonzept.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Endomorph: Stoffwechsel ankurbeln</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              HIIT-Cardio 3–4× pro Woche plus Krafttraining. Circuit-Training mit kurzen Pausen maximiert den Kalorienverbrauch. Konsequenz ist entscheidend — mindestens 5 Trainingstage pro Woche empfohlen.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ernährungsempfehlungen nach Körpertyp</h2>

        <div class="space-y-5">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ektomorph: Kalorienüberschuss</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              300–500 kcal/Tag über dem Bedarf. Hoher Kohlenhydratanteil (50–60 %), ausreichend Protein (1,6–2,0 g/kg/Tag). Häufige Mahlzeiten (5–6×/Tag) helfen, den Kalorienzielen gerecht zu werden.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mesomorph: Ausgewogene Makros</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              ~40 % Kohlenhydrate, ~30 % Protein, ~30 % Fett. Kalorien je nach Ziel anpassen. Protein: 1,6–2,0 g/kg/Tag. Saubere, unverarbeitete Lebensmittel bilden die Basis.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Endomorph: Kohlenhydrate kontrollieren</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Kohlenhydrate auf 30–40 % reduzieren, einfache Zucker vermeiden. Protein priorisieren (2,0–2,4 g/kg/Tag). Regelmäßige Mahlzeiten stabilisieren den Blutzucker. Kalorientracking ist für diesen Typ besonders hilfreich.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzen des Somatotyp-Modells</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Somatotyp-Modell ist ein nützliches Orientierungsrahmenwerk, aber kein Schicksal:
        </p>
        <ul class="text-sm text-stone-600 space-y-2 list-disc list-inside">
          <li>Der Somatotyp kann sich durch Training und Ernährung verändern</li>
          <li>Genetik ist ein Faktor, aber nicht das einzige Schicksal</li>
          <li>Das Modell erklärt keine hormonellen, metabolischen oder psychologischen Faktoren</li>
          <li>Mischtypen sind die Regel, nicht die Ausnahme</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Nutze deinen Somatotyp als Ausgangspunkt, nicht als Einschränkung. Er hilft, Training und Ernährung effizienter auf den eigenen Körper abzustimmen — aber individuelle Fortschritte sind immer möglich.
        </p>
      </div>

      <RelatedArticles slug="koerpertyp-bestimmen" />
    </div>
  </article>
</template>
