"use client"
import { useRouter } from 'next/navigation';

export default function Users() {
    const data = [
        { name: 'John Doe', age: 28, email: 'john@example.com' },
        { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
        { name: 'Sam Green', age: 23, email: 'sam@example.com' },
        // Añade más datos según sea necesario
    ];

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <button onClick={handleBack} className="text-blue-500 underline">
                ← Regresar
            </button>

            <div className="py-8">
                <div className="overflow-x-auto">
                    <div className="min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        Age
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((person, index) => (
                                    <tr key={index} className="bg-white border-b border-gray-200">
                                        <td className="px-5 py-5 text-sm">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {person.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{person.age}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{person.email}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}