import React from 'react';
import './Personal.css';

const Personal = () => {
    return (
        <section id="personal" className="section-wrapper personal-modern">
            <div className="container">
                <div className="personal-grid-modern">

                    <div className="personal-content-modern">
                        <h3>CARRERA <span className="highlight-text">PROFESIONAL</span></h3>
                        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
                            No buscamos simples guardias. Buscamos operadores.
                            Si tienes experiencia en fuerzas del orden o militar, y buscas un sueldo
                            que realmente valore tu riesgo, Gruppe Sechs es tu destino.
                        </p>

                        <div className="stat-row">
                            <div className="stat-item">
                                <h4>GRAN</h4>
                                <p>POSIBILIDAD DE ASCENSO</p>
                            </div>
                            <div className="stat-item">
                                <h4>100%</h4>
                                <p>COBERTURA MÉDICA</p>
                            </div>
                            <div className="stat-item">
                                <h4>TOP</h4>
                                <p>EQUIPAMIENTO</p>
                            </div>
                        </div>

                        <a href="#" className="btn-modern">ÚNETE AL EQUIPO</a>
                    </div>

                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', background: 'radial-gradient(circle, rgba(73,112,65,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '20px' }}>
                        {/* Abstract visual or placeholder for recruitment image */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <h1 style={{ fontSize: '8rem', opacity: '0.1', color: '#fff' }}>G6</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Personal;
