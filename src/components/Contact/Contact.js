import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post('http://localhost:5000/externed/contact', formData);
         //https://backend-portfolio-production-8985.up.railway.app/
         
      await axios.post(
        await axios.post('http://localhost:5000/externed/contact', formData)
      );
      setShowSuccessMessage(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Disculpe! en este momento no es posible el envío del mensaje, Puede contactarme directamente a mi correo electronico. Gracias!"
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Estoy}>
      <h4>
        "Estoy listo para iniciar un nuevo proyecto y ayudarte a llevar a cabo tu
        idea"
      </h4>
      </div>

      <h3>Contactame</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tu Nombre y Apellido:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe aqui."
            required
          />
        </div>

        <div>
          <label htmlFor="email">Tu correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="A este correo electronico te contactaré"
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
            placeholder="Cuentame aquí!"
            required
            >

            </textarea>  
            </div>          
        
            

        <button type="submit">Enviar</button>
        
      </form>
      {showSuccessMessage && (
        <div className={styles["success-message"]}>
          Gracias. Su mensaje fue enviado! Pronto me pondré en contacto.{""}
        </div>
      )}

          <div className={styles.Ninja}>
      <img className={styles.imgNinja}       
        src="https://gravatar.com/avatar/539879c51f50898247766a89ba00efea?s=96&amp;d=https://www.herokucdn.com/images/ninja-avatar-96x96.png"
        alt="wuaicot8@gmail.com"
        role="presentation"
        >
        </img>            

        </div>        
        <hr className={styles.Nhr}/> 
    </div>
  );
};

export default Contact;
