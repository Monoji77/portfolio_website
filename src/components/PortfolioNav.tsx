import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, type NavSection } from '../data/portfolio'

type PortfolioNavProps = {
  activeSection: NavSection
  visible: boolean
}

export function PortfolioNav({ activeSection, visible }: PortfolioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      animate={visible ? 'visible' : 'hidden'}
      className={`portfolio-nav ${visible ? 'is-visible' : 'is-hidden'}`.trim()}
      initial={false}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -18 },
      }}
    >
      <div className="section-inner portfolio-nav__inner">
        <nav aria-label="Primary" className="portfolio-nav__desktop">
          {navItems.map((item) => {
            const isActive = item.id === activeSection

            return (
              <a
                className={`portfolio-nav__link ${isActive ? 'is-active' : ''}`.trim()}
                href={`#${item.id}`}
                key={item.id}
              >
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

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
    </motion.header>
  )
}
