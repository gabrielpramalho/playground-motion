'use client'

import { motion, useAnimation } from 'framer-motion'
import type { Variants } from 'motion/react'

export function CheckIcon() {
  const controls = useAnimation()

  const pathVariant: Variants = {
    normal: { pathLength: 1, opacity: 1},
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      pathOffset: [1, 0],
      transition: {
        delay: 0.1,
        duration: 0.3,
        opacity: { duration: 0.1, delay: 0.1 },
      },
    }
  }

  return (
    <div
      className="p-2 bg-zinc-900 cursor-pointer rounded-lg hover:bg-zinc-800 transition-all"
      onMouseEnter={() => {
        controls.start('animate')
      }}
      onMouseLeave={() => {
        controls.start('normal')
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Check</title>
        <motion.path 
          d="M20 6 9 17l-5-5" 
          initial="normal"
          variants={pathVariant}
          animate={controls}
        />
      </svg>
    </div>
  )
}
