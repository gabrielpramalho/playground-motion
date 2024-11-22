'use client'

import { motion } from 'framer-motion'

export default function AnimateOnShow() {
  return (
    <div className="flex flex-1 justify-center items-center py-20">
      <div className="flex gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'linear' }}
          className="size-40 bg-red-500 rounded-lg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'linear' }}
          className="size-40 bg-red-500 rounded-lg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: 'linear' }}
          className="size-40 bg-red-500 rounded-lg"
        />
      </div>
    </div>
  )
}
