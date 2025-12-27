import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Content-Security-Policy',
    [
      "default-src 'self'",
      "img-src 'self' data: https://*",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://*",
      "frame-ancestors 'self'"
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: '/:path*',
};
