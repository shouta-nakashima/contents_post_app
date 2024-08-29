'use client'

import { MobileNavigation } from '@/components/MobileNavigation'
import type { NavItem } from '@/types/marketing'
import NextLink from 'next/link'
import { useMainNavigation } from './hooks'

type Props = {
  items: NavItem[]
}

export const MainNavigation = ({ items }: Props) => {
  const { open, setOpen } = useMainNavigation()
  return (
    <div className="flex items-center md:gap-10">
      <NextLink href={'/'} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Content Post</span>
      </NextLink>
      <nav className="md:flex gap-6 hidden">
        {items.map((item, index) => (
          <NextLink
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </NextLink>
        ))}
      </nav>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <span>メニュー</span>
      </button>
      {open && <MobileNavigation items={items} />}
    </div>
  )
}
