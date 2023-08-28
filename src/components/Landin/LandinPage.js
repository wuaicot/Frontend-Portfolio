import React from 'react';

import styles from './LandinPage.module.css';
import Matx from '../../image/Matx.png';
import HeroSocial from "../HeroSocial/HeroSocial";
import openLogo from "../../image/OpenSea_icon.svg1024.png";
import FSWD from "../../image/Certificado_Henry_FSWD.png";
import taCertf from "../../image/TA-Certf1252x877.png";

const open="https://opensea.io/es/wuaicotnft22";
const certFswd= "https://certificates.soyhenry.com/new-cert?id=8173422a2e645676511f3fa24f6db9174d81e3e76871bed6da857307da8a6f0b";
const TA= "https://certificates.soyhenry.com/new-cert?id=5e76160462ff0372ef65f37267628f90d0a9324febcc435d947247098c6d2ca4";


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
        {/* <p className={styles.tgTr}>¿te invito a ver algunas imagenes de mi galería artistica?</p> */}
        <HeroSocial 
          href={open}
          src={openLogo}
          alt="logo de openSea"
          title="WUAICOTNFT22"
        />
        
         
      </div>

      <div className={styles.certifFswd}>
      <HeroSocial             
       src={FSWD}
       href={certFswd}
       alt="miniatura del certificado FSWD"
       title="Full Stack Web Developer_Naycol R. Linares V."
      />
      <HeroSocial 
          href={TA}
          src={taCertf}
          alt="TEACHING ASSISTANT"
          title="Mi certificado TA"
        /> 
      </div>
      
    </div>
    
  );
};

export default LandinPage;

        
