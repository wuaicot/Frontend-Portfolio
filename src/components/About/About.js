
import React, { useEffect } from "react";
import miFoto from "../../cv/Naycol_Rodoolfo_Linares_Villasmil.jpg";
import styles from "./About.module.css";
import Skills from "../Skl/Skills";
import CV from "../../cv/Naycol_Linares_CV.pdf";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <React.Fragment className={styles.elgrid}>
      <section className={styles.conGener}>
        <div className={styles.container}>

        <img className={styles.mifoto}
            src={miFoto}
            alt="Foto de Naycol  Linares "
            />

          {/* <h1 className={styles.aboutTittle}>Sobre Mí</h1> */}
          <p className={styles.puedesllam}>
            Hola 🖐️😉, puedes llamarme Rodolfo.
          </p>
          <p className={styles.description}>
            Soy entusiasta de la educación digital efectiva, del rápido aprendizaje y del crecimiento personal y
            profesional. Disfruto creando productos digitales, especializado en
            frontend y en backend. Valorando la comunicación y el trabajo
            en equipo, busco siempre nuevos retos y me adapto fácilmente a los
            cambios. Abierto a aprender nuevas tecnologías y lenguajes de programación. 📲💻
          </p>
          <p  className={styles.description}>
          La comunicación y el trabajo en equipo es para mí esencial para poder crecer como desarrollador. Soy proactivo y metódico, siempre busco nuevos retos y me adapto fácilmente a los cambios, estoy abierto a aprender nuevas tecnologías y lenguajes.
          </p>
          <p className={styles.description}>
          ✅ Técnologías: HTML, CSS, JavaScript, React JS/React Native, Next JS, Redux JS, TypeScript, Bootstrap, Less, Node JS, Nest JS, Express, SQL, PostgreSQL, Sequelize,JsonWebToken, Figma, Git & GitHub.
          </p>
          <hr className={styles.aboutcenter}/>
           <h2 className={styles.aboutme}>
            <div className={styles.descriptionCent}>
              <span  >
                 ¿Qué puedo hacer?
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
             Como desarrollador frontend, tengo experiencia en el manejo
              de HTML, CSS y JavaScript además del manejo de frameworks y liberías,
              especialmente React JS.  Puedo dar estilos, crear componentes
              reactivos, lógicos y darles vida
              </p>
              <p className={styles.description}>
              Mi proyecto favorito en este sentido sería "Portal Info-Dogs"Es una SAP (single page application) creada con la finalidad de obtener información de las diversas razas de perros desde una API externa. el usuario puede buscar, filtrar, ordenar y crear su raza de perro.
              </p>
              <p className={styles.description}>
              Aptitudes: Desarrollo de software · Sequelize.js · Actualización de sitio web · Control de versiones · Next.js · Visual Studio · Diseño de la interfaz de usuario · Filtro de contenido
              </p>
              <h3 className={styles.descriptionCent}>
              Back-End
             </h3>
             <p className={styles.description}>
             Mi proyecto favorito en este sentido sería "The Literary Corner", es una e-comerce, la cual conectada con backend permite al usuario visualizar todos los libros existentes en la páguina para renderizarlos en una serie de cards. Permite buscarlos por nombre, así como también poder filtrarlos y ordenarlos mediante clasificaciones predefinidas. La interfaz nos da la posibilidad mediante un formulario controlado de crear nuevos libros con atributos definidos por el usuario "Admin", estos son guardados en una base de datos. Tambien con la posibilidad de visualizar el detalle, añadir a favoritos, hacer reseñas, agregar al carrito de compras, comprar libros ya que cuenta con una pasarela de pago, registrarse como usuario, editar su informacion de perfil y más.            
              </p>
              <p className={styles.description}>
              Esta app hace uso de la libería React-Redux para manejar estados globales en la misma, además de los estados locales propios de cada componente en React. Cuenta con distintas secciones panejadas por rutas, sobre las que aprovecho las características de React para reutilizar componentes. Las tecnologías que utilicé fueron HTML, CSS, JavaScript, React JS, React-Redux, Node JS, Express, PostgreSQL, Sequelize, Git/Github.           
              </p>
              <hr/>
                <div className={styles.CVCV}>
                  <div className={styles.stackCV}>
                    <a className={styles.btndowload}
                     href={CV}
                     download="Naycol_Linares_CV.pdf"
                    >
                   descargar mi CV.
                    </a>
                  </div>
                </div>
        </div>
        <div >
      <Skills />
      </div>
      </section >
      
    </React.Fragment>
  );
};

export default About;
