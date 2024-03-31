/**
 * Routes that are not protected by the auth middleware
 * These routes do not require the user to be logged in
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
]


/**
 * An array of routes that are used for authentication.
 * These routes do not require users to be logged in 
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login", 
    "/auth/register"
]

/**
 * The prefix for the auth routes
 * Routes that astart with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect to after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
