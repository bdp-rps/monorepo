import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl.clone()

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (url.pathname === '/formulare/segelanmeldung') {
      if (user == 'segeln' && pwd === 'segeln2025') {
        return NextResponse.next()
      }
    }

    if (url.pathname === '/formulare/kursanmeldung/1') {
      if (user == 'fak' && pwd === 'fak2025') {
        return NextResponse.next()
      }
    }

    if (url.pathname === '/formulare/kursanmeldung/2') {
      if (user == 'sk' && pwd === 'sk2025') {
        return NextResponse.next()
      }
    }

    if (url.pathname === '/formulare/kursanmeldung/3') {
      if (user == 'sfk' && pwd === 'sfk2025') {
        return NextResponse.next()
      }
    }

    if (url.pathname === '/formulare/kursanmeldung/4') {
      if (user == 'mfk' && pwd === 'mfk2025') {
        return NextResponse.next()
      }
    }
  }

  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/formulare/kursanmeldung/1',
    '/formulare/kursanmeldung/2',
    '/formulare/kursanmeldung/3',
    '/formulare/kursanmeldung/4',
    '/formulare/segelanmeldung',
  ],
}
