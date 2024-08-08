import Link from 'next/link';
import './CarItem.css';
import Image from 'next/image';

const CarItem = ({ car }) => {

    return (
        <article className="car-item">
            <Image priority className='img' src={car.foto} alt={car.modelo} width={500} height={100}/>
            <div className="car-details">
                <h2>{car.tipo}</h2>
                <p>{car.modelo}</p>
                <ul>
                <li><strong>Puertas:</strong> {car.doors}</li>
                        <li><strong>Pasajeros:</strong> {car.asientos}</li>
                        <li><strong>Transmisión:</strong> {car.transmision}</li>
                        <li><strong>Equipaje:</strong> {car.equipaje}</li>
                        <li><strong>Combustible:</strong> {car.combustible}</li>
                    <ul className='bg-gray-600 text-slate-50 flex flex-col justify-center rounded p-3 my-2'>
                    <li><strong>Precio/hora: {car.precio_hora}$</strong></li>
                    <li><strong>Precio/dia: {car.precio_dia}$</strong></li>
                    <li><strong>Precio/mes: {car.precio_mes}$</strong></li>
                    </ul>
                </ul>
                <Link href={`/reservas/cars/${car.id}`} >
                <button>Reservar</button>
                </Link>
            </div>
        </article>
    );
};

export default CarItem;

