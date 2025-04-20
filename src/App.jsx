import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Loading from './components/Loading';
import About from './Pages/About';
import Contact from './Pages/Contact';
// const About = lazy(() => import('./Pages/About'));
// const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/par-mums" element={<Suspense fallback={<Loading height="100vh" width="100%" />}><About /></Suspense>} />
            <Route path="/kontakti" element={<Suspense fallback={<Loading height="100vh" width="100%" />}><Contact /></Suspense>} /> */}
            <Route path="/par-mums" element={<About/>} />
            <Route path="/kontakti" element={<Contact/>} />
          </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;