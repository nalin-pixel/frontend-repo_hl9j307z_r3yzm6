import { Link } from 'react-router-dom'

const bullet = (text) => (
  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-900" /> <span>{text}</span></li>
)

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Tragwerksplanung für private Bauherren – schnell, fair, persönlich.
            </h1>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Spezialisierung auf private Bauvorhaben. Feste, transparente Preise. Angebot innerhalb von ca. 2 Werktagen, 
              fertige Unterlagen in der Regel nach 10–14 Tagen. Direkte Zusammenarbeit mit [INGENIEUR_NAME].
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors">
                Statik anfragen
              </Link>
              <a href="#upload" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-blue-900 text-blue-900 hover:bg-blue-50 transition-colors">
                Pläne hochladen & Angebot erhalten
              </a>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-slate-900 font-semibold mb-2">So unterstütze ich Sie</h3>
            <ul className="text-slate-700 space-y-2">
              {[
                'Umbau und Sanierung (z. B. Wanddurchbrüche)',
                'Anbau und Aufstockung',
                'Neubau: Ein- und Mehrfamilienhäuser',
                'Hallen- und Gewerbebauten',
              ].map((t) => bullet(t))}
            </ul>
            <p className="text-sm text-slate-500 mt-4">Alles rund um Standsicherheit im Hochbau – kein Tunnel- oder Brückenbau.</p>
          </div>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Ablauf in 3 Schritten</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Anfrage stellen',
                text: 'Kurzes Formular ausfüllen, Vorhaben beschreiben, Pläne optional hochladen.'
              },
              {
                title: 'Angebot erhalten',
                text: 'In der Regel innerhalb von ca. 2 Werktagen erhalten Sie ein faires Festpreis-Angebot.'
              },
              {
                title: 'Statik erhalten',
                text: 'Fertige Unterlagen meist in 10–14 Tagen – inklusive Begleitung bei Rückfragen.'
              }
            ].map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="h-8 w-8 rounded-md bg-blue-900 text-white flex items-center justify-center font-semibold">{i+1}</div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-700 mt-2">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Warum [INGENIEURBUERO_NAME]?</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-6 text-slate-700">
            {[
              'Feste Preise für private Bauherren – Planungskosten sollen kein Hindernis sein.',
              'Schnelle Reaktions- und Bearbeitungszeiten.',
              'Persönliche Betreuung durch [INGENIEUR_NAME].',
              'Erfahrung mit Projekten in ganz Deutschland.'
            ].map((t) => bullet(t))}
          </ul>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Kundenstimmen</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              'Sehr schnelle Rückmeldung und klare Kommunikation. Angebot kam nach einem Tag, super! – Bewertung über eine Online-Plattform',
              'Unkompliziert und zuverlässig. Die Statik war nach knapp zwei Wochen da und ohne Beanstandungen. – Bewertung über eine Online-Plattform',
              'Faire Konditionen und direkt mit dem Inhaber gesprochen. So stelle ich mir das vor. – Bewertung über eine Online-Plattform',
              'Pragmatisch und lösungsorientiert, man merkt die Praxisnähe. – Bewertung über eine Online-Plattform'
            ].map((t) => (
              <blockquote key={t} className="bg-white border border-slate-200 rounded-xl p-6 text-slate-700">{t}</blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Welche Unterlagen brauchen Sie für eine erste Einschätzung?',
                a: 'Ein kurzer Beschreibungstext und – wenn vorhanden – Grundrisse, Schnitte oder Fotos. Pläne können Sie bequem als PDF oder Bilder hochladen.'
              },
              {
                q: 'Wie schnell bekomme ich ein Angebot?',
                a: 'In der Regel innerhalb von etwa zwei Werktagen.'
              },
              {
                q: 'Arbeiten Sie nur in [STANDORT_REGION] oder bundesweit?',
                a: 'Ich arbeite bundesweit in Deutschland – digital und effizient.'
              },
              {
                q: 'Was kostet die Erstberatung?',
                a: 'Die Erstberatung und die Angebotserstellung sind für private Bauherren kostenfrei.'
              },
              {
                q: 'Welche Art von Bauvorhaben übernehmen Sie nicht?',
                a: 'Alles rund um den Hochbau ist abgedeckt. Tunnel- oder Brückenbau werden nicht angeboten.'
              }
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="text-slate-700 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/kontakt" className="inline-flex items-center px-5 py-3 rounded-md bg-blue-900 text-white hover:bg-blue-800">Jetzt Anfrage stellen</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
