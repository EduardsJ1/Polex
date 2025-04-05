import Navbar from './components/Navbar';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './Pages/Home';
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense>} />
          <Route path="/par-mums" element={<React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>} />
          <Route path="/kontakti" element={<React.Suspense fallback={<div>Loading...</div>}><Contact /></React.Suspense>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
