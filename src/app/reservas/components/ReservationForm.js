// src/components/ReservationForm.js
import React, { useState } from 'react';
import './ReservationForm.css'; // Asegúrate de crear este archivo para estilos

const ReservationForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la reserva
    console.log({
      pickupLocation,
      returnLocation,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Entrega</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Santo Domingo (SDQ - A. Internacional Las Américas)"
        />
      </div>
      <div>
        <label>Devolución</label>
        <input
          type="text"
          value={returnLocation}
          onChange={(e) => setReturnLocation(e.target.value)}
          placeholder="Santo Domingo (SDQ - A. Internacional Las Américas)"
        />
      </div>
      <div>
        <label>Fecha de entrega</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha de devolución</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div>
        <label>Hora de entrega</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
      </div>
      <div>
        <label>Hora de devolución</label>
        <input
          type="time"
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
        />
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default ReservationForm;
