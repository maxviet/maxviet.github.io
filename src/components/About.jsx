export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
        }}>
          <div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 16 }}>
              Ich bin Max Viet Uhlmann — Student der Digitalen Forensik im 5. Semester an der Hochschule Niederrhein. 
              Mein Fokus liegt auf technischer Analyse, Hardware-Security und Incident Response.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 16 }}>
              Zuletzt als Teaching Assistant bei CloudCommand GmbH tätig: Aufbau einer Cyber Range, 
              Betreuung von 30+ Teilnehmenden in Cybersecurity-Kursen, CTF-Design und DevSecOps-Vermittlung.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.9 }}>
              Aktuell im Praktikum bei einer Polizeibehörde — dort entwickle ich eine lokale KI-Infrastruktur 
              mit RAG-System für interne Dokumente. Kein Cloud. Keine externen APIs. Alles lokal.
            </p>
          </div>

          <div>
            <div style={{ border: '1px solid var(--border)', background: 'var(--bg2)', padding: 20, marginBottom: 16 }}>
              <div style={{ fontFamily: 'var(--pixel)', fontSize: 7, color: 'var(--green)', marginBottom: 14, letterSpacing: 2 }}>STATS</div>
              {[
                ['Semester', '5 / B.Sc.'],
                ['Aktueller Ø', '2,29'],
                ['Bestes Modul', 'Ethik + Programmierung (1,0)'],
                ['Forensikprojekt', '2,0'],
                ['THM Zertifikate', '2 (Pre-Sec + Intro CyberSec)'],
                ['Geburtsjahr', '2000'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'var(--mono)', fontSize: 11,
                  padding: '6px 0', borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ color: 'var(--text-dim)' }}>{k}</span>
                  <span style={{ color: 'var(--text)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
