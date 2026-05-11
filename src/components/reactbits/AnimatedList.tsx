import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactNode,
  type UIEvent,
} from 'react'
import { motion, useInView } from 'motion/react'

type AnimatedItemProps = {
  children: ReactNode
  delay?: number
  index: number
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onClick?: MouseEventHandler<HTMLDivElement>
}

function AnimatedItem({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}: AnimatedItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5, once: false })

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.88, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.88, opacity: 0 }}
      transition={{ duration: 0.24, delay }}
      className="rb-animated-list__motion-item"
    >
      {children}
    </motion.div>
  )
}

type AnimatedListProps = {
  items: string[]
  onItemSelect?: (item: string, index: number) => void
  showGradients?: boolean
  enableArrowNavigation?: boolean
  className?: string
  itemClassName?: string
  displayScrollbar?: boolean
  initialSelectedIndex?: number
}

// Adapted from the official React Bits AnimatedList component.
export function AnimatedList({
  items,
  onItemSelect,
  showGradients = false,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = false,
  initialSelectedIndex = 0,
}: AnimatedListProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [keyboardNav, setKeyboardNav] = useState(false)
  const [topGradientOpacity, setTopGradientOpacity] = useState(0)
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1)

  const commitSelection = useCallback(
    (item: string, index: number) => {
      setSelectedIndex(index)
      onItemSelect?.(item, index)
    },
    [onItemSelect],
  )

  const handleItemMouseEnter = useCallback(
    (item: string, index: number) => {
      commitSelection(item, index)
    },
    [commitSelection],
  )

  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    const { scrollTop, scrollHeight, clientHeight } = target
    setTopGradientOpacity(Math.min(scrollTop / 50, 1))
    const bottomDistance = scrollHeight - (scrollTop + clientHeight)
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1))
  }, [])

  useEffect(() => {
    if (!enableArrowNavigation) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setKeyboardNav(true)
        setSelectedIndex((previous) => Math.min(previous + 1, items.length - 1))
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setKeyboardNav(true)
        setSelectedIndex((previous) => Math.max(previous - 1, 0))
      } else if (event.key === 'Enter' && selectedIndex >= 0 && selectedIndex < items.length) {
        event.preventDefault()
        commitSelection(items[selectedIndex], selectedIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [commitSelection, enableArrowNavigation, items, selectedIndex])

  useEffect(() => {
    if (!(keyboardNav && selectedIndex >= 0 && listRef.current)) {
      return
    }

    const container = listRef.current
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null

    if (selectedItem) {
      const extraMargin = 40
      const containerScrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      const itemTop = selectedItem.offsetTop
      const itemBottom = itemTop + selectedItem.offsetHeight

      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' })
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        })
      }
    }

    if (selectedIndex >= 0 && selectedIndex < items.length) {
      onItemSelect?.(items[selectedIndex], selectedIndex)
    }

    setKeyboardNav(false)
  }, [items, keyboardNav, onItemSelect, selectedIndex])

  return (
    <div className={`rb-animated-list ${className}`.trim()}>
      <div
        ref={listRef}
        className={`rb-animated-list__scroll ${displayScrollbar ? '' : 'rb-animated-list__scroll--hidden'}`.trim()}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={`${item}-${index}`}
            delay={0.06}
            index={index}
            onMouseEnter={() => handleItemMouseEnter(item, index)}
            onClick={() => commitSelection(item, index)}
          >
            <div
              className={`rb-animated-list__item ${selectedIndex === index ? 'is-selected' : ''} ${itemClassName}`.trim()}
            >
              <p className="rb-animated-list__item-text">{item}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {showGradients ? (
        <>
          <div className="rb-animated-list__gradient rb-animated-list__gradient--top" style={{ opacity: topGradientOpacity }} />
          <div
            className="rb-animated-list__gradient rb-animated-list__gradient--bottom"
            style={{ opacity: bottomGradientOpacity }}
          />
        </>
      ) : null}
    </div>
  )
}
