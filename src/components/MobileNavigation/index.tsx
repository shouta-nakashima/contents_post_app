import { siteConfig } from '@/config/site'
import type { NavItem } from '@/types/marketing'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import NextLink from 'next/link'

type Props = {
  items: NavItem[]
  onClose: () => void
}

export const MobileNavigation = ({ items, onClose }: Props) => {
  useLockBodyScroll()
  return (
    <div className="fixed top-16 inset-0 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-white text-popover-foreground p-4 shadow-md">
        <NextLink href={'/'} className="font-bold">
          {siteConfig.name}
        </NextLink>
        <nav className="text-sm flex gap-4">
          {items.map((item, index) => (
            <NextLink
              onClick={onClose}
              className="p-2 font-medium hover:underline"
              key={index}
              href={item.href}
            >
              {item.title}
            </NextLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
