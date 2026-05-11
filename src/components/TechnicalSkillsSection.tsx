import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import gitLogo from '../assets/git.png'
import githubLogo from '../assets/github.png'
import numpyLogo from '../assets/numpy.png'
import pandasLogo from '../assets/pandas.png'
import postgresLogo from '../assets/Postgresql.png'
import pythonLogo from '../assets/python.png'
import pysparkLogo from '../assets/PySpark.jpg'
import rLogo from '../assets/R.svg'
import reactLogo from '../assets/React.png'
import scipyLogo from '../assets/scipy.svg'
import scikitLogo from '../assets/Scikit.svg'
import sparkLogo from '../assets/Apache_Spark.png'
import streamlitLogo from '../assets/streamlit.png'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'

type SkillLogo = {
  backdrop?: 'white'
  name: string
  src: string
}

const skills: SkillLogo[] = [
  { src: pythonLogo, name: 'Python' },
  { src: pandasLogo, name: 'Pandas' },
  { src: numpyLogo, name: 'NumPy' },
  { src: scipyLogo, name: 'SciPy', backdrop: 'white' },
  { src: scikitLogo, name: 'Scikit-learn', backdrop: 'white' },
  { src: sparkLogo, name: 'Apache Spark' },
  { src: pysparkLogo, name: 'PySpark' },
  { src: postgresLogo, name: 'PostgreSQL' },
  { src: reactLogo, name: 'React', backdrop: 'white' },
  { src: streamlitLogo, name: 'Streamlit', backdrop: 'white' },
  { src: gitLogo, name: 'Git' },
  { src: githubLogo, name: 'GitHub', backdrop: 'white' },
  { src: rLogo, name: 'R', backdrop: 'white' },
]

