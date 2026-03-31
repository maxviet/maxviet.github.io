export default function About() {
  const stats = [
    ['Semester', '6 / B.Sc.'],
    ['Aktueller Ø', '2,29'],
    ['Fokus', 'Digitale Forensik + Cybersecurity'],
    ['Praxis', 'Polizeibehörde / lokale RAG-KI-Infrastruktur'],
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
              Ich bin Max Viet Uhlmann, Student der Digitalen Forensik im 6. Semester an der Hochschule Niederrhein. Besonders interessiere ich mich für digitale Forensik, Cyber Security und den praktischen Einsatz lokaler KI-Systeme.
              </p> 
              <p className="body-copy">
              Als Teaching Assistant bei CloudCommand GmbH unterstützte ich Teilnehmende beim Einstieg in zentrale IT- und Security-Themen, darunter Linux, Virtualisierung, Active Directory und Netzwerkgrundlagen. Neben technischen Inhalten vermittelte ich auch theoretische Grundlagen im Bereich Cyber Security.
              </p>

              <p className="body-copy">
              Derzeit absolviere ich mein Praktikum bei einer Polizeibehörde. Dort arbeite ich am Aufbau einer lokalen KI-Infrastruktur mit RAG-System für interne Dokumente — ohne Cloud, ohne externe APIs, vollständig lokal.
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
