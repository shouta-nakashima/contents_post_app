import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { type NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { prisma } from './prisma'

export const config: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.image = token.picture
      }
      return session
    }
  },
  session: {
    strategy: 'jwt' //NOTE: line8 "adapter: PrismaAdapter(prisma)" を指定すると db session になるので session 管理を JWT で行う(Auth.js での session 管理)
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
