export default function Ueber() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Über mich</h1>
        <p className="mt-4 text-slate-700">[INGENIEUR_NAME], Inhaber von [INGENIEURBUERO_NAME]. Tragwerksplaner mit langjähriger Erfahrung in Planung und Ausführung.</p>
      </header>

      <section className="mt-8 space-y-4 text-slate-700">
        <p>
          Mein Schwerpunkt liegt auf der Zusammenarbeit mit privaten Bauherren. Ziel ist immer eine praxistaugliche, wirtschaftliche Lösung – damit am Ende gebaut werden kann und nicht nur ein Papier entsteht.
        </p>
        <p>
          Feste Preise für Privatkunden sind Teil meiner Philosophie: Planungskosten sollen kein Hindernis sein. Ich begleite Projekte bis zur Ausführung und stehe für Rückfragen verlässlich zur Verfügung.
        </p>
        <p>
          Durch zahlreiche Projekte in ganz Deutschland kenne ich die typischen Fragestellungen – vom Wanddurchbruch bis zum Mehrfamilienhaus.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Werte</h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
          <li>Faire, transparente Preise</li>
          <li>Termintreue und Verlässlichkeit</li>
          <li>Verständliche Kommunikation ohne Fachchinesisch</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Mehr über mich</h2>
        <div className="mt-4 flex gap-3">
          <a href="[XING_PROFIL_URL]" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md border border-blue-900 text-blue-900 hover:bg-blue-50">Xing-Profil</a>
          <a href="[LINKEDIN_PROFIL_URL]" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800">LinkedIn-Profil</a>
        </div>
      </section>
    </main>
  )
}
