import { motion, type Transition } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'

type BlurTextProps = {
  text?: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: Record<string, string | number>
  animationTo?: Array<Record<string, string | number>>
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
}

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>,
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap((step) => Object.keys(step))])
  const keyframes: Record<string, Array<string | number>> = {}

  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])]
  })

  return keyframes
}

// Adapted from the official React Bits BlurText component.
export function BlurText({
  text = '',
  delay = 120,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -32 }
        : { filter: 'blur(10px)', opacity: 0, y: 32 },
    [direction],
  )

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.55,
        y: direction === 'top' ? 4 : -4,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction],
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo
  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, index) =>
    stepCount === 1 ? 0 : index / (stepCount - 1),
  )

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        }

        return (
          <motion.span
            key={`${segment}-${index}`}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </p>
  )
}
