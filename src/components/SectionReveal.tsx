import { motion } from 'motion/react'
import type { PropsWithChildren } from 'react'

type SectionRevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
