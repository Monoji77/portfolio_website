import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, profile, type NavSection } from '../data/portfolio'

type PortfolioNavProps = {
  activeSection: NavSection
}

export function PortfolioNav({ activeSection }: PortfolioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="portfolio-nav">
      <div className="section-inner portfolio-nav__inner">
        <a className="portfolio-nav__brand" href="#home">
          <span>{profile.name}</span>
          <small>{profile.role}</small>
        </a>

        <nav aria-label="Primary" className="portfolio-nav__desktop">
          {navItems.map((item) => {
            const isActive = item.id === activeSection

            return (
              <a
                className={`portfolio-nav__link ${isActive ? 'is-active' : ''}`.trim()}
                href={`#${item.id}`}
                key={item.id}
              >
                {isActive ? <motion.span layoutId="nav-active-pill" className="portfolio-nav__link-pill" /> : null}
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="portfolio-nav__actions">
          <a className="button button--ghost" href="#contact">
            Contact
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="portfolio-nav__mobile-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <motion.div
        animate={menuOpen ? 'open' : 'closed'}
        className="portfolio-nav__mobile-menu"
        initial={false}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
      >
        <div className="section-inner portfolio-nav__mobile-menu-inner">
          {navItems.map((item) => (
            <a
              className={`portfolio-nav__mobile-link ${item.id === activeSection ? 'is-active' : ''}`.trim()}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  )
}
