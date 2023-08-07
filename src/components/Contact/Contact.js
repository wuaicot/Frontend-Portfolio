import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contact.module.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         
      await axios.post('http://localhost:5000/externed/contact', formData);
      setShowSuccessMessage(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Disculpe! en este momento no es posible el envío del mensaje, intente contactarme directamente a mi correo electronico. Gracias');
    }
  };
  

  return (
    <div className={styles.container}> 
      <h2>Contactame</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Su Nombre y Apellido:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Su correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>        
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showSuccessMessage && <div className={styles['success-message']}>Gracias. Su mensaje fue enviado! Pronto me pondré en contacto. </div>} 
    </div>
  );
};

export default Contact;
