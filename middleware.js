import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // Protect /dashboard and its subpaths
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      // Not logged in, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  // Prevent logged-in users from accessing auth pages
  if (pathname === '/login' || pathname === '/signup') {
    if (token) {
      // Logged in, redirect to dashboard
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};
