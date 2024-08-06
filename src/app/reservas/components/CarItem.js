import Link from 'next/link';
import './CarItem.css';
import Image from 'next/image';

const CarItem = ({ car }) => {

    return (
        <article className="car-item">
            <Image className='img' src={`/images/toyota-yaris.jpg`} alt={car.modelo} width={500} height={100}/>
            <div className="car-details">
                <h2>{car.tipo}</h2>
                <p>{car.modelo}</p>
                <ul>
                    <li>{car.doors} puertas</li>
                    <li>{car.asientos} pasajeros</li>
                    <li>{car.transmision}</li>
                    <li>{car.equipaje}</li>
                    <li>{car.combustible} combustible</li>
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

