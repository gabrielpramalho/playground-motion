'use client'

import { motion, useAnimation } from 'framer-motion'
import type { Variants } from 'motion/react'

export function RotateIcon() {
  const controls = useAnimation()

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
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        variants={{
          normal: {
            rotate: '0deg',
          },
          animate: {
            rotate: '50deg',
          },
        }}
        animate={controls}
      >
        <title>Rotate</title>
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
      </motion.svg>
    </div>
  )
}
