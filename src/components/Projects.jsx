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
    color: 'var(--green)',
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
    color: '#4affea',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projekte">
      <div className="container">
        <h2 className="section-title">PROJEKTE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {projects.map(p => (
            <div key={p.id} style={{
              border: `1px solid ${p.color}44`,
              background: 'var(--bg2)',
              padding: '24px',
              position: 'relative',
              boxShadow: `0 0 20px ${p.color}08`,
            }}>
              {p.featured && (
                <div style={{
                  position: 'absolute', top: -1, right: 20,
                  fontFamily: 'var(--pixel)', fontSize: 7,
                  background: p.color, color: 'var(--bg)',
                  padding: '3px 10px', letterSpacing: 1,
                }}>
                  FEATURED
                </div>
              )}

              <div style={{ fontFamily: 'var(--pixel)', fontSize: 7, color: p.color, marginBottom: 10, opacity: 0.7, letterSpacing: 2 }}>
                // {p.label}
              </div>

              <div style={{ fontFamily: 'var(--pixel)', fontSize: 9, color: p.color, marginBottom: 14, lineHeight: 1.6 }}>
                {p.title}
              </div>

              <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 16 }}>
                {p.desc}
              </p>

              <div style={{ marginBottom: 16 }}>
                {p.findings.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 8, marginBottom: 5, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-dim)' }}>
                    <span style={{ color: p.color, flexShrink: 0 }}>▸</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)', fontSize: 10,
                    border: `1px solid ${p.color}22`,
                    color: p.color, padding: '2px 8px',
                    background: `${p.color}08`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
