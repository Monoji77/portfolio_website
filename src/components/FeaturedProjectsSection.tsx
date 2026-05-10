import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { SpotlightCard } from './reactbits/SpotlightCard'

export function FeaturedProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0]

  return (
    <section className="section-band section-band--warm" id="projects">
      <div className="section-inner">
        <SectionHeading
          description="A few selected builds that show how I think through modeling, systems, and product-facing clarity."
          eyebrow="Featured Projects"
          title="Not just what I built, but how I shaped the work into something usable."
        />

        <div className="projects-section__layout">
          <div className="projects-section__grid">
            {projects.map((project, index) => {
              const isActive = project.id === activeProjectId

              return (
                <SectionReveal delay={index * 0.06} key={project.id}>
                  <button
                    className={`projects-section__card-button ${isActive ? 'is-active' : ''}`.trim()}
                    onClick={() => setActiveProjectId(project.id)}
                    onFocus={() => setActiveProjectId(project.id)}
                    onMouseEnter={() => setActiveProjectId(project.id)}
                    type="button"
                  >
                    <SpotlightCard className={`projects-section__card ${isActive ? 'is-active' : ''}`.trim()}>
                      <div className="projects-section__card-meta">
                        <span>{project.category}</span>
                        <ChevronRight size={16} />
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <ul className="tag-row" aria-label={`${project.title} technology`}>
                        {project.stack.slice(0, 3).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </button>
                </SectionReveal>
              )
            })}
          </div>

          <SectionReveal className="projects-section__detail-shell" delay={0.18}>
            <AnimatePresence mode="wait">
              <motion.article
                animate={{ opacity: 1, y: 0 }}
                className="projects-section__detail"
                exit={{ opacity: 0, y: 18 }}
                initial={{ opacity: 0, y: 18 }}
                key={activeProject.id}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="projects-section__detail-eyebrow">{activeProject.category}</span>
                <h3>{activeProject.title}</h3>
                <p className="projects-section__detail-summary">{activeProject.focus}</p>
                <p>{activeProject.impact}</p>

                <div className="projects-section__detail-meta">
                  <span>{activeProject.highlights.length} delivery notes</span>
                  <span>{activeProject.stack.length} tools and methods</span>
                </div>

                <div className="projects-section__detail-block">
                  <h4>Highlights</h4>
                  <ul className="detail-list">
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="projects-section__detail-block">
                  <h4>Stack</h4>
                  <ul className="tag-row tag-row--dark" aria-label={`${activeProject.title} stack`}>
                    {activeProject.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {activeProject.links?.length ? (
                  <div className="projects-section__detail-links">
                    {activeProject.links.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                      >
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="projects-section__detail-note">
                    Detailed walkthroughs and live links can be attached here once you add your project destinations.
                  </p>
                )}
              </motion.article>
            </AnimatePresence>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
