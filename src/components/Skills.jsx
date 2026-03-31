const skillGroups = [
  {
    label: 'DFIR / Forensik',
    color: 'var(--green)',
    skills: ['dd / Imaging', 'Autopsy', 'Sleuth Kit', 'Timeline-Analyse', 'Mail-Forensik', 'Artefakt-Analyse'],
  },
  {
    label: 'Netzwerk / Sec',
    color: '#5aafff',
    skills: ['Wireshark', 'PCAP-Analyse', 'IDS/IPS-Konzepte', 'Tor / .onion', 'LUKS-Container'],
  },
  {
    label: 'Systeme / Admin',
    color: '#ffb347',
    skills: ['Linux (Shell)', 'Active Directory', 'Laptop-Provisioning', 'Services & Packages', 'esptool / UART'],
  },
  {
    label: 'Programmierung',
    color: '#c39bff',
    skills: ['Python', 'SQL', 'Scripting & Automation', 'HTML / CSS', 'Tailwind'],
  },
  {
    label: 'Labs / CTF',
    color: '#ff8fab',
    skills: ['TryHackMe', 'HackTheBox', 'AD-Labs', 'Cyber Range', 'CTF-Szenarien'],
  },
  {
    label: 'KI / RAG',
    color: '#4affea',
    skills: ['Lokale LLMs', 'RAG-Architektur', 'VektorDB', 'Ollama', 'LangChain'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">SKILL_SET</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {skillGroups.map(group => (
            <div key={group.label} style={{
              border: '1px solid var(--border)',
              background: 'var(--bg2)',
              padding: '20px 22px',
            }}>
              <div style={{
                fontFamily: 'var(--pixel)', fontSize: 8,
                color: group.color, marginBottom: 16, letterSpacing: 1,
              }}>
                {group.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.skills.map(s => (
                  <span key={s} style={{
                    fontFamily: 'var(--mono)', fontSize: 11,
                    border: `1px solid ${group.color}22`,
                    color: 'var(--text-dim)',
                    padding: '3px 9px',
                    background: `${group.color}08`,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
