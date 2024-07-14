"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Customers() {
    const datos = [
        { name: 'John Doe', age: 28, email: 'john@example.com' },
        { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
        { name: 'Sam Green', age: 23, email: 'sam@example.com' },
        // Añade más datos según sea necesario
    ];

    const [data, setData] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => {
        fetch("http://localhost:3000/api/customers")
        .then(d => d.json())
        .then(d => {
            setData(d);
            setLoading(false)
        });
    
    }, [])
    

    let customers = fetch("http://localhost:3000/api/customers").then(d => d.json());

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
                                        id
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        cedula
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        nombre
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        telefono
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        direccion
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        fecha
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                !loading && data.users.map((customer, index) => (
                                    <tr key={index} className="bg-white border-b border-gray-200">
                                        <td className="px-5 py-5 text-sm">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {customer.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.cedula}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.nombre}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.telefono}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.direccion}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.fecha}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.estado}</p>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}