import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Loading from './components/Loading';
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/par-mums" element={<Suspense fallback={<Loading height="100vh" width="100%" backgroundColor="#1A1A1A"/>}><About /></Suspense>} />
            <Route path="/kontakti" element={<Suspense fallback={<Loading height="100vh" width="100%" backgroundColor="#1A1A1A"/>}><Contact /></Suspense>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;