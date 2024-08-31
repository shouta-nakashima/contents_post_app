import { auth as middleware } from 'auth'
import { NextResponse } from 'next/server'

// Or like this if you need to do something here.
export default middleware((req) => {
  const token = req.auth?.user
  if (token) {
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register')

    if (isAuthPage) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  } else {
    const isRedirectTargetPage = req.nextUrl.pathname.startsWith('/dashboard')
    if (isRedirectTargetPage) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
})

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
