import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/par-mums" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
            <Route path="/kontakti" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
          </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;