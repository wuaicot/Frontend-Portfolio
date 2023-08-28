import React from 'react';

import styles from './LandinPage.module.css';
import Matx from '../../image/Matx.png';
import HeroSocial from "../HeroSocial/HeroSocial";
import openLogo from "../../image/OpenSea_icon.svg1024.png";
import FSWD from "../../image/Certificado_Henry_FSWD.png";

const open="https://opensea.io/es/wuaicotnft22";
const LandinPage = () => {
  // Define the inline style with the desired background color
  const containerStyle = {
    backgroundImage: `url(${Matx})`, // Set the background image here
    backgroundSize: 'cover',
  };

   const certFswd= "https://certificates.soyhenry.com/new-cert?id=8173422a2e645676511f3fa24f6db9174d81e3e76871bed6da857307da8a6f0b";

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.acheuno}>Gacias por visitar mi portafolio digital</h1>
      
      <div className={styles.openS}>
        {/* <p className={styles.tgTr}>¿te invito a ver algunas imagenes de mi galería artistica?</p> */}
        <HeroSocial 
          href={open}
          src={openLogo}
          alt="logo de openSea"
          title="WUAICOTNFT22"
        />

         
      </div>

      <div>
        <HeroSocial             
       src={FSWD}
       href={certFswd}
       alt="miniatura del certificado FSWD"
       title="Full Stack Web Developer_Naycol R. Linares V."
      />
      </div>
      
    </div>
    
  );
};

export default LandinPage;


