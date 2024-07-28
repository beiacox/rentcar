"use client"
import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import './CarList.css';

const CarList = () => {
    const [data, setData] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => {
        fetch("http://localhost:3000/api/vehicles")
        .then(d => d.json())
        .then(d => {
            setData(d);
            console.log(data)
            setLoading(false)
        });
    
    }, [])
    return (
        <section className="car-list">
            {/* {cars.map(car => (
                <CarItem key={car.name} car={car} />
            ))} */}
            {!loading && data.vehicles.map(car => (
                <CarItem key={car.id} car={car} />
            ))
            }
        </section>
    );
};

export default CarList;
