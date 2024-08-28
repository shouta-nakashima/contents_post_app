import type { Metadata } from 'next'

import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { cn } from '@/components/shadcn/utils'
import type { ReactNode } from 'react'

const fontNotoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post Content App',
  description: 'Post Content App'
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
      </body>
    </html>
  )
}
