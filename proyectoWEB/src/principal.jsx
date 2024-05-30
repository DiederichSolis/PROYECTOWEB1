// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navbar = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '200px',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff'
};

const navbarLogo = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem'
};

const navbarLinks = {
  listStyle: 'none',
  padding: 0
};

const navbarLink = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  marginBottom: '0.5rem'
};

const NavBar = () => {
  return (
    <nav style={navbar}>
      <div style={navbarLogo}>Mi Logo</div>
      <ul style={navbarLinks}>
        <li><Link to="/home" style={navbarLink}>Home</Link></li>
        <li><Link to="/about" style={navbarLink}>About</Link></li>
        <li><Link to="/services" style={navbarLink}>Services</Link></li>
        <li><Link to="/contact" style={navbarLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const mainContent = {
  marginLeft: '200px', // Ajusta el margen izquierdo para que el contenido principal no se superponga con el menú
  padding: '2rem'
};

const App = () => {
  return (
    <div>
      <NavBar />
      <main style={mainContent}>
        <h1>Bienvenido a mi sitio web</h1>
        <p>Contenido principal aquí.</p>
      </main>
    </div>
  );
};

export default App;
