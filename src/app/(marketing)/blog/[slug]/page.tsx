import { ConvertMDX } from '@/components/ConvertMDX'
import { buttonVariants } from '@/components/shadcn/ui/button'
import { cn } from '@/components/shadcn/utils'
import { allPosts } from 'contentlayer/generated'
import { format } from 'date-fns'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

const findPost = async (slug: string) =>
  await allPosts.find((post) => post.slugAsParams === slug)

export const generateMetadata = async ({
  params
}: { params: { slug: string } }): Promise<Metadata> => {
  const { slug } = params
  const page = await findPost(slug)
  if (!page) {
    return {}
  }
  return {
    title: page.title,
    description: page.description,
    robots: 'noindex' //検索除外
  }
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const post = await findPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && <time>{format(post.date, 'yyyy/MM/dd')} に作成</time>}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <NextImage
          src={post.image}
          alt={post.title}
          height={405}
          width={720}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <ConvertMDX html={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <NextLink
          className={cn(buttonVariants({ variant: 'ghost' }))}
          href={'/blog'}
        >
          全ての記事を見る
        </NextLink>
      </div>
    </article>
  )
}

export default BlogDetailPage
