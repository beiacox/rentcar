// src/components/ReservationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ReservationForm from './ReservationForm';

const ReservationPage = () => {
  const location = useLocation();
  const { car } = location.state;

  return (
    <div>
      <h1>Reserva de {car.name}</h1>
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
