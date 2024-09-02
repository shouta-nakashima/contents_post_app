'use client'

import { Icon as ComponentIcon } from '@/components/Icon'
import type { SidebarNavItem } from '@/types/navigationItem'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  items: SidebarNavItem[]
}

export const DashboardNavigation = ({ items }: Props) => {
  if (!items.length) return null
  const path = usePathname()
  return (
    <nav>
      {items.map((item, index) => {
        const Icon = ComponentIcon[item.icon || 'arrowRight']
        return (
          <NextLink key={index} href={item.href!}>
            <span
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent text-accent-foreground ${path === item.href ? 'bg-accent' : 'bg-transparent'}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
          </NextLink>
        )
      })}
    </nav>
  )
}
