import { Icon } from '@/components/Icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/shadcn/ui/dropdown-menu'
import type { Post } from '@prisma/client'
import NextLink from 'next/link'

type Props = {
  post: Pick<Post, 'id' | 'title'>
}

export const PostOperations = ({ post }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icon.ellipsis className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <NextLink href={`/editor/${post.id}`} className="w-full">
              編集
            </NextLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive cursor-pointer">
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
