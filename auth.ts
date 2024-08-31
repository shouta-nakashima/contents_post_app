import NextAuth, { type NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const config: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.image = token.picture
      }
      return session
    }
    // authorized({ request, auth }) {
    //   try {
    //     const { pathname } = request.nextUrl
    //     if (pathname === 'protected-page') return !!auth
    //     return true
    //   } catch (error) {
    //     console.log('Error:', error)
    //   }
    // }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
