import { buttonVariants } from '@/components/shadcn/ui/button'
import { cn } from '@/components/shadcn/utils'
import { siteConfig } from '@/config/site'
import NextLink from 'next/link'

const IndexPage = () => {
	return (
		<>
			<section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
				<div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
					<NextLink
						href={siteConfig.links.x}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
					>
						Xをフォローする
					</NextLink>
					<h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
						Content Post App
					</h1>
					<p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
						アプリケーションはNext.js AppRouter
						で作られたものです。自由に投稿をポストすることができます。
					</p>
					<div className="space-x-4">
						<NextLink
							href={'/login'}
							className={cn(buttonVariants({ size: 'lg' }))}
						>
							はじめる
						</NextLink>
						<NextLink
							href={siteConfig.links.github}
							className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</NextLink>
					</div>
				</div>
			</section>
		</>
	)
}

export default IndexPage
