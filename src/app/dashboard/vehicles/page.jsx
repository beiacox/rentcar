"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CarModal from '@/app/components/CarModal'
import '../styles.css'

export default function Customers() {

    const [data, setData] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

<<<<<<< HEAD
    useEffect(() => {
        fetch("http://localhost:3000/api/vehicles")
=======
    const fetchData = () => {
        fetch("/api/vehicles")
>>>>>>> 5aa595b (Borrar reservas y mejoras)
        .then(d => d.json())
        .then(d => {
            setData(d);
            setLoading(false)
        });
    }

    useEffect(() => {
        fetchData()
    }, [])
    
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
                    <CarModal recargar={fetchData}/>

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
                                        placa
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        modelo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        tipo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        transmision
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        asientos
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        combustible
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                !loading && data.vehicles.map((customer, index) => (
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
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.placa}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.modelo}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.tipo}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.transmision}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.asientos}</p>
                                        </td>
                                        <td className="px-5 py-5 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{customer.combustible}</p>
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