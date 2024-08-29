import { MainNavigation } from '@/components/MainNavigation'
import { SiteFooter } from '@/components/SiteFooter'
import { buttonVariants } from '@/components/shadcn/ui/button'
import { cn } from '@/components/shadcn/utils'
import { marketingConfig } from '@/config/marketing'
import NextLink from 'next/link'
import type { ReactNode } from 'react'

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNavigation items={marketingConfig.mainNav} />
          <nav>
            <NextLink
              href={'/login'}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              ログイン
            </NextLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

export default MarketingLayout
