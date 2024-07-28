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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Entrega</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Santo Domingo (SDQ - A. Internacional Las Américas)"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Devolución</label>
        <input
          type="text"
          value={returnLocation}
          onChange={(e) => setReturnLocation(e.target.value)}
          placeholder="Santo Domingo (SDQ - A. Internacional Las Américas)"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Fecha de entrega</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Fecha de devolución</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Hora de entrega</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Hora de devolución</label>
        <input
          type="time"
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Reservar
      </button>
    </form>
  );
};

export default ReservationForm;
