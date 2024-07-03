import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl.clone()

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'rrkurs' && pwd === 'kurs2024') {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: '/formulare/kursanmeldung',
}
