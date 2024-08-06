"use client"
import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import './components/Home.css';


const App = () => {
  const {data: session} = useSession();
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <Image src={"/icon.png"} alt="Logo" className="logo-icon" width={100} height={100}/>
            RENT<span>CAR</span>
          </div>
          <ul className="justify-center items-center">
            <li>
            <Link href={'/about'}><p>Sobre Nosotros</p></Link>
            </li>
            <li>
            <Link href={'/services'}><p>Servicios</p></Link>
            </li>
            <li>
            <Link href={'/reservas'}><p>Vehículos</p></Link>
            </li>
            <li>
            <Link href={'/contact'}><p>Contactos</p></Link>
            </li>
            <li>{session ? (
              <button className="bg-slate-50 p-2 rounded text-blue-700" onClick={() => signOut()}>Logout</button>
            ):
            (
              <button className="bg-slate-50 p-2 rounded text-blue-700" onClick={() => signIn()}>Sign in</button>
            )}</li>
          </ul>
        </nav>
      </header>
      <section>
      <div className="home">
            <div className="hero">
                <div className="hero-content flex flex-col">
                    <h1>¡Bienvenidos a RentCar Deluxe!</h1>
                    <p><strong>¡Su camino, su elección!</strong></p>
                    <button>Hacer una Reserva</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
