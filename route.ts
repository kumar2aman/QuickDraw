/**
 * these is a public routes...
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
]

/**
 * these routes will redirect logged in user to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
    "/signup",
    "/signin"
  
]

/**
 * Routes that starts with this perfix are used for api authentication purposes...
 * @type {string}
 */

export const apiAuthPerfix = "/api/auth"

/**
 * Default logged in path..
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard"