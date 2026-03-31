const contacts = [
  { label: 'Email', value: 'maxvietuhlmann@gmail.com', href: 'mailto:maxvietuhlmann@gmail.com' },
  { label: 'GitHub', value: 'github.com/maxviet', href: 'https://github.com/maxviet' },
  { label: 'Standort', value: 'Duisburg, DE', href: null },
]

export default function Contact() {
  return (
    <section id="kontakt" style={{ paddingBottom: 120 }}>
      <div className="container">
        <h2 className="section-title">KONTAKT</h2>
        <div style={{ maxWidth: 560 }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 32 }}>
            Offen für Werkstudentenstellen, Praktika und Projekte im Bereich DFIR, IT-Security und KI-Infrastruktur.
          </p>

          <div style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}>
            {contacts.map((c, i) => (
              <div key={c.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 20px',
                borderBottom: i < contacts.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--pixel)', fontSize: 7, color: 'var(--text-dim)', letterSpacing: 1 }}>{c.label}</span>
                {c.href ? (
                  <a href={c.href} style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}
                  >{c.value}</a>
                ) : (
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)' }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        marginTop: 60,
        borderTop: '1px solid var(--border)',
        padding: '20px 32px',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--pixel)', fontSize: 7, color: 'var(--text-dim)',
        letterSpacing: 1,
      }}>
        <span>&lt;MX/&gt; · 2025</span>
        <span>Built with React + Vite</span>
        <span>EOF ──</span>
      </div>
    </section>
  )
}
