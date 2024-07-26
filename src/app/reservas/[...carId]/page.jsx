"use client"
import ReservationForm from '../components/ReservationForm';
import { useEffect, useState } from 'react';

const ReservationPage = ({params}) => {
    const carId = params.carId[1];

    const [vehicleInfo, setVehicleInfo] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => {
        fetch(`http://localhost:3000/api/vehicles/${carId}`)
            .then(d => d.json())
            .then(d => {
                setVehicleInfo(d);
                setLoading(false)
            });

    }, [carId])
    return (
        <div>
            {
                !loading && (
                    <>
                        <h1><strong>Reserva de {vehicleInfo.modelo}</strong></h1>
                        <ReservationForm />
                    </>
                )
            }
        </div>
    );
};

export default ReservationPage;
