// src/components/CarItem.js
import React from 'react';
import './CarItem.css';

const CarItem = ({ car }) => {
    return (
        <div className="car-item">
            <img src={`/images/${car.image}`} alt={car.name} />
            <h2>{car.name}</h2>
            <p><strong>Categoría:</strong> {car.category}</p>
            <p><strong>Puertas:</strong> {car.doors}</p>
            <p><strong>Pasajeros:</strong> {car.passengers}</p>
            <p><strong>Aire Acondicionado:</strong> {car.ac ? 'Sí' : 'No'}</p>
            <p><strong>Transmisión:</strong> {car.transmission}</p>
            <p><strong>Equipaje:</strong> {car.baggage}</p>
            <p><strong>Precio:</strong> {car.price}</p>
            <button>Reservar</button>
        </div>
    );
};

export default CarItem;
