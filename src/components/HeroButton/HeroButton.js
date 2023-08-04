import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroButton.module.css";

const HeroButton = ({ path, text }) => {
    return (
        <Link className={styles.HeroButton} to={path}>{text}</Link>
    );        
};

 export default HeroButton;