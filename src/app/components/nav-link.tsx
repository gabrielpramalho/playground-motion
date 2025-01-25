'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { motion } from 'framer-motion'

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  const isCurrent = props.href.toString() === pathname

  return (
    <Link
      className="hover:bg-neutral-900 px-4 py-2 rounded-lg  relative"
      data-current={isCurrent}
      {...props}
    >
      {isCurrent && <motion.span layoutId="aside" className="block absolute inset-0 -z-10 bg-neutral-900 rounded-lg" />}
      {children}
    </Link>
  )
}
