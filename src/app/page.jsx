"use client"
import { signOut } from "next-auth/react";
import Image from "next/image";
import './App.css';
import icon from './assets/icon.png'; 

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <Image src={icon} alt="Logo" className="logo-icon" />
            RENT<span>CAR</span>
          </div>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Precios</a></li>
            <li><a href="#">Vehículos</a></li>
            <li><a href="#">Contactos</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>¡Bienvenidos a RentCar Deluxe!</h1>
          <p className="HeroP">
            Explora el mundo con estilo y comodidad. Te ofrecemos una amplia gama de vehículos de alta calidad para satisfacer todas tus necesidades de transporte.
          </p>
    <button className="bg-slate-50 p-3 rounded text-blue-700" onClick={() => signOut()}>Logout</button>
          <button>¡Reserva ahora y comienza tu viaje con RentCar Deluxe!</button>
        </div>
      </section>
    </div>
  );
}

export default App;