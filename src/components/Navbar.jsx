import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navItem = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-900' : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50'
    }`

  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/[LOGO_DATEI]" alt="Logo" className="h-8 w-auto" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <span className="text-slate-900 font-semibold">[INGENIEURBUERO_NAME]</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItem}>Start</NavLink>
            <NavLink to="/leistungen" className={navItem}>Leistungen</NavLink>
            <NavLink to="/ueber" className={navItem}>Über mich</NavLink>
            <NavLink to="/kontakt" className={navItem}>Kontakt</NavLink>
          </nav>
          <div className="hidden md:block">
            <Link to="/kontakt" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors">
              Statik anfragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
