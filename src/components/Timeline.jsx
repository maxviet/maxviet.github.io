const events = [
  {
    date: '2025 — laufend',
    title: 'Praktikum — Polizeibehörde',
    sub: 'Lokale KI-Infrastruktur',
    desc: 'Aufbau eines lokalen RAG-Systems mit Vektordatenbank und quellenbasierter Ausgabe. Ziel: datenschutzkonforme KI für interne Dokumente ohne Cloud-Anbindung.',
    tags: ['Ollama', 'RAG', 'VektorDB', 'Python', 'LangChain'],
    accent: '#4affea',
    accentSoft: 'rgba(74,255,234,0.28)',
    accentBg: 'rgba(74,255,234,0.1)',
    active: true,
  },
  {
    date: '05.2025 — 08.2025',
    title: 'ITC Werkstudent',
    sub: 'Miaglossa GmbH',
    desc: 'Systemadministration & IT-Support. Laptop-Provisioning, Onboarding, Software-Rollouts, Fehleranalyse & Event-Management für Großkunden.',
    tags: ['Sysadmin', 'IT-Support', 'Event-Management'],
    accent: '#00ff88',
    accentSoft: 'rgba(0,255,136,0.28)',
    accentBg: 'rgba(0,255,136,0.1)',
  },
  {
    date: 'seit 2023',
    title: 'B.Sc. Digitale Forensik',
    sub: 'Hochschule Niederrhein · vorauss. 2026/27',
    desc: 'Fokus auf DFIR, Hardware-Security, Netzwerkforensik und Incident Response. Ø 2,29 · Forensikprojekt: 2,0.',
    tags: ['DFIR', 'Kriminalistik', 'Netzwerkforensik', 'Security'],
    accent: '#c39bff',
    accentSoft: 'rgba(195,155,255,0.28)',
    accentBg: 'rgba(195,155,255,0.1)',
  },
  {
    date: '08.2023 — 03.2025',
    title: 'Teaching Assistant',
    sub: 'CloudCommand GmbH',
    desc: 'Betreuung von 30+ Teilnehmenden in Cybersecurity-Kursen. Aufbau einer dauerhaften Cyber Range, AD-Labs, CTF-Szenarien. Vermittlung von PenTest, SIEM, IDS/IPS.',
    tags: ['Cyber Range', 'AD-Labs', 'CTF', 'SIEM', 'Lehre'],
    accent: '#ffb347',
    accentSoft: 'rgba(255,179,71,0.28)',
    accentBg: 'rgba(255,179,71,0.1)',
  },
  {
    date: '06.2022 — 09.2022',
    title: 'Social Media Manager',
    sub: 'Verapartner Leadership',
    desc: 'End-to-End Content-Ops: Fotografie, Videodreh, Schnitt, Kampagnenplanung & Performance-Analyse (KPIs).',
    tags: ['Content', 'KPI-Analyse', 'Video'],
    accent: '#8ab89a',
    accentSoft: 'rgba(138,184,154,0.22)',
    accentBg: 'rgba(138,184,154,0.08)',
  },
]

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <h2 className="section-title">TIMELINE</h2>

        <div className="timeline">
          {events.map((ev, i) => (
            <article
              key={i}
              className={`timeline-item ${ev.active ? 'is-active' : ''}`}
              style={{
                '--accent': ev.accent,
                '--accent-soft': ev.accentSoft,
                '--accent-bg': ev.accentBg,
              }}
            >
              <div className="timeline-dot" />

              <div className="panel timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-title-row">
                      <h3 className="timeline-title">{ev.title}</h3>
                      {ev.active && <span className="timeline-active">ACTIVE</span>}
                    </div>

                    <div className="timeline-sub">{ev.sub}</div>
                  </div>

                  <div className="timeline-date">{ev.date}</div>
                </div>

                <p className="body-copy timeline-desc">{ev.desc}</p>

                <div className="tag-row">
                  {ev.tags.map(t => (
                    <span key={t} className="accent-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
