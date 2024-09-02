import { toast } from '@/components/shadcn/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const usePostCreateButton = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: 'Untitled Post' })
    })

    setIsLoading(false)
    if (!response.ok) {
      return toast({
        title: '問題が発生しました。',
        description: '投稿を作成できませんでした。もう一度お試しください。',
        variant: 'destructive'
      })
    }

    const post = await response.json()

    router.refresh()
    router.push(`/editor/${post.id}`)
  }

  return { isLoading, handleClick }
}
