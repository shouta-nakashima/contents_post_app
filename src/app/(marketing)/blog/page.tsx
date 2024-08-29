import { allPosts } from 'contentlayer/generated'
import NextImage from 'next/image'
import NextLink from 'next/link'

const BlogPage = () => {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground text-xl">
            contentlayer と MDX で書いています
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid sm:grid-cols-2 gap-10">
        {allPosts.map((post) => (
          <article key={post._id} className="relative flex flex-col space-y-2">
            {post.image && (
              <NextImage
                className="rounded-md bg-muted border"
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            {post.date && <p className="text-muted-foreground">{post.date}</p>}
            <NextLink href={post.slug} className="absolute inset-0" />
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
