import React from 'react';

import styles from './LandinPage.module.css';
import Matx from '../../image/Matx.png';
import HeroSocial from "../HeroSocial/HeroSocial";
import openLogo from "../../image/OpenSea_icon.svg1024.png";

const open="https://opensea.io/es/wuaicotnft22";
const LandinPage = () => {
  // Define the inline style with the desired background color
  const containerStyle = {
    backgroundImage: `url(${Matx})`, // Set the background image here
    backgroundSize: 'cover',
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.acheuno}>Gacias por visitar mi portafolio digital</h1>
      
      <div className={styles.openS}>
        <p className={styles.tgTr}>¿te gustaría ver algunas imagenes de mi galería artistica?</p>
        <HeroSocial
          href={open}
          src={openLogo}
          alt="logo de openSea"
          title="OpenSea"
        />
      </div>
    </div>
  );
};

export default LandinPage;


