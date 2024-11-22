'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const isCurrent = props.href.toString() === pathname

  return (
    <Link
      className="hover:bg-neutral-900 px-4 py-2 rounded-lg data-[current=true]:bg-neutral-900"
      data-current={isCurrent}
      {...props}
    />
  )
}