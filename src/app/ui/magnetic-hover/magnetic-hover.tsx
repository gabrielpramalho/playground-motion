'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function MagneticHover() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const items = [
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'About Us',
      href: '/about-us',
    },
  ]

  return (
    <motion.ul className="flex flex-col">
      {items.map((item, idx) => {
        const { href, title } = item

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={idx}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-lg px-4 py-2"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span
                    className="absolute inset-0 z-0 block h-full w-full rounded-lg bg-neutral-900"
                    layoutId="cardHoverEffect"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.10, delay: 0.1 },
                    }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-[1]">{title}</span>
            </a>
          </li>
        )
      })}
    </motion.ul>
  )
}
