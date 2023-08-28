import React from 'react';

import styles from './LandinPage.module.css';
import Matx from '../../image/Matx.png';

const LandinPage = () => {
  // Define the inline style with the desired background color
  const containerStyle = {
    backgroundImage: `url(${Matx})`, // Set the background image here
    backgroundSize: 'cover',
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.acheuno}>Gacias por visitar mi portafolio digital</h1>
      
      <div>
        <p>un dos</p>
      </div>
    </div>
  );
};

export default LandinPage;


