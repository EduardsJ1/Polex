import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Error sending email.");
      }
    );
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Vārds:</label>
      <input type="text" name="name" placeholder="Your name" required />
      <label>E-pasts:</label>
      <input type="email" name="email" placeholder="Your email" required />
      <label>Telefons:</label>
      <input type="tel" name="phone" placeholder="Your phone number"/>
      <label>Jūsu ziņa:</label>
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Sūtīt</button>
    </form>
  );
}

export default Contact;
