import { useRef, type PropsWithChildren, type ReactNode } from 'react'

type SpotlightCardProps = PropsWithChildren<{
  className?: string
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`
  children: ReactNode
}>

// Adapted from the official React Bits SpotlightCard component.
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(121, 208, 198, 0.22)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!cardRef.current) {
      return
    }

    const rect = cardRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    cardRef.current.style.setProperty('--rb-mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--rb-mouse-y', `${y}px`)
    cardRef.current.style.setProperty('--rb-spotlight-color', spotlightColor)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`rb-spotlight-card ${className}`.trim()}
    >
      {children}
    </div>
  )
}
