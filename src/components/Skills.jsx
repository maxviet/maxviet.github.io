const skillGroups = [
  {
    label: 'DFIR / Forensik',
    accent: '#00ff88',
    accentSoft: 'rgba(0,255,136,0.28)',
    accentBg: 'rgba(0,255,136,0.1)',
    skills: ['dd / Imaging', 'Autopsy', 'Sleuth Kit', 'Timeline-Analyse', 'Mail-Forensik', 'Artefakt-Analyse'],
  },
  {
    label: 'Netzwerk / Sec',
    accent: '#5aafff',
    accentSoft: 'rgba(90,175,255,0.28)',
    accentBg: 'rgba(90,175,255,0.1)',
    skills: ['Wireshark', 'PCAP-Analyse', 'IDS/IPS-Konzepte', 'Tor / .onion', 'LUKS-Container'],
  },
  {
    label: 'Systeme / Admin',
    accent: '#ffb347',
    accentSoft: 'rgba(255,179,71,0.28)',
    accentBg: 'rgba(255,179,71,0.1)',
    skills: ['Linux (Shell)', 'Active Directory', 'Laptop-Provisioning', 'Services & Packages', 'esptool / UART'],
  },
  {
    label: 'Programmierung',
    accent: '#c39bff',
    accentSoft: 'rgba(195,155,255,0.28)',
    accentBg: 'rgba(195,155,255,0.1)',
    skills: ['Python', 'SQL', 'Scripting & Automation', 'HTML / CSS', 'Tailwind'],
  },
  {
    label: 'Labs / CTF',
    accent: '#ff8fab',
    accentSoft: 'rgba(255,143,171,0.28)',
    accentBg: 'rgba(255,143,171,0.1)',
    skills: ['TryHackMe', 'HackTheBox', 'AD-Labs', 'Cyber Range', 'CTF-Szenarien'],
  },
  {
    label: 'KI / RAG',
    accent: '#4affea',
    accentSoft: 'rgba(74,255,234,0.28)',
    accentBg: 'rgba(74,255,234,0.1)',
    skills: ['Lokale LLMs', 'RAG-Architektur', 'VektorDB', 'Ollama', 'LangChain'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title" data-reveal>SKILL_SET</h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className="panel skill-card"
              data-reveal
              style={{
                '--accent': group.accent,
                '--accent-soft': group.accentSoft,
                '--accent-bg': group.accentBg,
                '--reveal-delay': `${70 + index * 60}ms`,
              }}
            >
              <div className="skill-card-head">
                <div className="skill-card-title">{group.label}</div>
                <div className="skill-count">{group.skills.length}</div>
              </div>

              <div className="skill-cloud">
                {group.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
