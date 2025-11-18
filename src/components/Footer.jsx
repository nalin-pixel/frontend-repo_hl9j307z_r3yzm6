export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-slate-900 font-semibold mb-2">[INGENIEURBUERO_NAME]</p>
          <p className="text-slate-600 text-sm">Tragwerksplanung für private Bauherren in [STANDORT_REGION], tätig in ganz [STANDORT_LAND].</p>
        </div>
        <div>
          <p className="text-slate-900 font-semibold mb-2">Rechtliches</p>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="text-slate-600 hover:text-blue-900">Impressum</a></li>
            <li><a href="#" className="text-slate-600 hover:text-blue-900">Datenschutz</a></li>
            <li><a href="#" className="text-slate-600 hover:text-blue-900">Cookie-Hinweis</a></li>
          </ul>
        </div>
        <div>
          <p className="text-slate-900 font-semibold mb-2">Profile</p>
          <ul className="space-y-1 text-sm">
            <li><a href="[XING_PROFIL_URL]" target="_blank" className="text-slate-600 hover:text-blue-900">Xing</a></li>
            <li><a href="[LINKEDIN_PROFIL_URL]" target="_blank" className="text-slate-600 hover:text-blue-900">LinkedIn</a></li>
            <li><a href="[GOOGLE_UNTERNEHMENSPROFIL_URL]" target="_blank" className="text-slate-600 hover:text-blue-900">Google Unternehmensprofil</a></li>
          </ul>
        </div>
        <div>
          <p className="text-slate-900 font-semibold mb-2">Kontakt</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>Telefon: <a href="tel:[TELEFONNUMMER]" className="hover:text-blue-900">[TELEFONNUMMER]</a></li>
            <li>E-Mail: <a href="mailto:[EMAIL_ADRESSE]" className="hover:text-blue-900">[EMAIL_ADRESSE]</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} [INGENIEURBUERO_NAME]. Alle Rechte vorbehalten.</div>
    </footer>
  )
}
