"use client"
import Image from 'next/image';
import Link from 'next/link';
import CarList from './components/CarList';
import './components/App.css';

export default function Reservas() {
    return (
        <div className="reservasContainer">
            <header>
                <Link href={'/'}>
                    <Image priority src="/logo.png" alt="Deluxe Rent Car" className="logo" width={50} height={50} />
                </Link>
                <nav>
                    <ul>
                        <li><Link href="#">Sobre Nosotros</Link></li>
                        <li><Link href="#">Servicios</Link></li>
                        <li><Link href="/dashboard">Panel de control</Link></li>
                        <li><Link href="#">Contactos</Link></li>
                        <li><Link href="#">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <main className='items-center h-screen'>
                <CarList />
            </main>
        </div>
    );
}