import type { NavItem } from '@/types/marketing'
import NextLink from 'next/link'

type Props = {
	items: NavItem[]
}

export const MainNavigation = ({ items }: Props) => {
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
		</div>
	)
}
