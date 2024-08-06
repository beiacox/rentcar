// src/components/HeroSection.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const history = useHistory();

  const handleReserveClick = () => {
    history.push('/cars');
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>¡Bienvenidos a RentCar Deluxe!</HeroH1>
        <HeroP>
          Explora el mundo con estilo y comodidad. En RentCar Deluxe, te ofrecemos una amplia gama de vehículos de alta calidad para satisfacer todas tus necesidades de transporte. Desde elegantes sedanes hasta robustos SUVs y deportivos de lujo, tenemos el vehículo perfecto para cada ocasión.
        </HeroP>
        <HeroButton onClick={handleReserveClick}>
          ¡Reserva ahora y comienza tu viaje con RentCar Deluxe! <FaArrowRight />
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  background-image: url('/carrr.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const HeroH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroP = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: green;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgreen;
  }
`;
