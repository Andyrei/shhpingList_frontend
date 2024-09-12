import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    let token = request.cookies.get('auth-token')?.value
    if(!token){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// Configuring the middleware to run on specific routes
export const config = {
    matcher: ['/dashboard/:path*', '/account/:path*'] // Apply middleware to these routes
}