"use client"
import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import './CarList.css';

const cars = [
    {
        category: "Compacto",
        name: "Kia Rio",
        image: "kia-rio.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 4,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "Intermedio",
        name: "Kia Soluto",
        image: "kia-soluto.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "Compacto",
        name: "Toyota Yaris",
        image: "toyota-yaris.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 2,
        mpg: 0,
        price: "$40/día"
    },
    {
        category: "Intermedio",
        name: "Hyundai Accent",
        image: "hyundai-accent.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "SUV Compacto",
        name: "Hyundai Creta",
        image: "hyundai-creta.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 4,
        mpg: 0,
        price: "$45/día"
    },
    {
        category: "SUV Estándar",
        name: "Mitsubishi ASX",
        image: "mitsubishi-asx.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "SUV Intermedio",
        name: "Nissan Qashqai",
        image: "nissan-qashqai.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$45/día"
    },
    {
        category: "Compacto",
        name: "Honda Fit",
        image: "honda-fit.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 2,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "Intermedio",
        name: "Chevrolet Aveo",
        image: "chevrolet-aveo.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$40/día"
    },
    {
        category: "SUV Compacto",
        name: "Ford Ecosport",
        image: "ford-ecosport.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 4,
        mpg: 0,
        price: "$40/día"
    },
    {
        category: "SUV Estándar",
        name: "Mazda CX-5",
        image: "mazda-cx5.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$48/día"
    },
    {
        category: "SUV Intermedio",
        name: "Jeep Compass",
        image: "jeep-compass.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$40/día"
    },
    {
        category: "Compacto",
        name: "Suzuki Swift",
        image: "suzuki-swift.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 2,
        mpg: 0,
        price: "$30/día"
    },
    {
        category: "Intermedio",
        name: "Ford Fiesta",
        image: "ford-fiesta.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$35/día"
    },
    {
        category: "SUV Compacto",
        name: "Renault Duster",
        image: "renault-duster.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 4,
        mpg: 0,
        price: "$40/día"
    },
    {
        category: "SUV Estándar",
        name: "Chevrolet Trax",
        image: "chevrolet-trax.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$45/día"
    },
    {
        category: "SUV Intermedio",
        name: "Subaru Forester",
        image: "subaru-forester.jpg",
        doors: 4,
        passengers: 5,
        ac: true,
        transmission: "Automático",
        baggage: 3,
        mpg: 0,
        price: "$40/día"
    }
];

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
