import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection'
import { HomeSection } from './components/HomeSection'
import { PortfolioNav } from './components/PortfolioNav'
import { ScrollProgress } from './components/ScrollProgress'
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection'
import { navItems, type NavSection } from './data/portfolio'

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visibleEntries.length) {
          return
        }

        const nextSection = visibleEntries[0].target.id as NavSection
        setActiveSection(nextSection)
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-shell">
      <ScrollProgress />
      <PortfolioNav activeSection={activeSection} />
      <main className="portfolio-main">
        <HomeSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <TechnicalSkillsSection />
        <ContactSection />
      </main>
      <footer className="portfolio-footer">
        <div className="section-inner portfolio-footer__inner">
          <p>Built with React, Motion, and adapted React Bits components.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
