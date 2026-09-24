import { ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import sparkLogo from '../assets/Apache_Spark.png'
import groupmatesPhoto from '../assets/DSA3101_Groupmates.jpg'
import uoftPhoto from '../assets/Exchange_UofT_photo.jpg'
import hpbLogo from '../assets/Health Promotion Board.png'
import hpbInternsPhoto from '../assets/hpb_interns.jpg'
import nusLogo from '../assets/nus.png'
import reactLogo from '../assets/React.png'
import amazonS3Logo from '../assets/stack/amazons3.svg'
import apacheAirflowLogo from '../assets/stack/apacheairflow.svg'
import apacheFlinkLogo from '../assets/stack/apacheflink.svg'
import apacheKafkaLogo from '../assets/stack/apachekafka.svg'
import icebergLogo from '../assets/stack/iceberg.png'
import javaLogo from '../assets/stack/java.svg'
import oceanbaseLogo from '../assets/stack/oceanbase.png'
import springBootLogo from '../assets/stack/springboot.svg'
import starrocksLogo from '../assets/stack/starrocks.png'
import timescaleLogo from '../assets/stack/timescale.svg'
import typescriptLogo from '../assets/stack/typescript.svg'
import uoftLogo from '../assets/UofT.png'
import usagePipelinePhoto from '../assets/usage_observatory_pipeline.png'
import vanguardLogo from '../assets/vanguard.png'
import { timelineDetailCards, timelineMilestones, type TechLogoId, type TechStackItem } from '../data/portfolio'
import { SpotlightCard } from './reactbits/SpotlightCard'
import { TiltedCard } from './reactbits/TiltedCard'

const logoMap = {
  hpb: {
    alt: 'Health Promotion Board logo',
    src: hpbLogo,
  },
  nus: {
    alt: 'National University of Singapore logo',
    src: nusLogo,
  },
  uoft: {
    alt: 'University of Toronto logo',
    src: uoftLogo,
  },
  vanguard: {
    alt: 'Vanguard Software logo',
    src: vanguardLogo,
  },
} as const

const techLogoMap: Partial<Record<TechLogoId, { alt: string; src: string }>> = {
  oceanbase: { alt: 'OceanBase logo', src: oceanbaseLogo },
  starrocks: { alt: 'StarRocks logo', src: starrocksLogo },
  kafka: { alt: 'Apache Kafka logo', src: apacheKafkaLogo },
  flink: { alt: 'Apache Flink logo', src: apacheFlinkLogo },
  s3: { alt: 'Amazon S3 logo', src: amazonS3Logo },
  iceberg: { alt: 'Apache Iceberg logo', src: icebergLogo },
  spark: { alt: 'Apache Spark logo', src: sparkLogo },
  airflow: { alt: 'Apache Airflow logo', src: apacheAirflowLogo },
  java: { alt: 'Java logo', src: javaLogo },
  springboot: { alt: 'Spring Boot logo', src: springBootLogo },
  timescale: { alt: 'TimescaleDB logo', src: timescaleLogo },
  react: { alt: 'React logo', src: reactLogo },
  typescript: { alt: 'TypeScript logo', src: typescriptLogo },
}

const imageMap = {
  'hpb-interns': {
    alt: 'Health Promotion Board internship group photo',
    src: hpbInternsPhoto,
  },
  'nus-groupmates': {
    alt: 'DSA3101 groupmates photo',
    src: groupmatesPhoto,
  },
  'uoft-exchange': {
    alt: 'University of Toronto exchange photo',
    src: uoftPhoto,
  },
  'usage-pipeline': {
    alt: 'Usage Observatory streaming data pipeline diagram',
    src: usagePipelinePhoto,
  },
} as const

type TimelineMilestone = (typeof timelineMilestones)[number]

type TimelineRow = {
  year: string
  left: TimelineMilestone[]
  right: TimelineMilestone[]
}

// Milestones that share a year (e.g. multiple "Now" entries) render in one row, stacked
// within whichever side(s) they belong to.
function buildTimelineRows(milestones: TimelineMilestone[]): TimelineRow[] {
  const rows: TimelineRow[] = []

  for (const milestone of milestones) {
    const openRow = rows[rows.length - 1]

    if (openRow && openRow.year === milestone.year) {
      openRow[milestone.side].push(milestone)
      continue
    }

    rows.push({
      year: milestone.year,
      left: milestone.side === 'left' ? [milestone] : [],
      right: milestone.side === 'right' ? [milestone] : [],
    })
  }

  return rows
}

const timelineRows = buildTimelineRows(timelineMilestones)

export function AboutTimeline() {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const activeMilestone = useMemo(
    () => timelineMilestones.find((milestone) => milestone.id === activeMilestoneId) ?? null,
    [activeMilestoneId],
  )

  const activeDetailCard = useMemo(
    () => (activeMilestone ? timelineDetailCards[activeMilestone.detailId] ?? null : null),
    [activeMilestone],
  )

  useEffect(() => {
    if (!activeDetailCard) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMilestoneId(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.classList.add('timeline-modal-open')
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('timeline-modal-open')
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeDetailCard])

  useEffect(() => {
    if (!activeMilestoneId || !modalRef.current) {
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
  }, [activeMilestoneId])

  return (
    <LayoutGroup id="about-timeline">
      <SpotlightCard className="about-timeline">
        <div className="about-timeline__header">
          <span className="about-section__kicker">Timeline</span>
        </div>

        <div className="about-timeline__track" role="list" aria-label="Career timeline">
          {timelineRows.map((row, index) => (
            <div
              className={`about-timeline__row${row.left.length && row.right.length ? ' about-timeline__row--split' : ''}`}
              key={`${row.year}-${index}`}
              role="listitem"
            >
              <span className="about-timeline__column about-timeline__column--left">
                {row.left.length ? (
                  <div className="about-timeline__stack">
                    {row.left.map((milestone) => (
                      <TimelineMilestoneButton
                        isActive={activeMilestone?.id === milestone.id}
                        key={milestone.id}
                        milestone={milestone}
                        onSelect={setActiveMilestoneId}
                      />
                    ))}
                  </div>
                ) : (
                  <span className="about-timeline__preview-spacer" aria-hidden="true" />
                )}
              </span>

              <span className="about-timeline__center">
                <span className="about-timeline__year">{row.year}</span>
              </span>

              <span className="about-timeline__column about-timeline__column--right">
                {row.right.length ? (
                  <div className="about-timeline__stack">
                    {row.right.map((milestone) => (
                      <TimelineMilestoneButton
                        isActive={activeMilestone?.id === milestone.id}
                        key={milestone.id}
                        milestone={milestone}
                        onSelect={setActiveMilestoneId}
                      />
                    ))}
                  </div>
                ) : (
                  <span className="about-timeline__preview-spacer" aria-hidden="true" />
                )}
              </span>
            </div>
          ))}
        </div>
      </SpotlightCard>

      <AnimatePresence>
        {activeMilestone && activeDetailCard ? (
          <motion.div
            className="about-timeline__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMilestoneId(null)}
          >
            <motion.div
              className="about-timeline__modal-shell"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`timeline-title-${activeDetailCard.id}`}
            >
              <motion.div
                className="about-timeline__modal"
                key={activeMilestone.id}
                layoutId={`timeline-preview-${activeMilestone.id}`}
              >
                <div className="about-timeline__modal-content" ref={modalRef}>
                  <div className="about-timeline__modal-header">
                    <div className="about-timeline__modal-heading">
                      <span className="about-timeline__modal-year">{activeDetailCard.yearLabel}</span>
                      <div className="about-timeline__modal-title-row">
                        <TimelineLogo logoId={activeDetailCard.logoId} />
                        <h3 id={`timeline-title-${activeDetailCard.id}`}>{activeDetailCard.title}</h3>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="about-timeline__modal-close"
                      onClick={() => setActiveMilestoneId(null)}
                      aria-label="Close timeline detail"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <p className="about-timeline__modal-summary">{activeDetailCard.summary}</p>

                  {activeDetailCard.body.length ? (
                    <div className="about-timeline__modal-block">
                      <h4>Overview</h4>
                      {activeDetailCard.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {activeDetailCard.courseResults?.length ? (
                    <div className="about-timeline__modal-block">
                      <h4>{activeDetailCard.courseResultsHeading ?? 'Selected subjects & grades'}</h4>
                    <div className="about-timeline__results" role="list">
                      {activeDetailCard.courseResults.map((result) => (
                        result.href ? (
                          <a
                            className="about-timeline__result-row about-timeline__result-row--link"
                            href={result.href}
                            key={result.label}
                            rel="noreferrer"
                            role="listitem"
                            target="_blank"
                          >
                            <span className="about-timeline__result-link">{result.label}</span>
                            <strong>{result.grade}</strong>
                          </a>
                        ) : (
                          <div className="about-timeline__result-row" key={result.label} role="listitem">
                            <span>{result.label}</span>
                            <strong>{result.grade}</strong>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ) : null}

                  {activeDetailCard.notableMentions?.length ? (
                    <div className="about-timeline__modal-block">
                      <h4>Notable mentions</h4>
                      <ul className="detail-list detail-list--light">
                        {activeDetailCard.notableMentions.map((mention) => (
                          <li key={mention}>{mention}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeDetailCard.techStack?.length ? (
                    <div className="about-timeline__modal-block">
                      <h4>{activeDetailCard.skillsLabel ?? 'Stack'}</h4>
                      <TechStackGrid items={activeDetailCard.techStack} />
                    </div>
                  ) : activeDetailCard.skills?.length ? (
                    <div className="about-timeline__modal-block">
                      <h4>{activeDetailCard.skillsLabel ?? 'Skills'}</h4>
                      <ul className="detail-list detail-list--light">
                        {activeDetailCard.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeDetailCard.imageId ? (
                    <TimelineMedia
                      caption={activeDetailCard.imageCaption ?? ''}
                      href={activeDetailCard.imageHref}
                      imageId={activeDetailCard.imageId}
                    />
                  ) : null}

                  <ul className="tag-row tag-row--dark">
                    {activeDetailCard.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LayoutGroup>
  )
}

function TimelineMilestoneButton({
  milestone,
  isActive,
  onSelect,
}: {
  milestone: TimelineMilestone
  isActive: boolean
  onSelect: (id: string) => void
}) {
  return (
    <button
      type="button"
      className="about-timeline__milestone"
      onClick={() => onSelect(milestone.id)}
      aria-expanded={isActive}
      aria-haspopup="dialog"
    >
      <TimelinePreview milestoneId={milestone.id} />
    </button>
  )
}

function TimelinePreview({ milestoneId }: { milestoneId: string }) {
  const milestone = timelineMilestones.find((entry) => entry.id === milestoneId)

  if (!milestone) {
    return null
  }

  const detailCard = timelineDetailCards[milestone.detailId]

  return (
    <motion.div className="about-timeline__preview" layoutId={`timeline-preview-${milestone.id}`}>
      <span className="about-timeline__preview-title-row">
        <TimelineLogo logoId={detailCard?.logoId ?? null} />
        <span className="about-timeline__preview-title">{milestone.title}</span>
      </span>
      <span className="about-timeline__preview-lines" aria-hidden="true">
        <span />
        <span />
      </span>
    </motion.div>
  )
}

function TimelineLogo({ logoId }: { logoId: 'nus' | 'hpb' | 'uoft' | 'infinity' | 'vanguard' | null }) {
  if (logoId === 'infinity') {
    return (
      <span className="about-timeline__logo-shell about-timeline__logo-shell--infinity" aria-hidden="true">
        <motion.svg
          animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 0.98, 1] }}
          className="about-timeline__infinity"
          transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity }}
          viewBox="0 0 120 60"
        >
          <motion.path
            animate={{ pathLength: [0.72, 1, 0.72] }}
            d="M14 30C24 10 44 10 60 30C76 50 96 50 106 30C96 10 76 10 60 30C44 50 24 50 14 30"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.svg>
      </span>
    )
  }

  if (!logoId) {
    return null
  }

  const logo = logoMap[logoId]

  return (
    <span className={`about-timeline__logo-shell about-timeline__logo-shell--${logoId}`} aria-hidden="true">
      <img alt={logo.alt} className="about-timeline__logo" src={logo.src} />
    </span>
  )
}

function TechStackGrid({ items }: { items: TechStackItem[] }) {
  return (
    <ul className="about-timeline__tech-grid" aria-label="Technology stack">
      {items.map((item) => (
        <li className="about-timeline__tech-item" key={item.name}>
          <TiltedCard className="about-timeline__tech-card">
            <span className="about-timeline__tech-icon">
              <TechLogo item={item} />
            </span>
            <span className="about-timeline__tech-name">{item.name}</span>
          </TiltedCard>
        </li>
      ))}
    </ul>
  )
}

function TechLogo({ item }: { item: TechStackItem }) {
  const logo = techLogoMap[item.logoId]

  if (!logo) {
    return null
  }

  return <img alt={logo.alt} src={logo.src} />
}

function TimelineMedia({
  imageId,
  caption,
  href,
}: {
  imageId: 'nus-groupmates' | 'hpb-interns' | 'uoft-exchange' | 'usage-pipeline'
  caption: string
  href?: string
}) {
  const image = imageMap[imageId]
  const media = <img alt={image.alt} className="about-timeline__media-image" src={image.src} />

  return (
    <figure className="about-timeline__media">
      {href ? (
        <a
          className="about-timeline__media-link"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {media}
          <span className="about-timeline__media-link-badge">
            View live <ArrowUpRight size={14} />
          </span>
        </a>
      ) : (
        media
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
