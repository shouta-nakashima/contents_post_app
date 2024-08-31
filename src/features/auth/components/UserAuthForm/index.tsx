import { Icon } from '@/components/Icon'
import { buttonVariants } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { cn } from '@/components/shadcn/utils'
import { signIn } from '../../../../../auth'

export const UserAuthForm = () => {
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>
      <form
        className="w-full flex justify-center"
        action={async () => {
          'use server'
          await signIn('github')
        }}
      >
        <button
          className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
        >
          <Icon.github className="mr-2 w-5 h-5" />
          Github
        </button>
      </form>
    </div>
  )
}
