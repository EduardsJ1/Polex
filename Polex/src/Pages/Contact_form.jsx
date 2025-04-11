import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact_form_styles.css';

function Contact() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      }
    );
  };

  return (
    <div className="contact-container">
      <form className='contact-form' onSubmit={sendEmail}>
        {status === 'success' && (
          <div className="success-message">
            Paldies! Jūsu ziņojums ir veiksmīgi nosūtīts.
          </div>
        )}

        {status === 'error' && (
          <div className="error-message">
            Radās kļūda, nosūtot ziņojumu. Lūdzu, mēģiniet vēlreiz.
          </div>
        )}
        <div>
          <label>Vārds<span className='required-symbol'>*</span>:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Jūsu vārds" 
            required 
          />
        </div>
        <div>
          <label>E-pasts<span className='required-symbol'>*</span>:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Jūsu e-pasts" 
            required 
          />
        </div>
        <div>
          <label>Telefons:</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Jūsu tālruņa numurs" 
          />
        </div>
        <div>
          <label>Jūsu ziņa<span className='required-symbol'>*</span>:</label>
          <textarea 
            name="message" 
            placeholder="Jūsu ziņojums" 
            required 
          />
        </div>
        <div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sūta...' : 'Sūtīt'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
