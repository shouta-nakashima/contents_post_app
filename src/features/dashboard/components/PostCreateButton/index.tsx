'use client'

import { Icon } from '@/components/Icon'
import { type ButtonProps, buttonVariants } from '@/components/shadcn/ui/button'
import { cn } from '@/components/shadcn/utils'
import { usePostCreateButton } from '@/features/dashboard/components/PostCreateButton/hooks'

interface Props extends ButtonProps {}
export const PostCreateButton = ({ className, variant, ...props }: Props) => {
  const { isLoading, handleClick } = usePostCreateButton()
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { 'cursor-not-allowed opacity-60': isLoading },
        className
      )}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  )
}
