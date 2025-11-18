import { useState } from 'react'

export default function Kontakt() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    zip_city: '',
    project_type: 'Umbau',
    description: ''
  })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files || []))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Sende Anfrage...' })

    const data = new FormData()
    Object.entries(form).forEach(([k,v]) => data.append(k, v))
    data.append('source', 'kontakt')
    files.forEach(f => data.append('files', f))

    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        body: data
      })
      if (!res.ok) throw new Error(await res.text())
      const json = await res.json()
      setStatus({ type: 'success', msg: 'Vielen Dank! Ihre Anfrage wurde übermittelt. Sie erhalten in ca. 2 Werktagen ein Angebot.' })
      setForm({ name: '', email: '', phone: '', zip_city: '', project_type: 'Umbau', description: '' })
      setFiles([])
    } catch (err) {
      setStatus({ type: 'error', msg: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder nutzen Sie Telefon/E-Mail.' })
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Kontakt</h1>
        <p className="mt-4 text-slate-700">Unkomplizierte Kontaktaufnahme – kurzes Formular, schnelle Rückmeldung. Angebot in ca. 2 Werktagen, übliche Bearbeitungszeit 10–14 Tage.</p>
      </header>

      <section className="mt-8">
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name*</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">E-Mail*</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Telefon*</label>
              <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">PLZ / Ort des Bauvorhabens*</label>
              <input required name="zip_city" value={form.zip_city} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Art des Vorhabens*</label>
              <select name="project_type" value={form.project_type} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900">
                {['Umbau','Sanierung','Anbau/Aufstockung','Neubau','Hallenbau','Sonstiges'].map(o=> <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div id="upload">
              <label className="block text-sm font-medium text-slate-700">Pläne / Unterlagen (optional)</label>
              <input type="file" multiple onChange={handleFiles} accept=".pdf,image/*" className="mt-1 w-full text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Kurzbeschreibung Ihres Bauvorhabens*</label>
            <textarea required name="description" rows={5} value={form.description} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </div>

          {status && (
            <div className={`text-sm ${status.type==='success' ? 'text-green-700' : status.type==='error' ? 'text-red-700' : 'text-slate-600'}`}>{status.msg}</div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-900 text-white hover:bg-blue-800">Anfrage senden</button>
            <a href={`tel:[TELEFONNUMMER]`} className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-blue-900 text-blue-900 hover:bg-blue-50">Oder telefonisch: [TELEFONNUMMER]</a>
            <a href={`mailto:[EMAIL_ADRESSE]`} className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">E-Mail schreiben</a>
            <a href={`https://wa.me/[KONTAKT_WHATSAPP_NUMMER]`} target="_blank" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-green-600 text-green-700 hover:bg-green-50">Kontakt per WhatsApp</a>
          </div>
        </form>
      </section>

      {/* Schnell-Anfrage */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Schnell-Anfrage</h2>
        <form onSubmit={handleSubmit} className="mt-4 bg-white border border-slate-200 rounded-xl p-6 grid md:grid-cols-3 gap-4">
          <select name="project_type" value={form.project_type} onChange={handleChange} className="border border-slate-300 rounded-md px-3 py-2">
            {['Umbau','Sanierung','Anbau/Aufstockung','Neubau','Hallenbau','Sonstiges'].map(o=> <option key={o} value={o}>{o}</option>)}
          </select>
          <input required placeholder="Name" name="name" value={form.name} onChange={handleChange} className="border border-slate-300 rounded-md px-3 py-2" />
          <input required placeholder="E-Mail" type="email" name="email" value={form.email} onChange={handleChange} className="border border-slate-300 rounded-md px-3 py-2" />
          <input required placeholder="Telefon" name="phone" value={form.phone} onChange={handleChange} className="border border-slate-300 rounded-md px-3 py-2" />
          <input required placeholder="PLZ / Ort" name="zip_city" value={form.zip_city} onChange={handleChange} className="border border-slate-300 rounded-md px-3 py-2" />
          <input type="file" multiple onChange={handleFiles} accept=".pdf,image/*" className="text-sm" />
          <textarea required placeholder="Kurzbeschreibung" name="description" rows={3} value={form.description} onChange={handleChange} className="md:col-span-3 border border-slate-300 rounded-md px-3 py-2" />
          <button type="submit" className="md:col-span-3 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-900 text-white hover:bg-blue-800">Senden</button>
        </form>
      </section>
    </main>
  )
}
