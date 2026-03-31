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

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-24% 0px -52% 0px',
        threshold: [0.15, 0.3, 0.55],
      },
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
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
