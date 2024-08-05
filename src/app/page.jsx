"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


const App = () => {
  const {data: session} = useSession();
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src={"/icon.png"} alt="Logo" className="logo-icon"/>
            RENT<span>CAR</span>
          </div>
          <ul className="align-middle">
            <li>
            <Link href={'/about'}><p>Sobre Nosotros</p></Link>
            </li>
            <li>
            <Link href={'/services'}><p>Servicios</p></Link>
            </li>
            <li><a href="#">Precios</a></li>
            <li><a href="reservas">Vehículos</a></li>
            <li>
            <Link href={'/contact'}><p>Contactos</p></Link>
            </li>
            <li>{session ? (
              <button className="bg-slate-50 p-3 rounded text-blue-700" onClick={() => signOut()}>Logout</button>
            ):
            (
              <p>Login</p>
            )}</li>
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
