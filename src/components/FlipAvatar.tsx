import { useState } from 'react'
import { motion } from 'motion/react'

const sparkleSpecs = [
  { top: '18%', left: '24%', size: '0.5rem', delay: 0.6, duration: 0.85, repeatDelay: 5.8 },
  { top: '30%', left: '70%', size: '0.42rem', delay: 3.1, duration: 0.72, repeatDelay: 6.9 },
  { top: '68%', left: '26%', size: '0.38rem', delay: 5.2, duration: 0.68, repeatDelay: 7.6 },
]

type FlipAvatarProps = {
  frontImage: string
  backImage: string
  frontAlt?: string
  backAlt?: string
  className?: string
}

export default function FlipAvatar({
  frontImage,
  backImage,
  frontAlt = 'Profile portrait',
  backAlt = 'Avatar illustration',
  className = '',
}: FlipAvatarProps) {
  const [flipped, setFlipped] = useState(false)
  const [pulseKey, setPulseKey] = useState(0)
  const rootClassName = [
    'group relative aspect-square w-full cursor-pointer rounded-full bg-transparent [perspective:1000px] focus-visible:outline-none',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = () => {
    setFlipped((prev) => !prev)
    setPulseKey((prev) => prev + 1)
  }

  const renderSheen = (side: string) => (
    <motion.span
      key={`sheen-${side}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[-12%] left-[-34%] w-[42%] rotate-[18deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_36%,rgba(255,255,255,0.3)_52%,rgba(255,255,255,0.08)_68%,rgba(255,255,255,0)_100%)] mix-blend-screen"
      animate={{
        opacity: [0, 0.12, 0.3, 0.12, 0],
        x: ['-140%', '-70%', '40%', '135%', '185%'],
      }}
      transition={{
        duration: 2.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 3.8,
      }}
    />
  )

  const renderSparkles = (side: string) =>
    sparkleSpecs.map((sparkle, index) => (
      <motion.span
        key={`${side}-sparkle-${index}`}
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: sparkle.top,
          left: sparkle.left,
          width: sparkle.size,
          height: sparkle.size,
        }}
        initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
        animate={{
          opacity: [0, 0, 0.9, 0.4, 0],
          scale: [0.2, 0.2, 1, 0.6, 0.15],
          rotate: [0, 0, 18, 38, 52],
        }}
        transition={{
          duration: sparkle.duration,
          ease: 'easeOut',
          repeat: Infinity,
          repeatDelay: sparkle.repeatDelay,
          delay: sparkle.delay,
        }}
      >
        <span className="absolute inset-0 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
        <span className="absolute left-1/2 top-1/2 h-px w-[240%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75" />
        <span className="absolute left-1/2 top-1/2 w-px h-[240%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75" />
      </motion.span>
    ))

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={flipped}
      className={rootClassName}
      aria-label="Flip avatar"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-14%] rounded-full bg-[radial-gradient(circle,rgba(128,245,194,0.2)_0%,rgba(128,245,194,0)_68%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <motion.span
        key={pulseKey}
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-10%] rounded-full border border-[#80f5c2]/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 0.7, 0], scale: [0.9, 1.08, 1.16] }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      />
      <motion.div
        className="relative h-full w-full rounded-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        whileHover={{ scale: 1.035, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl [backface-visibility:hidden]">
          <img
            src={frontImage}
            alt={frontAlt}
            className="h-full w-full object-cover"
          />
          {renderSheen('front')}
          {renderSparkles('front')}
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={backImage}
            alt={backAlt}
            className="h-full w-full object-cover"
          />
          {renderSheen('back')}
          {renderSparkles('back')}
        </div>
      </motion.div>
    </button>
  )
}
