import Navbar from './components/Navbar';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/par-mums" element={<About />} />
          <Route path="/kontakti" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
