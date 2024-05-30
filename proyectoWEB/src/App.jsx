import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHOME from './principal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <Router>
      <Routes>
     
              <Route path="/" element={<AppHOME />} />
      </Routes>
      </Router>
      
  );
}

export default App
