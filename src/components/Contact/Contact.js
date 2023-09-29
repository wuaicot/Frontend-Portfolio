import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import HeroSocial from "../HeroSocial/HeroSocial";
import gmailLogo from "../../image/gmail.png";
import whatsappLogo from "../../image/logoWhatsap.png";
import Modal from "react-modal";

const cellPhone =
  "https://api.whatsapp.com/send/?phone=56937735366&text&app_absent=0";
const email = "https://mail.google.com/mail/wuaicot8@gmail";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-portfolio-production-737e.up.railway.app/externed/contact", formData);
      openModal(); // Abre el modal en caso de éxito
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Disculpe! en este momento no es posible el envío del mensaje, Puede contactarme directamente a mi correo electrónico. Gracias!"
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Estoy}>
        <h4>
          "Estoy listo para iniciar un nuevo proyecto y ayudarte a llevar a cabo
          tu idea"
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
            placeholder="Escribe aquí."
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
            placeholder="A este correo electrónico te contactaré"
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
            placeholder="Cuéntame aquí!"
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
        <hr />
        <div className={styles.whatsapp}>
          <HeroSocial
            src={whatsappLogo}
            alt="phone-Sticker"
            title="+56937735366"
            header="WhatsApp"
            href={cellPhone}
            target="_blank"
            linkName="Enlace al Chat"
          />
        </div>

        <div className={styles.gmail}>
          <HeroSocial
            src={gmailLogo}
            alt="phone-Sticker"
            title="wuaicot8@gmail.com"
            header="gmail"
            href={email}
            target="_blank"
            linkName="wuaicot8@gmail.com"
          />
        </div>
      </form>

      {/* Modal para mostrar el mensaje de éxito */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Mensaje Enviado"
        className={styles.successModal}
      >
        <h2>Gracias. Su mensaje fue enviado!</h2>
        <p>Pronto me pondré en contacto con usted 👍</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Contact;
