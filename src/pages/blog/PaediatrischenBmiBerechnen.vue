<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kinder-BMI berechnen: Perzentile statt fester Grenzwerte | Health Calculators',
  description: 'Warum der BMI bei Kindern nicht über feste Grenzen, sondern als Perzentile bewertet wird. WHO-Methode, CDC-Klassifikation und wann eine Auffälligkeit klinisch relevant ist — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kinder-BMI berechnen: Perzentile statt fester Grenzwerte',
    description: 'Warum der BMI bei Kindern nicht über feste Grenzen, sondern als Perzentile bewertet wird. WHO-Methode, CDC-Klassifikation und wann eine Auffälligkeit klinisch relevant ist — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/paediatrischen-bmi-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kinder-BMI berechnen: Perzentile statt fester Grenzwerte</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">6. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Erwachsenen kennt jeder die Faustregel: BMI über 25 ist Übergewicht, über 30 Adipositas. Bei Kindern funktioniert das nicht. Ein BMI von 20 ist für ein 5-jähriges Kind <strong>viel zu hoch</strong> — bei einem 17-jährigen Teenager dagegen vollkommen normal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Grund: Der Körperfettanteil ändert sich im Wachstum stark. Deshalb wird der BMI bei Kindern und Jugendlichen <strong>alters- und geschlechtsspezifisch als Perzentile</strong> bewertet — und nicht über starre Schwellen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist eine Perzentile?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Perzentile vergleicht das Kind mit gleichaltrigen Kindern desselben Geschlechts. Beispiel: Liegt der BMI deines 8-jährigen Sohnes auf der <strong>75. Perzentile</strong>, heißt das, dass 75 % aller 8-jährigen Jungen einen niedrigeren BMI haben — und 25 % einen höheren. Sein BMI liegt also im oberen Drittel, aber im normalen Bereich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Diese Sichtweise ist robuster als feste Grenzwerte, weil sie das natürliche Wachstum berücksichtigt: ein BMI von 18 ist für ein 4-Jähriges hoch und für ein 14-jähriges niedrig.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Kategorien nach CDC und WHO</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Perzentile</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">&lt; 5. Perzentile</td><td class="px-6 py-3 text-amber-600">Untergewicht</td><td class="px-6 py-3 text-stone-600">Ärztliche Abklärung empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5. – 85. Perzentile</td><td class="px-6 py-3 text-green-600">Normalgewicht</td><td class="px-6 py-3 text-stone-600">Gewicht im gesunden Bereich</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">85. – 95. Perzentile</td><td class="px-6 py-3 text-orange-500">Übergewicht</td><td class="px-6 py-3 text-stone-600">Lebensstil-Beratung sinnvoll</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">≥ 95. Perzentile</td><td class="px-6 py-3 text-red-700">Adipositas</td><td class="px-6 py-3 text-stone-600">Strukturierte Therapie nötig</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Diese Klassifikation gilt für Kinder von 2 bis 20 Jahren. Für Säuglinge unter 2 Jahren wird statt BMI das Gewicht-für-Länge-Perzentil verwendet.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Kinder-BMI in 30 Sekunden bestimmen</h3>
        <p class="text-stone-300 text-sm mb-5">Alter, Geschlecht, Körpergröße und Gewicht eingeben — der Rechner liefert sofort BMI, Perzentile und Einordnung nach WHO und CDC. Kostenlos, ohne Anmeldung.</p>
        <router-link
          :to="localePath('pediatricBMI')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie wird die Perzentile berechnet?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die WHO veröffentlicht <strong>LMS-Tabellen</strong> für BMI nach Alter und Geschlecht. Drei Parameter pro Altersmonat:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>L</strong> — Box-Cox-Power-Parameter (korrigiert die Schiefe der Verteilung)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>M</strong> — Median (typischer BMI-Wert für dieses Alter und Geschlecht)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>S</strong> — Variationskoeffizient (Streuung der Verteilung)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Aus diesen Parametern wird ein <strong>z-Wert</strong> berechnet (Standardabweichungen vom Median) und über die Standardnormalverteilung in eine Perzentile umgerechnet. So entstehen aus drei Zahlen pro Altersgruppe die durchgehenden Wachstumskurven, die in den U-Untersuchungen verwendet werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ist ein hoher BMI klinisch relevant?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein einmalig erhöhter Wert ist noch kein Alarm. Entscheidend sind drei Punkte:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Verlauf statt Momentaufnahme:</strong> Wandert das Kind über mehrere Messungen aus seinem Perzentilen-Korridor heraus — nach oben oder unten — sollte das geklärt werden.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Konstitution:</strong> Sehr muskulöse oder spät reifende Kinder können einen erhöhten BMI ohne klinische Bedeutung haben. Ein Blick auf den Körperbau hilft.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Begleitfaktoren:</strong> Bluthochdruck, Insulinresistenz oder Fettstoffwechselstörung erhöhen das Risiko deutlich, auch bei moderatem Übergewicht.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was tun bei Übergewicht?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Diäten sind bei Kindern grundsätzlich problematisch — sie wachsen noch und brauchen Nährstoffe. Bewährte Ansätze:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bewegung statt Restriktion:</strong> 60 Minuten moderate Aktivität pro Tag reichen oft aus, um aus dem Perzentilenkorridor zurückzuwachsen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gemeinsame Mahlzeiten:</strong> Kinder, die mit der Familie essen, haben statistisch ein gesünderes Gewicht.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bildschirmzeit begrenzen:</strong> Zeit am Smartphone, Tablet oder Fernseher korreliert direkt mit erhöhtem BMI.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schlaf:</strong> Schlafmangel stört den Hormonhaushalt — Kinder mit zu wenig Schlaf entwickeln häufiger Übergewicht.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Rund um Wachstum und Körperzusammensetzung sind weitere Berechnungen hilfreich. Der
          <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner für Erwachsene</router-link>
          erklärt die Logik der WHO-Klassifikation. Die
          <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wachstumsperzentile</router-link>
          deckt zusätzlich Größe, Gewicht und Kopfumfang ab. Wer sich mit klassischen Idealgewichts-Formeln beschäftigt, findet den Vergleich im
          <router-link :to="localeBlogPath('idealgewicht-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht-Rechner</router-link>
          (gilt allerdings erst ab dem Erwachsenenalter).
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der BMI bei Kindern macht erst im Vergleich mit Gleichaltrigen Sinn. Mit unserem
          <router-link :to="localePath('pediatricBMI')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kinder-BMI-Rechner</router-link>
          erhältst du Perzentile und CDC-Einordnung in einem Schritt — von 2 bis 20 Jahren, getrennt nach Junge und Mädchen. Werte unter der 5. oder über der 95. Perzentile sind ein Anlass, mit dem Kinderarzt zu sprechen — alles dazwischen ist meist physiologisch.
        </p>
      </div>

      <RelatedArticles slug="paediatrischen-bmi-berechnen" />
    </div>
  </article>
</template>
