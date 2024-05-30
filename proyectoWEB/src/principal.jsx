import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const navbar = {
  position: 'fixed',
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '200px',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '10px' 
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

const iconStyles = {
  color: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  textDecoration: 'none',
  fontSize: '1.5em'
};

const NavBar = () => {
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
        <li><Link to="/about" style={navbarLink}>About</Link></li>
        <li><Link to="/services" style={navbarLink}>Services</Link></li>
        <li><Link to="/contact" style={navbarLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};



const mainContent = {
  marginLeft: '200px',
  padding: '2rem'
};

const AppHOME = () => {
  return (
    <div>
      <NavBar />
      <main style={mainContent}>
        <h1>CHAMPIONS</h1>
        <p>Contenido </p>
      </main>
    </div>
  );
};

export default AppHOME;


