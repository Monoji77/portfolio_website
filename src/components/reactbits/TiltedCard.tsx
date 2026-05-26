import { useRef, type MouseEventHandler, type PropsWithChildren, type ReactNode } from 'react'

type TiltedCardProps = PropsWithChildren<{
  className?: string
  children: ReactNode
}>

// Adapted from the React Bits tilted-card interaction pattern.
export function TiltedCard({ children, className = '' }: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const resetTilt = () => {
    if (!cardRef.current) {
      return
    }

    cardRef.current.style.setProperty('--rb-tilt-rotate-x', '0deg')
    cardRef.current.style.setProperty('--rb-tilt-rotate-y', '0deg')
    cardRef.current.style.setProperty('--rb-tilt-glare-x', '50%')
    cardRef.current.style.setProperty('--rb-tilt-glare-y', '50%')
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!cardRef.current) {
      return
    }

    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top
    const percentX = offsetX / rect.width
    const percentY = offsetY / rect.height
    const rotateX = (0.5 - percentY) * 12
    const rotateY = (percentX - 0.5) * 16

    cardRef.current.style.setProperty('--rb-tilt-rotate-x', `${rotateX.toFixed(2)}deg`)
    cardRef.current.style.setProperty('--rb-tilt-rotate-y', `${rotateY.toFixed(2)}deg`)
    cardRef.current.style.setProperty('--rb-tilt-glare-x', `${(percentX * 100).toFixed(2)}%`)
    cardRef.current.style.setProperty('--rb-tilt-glare-y', `${(percentY * 100).toFixed(2)}%`)
  }

  return (
    <div
      ref={cardRef}
      className="rb-tilted-card"
      onBlur={resetTilt}
      onMouseLeave={resetTilt}
      onMouseMove={handleMouseMove}
    >
      <div className={`rb-tilted-card__inner ${className}`.trim()}>{children}</div>
    </div>
  )
}
