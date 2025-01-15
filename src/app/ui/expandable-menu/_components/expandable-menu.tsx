'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useSpring } from 'framer-motion'
import { MenuIcon, Settings, User2, Wallet, X } from 'lucide-react'

export function useExpandable(initialState = false) {
  const [isExpanded, setIsExpanded] = useState(initialState)

  const springConfig = { stiffness: 300, damping: 30 }
  const animateWidth = useSpring(0, springConfig)

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  return { isExpanded, toggleExpand, animateWidth }
}

export function ExpandableMenu() {
  const { isExpanded, toggleExpand, animateWidth } = useExpandable()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      animateWidth.set(isExpanded ? contentRef.current.scrollWidth : 0)
    }
  }, [isExpanded, animateWidth])

  return (
    <div className="flex bg-zinc-900 p-4 rounded-full transition-all duration-300">
      <button type="button" onClick={toggleExpand}>
      <AnimatePresence>
        {isExpanded ? (
          <X />
        ) : (
          <MenuIcon />
        )}
        </AnimatePresence>
      </button>
      <motion.div
        style={{ width: animateWidth }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          <AnimatePresence>
            {isExpanded && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 ml-4"
              >
                <button type="button">
                  <User2 />
                </button>
                <button type="button">
                  <Wallet />
                </button>
                <button type="button">
                  <Settings />
                </button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
