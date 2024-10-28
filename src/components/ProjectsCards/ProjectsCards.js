import React from 'react';
import styles from './ProjectsCards.module.css';

// Datos de ejemplo de proyectos (reemplaza con tus datos reales)
const projects = [
  {
    id: 1,
    title: 'The Literary Corner',
    description: 'Un "e-commerce" en el que el usuario, amante de los libros y la literatura, podrá elegir entre cientos de libros con la posibilidad de ver los detalles, añadir a favoritos, hacer reseñas, añadir al carrito de la compra, comprar libros y mucho más',
    deployedUrl: 'https://pf-henry-bookstore.vercel.app/',
  },
  {
    id: 2,
    title: 'Portal Info-Dogs',
    description: 'Se trata de una SAP (aplicación de página única) creada con el propósito de obtener información sobre las distintas razas de perros a partir de una API externa. El usuario puede buscar, filtrar, clasificar y crear su raza de perro.',
    deployedUrl: 'https://portal-info-dogs.vercel.app/',
  },
  {
    id: 3,
    title: 'Portal Video-Game',
    description: 'Aquí pronto podrás crear tu colección favorita de videojuegos',
    deployedUrl: 'https://pi-videogames-main-mi-ihac35zgc-wuaicot.vercel.app/',
  },
  {
    id: 4,
    title: 'Lubridol',
    description: 'Un producto natural para el dolor en las articulaciones',
    deployedUrl: 'https://lubridol.vercel.app/',
  },
  {
    id: 5,
    title: 'Soon',
    description: 'Aún en desarrollo.',
    deployedUrl: 'http://www.enespera.com',
  },
];

const ProjectsCards = () => {
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
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;

