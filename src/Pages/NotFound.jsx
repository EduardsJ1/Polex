import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
    }}>
        <title>404 - Lapa nav atrasta</title>
        <meta name='robots' content='noindex' />
        <h1 style={{ fontSize: '5rem', marginBottom: '1rem', color: '#FFFFFF' }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Lapa nav atrasta</h2>
        <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        Atvainojiet, meklētā lapa neeksistē vai ir pārvietota. 
        </p>
        <Link 
        to="/" 
        style={{
            backgroundColor: '#5e5e5e',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
        }}
        >
        Atgriezties sākumlapā
        </Link>
    </div>
  );
};

export default NotFound;