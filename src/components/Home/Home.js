import React, { useEffect } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/logo-github-512.png";
import logoLinkedin from "../../image/linkedin-logo-512.png";
import logoTwitter from "../../image/logoX-cuadrado512.jpg";
import logoOutlook from "../../image/OutLook.png";
import HeroSocial from "../HeroSocial/HeroSocial";
// import HeroButton from "../HeroButton/HeroButton";
 //import gmailStiker from "../../image/gmail.png";
 import CV from "../../cv/Naycol.Linares_PFL_CV.pdf";
 import miFoto from "../../cv/Naycol_Rodoolfo_Linares_Villasmil.jpg";
 

const gihubLink = "https://github.com/wuaicot";
const linkedinLink = "https://www.linkedin.com/in/wuaicot/";
const twitterLink = "https://twitter.com/naiycol";
const email = "https://outlook.live.com/mail/wuaicot"
   
const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);
      
  return (
    <section className={styles.seccion}>
      <div className={styles.Hcontainer}>
            <img className={styles.mifoto}
            src={miFoto}
            alt="Foto de Naycol R Linares V"
            />
        

        <h1 id={styles.titleHome}> Naycol R Linares V.</h1>
        
        <h3>
          <span>FULL STACK DEVELOPER</span>
          <br />
          <span>
           Javascript | React JS | Redux | Postgres-SQL | Git-fLOW | GitHub | Typescrypt | Node JS | Express | CSS | BootStarp | SCRUM
          </span>
        </h3>
         <br/>

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
      {/* <div className={styles.heroButtRoutes}>
        <HeroButton
          path="/contact"
          
          text="Contactame"
        />
        <br />
        <HeroButton
          path="/projects"
          
          text="proyectos"
        />
      </div> */}
          <br/><br/><br/><br/>
                   <div className={styles.CVCV}>
                  <div className={styles.stackCV}>
                    <a className={styles.btndowload}
                     href={CV}
                     download="Naycol_R.Linares_cv"
                    >
                   descargar mi CV.
                    </a>
                  </div>
                </div>
    </section>
    
  );
};

export default Home;
