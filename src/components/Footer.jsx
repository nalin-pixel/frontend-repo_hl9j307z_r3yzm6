export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-slate-900 font-semibold mb-2 tracking-tight">[INGENIEURBUERO_NAME]</p>
          <p className="text-slate-600 text-sm leading-relaxed">Tragwerksplanung für private Bauherren in [STANDORT_REGION], tätig in ganz [STANDORT_LAND].</p>
        </div>
        <div>
          <p className="text-slate-900 font-semibold mb-2 tracking-tight">Navigation</p>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="text-slate-600 hover:text-[#0D2A4A]">Start</a></li>
            <li><a href="/leistungen" className="text-slate-600 hover:text-[#0D2A4A]">Leistungen</a></li>
            <li><a href="/ueber" className="text-slate-600 hover:text-[#0D2A4A]">Über mich</a></li>
            <li><a href="/kontakt" className="text-slate-600 hover:text-[#0D2A4A]">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <p className="text-slate-900 font-semibold mb-2 tracking-tight">Profile</p>
          <ul className="space-y-1 text-sm">
            <li><a href="[XING_PROFIL_URL]" target="_blank" className="text-slate-600 hover:text-[#0D2A4A]">Xing</a></li>
            <li><a href="[LINKEDIN_PROFIL_URL]" target="_blank" className="text-slate-600 hover:text-[#0D2A4A]">LinkedIn</a></li>
            <li><a href="[GOOGLE_UNTERNEHMENSPROFIL_URL]" target="_blank" className="text-slate-600 hover:text-[#0D2A4A]">Google Unternehmensprofil</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} [INGENIEURBUERO_NAME]. Alle Rechte vorbehalten. · <a className="hover:text-[#0D2A4A]" href="#">Impressum</a> · <a className="hover:text-[#0D2A4A]" href="#">Datenschutz</a> · <a className="hover:text-[#0D2A4A]" href="#">Cookies</a></div>
    </footer>
  )
}
