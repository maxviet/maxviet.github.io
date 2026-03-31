import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealNodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealNodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
