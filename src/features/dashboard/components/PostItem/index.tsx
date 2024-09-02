import { PostOperations } from '@/features/dashboard/components/PostOperations'
import type { Post } from '@prisma/client'
import { format } from 'date-fns'
import NextLink from 'next/link'

type Props = {
  post: Pick<Post, 'id' | 'title' | 'published' | 'createdAt'>
}

export const PostItem = ({ post }: Props) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <NextLink
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </NextLink>
        <div>
          <p className="text-sm text-muted-foreground">
            {format(post.createdAt, 'yyyy-MM-dd')}
          </p>
        </div>
      </div>
      <PostOperations post={post} />
    </div>
  )
}
