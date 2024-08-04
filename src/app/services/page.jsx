import React from 'react';
import '../components/Services.css';

const Services = () => {
        const services = [
            {
                title: 'Rent Car',
                description: 'Ofrecemos una amplia variedad de vehículos para alquiler, adecuados para todas tus necesidades de transporte.',
                image: '/images/rent-car.jpg'
            },
            {
                title: 'Gruas a Domicilio',
                description: 'Proporcionamos servicios de grúa a domicilio para asegurar que tu vehículo sea transportado de manera segura y eficiente. Llamar al telefono: 829-527-3000.',
                image: '/images/gruas.jpg'
            },
            {
                title: 'Mecánicos a Domicilio y en Locales',
                description: 'Nuestros mecánicos profesionales están disponibles tanto a domicilio como en nuestros locales para cualquier reparación o mantenimiento que necesites. Llamar al telefono: 809-289-5000.',
                image: '/images/mecanicos.jpg'
            }
    ];

    return (
        <div className="services">
            <h1>Nuestros Servicios</h1>
            <p>Ofrecemos una gama completa de servicios para satisfacer todas tus necesidades de transporte y mantenimiento de vehículos.</p>
            <div className="service-list">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
