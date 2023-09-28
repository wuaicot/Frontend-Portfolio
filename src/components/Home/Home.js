import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/logo-github-512.png";
import logoLinkedin from "../../image/linkedin-logo-512.png";
import logoTwitter from "../../image/logoX-cuadrado512.jpg";
import logoOutlook from "../../image/OutLook.png";
import HeroSocial from "../HeroSocial/HeroSocial";
import CV from "../../cv/Naycol_Linares_CV.pdf";
import CV_EN from "../../cv/Naycol_Linares_CVe.pdf";
import Modal from "react-modal";

const gihubLink = "https://github.com/wuaicot";
const linkedinLink = "https://www.linkedin.com/in/wuaicot/";
const twitterLink = "https://twitter.com/naiycol";
const email = "https://outlook.live.com/mail/wuaicot";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleScrollToTop();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleLanguageSelect = (language) => {
    setIsModalOpen(false);

    if (language === "es") {
      window.location.href = CV;
    } else {
      window.location.href = CV_EN;
    }
  };

  return (
    <section className={styles.seccion}>
      <div className={styles.Hcontainer}>
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
          <button className={styles.btndowload} onClick={handleDownloadClick}>
            Descargar mi CV
          </button>
        </div>
      </div>

      {/* Modal para la selección de idioma */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Seleccionar idioma"
        className={styles.languageModal}
      >
        <h2>¿ En que idioma desea descargar el CV ?</h2>
        <button className={styles.languageButton} onClick={() => handleLanguageSelect("es")}>
          Español
        </button>
        <button className={styles.languageButton} onClick={() => handleLanguageSelect("en")}>
          Inglés
        </button>
      </Modal>
    </section>
  );
};

export default Home;
