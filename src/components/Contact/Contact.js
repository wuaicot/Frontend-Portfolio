import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import HeroSocial from "../HeroSocial/HeroSocial";
import gmailLogo from "../../image/gmail.png";
import whatsappLogo from "../../image/logoWhatsap.png";
import Modal from "react-modal";

Modal.setAppElement('#root');


const cellPhone = "https://api.whatsapp.com/send/?phone=5693380684&text&app_absent=0";
const email = "https://mail.google.com/mail/wuaicot8@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

 const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
 const response = await axios.post(`${BACKEND_URL}/externed/contact`, formData);
      openModal(); 
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {

 if (error.response && error.response.status !== 500) {
        alert("¡Disculpa! En este momento no es posible enviar el mensaje. Puedes contactarme directamente en mi correo electrónico o Whatsapp. ¡Gracias!");
      } else {
        console.error("Error en el servidor:", error);
      }
    }
  };
 return 
    <div className={styles.container}>
      <div className={styles.Estoy}>
        <h4>
          "Estoy listo para comenzar un nuevo proyecto y ayudarte a llevar a caboTu idea. Contáctame <span role="img" aria-label="cara sonriente">😊</span>"
        </h4>
      </div>
      
      <br></br>

<form onSubmit={handleSubmit}>
        <div className={styles.tnc}>
          <label htmlFor="name">tu nombre completo:</label>
 <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>

  <hr></hr>
        <div className={styles.tem}>
          <label htmlFor="email">tu email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>
        <hr></hr>

        <div className={styles.tmsj}>
          <label htmlFor="message">tu mensaje:</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="📒 describe tu idea aquí">
            required 
            
            </textarea>
            </div>
            </form>
            </div>

}

            

export default Contact;
