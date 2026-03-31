const events = [
  {
    date: '2025 — laufend',
    title: 'Praktikum — Polizeibehörde',
    sub: 'Lokale KI-Infrastruktur',
    desc: 'Aufbau eines lokalen RAG-Systems mit Vektordatenbank und quellenbasierter Ausgabe. Ziel: datenschutzkonforme KI für interne Dokumente ohne Cloud-Anbindung.',
    tags: ['Ollama', 'RAG', 'VektorDB', 'Python', 'LangChain'],
    color: '#4affea',
    active: true,
  },
  {
    date: '05.2025 — 08.2025',
    title: 'ITC Werkstudent',
    sub: 'Miaglossa GmbH',
    desc: 'Systemadministration & IT-Support. Laptop-Provisioning, Onboarding, Software-Rollouts, Fehleranalyse & Event-Management für Großkunden.',
    tags: ['Sysadmin', 'IT-Support', 'Event-Management'],
    color: 'var(--green)',
  },
  {
    date: 'seit 2023',
    title: 'B.Sc. Digitale Forensik',
    sub: 'Hochschule Niederrhein · vorauss. 2026/27',
    desc: 'Fokus auf DFIR, Hardware-Security, Netzwerkforensik und Incident Response. Ø 2,29 · Forensikprojekt: 2,0.',
    tags: ['DFIR', 'Kriminalistik', 'Netzwerkforensik', 'Security'],
    color: '#c39bff',
  },
  {
    date: '08.2023 — 03.2025',
    title: 'Teaching Assistant',
    sub: 'CloudCommand GmbH',
    desc: 'Betreuung von 30+ Teilnehmenden in Cybersecurity-Kursen. Aufbau einer dauerhaften Cyber Range, AD-Labs, CTF-Szenarien. Vermittlung von PenTest, SIEM, IDS/IPS.',
    tags: ['Cyber Range', 'AD-Labs', 'CTF', 'SIEM', 'Lehre'],
    color: '#ffb347',
  },
  {
    date: '06.2022 — 09.2022',
    title: 'Social Media Manager',
    sub: 'Verapartner Leadership',
    desc: 'End-to-End Content-Ops: Fotografie, Videodreh, Schnitt, Kampagnenplanung & Performance-Analyse (KPIs).',
    tags: ['Content', 'KPI-Analyse', 'Video'],
    color: 'var(--text-dim)',
  },
]

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <h2 className="section-title">TIMELINE</h2>
        <div style={{ position: 'relative', paddingLeft: 24 }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: 1, background: 'var(--border)',
          }} />

          {events.map((ev, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 36 }}>
              {/* dot */}
              <div style={{
                position: 'absolute', left: -28, top: 6,
                width: 8, height: 8,
                background: ev.active ? ev.color : 'var(--bg)',
                border: `1px solid ${ev.color}`,
                boxShadow: ev.active ? `0 0 8px ${ev.color}` : 'none',
              }} />

              <div style={{
                border: '1px solid var(--border)',
                background: ev.active ? 'var(--bg2)' : 'var(--bg)',
                padding: '18px 22px',
                borderLeft: `2px solid ${ev.color}33`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--pixel)', fontSize: 8,
                      color: ev.color, marginBottom: 4, letterSpacing: 1,
                    }}>
                      {ev.title}
                      {ev.active && <span style={{
                        marginLeft: 10, fontSize: 7, background: ev.color,
                        color: 'var(--bg)', padding: '2px 6px', letterSpacing: 0,
                      }}>ACTIVE</span>}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-dim)' }}>{ev.sub}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-dim)', opacity: 0.6 }}>{ev.date}</div>
                </div>

                <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 12 }}>{ev.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ev.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--mono)', fontSize: 10,
                      border: `1px solid ${ev.color}22`,
                      color: ev.color, padding: '2px 8px',
                      background: `${ev.color}08`,
                      opacity: 0.9,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
