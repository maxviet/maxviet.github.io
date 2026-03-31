const projects = [
  {
    id: 'smartlock',
    label: 'CASE STUDY',
    title: 'ESP32 Smartlock — Forensische Analyse',
    desc: 'Forensische Untersuchung eines manipulierten ESP32-Smartlocks für ItsSecure GmbH. Firmware-Dump, SQLite-Forensik, MD5-Hash-Cracking und MariaDB-Binlog-Rekonstruktion zur Aufdeckung von 7 unregistrierten RFID-Tags.',
    tags: ['Wireshark', 'esptool', 'Autopsy', 'hashcat', 'UART', 'MariaDB BinLog', 'Kali Linux'],
    findings: [
      'Unverschlüsselte HTTP-Kommunikation mit Credential-Sniffing',
      'Unsichere MD5-Hashes geknackt (rockyou.txt)',
      '7 nicht-registrierte RFID-Tags mit Systemzugriff nachgewiesen',
      'Gelöschte DB-Einträge via Binary Logs rekonstruiert',
    ],
    accent: '#00ff88',
    accentSoft: 'rgba(0,255,136,0.28)',
    accentBg: 'rgba(0,255,136,0.1)',
    featured: true,
  },
  {
    id: 'rag',
    label: 'PRAKTIKUM PROJEKT',
    title: 'Lokale RAG-KI — Polizeibehörde',
    desc: 'Aufbau einer vollständig lokalen KI-Infrastruktur mit RAG-System für eine Polizeibehörde. Keine Cloud-Anbindung — alle Daten bleiben lokal. Quellenbasierte Antworten mit Vektordatenbank.',
    tags: ['Python', 'Ollama', 'LangChain', 'VektorDB', 'RAG', 'Linux'],
    findings: [
      'Air-gapped lokale LLM-Infrastruktur',
      'Dokumenten-Ingestion mit Vektordatenbank',
      'Quellenangabe bei jeder KI-Antwort',
      'Datenschutzkonformer Betrieb ohne externe APIs',
    ],
    accent: '#4affea',
    accentSoft: 'rgba(74,255,234,0.28)',
    accentBg: 'rgba(74,255,234,0.1)',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projekte">
      <div className="container">
        <h2 className="section-title" data-reveal>PROJEKTE</h2>

        <div className="projects-grid">
          {projects.map((p, index) => (
            <article
              key={p.id}
              className="panel project-card"
              data-reveal
              style={{
                '--accent': p.accent,
                '--accent-soft': p.accentSoft,
                '--accent-bg': p.accentBg,
                '--reveal-delay': `${70 + index * 80}ms`,
              }}
            >
              {p.featured && (
                <div className="feature-flag">FEATURED</div>
              )}

              <div className="project-head">
                <div className="panel-label project-label">// {p.label}</div>
              </div>

              <h3 className="project-title">
                {p.title}
              </h3>

              <p className="body-copy project-desc">{p.desc}</p>

              <ul className="project-findings">
                {p.findings.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="tag-row">
                {p.tags.map(t => (
                  <span key={t} className="accent-tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
