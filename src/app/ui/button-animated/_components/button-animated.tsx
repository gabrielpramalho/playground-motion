'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const buttonCopy = {
  idle: 'Send me a login link',
  loading: 'Loading...',
  success: 'Login link sent!',
}

export function ButtonAnimated() {
  const [buttonState, setButtonState] = useState<
    'idle' | 'success' | 'loading'
  >('idle')

  function handleClick() {
    setButtonState('loading')

    setTimeout(() => {
      setButtonState('success')
    }, 1750)

    setTimeout(() => {
      setButtonState('idle')
    }, 3500)
  }

  return (
    <div className='flex
    '>
      <button type='button'
       className="rounded-lg font-medium text-sm h-8 w-[148px] overflow-hidden bg-blue-500 relative shadow" onClick={handleClick}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            className='flex w-full items-center justify-center text-white'
            initial={{ y: -36, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            exit={{ y: 36, opacity: 0}}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            key={buttonState}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
