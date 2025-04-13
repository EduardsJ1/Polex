import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.webp';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get current location
  
  // Helper function to check if the current path matches a given route
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const containerVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.08,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="navbar">
      <div className='navbar-container'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="hamburger-container" onClick={toggleMenu}>
        <svg
          width="40"
          height="35"
          viewBox="0 0 20 15"
          fill="none"
          className="hamburger-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="burger">
            <rect id="Rectangle 11" width="20" height="3" rx="1.5" fill="black" />
            <rect id="Rectangle 12" y="6" width="20" height="3" rx="1.5" fill="black" />
            <rect id="Rectangle 13" y="12" width="20" height="3" rx="1.5" fill="black" />
          </g>
        </svg>
      </div>
      {isMobile ? (
        <motion.div
          className="navbar-links"
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Sākumplapa</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/par-mums" className={`navbar-link ${isActive('/par-mums') ? 'active' : ''}`} onClick={closeMenu}>Par mums</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/Kontakti" className={`navbar-link ${isActive('/Kontakti') ? 'active' : ''}`} onClick={closeMenu}>Kontakti</Link>
          </motion.div>
        </motion.div>
      ) : (
        <div className="navbar-links">
          <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Sākumplapa</Link>
          <Link to="/par-mums" className={`navbar-link ${isActive('/par-mums') ? 'active' : ''}`}>Par mums</Link>
          <Link to="/Kontakti" className={`navbar-link ${isActive('/Kontakti') ? 'active' : ''}`}>Kontakti</Link>
        </div>
      )}
      </div>
    </div>
  );
}

export default Navbar;