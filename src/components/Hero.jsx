import { useState, useEffect } from 'react'

const lines = [
  'DFIR // Incident Response',
  'Firmware Analysis // esptool',
  'Python // Linux // Wireshark',
  'AI & Local LLM Enthusiast',
  'Digital Forensics Student',
]

const badges = [
  { label: 'Status:', value: 'Available', valueColor: 'var(--green)' },
  { label: 'Location:', value: 'DE', valueColor: 'var(--text)' },
  { label: 'Focus:', value: 'Forensics + AI', valueColor: 'var(--green-dim)' },
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

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
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 56 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
        
        <div style={{ animation: 'fadeIn 0.8s ease forwards' }}>
          {/* Badges */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            {badges.map(b => (
              <span key={b.label} style={{
                fontFamily: 'var(--mono)', fontSize: 11,
                border: '1px solid var(--border)',
                padding: '5px 12px',
                display: 'flex', gap: 6,
                background: 'var(--bg2)',
              }}>
                <span style={{ color: 'var(--text-dim)' }}>{b.label}</span>
                <span style={{ color: b.valueColor }}>{b.value}</span>
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--pixel)',
            fontSize: 'clamp(22px, 4vw, 38px)',
            color: 'var(--green)',
            lineHeight: 1.4,
            marginBottom: 20,
            letterSpacing: 2,
          }}>
            Max Viet<br />Uhlmann
          </h1>

          {/* Typewriter */}
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 13,
            color: 'var(--text-dim)', marginBottom: 24, minHeight: 22,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <span style={{ color: 'var(--green-dim)' }}>$ </span>
            <span>{displayed}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--green)' }}>█</span>
          </div>

          {/* Description */}
          <p style={{
            maxWidth: 520, color: 'var(--text-dim)',
            fontFamily: 'var(--mono)', fontSize: 13,
            lineHeight: 1.8, marginBottom: 36,
          }}>
            IT-Forensiker mit Fokus auf digitale Spurensicherung, Hardware-Security und KI-gestützte Systeme. 
            Aktuell im Praktikum bei einer Polizeibehörde — Aufbau einer lokalen RAG-KI-Infrastruktur.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#projekte" style={{
              fontFamily: 'var(--pixel)', fontSize: 9,
              background: 'var(--green)', color: 'var(--bg)',
              padding: '12px 20px', textDecoration: 'none',
              letterSpacing: 1, transition: 'opacity 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Projekte ansehen
            </a>
            <a href="#kontakt" style={{
              fontFamily: 'var(--pixel)', fontSize: 9,
              border: '1px solid var(--green)', color: 'var(--green)',
              padding: '12px 20px', textDecoration: 'none',
              letterSpacing: 1, transition: 'background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-faint)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              Kontakt
            </a>
            <a href="/Lebenslauf_MaxUhlmann.pdf" download style={{
              fontFamily: 'var(--pixel)', fontSize: 9,
              border: '1px solid var(--border)', color: 'var(--text-dim)',
              padding: '12px 20px', textDecoration: 'none',
              letterSpacing: 1, transition: 'border-color 0.2s, color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.color = 'var(--green-dim)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
            >
              CV herunterladen
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div style={{
          border: '1px solid var(--green-dark)',
          background: 'var(--bg2)',
          padding: 4,
          boxShadow: '0 0 32px rgba(0,255,136,0.08), inset 0 0 20px rgba(0,0,0,0.4)',
          position: 'relative',
          animation: 'fadeIn 1s ease 0.3s both',
        }}>
          <div style={{
            position: 'absolute', top: 8, left: 8,
            fontFamily: 'var(--pixel)', fontSize: 7,
            color: 'var(--green-dim)', letterSpacing: 1,
          }}>
            AGENT_MAX.exe
          </div>
          <div style={{
            position: 'absolute', top: 8, right: 8,
            display: 'flex', gap: 4,
          }}>
            {['#ff5f57','#ffbd2e','#28c840'].map(c => (
              <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <img
            src="/avatar.png"
            alt="Max Viet Uhlmann pixel avatar"
            style={{ width: 220, height: 220, display: 'block', objectFit: 'cover', marginTop: 20 }}
          />
          <div style={{
            padding: '8px 12px',
            fontFamily: 'var(--pixel)', fontSize: 7,
            color: 'var(--green)', borderTop: '1px solid var(--green-dark)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ animation: 'blink 1.5s step-end infinite', color: 'var(--green)' }}>●</span>
            ONLINE // READY
          </div>
        </div>

      </div>
    </section>
  )
}
