import { PageLogin } from '@/features/auth/components/PageLogin'
import { redirect } from 'next/navigation'
import { auth } from '../../../../auth'

const LoginPage = async () => {
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }
  return <PageLogin />
}

export default LoginPage
