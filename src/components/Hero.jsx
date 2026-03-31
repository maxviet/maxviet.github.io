import { useState, useEffect } from 'react'

const lines = [
  'DFIR // Incident Response',
  'Firmware Analysis // esptool',
  'Python // Linux // Wireshark',
  'AI & Local LLM Enthusiast',
  'Digital Forensics Student',
]

const badges = [
  { label: 'Status', value: 'Available', valueColor: 'var(--green)' },
  { label: 'Location', value: 'DE', valueColor: 'var(--text)' },
  { label: 'Focus', value: 'Forensics + AI', valueColor: 'var(--green-dim)' },
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const signals = ['DFIR', 'Hardware Security', 'Local AI Stack']
  const artworkMeta = [
    { label: 'Node', value: 'AGENT_MAX' },
    { label: 'Mode', value: 'LOCAL' },
    { label: 'Focus', value: 'FORENSICS' },
  ]

  useEffect(() => {
    const current = lines[lineIdx]
    let timeout

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(i => i + 1), 55)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(i => i - 1), 28)
      } else {
        setDeleting(false)
        setLineIdx(i => (i + 1) % lines.length)
      }
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, lineIdx])

  return (
    <section id="hero" className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-badges">
            {badges.map(b => (
              <span key={b.label} className="status-chip">
                <span className="status-chip-label">{b.label}</span>
                <span style={{ color: b.valueColor }}>{b.value}</span>
              </span>
            ))}
          </div>

          <div className="hero-kicker">Digital Forensics // Local AI Infrastructure</div>

          <h1 className="hero-title">
            Max Viet<br />Uhlmann
          </h1>

          <div className="panel hero-terminal">
            <div className="hero-terminal-head">
              <span className="panel-label">live_session</span>
              <span className="hero-terminal-status">
                <span className="status-dot" aria-hidden="true" />
                typing
              </span>
            </div>

            <div className="hero-terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-content" aria-live="polite" aria-atomic="true">
                {displayed || '\u00a0'}
              </span>
              <span className="terminal-cursor" aria-hidden="true">█</span>
            </div>
          </div>

          <p className="body-copy hero-description">
            IT-Forensiker mit Fokus auf digitale Spurensicherung, Hardware-Security und KI-gestützte Systeme. 
            Aktuell im Praktikum bei einer Polizeibehörde — Aufbau einer lokalen RAG-KI-Infrastruktur.
          </p>

          <div className="hero-actions">
            <a href="#projekte" className="button button-primary">
              Projekte ansehen
            </a>

            <a href="/Lebenslauf_MaxUhlmann.pdf" download className="button button-secondary">
              CV herunterladen
            </a>

            <a href="#kontakt" className="button button-ghost">
              Kontakt
            </a>
          </div>

          <div className="hero-signal-row">
            {signals.map(signal => (
              <span key={signal} className="signal-chip">{signal}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="hero-visual-head" aria-hidden="true">
              <span className="panel-label">field_node</span>
              <span className="hero-visual-status">
                <span className="status-dot" aria-hidden="true" />
                online
              </span>
            </div>

            <div className="hero-avatar-shell">
              <div className="hero-avatar-grid" aria-hidden="true" />

              <img
                src="/avatar.png"
                alt="Max Viet Uhlmann pixel avatar"
                className="hero-avatar"
              />
            </div>

            <div className="hero-visual-meta" aria-hidden="true">
              {artworkMeta.map(item => (
                <div key={item.label} className="hero-meta-item">
                  <span className="hero-meta-label">{item.label}</span>
                  <span className="hero-meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
