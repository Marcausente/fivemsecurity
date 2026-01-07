import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <section id="training" className="section-wrapper training-modern">
            <div className="container">
                <h2 className="section-title">CENTRO DE <span>INSTRUCCIÓN</span></h2>

                <div className="training-glass-card">
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>CERTIFICACIÓN OFICIAL G6</h3>
                    <p style={{ marginBottom: '2rem', color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                        Nuestro programa de capacitación es el estándar de oro en San Andreas.
                        Abierto a civiles que deseen obtener su licencia de porte y defensa personal.
                    </p>

                    <div className="training-grid">
                        <div className="training-item">
                            <span className="check-icon">✓</span> Tácticas de Defensa Personal
                        </div>
                        <div className="training-item">
                            <span className="check-icon">✓</span> Legislación y Uso de Fuerza
                        </div>
                        <div className="training-item">
                            <span className="check-icon">✓</span> Primeros Auxilios Tácticos
                        </div>
                    </div>

                    <a href="#" className="btn-modern">INSCRIPCIÓN AL CURSO</a>
                </div>
            </div>
        </section>
    );
};

export default Training;
