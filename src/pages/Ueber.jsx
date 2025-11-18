export default function Ueber() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
      <div className="order-2 md:order-1">
        <div className="inline-block mb-3 h-1 w-10 bg-[#0D2A4A]" />
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Über mich</h1>
        <p className="mt-4 text-slate-700">[INGENIEUR_NAME], Inhaber von [INGENIEURBUERO_NAME]. Tragwerksplaner mit langjähriger Erfahrung in Planung und Ausführung.</p>

        <section className="mt-8 space-y-4 text-slate-700 leading-relaxed">
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
            <a href="[XING_PROFIL_URL]" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md border border-[#0D2A4A] text-[#0D2A4A] hover:bg-slate-100">Xing-Profil</a>
            <a href="[LINKEDIN_PROFIL_URL]" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md bg-[#0D2A4A] text-white hover:bg-[#123557]">LinkedIn-Profil</a>
          </div>
        </section>
      </div>

      <div className="order-1 md:order-2">
        <div className="aspect-[4/5] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-400">
          Foto / Illustration
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700">
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"><span>Erfahrung</span><span className="font-medium text-slate-900">10+ Jahre</span></li>
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"><span>Fokus</span><span className="font-medium text-slate-900">Private Bauherren</span></li>
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"><span>Region</span><span className="font-medium text-slate-900">[STANDORT_REGION], tätig in ganz [STANDORT_LAND]</span></li>
        </ul>
      </div>
    </main>
  )
}
