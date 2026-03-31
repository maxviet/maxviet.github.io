import { useState, useEffect } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'projekte', label: 'Projekte' },
  { id: 'skills', label: 'Skills' },
  { id: 'kontakt', label: 'Kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(link => document.getElementById(link.id))
      .filter(Boolean)

    let frame = 0

    const updateActive = () => {
      const marker = window.innerHeight * (window.innerWidth < 820 ? 0.34 : 0.4)
      let nextId = ''
      let smallestDistance = Number.POSITIVE_INFINITY

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const center = rect.top + rect.height / 2

        if (rect.top <= marker && rect.bottom >= marker) {
          nextId = section.id
          smallestDistance = -1
          return
        }

        if (smallestDistance !== -1) {
          const distance = Math.abs(center - marker)

          if (distance < smallestDistance) {
            smallestDistance = distance
            nextId = section.id
          }
        }
      })

      setActiveId(current => (current === nextId ? current : nextId))
      frame = 0
    }

    const requestUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateActive)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frame) {
        cancelAnimationFrame(frame)
      }

      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-shell">
          <a href="#hero" className="nav-brand" onClick={() => setOpen(false)}>
            &lt;MX/&gt;
          </a>

          <div className="nav-desktop">
            <div className="nav-links">
              {links.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link ${activeId === link.id ? 'is-active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="nav-status">
              <span className="nav-status-dot" aria-hidden="true" />
              Available for DFIR + Security
            </div>
          </div>

          <button
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Navigation schliessen' : 'Navigation oeffnen'}
            aria-expanded={open}
            onClick={() => setOpen(current => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
          <div className="nav-mobile-links">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeId === link.id ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="nav-status nav-status-mobile">
              <span className="nav-status-dot" aria-hidden="true" />
              Available for DFIR + Security
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
