import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import DarkVeil from './components/DarkVeil'
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection'
import { HomeSection } from './components/HomeSection'
import { PortfolioNav } from './components/PortfolioNav'
import { ScrollProgress } from './components/ScrollProgress'
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection'
import { navItems, type NavSection } from './data/portfolio'

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    const trackedSections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!trackedSections.length) {
      return
    }

    const updateActiveSection = () => {
      const probeY = window.scrollY + window.innerHeight * 0.38
      let nextActiveSection = trackedSections[0].id as NavSection

      for (let index = 0; index < trackedSections.length; index += 1) {
        const section = trackedSections[index]
        const nextSection = trackedSections[index + 1]
        const sectionTop = section.offsetTop
        const nextSectionTop = nextSection?.offsetTop ?? Number.POSITIVE_INFINITY

        if (probeY >= sectionTop && probeY < nextSectionTop) {
          nextActiveSection = section.id as NavSection
          break
        }
      }

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setNavVisible(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-shell">
      <div aria-hidden="true" className="portfolio-background">
        <div className="portfolio-background__veil">
          <DarkVeil
            hueShift={34}
            noiseIntensity={0.04}
            resolutionScale={1}
            scanlineFrequency={3.6}
            scanlineIntensity={0.16}
            speed={1.65}
            warpAmount={0.46}
          />
        </div>
        <div className="portfolio-background__gradient" />
        <div className="portfolio-background__grid" />
        <div className="portfolio-background__glow" />
      </div>
      <ScrollProgress />
      <PortfolioNav activeSection={activeSection} visible={navVisible} />
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
