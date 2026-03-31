import { useState, useEffect } from 'react'

const links = ['About', 'Timeline', 'Projekte', 'Skills', 'Kontakt']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(7,13,9,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <a href="#hero" style={{
          fontFamily: 'var(--pixel)', fontSize: 10, color: 'var(--green)',
          textDecoration: 'none', letterSpacing: 2
        }}>
          &lt;MX/&gt;
        </a>

        <div style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)',
              textDecoration: 'none', letterSpacing: 1,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--green)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
