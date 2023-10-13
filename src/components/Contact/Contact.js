import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import HeroSocial from "../HeroSocial/HeroSocial";
import gmailLogo from "../../image/gmail.png";
import whatsappLogo from "../../image/logoWhatsap.png";
import Modal from "react-modal";

const cellPhone =
  "https://api.whatsapp.com/send/?phone=56963380684&text&app_absent=0";
  
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
        "Excuse me! At this time it is not possible to send the message. You can contact me directly at my email. Thank you!"
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Estoy}>
        <h4>
          "I am ready to start a new project and help you carry it out
           your idea"
        </h4>
      </div>

      <h3>Contact me</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your full name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write here."
            required
          />
        </div>

        <div>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="I will contact you at this email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="tell me here!"
            required
          ></textarea>
        </div>

        <button type="submit">Send</button>
        <hr />
        <div className={styles.whatsapp}>
          <HeroSocial
            src={whatsappLogo}
            alt="phone-Sticker"
            title="+56963380684"
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
        contentLabel="Message sent"
        className={styles.successModal}
      >
        <h2>Thank you. Your message has been sent!</h2>
        <p>I will contact you soon👍</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Contact;

