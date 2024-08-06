"use client"
import Image from 'next/image';
import '../components/AboutUs.css';
import BackButton from '../components/BackButton';

const AboutUs = () => {
    const teamMembers = [
        { name: 'Woodjiny Sashka Renard 2021-1025', position: 'Marketing Specialist', image: '/images/Woodjiny.jpg' },
        { name: 'Tony Batista Rodriguez 2021-2096', position: 'CEO', image: '/images/Tony.jpg' },
        { name: 'Jery González Pacheco 2021-2351', position: 'CTO', image: '/images/Jery.jpg' },
        { name: 'Emmanuel Rodriguez Encarnación 2019-7978', position: 'COO', image: '/images/Enmanuel.jpg' },
        { name: 'Yofrandy Ogando Montero 2022-0749', position: 'CMO', image: '/images/yofrandy.jpg' },
        { name: 'Christopher Manzueta 2022-0207', position: 'CFO', image: '/images/Christopher.jpg' },
        { name: 'Anthony Armando De La Cruz Doñe 2021-0225', position: 'HR Manager', image: '/images/Anthony.jpg' },
        { name: 'Oliver Taveras Méndez 2021-0328', position: 'Lead Developer', image: '/images/Oliver.jpg' },
    ];

    const testimonials = [
        { text: "Alquilamos un coche en este sitio web y tuvimos una experiencia increíble. La reserva fue fácil y las tarifas de alquiler eran muy asequibles.", name: "Hannah Winter", location: "New York" },
        { text: "El coche estaba en excelentes condiciones e hizo que nuestro viaje fuera aún mejor. ¡Recomiendo encarecidamente este sitio web de alquiler de coches!", name: "Diego George", location: "España" },
        { text: "El servicio al cliente fue excepcional y el proceso de alquiler fue rápido y sin problemas.", name: "Alaysha Rodriguez", location: "Santo Domingo" },
        { text: "Una gran selección de vehículos y precios competitivos. Definitivamente volveré a alquilar aquí.", name: "Miguel Angel Acuña", location: "Madrid" },
    ];

    return (
        <>
        <div className="about-us">
        <BackButton />
            <h1><strong>Sobre Nosotros</strong></h1>
            <p>Somos una empresa dedicada a ofrecer el mejor servicio de alquiler de autos.</p>
            <p>Nuestra misión es proporcionar una experiencia de alquiler de autos sin complicaciones y accesible para todos nuestros clientes.</p>
            <p>Contamos con una amplia gama de vehículos para satisfacer todas sus necesidades de transporte.</p>

            <h2>Nuestro Equipo</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div className="team-member flex flex-col justify-center items-center" key={index}>
                        <Image src={member.image} alt={member.name} className="team-member-image" width={100} height={100}/>
                        <div className="team-member-info">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2><strong>Testimonios de Clientes</strong></h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <p>&quot;{testimonial.text}&quot;</p>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default AboutUs;
