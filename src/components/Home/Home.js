import React, { useEffect } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/github (3).png";
import logoLinkedin from "../../image/linkedin.png";
import logoTwitter from "../../image/twitter.png";
import HeroSocial from "../HeroSocial/HeroSocial";
// import HeroButton from "../HeroButton/HeroButton";
 import gmailStiker from "../../image/gmail.png";
 

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

        {/* <img class="glostick__account-details__avatar" src="https://gravatar.com/avatar/539879c51f50898247766a89ba00efea?s=96&amp;d=https://www.herokucdn.com/images/ninja-avatar-96x96.png" alt="wuaicot8@gmail.com" role="presentation"></img> */}

        <h1 id={styles.titleHome}> Naycol R. Linares V.</h1>
        <hr />
        <h3>
          <span>Full Stack Web Developer</span>
          <br />
          <span>
            JavaScript | Html | Css | React JS | Node | Redux | PostgreSQL | MongoDB | SCRUM
          </span>
        </h3>

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
                  src={gmailStiker}
                  alt="gmail-Stiker"
                  title="wuaicot8@gmail.com"
                  
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
    </section>
  );
};

export default Home;
