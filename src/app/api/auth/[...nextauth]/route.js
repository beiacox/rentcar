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
                        correo: credentials.email
                    }
                })
                if (!UserFound) throw new Error('No user found')

                console.log(UserFound)

                const matchPassword = await bcrypt.compare(credentials.password,
                    UserFound.clave
                )

                if (!matchPassword) throw new Error('Wrong password')
                return {
                    id: UserFound.id,
                    userId: UserFound.id_cliente,
                    name: UserFound.usuario,
                    email: UserFound.correo,
                    role: UserFound.role
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            console.log(user)
            if (user) {
                token.role = user.role; // Agrega el rol al token
                token.id = user.userId;
            }
            return token;
        },

        async session({ session, token }) {
            session.user.role = token.role; // Agrega el rol a la sesión
            session.user.id = token.id;
            return session;
        }
    }}
const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST }