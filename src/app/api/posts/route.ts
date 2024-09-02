import { type NextRequest, NextResponse } from 'next/server'
import { auth } from '../../../../auth'
import { prisma } from '../../../../prisma'

import * as z from 'zod'

const PostSchema = z.object({
  title: z.string(),
  content: z.string().optional()
})

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { user } = session

    const json = await req.json()
    const body = PostSchema.parse(json)
    const { title, content } = body

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: user.id
      },
      select: {
        id: true
      }
    })
    return NextResponse.json(post)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 422 })
    }
    return NextResponse.json(null, { status: 500 })
  }
}
