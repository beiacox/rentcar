'use client'
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter()

    return (
        <>
            <div className="m-4">
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Regresar
                </button>
            </div>

        </>
    );
};

export default BackButton;
