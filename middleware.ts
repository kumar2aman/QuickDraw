import { auth } from "@/lib/auth";

import {
  publicRoutes,
  authRoutes,
  apiAuthPerfix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/route";


export default auth((req): any => {
  // const LOGIN = !!req.auth
  //     console.log("PATH:", req.nextUrl.pathname)
  //     console.log("login:", LOGIN)

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoutes = nextUrl.pathname.startsWith(apiAuthPerfix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isApiRoutes) {
    return null;
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return null;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/signin", nextUrl));
  }

  return null;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
