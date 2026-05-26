import { ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import abcOverlayImage from '../assets/basic_abc_vs_regression_adjusted_overlay.png'
import marketRisk20Image from '../assets/market_risk_2.0.png'
import abcPpcImage from '../assets/ppc_all_observables.png'
import riskLabImage from '../assets/portfolio_risk_lab.png'
import { projects, type Project } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { TiltedCard } from './reactbits/TiltedCard'

const projectMediaMap = {
  'abc-overlay': {
    alt: 'Baseline rejection ABC versus regression-adjusted ABC overlay',
    src: abcOverlayImage,
  },
  'abc-ppc': {
    alt: 'Posterior predictive checks across epidemic observables',
    src: abcPpcImage,
  },
  'risk-lab': {
    alt: 'Market Risk Engine 1.0 portfolio risk lab interface',
    src: riskLabImage,
  },
  'risk-lab-2-0': {
    alt: 'Market Risk Engine 2.0 interface preview',
    src: marketRisk20Image,
  },
} as const

const projectOrder = ['market-risk-engine-2-0', 'market-risk-engine', 'abc-inference'] as const

export function FeaturedProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const orderedProjects = useMemo(
    () =>
      [...projects].sort((leftProject, rightProject) => {
        const leftIndex = projectOrder.indexOf(leftProject.id as (typeof projectOrder)[number])
        const rightIndex = projectOrder.indexOf(rightProject.id as (typeof projectOrder)[number])

        const normalizedLeftIndex = leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex
        const normalizedRightIndex = rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex

        return normalizedLeftIndex - normalizedRightIndex
      }),
    [],
  )

  const activeProject = useMemo(
    () => orderedProjects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId, orderedProjects],
  )

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.classList.add('project-modal-open')
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('project-modal-open')
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  useEffect(() => {
    if (!activeProjectId || !modalRef.current) {
      return
    }

    modalRef.current.scrollTop = 0
    modalRef.current.scrollLeft = 0

    const frameId = window.requestAnimationFrame(() => {
      if (!modalRef.current) {
        return
      }

      modalRef.current.scrollTop = 0
      modalRef.current.scrollLeft = 0
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [activeProjectId])

  return (
    <LayoutGroup id="featured-projects">
      <section className="section-band section-band--warm" id="projects">
        <div className="section-inner">
          <SectionHeading
            description="A few selected builds that show how I think through modeling, systems, and product-facing clarity."
            eyebrow="Featured Projects"
            title="Not just what I built, but how I shaped the work into something usable."
          />

          <div className="projects-section__layout">
            <div className="projects-section__grid">
              {orderedProjects.map((project, index) => {
                const selectedMedia = project.media?.[0] ? projectMediaMap[project.media[0].imageId] : null

                return (
                  <SectionReveal delay={index * 0.08} key={project.id}>
                    <button
                      aria-expanded={activeProject?.id === project.id}
                      aria-haspopup="dialog"
                      className="projects-section__card-button"
                      onClick={() => setActiveProjectId(project.id)}
                      type="button"
                    >
                      <motion.div className="projects-section__card-motion" layoutId={`project-card-${project.id}`}>
                        <TiltedCard className="projects-section__card-shell">
                          {selectedMedia ? (
                            <div className="projects-section__card-visual">
                              <img alt={selectedMedia.alt} className="projects-section__card-image" src={selectedMedia.src} />
                            </div>
                          ) : null}

                          <div className="projects-section__card-copy">
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                          </div>
                        </TiltedCard>
                      </motion.div>
                    </button>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="projects-section__overlay"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveProjectId(null)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="projects-section__modal-shell"
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-labelledby={`project-title-${activeProject.id}`}
              aria-modal="true"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div className="projects-section__modal" key={activeProject.id} layoutId={`project-card-${activeProject.id}`}>
                <div className="projects-section__modal-content" ref={modalRef}>
                  <div className="projects-section__modal-header">
                    <div className="projects-section__modal-heading">
                      <span className="projects-section__detail-eyebrow">{activeProject.category}</span>
                      <h3 id={`project-title-${activeProject.id}`}>{activeProject.title}</h3>
                    </div>

                    <button
                      aria-label="Close project detail"
                      className="projects-section__modal-close"
                      onClick={() => setActiveProjectId(null)}
                      type="button"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <ProjectDetailContent project={activeProject} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LayoutGroup>
  )
}

function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <>
      {project.statusNote ? <p className="projects-section__detail-status">{project.statusNote}</p> : null}
      <p className="projects-section__detail-summary">{project.focus}</p>
      <p className="projects-section__modal-impact">{project.impact}</p>

      <div className="projects-section__detail-meta">
        <span>{project.highlights.length} delivery notes</span>
        <span>{project.stack.length} stack items</span>
      </div>

      <div className="projects-section__detail-block">
        <h4>Highlights</h4>
        <ul className="detail-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="projects-section__detail-block">
        <h4>Stack</h4>
        <ul className="tag-row tag-row--dark" aria-label={`${project.title} stack`}>
          {project.stack.map((item) => {
            const label = typeof item === 'string' ? item : item.label
            const toneClass = typeof item === 'string' || !item.tone ? '' : ` tag-row__item--${item.tone}`

            return (
              <li className={toneClass.trim()} key={label}>
                {label}
              </li>
            )
          })}
        </ul>
      </div>

      {project.media?.length ? (
        <div className="projects-section__detail-block">
          <div className={`projects-section__media-grid ${project.media.length > 1 ? 'is-split' : ''}`.trim()}>
            {project.media.map((media) => {
              const image = projectMediaMap[media.imageId]

              return (
                <figure className="projects-section__media" key={media.imageId}>
                  <img alt={image.alt} className="projects-section__media-image" src={image.src} />
                  <figcaption>{media.caption}</figcaption>
                </figure>
              )
            })}
          </div>
        </div>
      ) : null}

      {project.links?.length ? (
        <div className="projects-section__detail-links">
          {project.links.map((link) => (
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
    </>
  )
}
