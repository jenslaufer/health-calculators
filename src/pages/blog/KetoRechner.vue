<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Keto-Rechner: Makros für die ketogene Ernährung berechnen | Health Calculators',
  description: 'Keto-Makros berechnen: Fett, Protein und Netto-Kohlenhydrate für die ketogene Diät. TDEE-basiert, individuell angepasst.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Keto-Rechner: Makros für die ketogene Ernährung berechnen',
    description: 'Keto-Makros berechnen: Fett, Protein und Netto-Kohlenhydrate für die ketogene Diät. TDEE-basiert, individuell angepasst.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/keto-rechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Keto-Rechner: Makros für die ketogene Ernährung berechnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">3. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>ketogene Ernährung</strong> setzt auf hohen Fettanteil, moderates Protein und sehr wenige Kohlenhydrate. Ziel: den Körper in die Ketose bringen, einen Stoffwechselzustand, in dem Fett statt Glukose als primäre Energiequelle dient.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die Wissenschaft hinter der Ketose, die verschiedenen Keto-Varianten und wie du deine individuellen Makros berechnest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Ketose?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wenn du Kohlenhydrate auf unter 20-50 g pro Tag reduzierst, erschöpft der Körper seine Glykogenspeicher. Die Leber beginnt, Fettsäuren in <strong>Ketonkörper</strong> umzuwandeln — Acetoacetat, Beta-Hydroxybutyrat und Aceton. Diese Ketonkörper ersetzen Glukose als Brennstoff für Gehirn und Muskeln.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Übergang in die Ketose dauert typischerweise 2-7 Tage. Blut-Ketonwerte von 0,5-3,0 mmol/L gelten als nutritive Ketose.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Keto-Varianten</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Standard Keto (SKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              70-75 % Fett, 20-25 % Protein, 5-10 % Kohlenhydrate. Die klassische Variante für Einsteiger und Abnehmen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Targeted Keto (TKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Zusätzliche Kohlenhydrate rund ums Training. Ideal für Sportler, die vor dem Workout schnelle Energie brauchen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cyclical Keto (CKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              5 Keto-Tage, gefolgt von 2 Tagen mit höherer Kohlenhydratzufuhr. Geeignet für Kraftsportler, die Glykogenspeicher auffüllen müssen.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So berechnest du deine Keto-Makros</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schritt</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beschreibung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1. TDEE berechnen</td>
                <td class="px-6 py-3 text-stone-600">Mifflin-St Jeor + Aktivitätsfaktor</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">2. Kalorienziel</td>
                <td class="px-6 py-3 text-stone-600">Abnehmen: -20 %, Halten: 0 %, Aufbau: +10 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">3. Netto-Kohlenhydrate</td>
                <td class="px-6 py-3 text-stone-600">Standardwert: 20 g (einstellbar)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">4. Protein</td>
                <td class="px-6 py-3 text-stone-600">0,8 g pro lb Magermasse (1,0 g bei Muskelaufbau)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">5. Fett</td>
                <td class="px-6 py-3 text-stone-600">Restliche Kalorien &divide; 9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fehler und Tipps</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Elektrolyte nicht vergessen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              In der Ketose verliert der Körper mehr Natrium, Kalium und Magnesium. Ergänze gezielt, um Keto-Grippe-Symptome (Kopfschmerzen, Müdigkeit, Krämpfe) zu vermeiden.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Zu viel Protein vermeiden</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Überschüssiges Protein kann über Glukoneogenese in Glukose umgewandelt werden und die Ketose stören. Halte dich an die berechnete Menge.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Netto-Kohlenhydrate vs. Gesamt-Kohlenhydrate</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Netto-Kohlenhydrate = Gesamt-Kohlenhydrate minus Ballaststoffe. Ballaststoffe beeinflussen den Blutzucker nicht und zählen bei Keto nicht mit.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Keto-Makros berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Personalisierte Keto-Makros basierend auf deinem TDEE — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('keto')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Keto und andere Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Berechne zuerst deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> als Grundlage für dein Kalorienziel. Vergleiche außerdem mit deinem allgemeinen <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makro-Rechner</router-link>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Achte auf ausreichende Flüssigkeitszufuhr — dein <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarf</router-link> steigt in der Ketose.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die ketogene Ernährung kann beim Abnehmen, bei der Blutzuckerkontrolle und bei der mentalen Klarheit helfen. Der Schlüssel: die richtigen Makros, genug Elektrolyte und Geduld in der Umstellungsphase. Nutze unseren <router-link :to="localePath('keto')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Keto-Rechner</router-link> für deine persönlichen Werte.
        </p>
      </div>

      <RelatedArticles slug="keto-rechner" />
    </div>
  </article>
</template>
