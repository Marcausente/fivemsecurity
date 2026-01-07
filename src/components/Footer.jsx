import React from 'react';
import './Footer.css';
import logo from '../assets/logogruppesech.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <img src={logo} alt="Gruppe Sechs" className="footer-logo" />
                <p>&copy; {new Date().getFullYear()} Gruppe Sechs Security. Todos los derechos reservados.</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                    Gruppe Sechs es una entidad ficticia del universo GTA V. Esta página es un fan project.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
