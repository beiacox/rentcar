import Image from 'next/image';
import { useLocation } from 'react-router-dom';

const ReservePage = () => {
  const location = useLocation();
  const { car } = location.state;

  return (
    <div>
      <h1>Reserva tu coche</h1>
      <div>
        <h2>{car.name}</h2>
        <Image src={`/images/${car.image}`} alt={car.name} />
        <ul>
          <li>{car.doors} puertas</li>
          <li>{car.passengers} pasajeros</li>
          <li>{car.ac ? "A/C" : "Sin A/C"}</li>
          <li>{car.transmission}</li>
          <li>{car.baggage} maletas pequeñas</li>
          <li>{car.mpg} mpg</li>
          <li><strong>Precio: {car.price}</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default ReservePage;
