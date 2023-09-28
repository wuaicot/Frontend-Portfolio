import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/logo-github-512.png";
import logoLinkedin from "../../image/linkedin-logo-512.png";
import logoTwitter from "../../image/logoX-cuadrado512.jpg";
import logoOutlook from "../../image/OutLook.png";
import HeroSocial from "../HeroSocial/HeroSocial";
import CV from "../../cv/Naycol_Linares_CV.pdf";
import CV_EN from "../../cv/Naycol_Linares_CVe.pdf"; // Reemplaza con la URL correcta de tu CV en Inglés

const gihubLink = "https://github.com/wuaicot";
const linkedinLink = "https://www.linkedin.com/in/wuaicot/";
const twitterLink = "https://twitter.com/naiycol";
const email = "https://outlook.live.com/mail/wuaicot";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es"); // Por defecto, selecciona Español

  useEffect(() => {
    handleScrollToTop();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.seccion}>
      <div className={styles.Hcontainer}>
        {/* <img className={styles.mifoto}
            src={miFoto}
            alt="Foto de Naycol R Linares V"
            /> */}
        <h1 id={styles.titleHome}> NAYCOL LINARES </h1>
        <h3>
          <span>FULL STACK WEB DEVELOPER</span>
          <br />
          <span>
            ReactJS | NodeJS | JavaScript | HTML | CSS | Redux | Express | Postgre-SQL | Bash | GitHub | BootStarp | Tailwind | SCRUM
          </span>
        </h3>
        <br />

        <HeroSocial
          href={gihubLink}
          src={logoGithub}
          alt="logo de github"
          title="Github"
        />

        <HeroSocial
          href={twitterLink}
          src={logoTwitter}
          alt="logo de Twitter"
          title="Twitter"
        />

        <HeroSocial
          href={linkedinLink}
          src={logoLinkedin}
          alt="logo de linkedin"
          title="LinkedIn"
        />

        <HeroSocial
          href={email}
          target="_blank"
          src={logoOutlook}
          alt="e-mail"
          title="wuaicot@hotmail.com"
          linkName="wuaicot@hotmail.com"
        />
      </div>

      <br/><br/><br/><br/>

      <div className={styles.CVCV}>
        <div className={styles.stackCV}>
          <button
            className={styles.btndowload}
            onClick={() => {
              const userLanguage = window.confirm("¿En qué idioma desea descargar el CV?\n\nSeleccione 'Aceptar' para Español o 'Cancelar' para Inglés.");
              if (userLanguage) {
                window.location.href = CV; // Descargar el archivo en Español
              } else {
                window.location.href = CV_EN; // Reemplaza CV_EN con la URL de tu CV en Inglés
              }
            }}
          >
            Descargar mi CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
