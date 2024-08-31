import { redirect } from 'next/navigation'
import { auth } from '../../../../auth'

const RegisterPage = async () => {
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }
  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default RegisterPage
