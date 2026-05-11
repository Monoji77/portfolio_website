import { motion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import heroArtwork from '../assets/portfolio-scene.png'
import { heroStats, profile } from '../data/portfolio'
import { SectionReveal } from './SectionReveal'
import { BlurText } from './reactbits/BlurText'
import { CountUp } from './reactbits/CountUp'

export function HomeSection() {
  return (
    <section className="home-section" id="home">
      <div className="section-inner home-section__inner">
        <SectionReveal className="home-section__copy">
          <div className="home-section__badge-row">
            <span className="home-section__eyebrow">{profile.availability}</span>
            <span className="home-section__eyebrow home-section__eyebrow--muted">Interactive Portfolio</span>
          </div>
          <h1>{profile.name}</h1>
          <BlurText
            animateBy="words"
            className="home-section__headline"
            delay={90}
            text={profile.role}
          />
          <p className="home-section__summary">{profile.heroSummary}</p>
          <p className="home-section__lead">{profile.heroLead}</p>

          <div className="home-section__signal-row" aria-label="Core strengths">
            <span>Quantitative reasoning</span>
            <span>Interface clarity</span>
            <span>Production-minded delivery</span>
          </div>

          <div className="home-section__actions">
            <a className="button button--primary" href="#projects">
              View featured work
              <ArrowRight size={18} />
            </a>
            <a className="button button--secondary" href="#contact">
              Say hello
              <Mail size={18} />
            </a>
          </div>

          <ul className="home-section__stats" aria-label="Portfolio overview">
            {heroStats.map((stat) => (
              <li key={stat.label}>
                <span className="home-section__stat-value">
                  <CountUp className="count-up" delay={0.1} duration={1.4} to={stat.value} />
                  {stat.suffix}
                </span>
                <span className="home-section__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="home-section__visual" delay={0.12}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            className="home-section__visual-shell"
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          >
            <motion.img
              alt="Stylized workspace panels showing charts, code, and product thinking"
              className="home-section__artwork"
              src={heroArtwork}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              className="home-section__floating-panel home-section__floating-panel--top"
              transition={{ duration: 5.4, ease: 'easeInOut', repeat: Infinity }}
            >
              <span>Signal-first builds</span>
              <strong>Clean, inspectable, employer-ready work</strong>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              className="home-section__floating-panel home-section__floating-panel--bottom"
              transition={{ duration: 6.1, ease: 'easeInOut', repeat: Infinity }}
            >
              <span>Selected focus</span>
              <strong>Analytics, risk, and data product thinking</strong>
            </motion.div>
          </motion.div>
          <div className="home-section__visual-meta">
            <span>Analytics</span>
            <span>Risk</span>
            <span>Data Products</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
