export {default} from 'next-auth/middleware';

export const config = {
    matcher: ['/reservas/:path*', '/dashboard/:path*']
}