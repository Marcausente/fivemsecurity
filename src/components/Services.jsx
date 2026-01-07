import React from 'react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'INVESTIGACIÓN PRIVADA',
        desc: 'Casos civiles y corporativos. Desde infidelidades hasta investigación industrial y a trabajadores. La verdad, al precio justo. No tocamos casos penales',
        icon: '🔍',
        link: '#'
    },
    {
        id: 2,
        title: 'SEGURIDAD TEMPORAL',
        desc: 'Despliegue rápido para eventos, conciertos o situaciones de riesgo elevado. Personal capacitado para control de masas.',
        icon: '🛡️',
        link: '#'
    },
    {
        id: 3,
        title: 'SEGURIDAD PERMANENTE',
        desc: 'Vigilancia 24/7 para locales comerciales y residencias. Patrullas motorizadas y sistemas de monitoreo CCTV integrados.',
        icon: '🏢',
        link: '#'
    },
    {
        id: 4,
        title: 'ESCOLTA VIP',
        desc: 'Protección cercana (Close Protection) para VIPs. Agentes de incógnito y/o uniformados para su total tranquilidad.',
        icon: '🕶️',
        link: '#'
    }
];

const Services = () => {
    return (
        <section id="services" className="section-wrapper services-modern">
            <div className="container">
                <h2 className="section-title">NUESTROS <span>SERVICIOS</span></h2>

                <div className="services-grid-modern">
                    {servicesData.map((service) => (
                        <div className="service-card-modern" key={service.id}>
                            <div className="service-icon-modern">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href={service.link} className="service-link">CONTRATAR AHORA</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
