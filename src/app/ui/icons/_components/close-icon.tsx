'use client'

import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'motion/react';

const closeVariant1: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.3,
      ease: 'linear',
      opacity: { duration: 0.3 },
    },
  },
};

const closeVariant2: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.3 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.4,
      ease: 'linear',
      opacity: { duration: 0.3 },
    },
  },
};

export function CloseIcon() {
  const controls = useAnimation();

  return (
    <div 
      className="p-2 bg-zinc-900 cursor-pointer rounded-lg hover:bg-zinc-800 transition-all"
      onMouseEnter={() => {
        controls.start('animate');
      }}
      onMouseLeave={() => {
        controls.start('normal');
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
        <title>Close</title>
        <motion.path 
          d="M18 6 6 18" 
          variants={closeVariant1}
          initial="normal"
          animate={controls}
        />
        <motion.path 
          d="m6 6 12 12" 
          variants={closeVariant2}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  )
}
