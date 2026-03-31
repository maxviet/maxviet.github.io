const contacts = [
  { label: 'Email', value: 'maxvietuhlmann@gmail.com', href: 'mailto:maxvietuhlmann@gmail.com' },
  { label: 'GitHub', value: 'github.com/maxviet', href: 'https://github.com/maxviet' },
  { label: 'Standort', value: 'Duisburg, DE', href: null },
]

export default function Contact() {
  const year = new Date().getFullYear()
  const focusAreas = ['Werkstudent', 'Praktikum', 'DFIR Projekte']

  return (
    <section id="kontakt" className="contact-section">
      <div className="container">
        <h2 className="section-title">KONTAKT</h2>

        <div className="contact-grid">
          <div className="panel contact-copy-panel">
            <div className="panel-label">open_channel</div>

            <p className="body-copy contact-copy">
              Offen für Werkstudentenstellen, Praktika und Projekte im Bereich DFIR, IT-Security und KI-Infrastruktur.
            </p>

            <div className="hero-actions contact-actions">
              <a href="mailto:maxvietuhlmann@gmail.com" className="button button-primary">
                Mail schreiben
              </a>

              <a href="/Lebenslauf_MaxUhlmann.pdf" download className="button button-secondary">
                CV herunterladen
              </a>
            </div>

            <div className="hero-signal-row contact-signal-row">
              {focusAreas.map(area => (
                <span key={area} className="signal-chip">{area}</span>
              ))}
            </div>
          </div>

          <div className="panel contact-list-panel">
            <div className="panel-label">contact_points</div>

            <div className="contact-list">
              {contacts.map((c, i) => (
                <div key={c.label} className={`contact-row ${i === contacts.length - 1 ? 'is-last' : ''}`}>
                  <span className="contact-label">{c.label}</span>

                {c.href ? (
                    <a href={c.href} className="contact-link">{c.value}</a>
                ) : (
                    <span className="contact-value">{c.value}</span>
                )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <span>&lt;MX/&gt; · {year}</span>
          <span>React + Vite · GitHub Pages</span>
          <span>EOF //</span>
        </div>
      </footer>
    </section>
  )
}
