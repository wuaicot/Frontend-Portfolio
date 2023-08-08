import React from 'react';
import styles from './ProjectsCards.module.css';

// Datos de ejemplo de proyectos (reemplaza con tus datos reales)
const projects = [
  {
    id: 1,
    title: 'The Literary Corner',
    description: 'Una "e-comerce" en la que el usuario, amante de los libros y de la literatura podrán elegir entre cientos de libros con la posibilidad de visualizar el detalle, añadir a favoritos, hacer reseñas, agregar al carro de compas, comprar libros y más',
    deployedUrl: 'https://pf-henry-bookstore.vercel.app/',
  },
  {
    id: 2,
    title: 'Portal Info-Dogs',
    description: 'Es una SAP (single page application) creada con la finalidad de obtener información de las diversas razas de perros desde una API externa. el usuario puede buscar, filtrar, ordenar y crear su raza de perro.',
    deployedUrl: 'https://portal-info-dogs.vercel.app/',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    deployedUrl: 'https://proyecto3.com',
  }
  // Agrega más proyectos si es necesario
];

const ProjectsCards = () => {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
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
