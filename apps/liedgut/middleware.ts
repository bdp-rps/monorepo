import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // skip local and previews
  if (!req.headers.get('host')?.includes('bdp-rps.app')) {
    return NextResponse.next()
  }

  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (
      (user === 'lvrps' && pwd === 'besterlv123') ||
      (user === 'streng' && pwd === 'strenggeheim')
    ) {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
