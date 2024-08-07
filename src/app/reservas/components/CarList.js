"use client"
import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import './CarList.css';

const CarList = () => {
    const [data, setData] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => {
        fetch("/api/vehicles/reserves")
        .then(d => d.json())
        .then(d => {
            setData(d);
            setLoading(false)
        });
    
    }, [])
    return (
        <section className="car-list">
            {!loading ? data.vehicles.map(car => (
                <CarItem key={car.id} car={car} />
            ))
            :(
                <p>loading...</p>
            )
            }
        </section>
    );
};

export default CarList;
