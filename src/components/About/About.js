import React, { useEffect, useState } from "react";
import miFoto from "../../cv/Naycol_Rodoolfo_Linares_Villasmil.jpg";
import styles from "./About.module.css";
import Skills from "../Skl/Skills";
import Modal from "react-modal"; // Importa react-modal
import CV from "../../cv/Naycol_Linares_CV.pdf";
import CV_EN from "../../cv/Naycol_Linares_CVe.pdf";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleLanguageSelect = (language) => {
    setIsModalOpen(false);

    if (language === "es") {
      window.location.href = CV;
    } else {
      window.location.href = CV_EN;
    }
  };

  return (
    <React.Fragment className={styles.elgrid}>
      <section className={styles.conGener}>
        <div className={styles.container}>
          <img
            className={styles.mifoto}
            src={miFoto}
            alt="Foto de Naycol Linares"
          />

          {/* <h1 className={styles.aboutTittle}>Sobre Mí</h1> */}
          <p className={styles.puedesllam}>
             Hello, you can call me Rodolfo.
          </p>
          <p className={styles.description}>
          I am an enthusiast of effective digital education, fast learning, and personal and professional growth. I enjoy creating digital products, specializing in frontend and backend. Valuing communication and teamwork, I always seek new challenges and easily adapt to changes. Open to learning new technologies and programming languages. 💻
          </p>
          <p  className={styles.description}>
          Communication and teamwork are essential for me to grow as a developer. I am proactive and methodical, always looking for new challenges and easily adapting to changes, I am open to learning new technologies and languages.
          </p>
          <p className={styles.description}>
          ✅ Technologies: HTML, CSS, JavaScript, React JS/React Native, Next JS, Redux JS, TypeScript, Bootstrap, Less, Node JS, Nest JS, Express, SQL, PostgreSQL, Sequelize, JsonWebToken, Figma, Git & GitHub.
          </p>
          <hr className={styles.aboutcenter}/>
           <h2 className={styles.aboutme}>
            <div className={styles.descriptionCent}>
              <span  >
              What can I do?
             </span>
             </div>
             
           </h2>
            <br/>
            <div>
            <h3 className={styles.descriptionCent}>
              Front_End
             </h3>
            </div>
             
             <p className={styles.description}>
             As a frontend developer, I have experience handling HTML, CSS and JavaScript as well as frameworks and libraries, especially React JS. I can style, create reactive, logical components and bring them to life.
              </p>
              <p className={styles.description}>
              My favorite project in this regard would be “Portal Info-Dogs”. It is a SAP (single page application) created with the purpose of obtaining information on various dog breeds from an external API. The user can search, filter, sort and create their dog breed.
              </p>
              <p className={styles.description}>
              Skills: Software development · Sequelize.js · Website update · Version control · Next.js · Visual Studio · User interface design · Content filter
              </p>
              <h3 className={styles.descriptionCent}>
              Back-End
             </h3>
             <p className={styles.description}>
             My favorite project in this regard would be “The Literary Corner”, it is an e-commerce site which connected with backend allows the user to visualize all the existing books on the page to render them in a series of cards. It allows you to search for them by name, as well as being able to filter and sort them through predefined classifications. The interface gives us the possibility through a controlled form to create new books with attributes defined by the user “Admin”, these are saved in a database. Also with the possibility of viewing the detail, adding to favorites, making reviews, adding to the shopping cart, buying books as it has a payment gateway, registering as a user, editing your profile information and more.            
              </p>
              <p className={styles.description}>
              This app makes use of the React-Redux library to handle global states in it, in addition to the local states of each component in React. It has different sections managed by routes, on which I take advantage of the features of React to reuse components. The technologies I used were HTML, CSS, JavaScript, React JS, React-Redux, Node JS, Express, PostgreSQL, Sequelize, Git/Github.           
              </p>
              <hr/>
              <div className={styles.CVCV}>
            <div className={styles.stackCV}>
              <button className={styles.btndowload} onClick={handleDownloadClick}>
              Download my CV
              </button>
            </div>
          </div>
        </div>
        <div className={styles.Skillsdiv}>
          <Skills />
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Seleccionar idioma"
        className={styles.languageModal}
      >
        <h4>Select a language:</h4>
        <button className={styles.languageButton} onClick={() => handleLanguageSelect("es")}>
          Spanish
        </button>
        <button className={styles.languageButton} onClick={() => handleLanguageSelect("en")}>
          English
        </button>
      </Modal>
      
    </React.Fragment>
  );
};

export default About;
