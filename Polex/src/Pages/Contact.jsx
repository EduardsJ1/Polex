import React from 'react';
import ContactForm from './Contact_form';
import './Contact.css';
import Footer from '../Components/Footer';
function Contact() {
  return (
    <>
    <div className="contact-page">
      <h1>Droši sazinies ar mums!</h1>
      <div className="contact-page-container">
        <div className="contact-info">
            <h2>Sazinies Ar</h2>
            <div className='phone-container'>
                <h3>Telefonu:</h3>
                <p>+371 29 429 608</p>
            </div>
            <div className='email-container'>
                <h3>E-Pastu:</h3>
                <p>polex@inbox.lv</p>
            </div>
        </div>
        <div className="email-form-container">
            <h2>Nosūti ziņu</h2>
            <ContactForm />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;