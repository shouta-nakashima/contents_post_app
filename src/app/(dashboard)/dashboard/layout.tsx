import { MainNavigation } from '@/components/MainNavigation'
import { SiteFooter } from '@/components/SiteFooter'
import { dashboardConfig } from '@/config/dashboard'
import type { ReactNode } from 'react'
import { DashboardNavigation } from 'src/features/dashboard/components/DashboardNavigation'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen space-y-6">
      <header className="sticky top-0 z-40 border bg-background">
        <div className="container flex items-center justify-between py-4 h-16">
          <MainNavigation items={dashboardConfig.mainNav} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex w-[200px] flex-col">
          <DashboardNavigation items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}

export default DashboardLayout
