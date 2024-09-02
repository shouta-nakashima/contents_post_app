import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { DashboardShell } from '@/features/dashboard/components/DashboardShell'
import { PostCreateButton } from '@/features/dashboard/components/PostCreateButton'
import { PostItem } from '@/features/dashboard/components/PostItem'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import { prisma } from '../../../../prisma'

const DashboardPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  const posts = await prisma.post.findMany({
    where: {
      authorId: user.id
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="記事投稿" text="記事の作成と管理">
        <PostCreateButton />
      </DashboardHeader>
      {posts.length ? (
        <div>
          <div className="divide-y border rounded-md">
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="ml-2">投稿がありません。</div>
      )}
    </DashboardShell>
  )
}

export default DashboardPage
