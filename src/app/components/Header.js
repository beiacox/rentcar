import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                <img src="../logo.png" alt="Logo" className="logo-icon" />
                    <span>RENT<span>CAR</span></span>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">Sobre Nosotros</Link></li>
                    <li><Link to="/services">Servicios</Link></li>
                    <li><Link to="/contacts">Contactos</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

