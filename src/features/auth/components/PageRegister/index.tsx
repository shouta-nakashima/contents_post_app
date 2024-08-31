import { UserAuthForm } from '@/features/auth/components/UserAuthForm'
import NextLink from 'next/link'

export const PageRegister = () => {
  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウントの作成
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してアカウントを作成できます。
          </p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <NextLink href={'/login'} className="underline underline-offset-4">
            アカウントをお持ちの方はこちら
          </NextLink>
        </p>
      </div>
    </div>
  )
}
