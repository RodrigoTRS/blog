import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken");

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Define the paths where the middleware should run
export const config = {
  matcher: ["/admin/:path*"], // Adjust this to match your admin routes
};
