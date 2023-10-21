import React from 'react';
import styles from './ProjectsCards.module.css';

// Datos de ejemplo de proyectos (reemplaza con tus datos reales)
const projects = [
  {
    id: 1,
    title: 'The Literary Corner',
    description: 'An "e-commerce" in which the user, a lover of books and literature, will be able to choose from hundreds of books with the possibility of viewing the details, adding to favorites, making reviews, adding to the shopping cart, buying books and further',
    deployedUrl: 'https://pf-henry-bookstore.vercel.app/',
  },
  {
    id: 2,
    title: 'Portal Info-Dogs',
    description: 'It is a SAP (single page application) created with the purpose of obtaining information on the various breeds of dogs from an external API. The user can search, filter, sort and create their dog breed.',
    deployedUrl: 'https://portal-info-dogs.vercel.app/',
  },
  {
    id: 3,
    title: 'Portal Video-Game',
    description: 'Here soon you will be able to create your favorite collection of video games',
    deployedUrl: 'https://pi-videogames-main-mi-ihac35zgc-wuaicot.vercel.app/',
  },
  {
    id: 4,
    title: 'Soon',
    description: 'still in developmentt add .',
    deployedUrl: 'http://www.enespera.com',
  }
  // Agrega más proyectos si es necesario
];

const ProjectsCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.adverting}>
      <h1>This section is still in development!</h1>
      </div>
      <div className={styles.cardsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
            See Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
