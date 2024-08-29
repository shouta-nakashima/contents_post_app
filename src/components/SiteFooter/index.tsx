import { siteConfig } from '@/config/site'
import NextLink from 'next/link'

export const SiteFooter = () => {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20">
        <p className="text-center text-sm">
          Built by {''}
          <NextLink
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Nakaji
          </NextLink>
          . Hosted on {''}
          <NextLink
            href={'https://vercel.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Vercel
          </NextLink>
        </p>
      </div>
    </footer>
  )
}
