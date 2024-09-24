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
            Hola Mundo👋 te cuento en breve...
          </p>
          <p className={styles.description}>
          Soy un entusiasta de la educación digital efectiva, el aprendizaje rápido y el crecimiento personal y profesional. Disfruto creando productos digitales, especializándome en frontend y backend. Valorando la comunicación y el trabajo en equipo, siempre busco nuevos retos y me adapto fácilmente a los cambios. Abierto al aprendizaje de nuevas tecnologías y lenguajes de programación. 💻
          </p>
          <p className={styles.description}>
          La comunicación y el trabajo en equipo son esenciales para crecer como desarrollador. Soy proactivo y metódico, siempre buscando nuevos retos y adaptándome fácilmente a los cambios.
          </p>
          <p className={styles.description}>
            ✅ Tecnologías: <li>HTML</li> 
            <li>CSS</li> 
            <li>JavaScript</li>
             <li>React JS</li>
              <li>ReactNative</li> 
               <li>Next JS</li>
                <li>Redux JS</li>
                 <li>TypeScript</li>
                  <li>Bootstrap</li>
                   <li>Node JS</li> 
                    <li>Express</li> 
                    <li>SQL</li>
                    <li>Postgre-SQL</li> 
                     <li>JsonWebToken</li>
                      <li>Git & GitHub</li>
          </p>
          <hr className={styles.aboutcenter} />
          <h2 className={styles.aboutme}>
            <div className={styles.descriptionCent}>
              <span  >
                Que Se Hacer?
              </span>
            </div>

          </h2>
          
          <div>
            <h3 className={styles.descriptionCent}>
              Front_End
            </h3>
          </div>

          <p className={styles.description}>
          Como desarrollador frontend, tengo experiencia en el manejo de HTML, CSS y JavaScript, así como frameworks y librerías, especialmente React JS. Puedo diseñar, crear componentes reactivos y lógicos y darles vida.
          </p>
          <p className={styles.description}>
          Mi proyecto favorito es "Portal Info-Dogs". Se trata de una SAP (aplicación de página única) creada con el propósito de obtener información sobre diversas razas de perros a partir de una API externa. El usuario puede buscar, filtrar, clasificar y crear su raza de perro.
          </p>
          <p className={styles.description}>
            Habilidades: <li> Software development</li>  
            <li>Sequelize.js</li> 
             <li>Website update</li>
              <li> Version control</li> 
               <li>Next.js</li> 
                <li>Visual Studio</li>
                 <li> User interface design</li>
                  <li>Content filter</li> 
          </p>
          <hr/>
          <h3 className={styles.descriptionCent}>
            Back-End
          </h3> 
          <p className={styles.description}>
          Mi proyecto favorito es "The Literary Corner", es un sitio de comercio electrónico que conectado con el backend permite al usuario visualizar todos los libros existentes en la página para renderizarlos en una serie de tarjetas. Permite buscarlos por nombre, además de poder filtrarlos y ordenarlos a través de clasificaciones predefinidas. La interfaz nos da la posibilidad a través de un formulario controlado de crear nuevos libros con atributos definidos por el usuario "Admin", estos se guardan en una base de datos. También con la posibilidad de ver el detalle, añadir a favoritos, hacer reseñas, añadir al carrito de la compra, comprar libros ya que tiene pasarela de pago, registrarse como usuario, editar la información de tu perfil y mucho más.

          </p>
          <p className={styles.description}>
          Esta aplicación hace uso de la biblioteca React-Redux para manejar los estados globales en ella, además de los estados locales de cada componente en React. Cuenta con diferentes tramos gestionados por rutas, en las que aprovecho las funcionalidades de React para reutilizar componentes. Las tecnologías que utilicé fueron: <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>React JS</li> <li>React-Redux</li> <li>Node JS</li> <li>Express</li> <li>PostgreSQL</li> <li>Sequelize</li> <li>Git/Github</li>
          </p>
          <hr />
          <div className={styles.CVCV}>
            <div className={styles.stackCV}>
              <button className={styles.btndowload} onClick={handleDownloadClick}>
                Descargar mi CV
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
