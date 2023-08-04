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
      <h1>Welcome to My Digital Portfolio</h1>
      {/* <p>un dos</p> */}
    </div>
  );
};

export default LandinPage;


//<div  style={containerStyle}>