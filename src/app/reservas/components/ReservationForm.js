// src/components/ReservationForm.js
import React, { useState } from "react";
import "./ReservationForm.css"; // Asegúrate de crear este archivo para estilos
import CarItem from "./CarItem";
import CarList from "./CarList";

const ReservationForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [idVehiculo, setIdVehiculo] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [observacion, setObservacion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      pickupLocation,
      returnLocation,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      id_vehiculo: parseInt(idVehiculo),
      id_cliente: parseInt(idCliente),
      observacion,
    };

    console.log("Datos a enviar:", reservationData);

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Reserva creada exitosamente:", result);
        // Limpiar el formulario
        setPickupLocation("");
        setReturnLocation("");
        setPickupDate("");
        setReturnDate("");
        setPickupTime("");
        setReturnTime("");
        setIdVehiculo("");
        setIdCliente("");
        setObservacion("");
        alert("Reserva creada exitosamente");
      } else {
        const errorData = await response.json();
        console.error("Error al crear la reserva:", errorData);
        alert(`Error al crear la reserva: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      alert(`Error al crear la reserva: ${error.message}`);
    }
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
        <label className="mb-2 font-semibold text-gray-700">
          Fecha de entrega
        </label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Fecha de devolución
        </label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Hora de entrega
        </label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Hora de devolución
        </label>
        <input
          type="time"
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Vehículo</label>
        <input
          type="text"
          value={idVehiculo}
          onChange={(e) => setIdVehiculo(e.target.value)}
          placeholder="ID del vehículo"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Cliente</label>
        <input
          type="text"
          value={idCliente}
          onChange={(e) => setIdCliente(e.target.value)}
          placeholder="ID del cliente"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Observación</label>
        <textarea
          value={observacion}
          onChange={(e) => setObservacion(e.target.value)}
          placeholder="Observaciones"
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
