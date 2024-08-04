import React from 'react';
import '../components/Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts">
            <h1>Contactos</h1>
            <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerse en contacto con nosotros:</p>
            <p><strong>Email:</strong> <a href="mailto:contactodeluxe-rent@gmail.com">contactodeluxe-rent@gmail.com</a></p>
            <p><strong>Teléfonos:</strong> +1 829-266-1100. 809-285-7700</p>
            <p><strong>Dirección:</strong> Ruta 66 Salida Del Aeropuerto Las Americas 5, Santo Domingo.</p>
            <h2>Síguenos en nuestras redes sociales</h2>
            <div className="social-media">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram-icon.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook-icon.png" alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
};

export default Contacts;
