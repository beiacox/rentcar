import NextAuth from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'
import db from '@/lib/db'
import bcrypt from 'bcrypt'

const AuthOptions = {
    providers: [
        CredentialsProviders({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: '@gmail.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const UserFound = await db.credenciales.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!UserFound) throw new Error('No user found')

                console.log(UserFound)
                const matchPassword = await bcrypt.compare(credentials.password,
                    UserFound.password
                )

                if(!matchPassword) throw new Error('Wrong password')

                return {
                    id: UserFound.id,
                    name: UserFound.username,
                    email: UserFound.email,

                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST }