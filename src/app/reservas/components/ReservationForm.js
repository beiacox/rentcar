"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./ReservationForm.css"; // Asegúrate de crear este archivo para estilos
import Notification from "@/app/components/Notification";

const ReservationForm = ({carId, userId}) => {
  const [message, setMessage] = useState('');

  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [vehiculoId, setIdVehiculo] = useState("");
  const [clienteId, setIdCliente] = useState("");
  const [observacion, setObservacion] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      pickupLocation,
      returnLocation,
      pickupDate, //Date.parse(pickupDate),
      returnDate,
      pickupTime,
      returnTime,
      vehiculoId: parseInt(carId),
      clienteId: parseInt(userId),
      observacion,
    };

    const res = await fetch("/api/reservas", {
      method: "POST",
      body: JSON.stringify(reservationData),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    console.log(await res.json())
    setMessage('¡Operación exitosa!');

    setIsDisabled(true);

    // Habilitar el botón después de 3 segundos
    setTimeout(() => {
      setIsDisabled(false);
      handleBack();
    }, 3000);

  };
  return (
    <>
      <Notification message={message} />
    <form onSubmit={handleSubmit} className="space-y-4 reservationForm">
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
          value={vehiculoId}
          onChange={(e) => setIdVehiculo(carId)}
          placeholder="ID del vehículo"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Cliente</label>
        <input
          type="text"
          value={clienteId}
          onChange={(e) => setIdCliente(userId)}
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
        disabled={isDisabled}
        className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Reservar
      </button>
    </form>
    </>
  );
};

export default ReservationForm;