export function TechnicalSkillsSection() {
  const [rotation, setRotation] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const rotationRef = useRef(0)
  const loopFrameRef = useRef<number | null>(null)
  const snapFrameRef = useRef<number | null>(null)
  const lastFrameRef = useRef<number | null>(null)
  const isSnappingRef = useRef(false)
  const rotationStep = 360 / skills.length

  const centerIndex = useMemo(() => {
    const normalized = positiveMod(-rotation / rotationStep, skills.length)
    return Math.round(normalized) % skills.length
  }, [rotation, rotationStep])

  useEffect(() => {
    rotationRef.current = rotation
  }, [rotation])

  useEffect(() => {
    const tick = (time: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = time
      }

      const deltaSeconds = (time - lastFrameRef.current) / 1000
      lastFrameRef.current = time

      if (!isSnappingRef.current) {
        setRotation((previousRotation) => normalizeRotation(previousRotation - deltaSeconds * 14))
      }

      loopFrameRef.current = window.requestAnimationFrame(tick)
    }

    loopFrameRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (loopFrameRef.current !== null) {
        window.cancelAnimationFrame(loopFrameRef.current)
      }
      if (snapFrameRef.current !== null) {
        window.cancelAnimationFrame(snapFrameRef.current)
      }
    }
  }, [])

  const snapToIndex = (index: number) => {
    if (snapFrameRef.current !== null) {
      window.cancelAnimationFrame(snapFrameRef.current)
    }

    const startRotation = rotationRef.current
    const targetBase = -index * rotationStep
    const targetRotation = nearestEquivalentRotation(targetBase, startRotation)
    const delta = targetRotation - startRotation

    if (Math.abs(delta) < 0.01) {
      setRotation(normalizeRotation(targetRotation))
      return
    }

    isSnappingRef.current = true
    const duration = 520
    const startTime = performance.now()

    const animateSnap = (time: number) => {
      const progress = Math.min(1, (time - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const nextRotation = normalizeRotation(startRotation + delta * eased)

      setRotation(nextRotation)

      if (progress < 1) {
        snapFrameRef.current = window.requestAnimationFrame(animateSnap)
        return
      }

      const settledRotation = normalizeRotation(targetRotation)
      rotationRef.current = settledRotation
      setRotation(settledRotation)
      isSnappingRef.current = false
      snapFrameRef.current = null
    }

    snapFrameRef.current = window.requestAnimationFrame(animateSnap)
  }

  return (
    <section className="section-band section-band--dark" id="skills">
      <div className="section-inner">
        <SectionHeading
          description=""
          eyebrow="Technical Skills"
          title="A rotating view of the tech stack I keep reaching for."
        />

        <SectionReveal className="skills-section__carousel-shell">
          <div
            className="skills-section__carousel-stage"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="skills-section__carousel-glow skills-section__carousel-glow--primary" aria-hidden="true" />
            <div className="skills-section__carousel-glow skills-section__carousel-glow--secondary" aria-hidden="true" />
            <div className="skills-section__carousel-frame" aria-label="Rotating technical skills logos">
              <div className="skills-section__carousel-ring" style={{ transform: `translate(-50%, -50%) rotateY(${rotation}deg)` }}>
                {skills.map((skill, index) => {
                  const baseAngle = index * rotationStep
                  const phase = normalizeRotation(baseAngle + rotation)
                  const radians = (phase * Math.PI) / 180
                  const depth = Math.cos(radians)
                  const visibility = (depth + 1) / 2
                  const isHovered = hoveredIndex === index
                  const isCenter = centerIndex === index
                  const isInteractable = visibility > 0.14
                  const scale = (0.72 + visibility * 0.36) * (isHovered ? 1.34 : isCenter ? 1.08 : 1)
                  const opacity = 0.22 + visibility * 0.84
                  const yOffset = isHovered ? -16 : isCenter ? -8 : 0

                  return (
                    <div
                      className="skills-section__carousel-item"
                      key={skill.name}
                      style={{
                        opacity,
                        transform: `translate(-50%, -50%) rotateY(${baseAngle}deg) translateZ(var(--skills-carousel-radius))`,
                        zIndex: isHovered ? 300 : Math.round(visibility * 100),
                      }}
                    >
                      <motion.div
                        animate={{
                          y: yOffset,
                        }}
                        className="skills-section__carousel-button-shell"
                        onMouseEnter={() => {
                          if (isInteractable) {
                            setHoveredIndex(index)
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex((currentIndex) => (currentIndex === index ? null : currentIndex))
                        }}
                        style={{
                          pointerEvents: isInteractable ? 'auto' : 'none',
                        }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <button
                          aria-label={skill.name}
                          className={`skills-section__carousel-button${isCenter ? ' is-center' : ''}`}
                          onBlur={() => setHoveredIndex(null)}
                          onClick={() => snapToIndex(index)}
                          onFocus={() => setHoveredIndex(index)}
                          style={{
                            filter: `saturate(${0.78 + visibility * 0.46})`,
                            transform: `rotateY(${-phase}deg) scale(${scale})`,
                          }}
                          type="button"
                        >
                          <span className="skills-section__carousel-visual">
                            <span
                              className={`skills-section__carousel-logo-shell${skill.backdrop === 'white' ? ' has-white-backdrop' : ''}`}
                            >
                              <img alt={skill.name} className="skills-section__carousel-logo" src={skill.src} />
                            </span>
                            <AnimatePresence initial={false}>
                              {isHovered ? (
                                <span className="skills-section__carousel-caption-anchor">
                                  <motion.span
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="skills-section__carousel-caption"
                                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                                  >
                                    {skill.name}
                                  </motion.span>
                                </span>
                              ) : null}
                            </AnimatePresence>
                          </span>
                        </button>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function normalizeRotation(rotation: number) {
  if (rotation > 180) {
    return rotation - 360
  }

  if (rotation < -180) {
    return rotation + 360
  }

  return rotation
}

function nearestEquivalentRotation(target: number, current: number) {
  return target + 360 * Math.round((current - target) / 360)
}

function positiveMod(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor
}
