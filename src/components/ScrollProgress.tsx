import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    mass: 0.22,
  })

  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX }} />
}
