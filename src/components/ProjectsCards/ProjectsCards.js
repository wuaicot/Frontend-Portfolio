import React, { useState, useEffect } from "react"; // Agrega useState y useEffect aquí
import styles from "./ProjectsCards.module.css";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const projects = [
  {
    id: 1,

    title: "Demo E-Comerce",
    description:
      " Un ejemplo de una tienda en línea, con un diseño minimalista y moderno, con un diseño responsivo para dispositivos móviles y de escritorio. Se utilizó NextJS, Shopify, NodeJS y TypesCript para su creación.",
    deployedUrl: "https://demo-e-comerce-wuaicot.vercel.app/",
  },
  {
    id: 2,
    title: "Scroll Performance Test",
    description:
      " Un ejemplo de una página web con un comodo rendimiento en el desplazamiento scroll. Se utilizó NextJS, TailwindCSS y JavaScript (express) para su creación.",
    deployedUrl: "https://new-page-new.vercel.app/",
  },
  {
    id: 3,

    title: "landingpage-templete",
    description:
      "este es un ejemplo de una landing page , con un diseño minimalista y moderno, con un diseño responsivo para dispositivos móviles y de escritorio. Se utilizó ReactJS HTML, CSS y JavaScript para su creación.",
    deployedUrl: "https://landingpage-templete.vercel.app/",
  },
  {
    id: 4,

    title: "Scroll Performance Test",
    description:
      " Un ejemplo de una página web con un comodo rendimiento en el desplazamiento scroll. Se utilizó NextJS, TailwindCSS y JavaScript (express) para su creación.",
    deployedUrl: "https://new-page-new.vercel.app/",
  },
  {
    id: 5,

    title: "Demo Of Menu Toogle",
    description:
      "Este es un ejemplo de un menú hamburguesa con animaciones en modo small, con un diseño minimalista y moderno, con un diseño responsivo para dispositivos móviles y de escritorio. Se utilizó NextJS+Taildwindcss HTML, CSS y JavaScript para su creación.",
    deployedUrl: "https://yamil-landingpage.vercel.app/",
  },
  {
    id: 6,

    title: "Lubridol",
    description:
      "Un producto natural para el dolor en las articulaciones. Se utilizó HTML, CSS y JavaScript para su creación.",
    deployedUrl: "https://lubridol.vercel.app/",
  },
  {
    id: 7,
    title: "Enespera",
    description:
      "una aplicacion web para recerbas y compre de propiedades inmuebles. Se utilizó React, Redux, CSS y JavaScript para su creación.",
    deployedUrl: "http://www.enespera.com",
  },
  {
    id: 8,

    title: "Soon",
    description: "Aún en desarrollo.",
    deployedUrl: "http://www.enespera.com",
  },
  {
    id: 9,

    title: "The Literary Corner",
    description:
      'Un "e-commerce" en el que el usuario, amante de los libros y la literatura, podrá elegir entre cientos de libros con la posibilidad de ver los detalles, añadir a favoritos, hacer reseñas, añadir al carrito de la compra, comprar libros y mucho más',
    deployedUrl: "https://pf-henry-bookstore.vercel.app/",
  },
  {
    id: 10,
    title: "Portal Info-Dogs",
    description:
      " Aquí podrás encontrar información sobre las diferentes razas de perros, con la posibilidad de buscar por nombre, ver detalles de cada raza y mucho más. Se utilizó React, Redux, CSS y JavaScript para su creación.",
    deployedUrl: "https://portal-info-dogs.vercel.app/",
  },

  {
    id: 11,
    title: "Portal Video-Game",
    description:
      "Un portal en el que podrás encontrar información sobre los videojuegos más populares, con la posibilidad de buscar por nombre, ver detalles de cada videojuego y mucho más. Se utilizó React, Redux, CSS y JavaScript para su creación.",
    deployedUrl: "https://pi-videogames-main-mi-ihac35zgc-wuaicot.vercel.app/",
  },
];

const ProjectsCards = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.adverting}>
        <h1>Estos son algunos de mis proyectos personales</h1>
      </div>
      <div className={styles.cardsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>

      {/* Aquí se inserta el botón de desplazamiento hacia arriba */}
      {showScrollTopButton && (
        <Fab
          color="primary"
          size="medium"
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: 30,
            right: 21,
            zIndex: 1000, // Asegúrate de que esté por encima de otros elementos
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </div>
  );
};

export default ProjectsCards;
