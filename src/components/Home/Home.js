import React, { useEffect } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/github (3).png";
import logoLinkedin from "../../image/linkedin.png";
import logoTwitter from "../../image/twitter.png";
import HeroSocial from "../HeroSocial/HeroSocial";
// import HeroButton from "../HeroButton/HeroButton";
 import gmailStiker from "../../image/gmail.png";
 import CV from "../../cv/NaycolRLinares_cv.pdf";
 

const gihubLink = "https://github.com/wuaicot";
const linkedinLink = "https://www.linkedin.com/in/wuaicot/";
const twitterLink = "https://twitter.com/naiycol";
const email = "https://mail.google.com/mail/wuaicot8@gmail.com"
   
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

        

        <h1 id={styles.titleHome}> Naycol R Linares V.</h1>
        <hr />
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
          href={linkedinLink}
          src={logoLinkedin}
          alt="logo de linkedin"
          title="LinkedIn"
        />

        <HeroSocial
          href={twitterLink}
          src={logoTwitter}
          alt="logo de Twitter"
          title="Twitter"
        />

                <HeroSocial
                  href={email}
                  target="_blank"
                  src={gmailStiker}
                  alt="gmail-Stiker"
                  title="wuaicot8@gmail.com"
                  linkName="wuaicot8@gmail.com"
                  
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
