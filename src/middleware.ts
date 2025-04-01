import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

function enforceLocaleByDomain(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // if the domain ends with .cl, enforce Spanish (es)
  if (hostname.endsWith('.cl')) {
    if (!url.pathname.startsWith('/es')) {
      url.pathname = `/es${url.pathname}`
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  // Apply custom domain locale enforcement
  const response = enforceLocaleByDomain(request)
  // if a redirect occurred, stop further execution
  if (response && response.headers.get('location')) {
    return response
  }
  // otherwise, continue with next-intl middleware
  return createMiddleware(routing)(request)
}

export const config = {
  // Match all pathnames except for api, trpc, _next, _vercel or those containing a dot.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}