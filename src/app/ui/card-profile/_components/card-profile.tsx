'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useExpandable(initialState = false) {
  const [isExpanded, setIsExpanded] = useState(initialState)

  const springConfig = { stiffness: 300, damping: 30 }
  const animatedHeight = useSpring(0, springConfig)

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  return { isExpanded, toggleExpand, animatedHeight }
}

export function CardProfile() {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0)
    }
  }, [isExpanded, animatedHeight])

  return (
    <div className="w-[420px] flex flex-col">
      <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 h-24 rounded-t-xl" />
      <div className="flex flex-col bg-zinc-50 text-zinc-950 gap-4 p-4 pt-0 rounded-b-xl">
        <div className="-mt-8">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/gabrielpramalho.png" />
            <AvatarFallback>GR</AvatarFallback>
          </Avatar>
        </div> 
        <div className="flex justify-between">
          <div className="flex flex-col">
            <strong className="text-lg font-semibold tracking-tight">
              Gabriel Ramalho
            </strong>
            <span className="text-muted-foreground text-sm">
              @gabrielpramalho
            </span>
          </div>
          <Button
            onClick={toggleExpand}
            className="rounded-full transition-all"
          >
            {isExpanded ? 'See less' : 'See more'}
          </Button>
        </div>
        <motion.div
          style={{ height: animatedHeight }}
          transition={{ type: 'spring', stiffness: 100, damping: 100, mass: 1 }}
          className="overflow-hidden"
        >
          <div ref={contentRef}>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, translateX: '-40px' }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <p className="text-sm">
                    Passionate web developer seeking elegant solutions to
                    complex problems. CS graduate | 3 years of web development
                    experience Let's code the future together!
                  </p>

                  <motion.div
                    initial={{ opacity: 0, translateX: '-40px' }}
                    animate={{ opacity: 1, translateX: 0 }}
                    className="flex gap-2"
                  >
                    <Badge className="bg-zinc-100">Front End</Badge>
                    <Badge className="bg-zinc-100">Back End</Badge>
                    <Badge className="bg-zinc-100">Software Engineer</Badge>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
