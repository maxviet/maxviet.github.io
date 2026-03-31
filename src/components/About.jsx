export default function About() {
  const stats = [
    ['Semester', '5 / B.Sc.'],
    ['Aktueller Ø', '2,29'],
    ['Bestes Modul', 'Ethik + Programmierung (1,0)'],
    ['Forensikprojekt', '2,0'],
    ['THM Zertifikate', '2 (Pre-Sec + Intro CyberSec)'],
    ['Geburtsjahr', '2000'],
  ]

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>

        <div className="about-grid">
          <div className="panel about-copy">
            <div className="panel-label">profile</div>

            <div className="text-stack">
              <p className="body-copy">
              Ich bin Max Viet Uhlmann — Student der Digitalen Forensik im 5. Semester an der Hochschule Niederrhein. 
              Mein Fokus liegt auf technischer Analyse, Hardware-Security und Incident Response.
              </p>

              <p className="body-copy">
              Zuletzt als Teaching Assistant bei CloudCommand GmbH tätig: Aufbau einer Cyber Range, 
              Betreuung von 30+ Teilnehmenden in Cybersecurity-Kursen, CTF-Design und DevSecOps-Vermittlung.
              </p>

              <p className="body-copy">
              Aktuell im Praktikum bei einer Polizeibehörde — dort entwickle ich eine lokale KI-Infrastruktur 
              mit RAG-System für interne Dokumente. Kein Cloud. Keine externen APIs. Alles lokal.
              </p>
            </div>
          </div>

          <aside className="panel stats-panel">
            <div className="panel-label">stats</div>

            <div className="stats-list">
              {stats.map(([k, v]) => (
                <div key={k} className="stat-row">
                  <span className="stat-key">{k}</span>
                  <span className="stat-value">{v}</span>
                </div>
              ))}
            </div>
          </aside>
          </div>
      </div>
    </section>
  )
}
