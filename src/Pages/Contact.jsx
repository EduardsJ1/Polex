import React from 'react';
import ContactForm from './Contact_form';
import './Contact.css';
function Contact() {
  return (
    <>
    <title>Polex - Kontakti</title>
    <meta name="description" content="Sazinies ar SIA Polex profesionālu siltināšanas pakalpojumu sniedzēju, lai uzzinātu vairāk par poliuretāna putu siltināšanu un mūsu pakalpojumiem." />
    
    <meta property="og:url" content="https://polex.lv/contact" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Polex - Kontakti" />
    <meta property="og:description" content="Sazinies ar SIA Polex profesionālu siltināšanas pakalpojumu sniedzēju, lai uzzinātu vairāk par poliuretāna putu siltināšanu un mūsu pakalpojumiem." />
    <meta property="og:image" content="https://polex.lv/images/logo.webp" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polex - Kontakti" />
    <meta name="twitter:description" content="Sazinies ar SIA Polex profesionālu siltināšanas pakalpojumu sniedzēju, lai uzzinātu vairāk par poliuretāna putu siltināšanu un mūsu pakalpojumiem." />
    <meta name="twitter:image" content="https://polex.lv/images/logo.webp" />
    
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
                <p>info@polex.lv</p>
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