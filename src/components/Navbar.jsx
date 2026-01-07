import React from 'react';
import './Navbar.css';
import logo from '../assets/logogruppesech.png';

const Navbar = () => {
  return (
    <nav className="navbar-modern">
      <a href="#home" className="navbar-brand">
        <img src={logo} alt="Gruppe Sechs" className="nav-logo" />
        <span className="brand-text">GRUPPE SECHS</span>
      </a>

      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Inicio</a></li>
        <li><a href="#services" className="nav-item">Servicios</a></li>
        <li><a href="#personal" className="nav-item">Personal</a></li>
        <li><a href="#training" className="nav-item">Instrucciones</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
