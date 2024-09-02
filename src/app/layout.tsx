import type { Metadata } from 'next'

import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/shadcn/ui/toaster'
import { cn } from '@/components/shadcn/utils'
import { siteConfig } from '@/config/site'
import type { ReactNode } from 'react'

const fontNotoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontNotoSansJp.className
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
