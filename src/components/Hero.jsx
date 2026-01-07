import React from 'react';
import './Hero.css';
import camion from '../assets/camion.png';
import mapa from '../assets/mapa.png';

const Hero = () => {
    return (
        <>
            <header id="home" className="hero-container">
                <img src={camion} alt="Background" className="hero-bg-img" />
                <div className="hero-overlay-modern"></div>

                <div className="hero-content-modern">
                    <h1 className="hero-title-modern">GRUPPE SECHS</h1>
                    <p className="hero-subtitle-modern">
                        SEGURIDAD PRIVADA DE ÉLITE E INVESTIGACIÓN <br /> "Poniendo la 'U' en Seguridad"
                    </p>
                    <a href="#services" className="btn-modern">Explorar Servicios</a>
                </div>
            </header>

            <section className="info-modern">
                <div className="container">
                    <div className="info-grid-modern">

                        <div className="info-text-modern">
                            <h2>NOSOTROS <span>SOMOS GRUPPE SECHS</span></h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem' }}>
                                Operando bajo los más estrictos estándares de seguridad, Gruppe Sechs proporciona
                                soluciones de seguridad privada e investigación ejemplares.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
                                Nuestro personal de seguridad asegura que sus activos permanezcan
                                exactamente donde deben estar: en su poder, y nuestro equipo de investigadores consigue llegar a la información que necesita.
                            </p>

                            <div className="glass-box">
                                <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px' }}>CONTACTO DIRECTO</h4>
                                <p>📍 Los Santos HQ</p>
                                <p>📞 555-0192</p>
                            </div>
                        </div>

                        <div className="map-wrapper-modern">
                            <div className="map-glow"></div>
                            <img src={mapa} alt="Mapa" className="map-img-modern" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
