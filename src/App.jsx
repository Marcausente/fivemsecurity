import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Personal from './components/Personal';
import Training from './components/Training';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Personal />
      <Training />
      <Footer />
    </div>
  );
}

export default App;
