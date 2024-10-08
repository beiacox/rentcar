"use client"
import ReservationForm from '../components/ReservationForm';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import BackButton from '@/app/components/BackButton';

const ReservationPage = ({ params }) => {
    const carId = params.carId[1];

    const [vehicleInfo, setVehicleInfo] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
    
    const {data: session} = useSession();
    const userId = session?.user.id;

    useEffect(() => {
        fetch(`/api/vehicles/${carId}`)
            .then(d => d.json())
            .then(d => {
                setVehicleInfo(d);
                setLoading(false)
            });

    }, [carId])
    return (
        <div className="container mx-auto p-4">
            <BackButton />
            {!loading && (
                <>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-evenly flex-col md:flex-row">
                            <Image className='rounded-md' src={vehicleInfo.foto} alt={vehicleInfo.modelo} width={300} height={200} />
                            <div className="car-details ml-0 md:ml-6 mt-4 md:mt-0">
                                <h2 className="text-2xl font-bold mb-2">{vehicleInfo.tipo}</h2>
                                <p className="text-lg mb-4">{vehicleInfo.modelo}</p>
                                <ul className="space-y-2">
                                    <li>{vehicleInfo.doors} puertas</li>
                                    <li>{vehicleInfo.asientos} pasajeros</li>
                                    <li>{vehicleInfo.transmision}</li>
                                    <li>{vehicleInfo.equipaje}</li>
                                    <li>{vehicleInfo.combustible} combustible</li>
                                </ul>
                                <ul className='bg-gray-600 text-white rounded p-4 mt-4'>
                                    <li><strong>Precio/día: {vehicleInfo.precio_dia}$</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <ReservationForm carId={vehicleInfo.id} userId ={userId}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReservationPage;
