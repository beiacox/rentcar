"use client"

import { useSession } from "next-auth/react"
import Link from 'next/link'

const withAuth = (WrappedComponent) => {
    return function Component(props) {

        const { data: session, status } = useSession();

        if (status === 'loading') {
            return <p>Cargando...</p>;
        }

        return (
            <>
                {session?.user.role === 'ADMIN' ?
                    <WrappedComponent {...props} />
                    :
                    (
                        <>
                            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                                <div className="bg-white shadow-md rounded-lg p-8">
                                    <h1 className="text-2xl font-bold text-red-600">No tienes permisos</h1>
                                    <Link href="/">
                                        <p className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            Volver a la página principal
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
            </>
        )
    }
}

export default withAuth;
