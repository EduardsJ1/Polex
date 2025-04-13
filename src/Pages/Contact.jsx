import React from 'react';
import ContactForm from './Contact_form';
import './Contact.css';
function Contact() {
  return (
    <>
    <title>Polex - Kontakti</title>
    <meta name="description" content="Sazinies ar SIA Polex profesionālu siltināšanas pakalpojumu sniedzēju, lai uzzinātu vairāk par poliuretāna putu siltināšanu un mūsu pakalpojumiem." />
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
    </>
  );
}

export default Contact;