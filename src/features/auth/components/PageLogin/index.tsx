import { UserAuthForm } from '@/features/auth/components/UserAuthForm'
import NextLink from 'next/link'

export const PageLogin = () => {
  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してログインできます。
          </p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <NextLink href={'/register'} className="underline underline-offset-4">
            アカウントをお持ちではないですか？
          </NextLink>
        </p>
      </div>
    </div>
  )
}
