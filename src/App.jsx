import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Ueber from './pages/Ueber'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/ueber" element={<Ueber />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
