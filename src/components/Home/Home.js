import React, { useEffect } from "react";
import styles from "./Home.module.css";
import logoGithub from "../../image/github (3).png";
import logoLinkedin from "../../image/linkedin.png";
import logoTwitter from "../../image/twitter.png";
import HeroSocial from "../HeroSocial/HeroSocial";
import HeroButton from "../HeroButton/HeroButton";

const gihubLink = "https://github.com/wuaicot";
const linkedinLink = "https://www.linkedin.com/in/wuaicot/";
const twitterLink = "https://twitter.com/naiycol";

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
    <section>
      <div className={styles.Hcontainer}>
        <h1 id={styles.titleHome}> Naycol Rodolfo Linares Villasmil</h1>
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
          alt="logo de telegram"
          title="Twitter"
        />
      </div>
      <div className={styles.heroButtRoutes}>
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <br />
        <HeroButton
          path="/projects"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Home;
