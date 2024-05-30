import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
const navbar = {
  position: 'fixed',
  left: '50px',
      bottom: '150px',
  display: 'flex',
  flexDirection: 'column',
  height: '40vh',
      width: '200px',
  padding: '1rem',
  background: 'rgba(2, 48, 71, 1)',
  color: '#fff',
  borderRadius: '10px',

  zIndex: 1000, // Asegurar que esté por encima de otros elementos

};


const navbarLinks = {
  listStyle: 'none',
  padding: 0
  
};

const navbarLink = {
    color: '#fff',
    fontFamily: 'Century Gothic, sans-serif',
    fontSize: '2rem', // Tamaño de fuente más grande
    marginBottom: '2rem', // Mayor separación entre enlaces
    fontWeight: 'bold',
};


  

const iconStyles = {
  color: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  textDecoration: 'none',
  fontSize: '1.5em'
};

  return (
    <nav style={navbar}>
      <div>
        <a href="https://www.instagram.com/championsleague" style={iconStyles}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/uefachampionsleague" style={iconStyles}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw" style={iconStyles}>
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      <ul style={navbarLinks}>
        <li><Link to="/home" style={navbarLink}>Home</Link></li>
        <li><Link to="/about" style={navbarLink}>CHAMPIONS</Link></li>
        <li><Link to="/services" style={navbarLink}>SEMIFINAL</Link></li>
      </ul>
    </nav>
  );
};



const AppHOME = () => {

const mainContent = {
    backgroundColor: 'white', // color de fondo
    overflow: 'hidden', // ocultar el desbordamiento del contenido
    minHeight: '100vh', // altura mínima para cubrir toda la pantalla
    display: 'block',
    position : 'relative',
    margin: 0,
    padding: 0,
  };
  return (
    
      <main style={mainContent}>
      <NavBar />
      </main>

  );
};

export default AppHOME;



