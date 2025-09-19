import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const { pathname } = request.nextUrl

    const authPage = ["/login", "/register"]
    const routes = ["/", "/cart", "/wishlist", "/categories", "/productDetails"]

    if(!token && routes.includes(pathname)){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    if(token && authPage.includes(pathname)){
        return NextResponse.redirect(new URL("/", request.url))
    }

//   // If no token -> redirect to login (only for protected routes)
//     if (!token && pathname !== "/login" && pathname !== "/register") {
//         return NextResponse.redirect(new URL("/login", request.url))
//     }

//   // If authenticated but tries to visit login/register -> send them home
//     if (token && (pathname === "/login" || pathname === "/register")) {
//         return NextResponse.redirect(new URL("/", request.url))
//     }

    return NextResponse.next()
}

export const config = {
    matcher: ["/", "/cart", "/wishlist", "/categories", "/productDetails", "/login", "/register"],
}
