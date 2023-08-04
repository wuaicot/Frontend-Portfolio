import React from "react";
import Skill from "./Skill";
import htmlStiker from "../../image/html.png";
import cssStiker from "../../image/css-logo.png";
import javascriptStiker from "../../image/javascript-logo-svg-vector.svg";
import figmaStiker from "../../image/figma-1-logo-svg-vector.svg";
import reactStiker from "../../image/react-logo22.png";
import gitStiker from "../../image/git-logo2.png";
import nodeStiker from "../../image/nodejs-icon-logo-svg-vector.svg";
import expressStiker from "../../image/express.png";
import typescriptStiker from "../../image/typescript-programming-language.svg";
import mongodbtStiker from "../../image/mongo.png";
import reduxStiker from "../../image/redux.svg";
//  import psqlStiker from "../../image/postgresql-icon.svg";
// import sequelizeStiker from "../../image/sequelizejs-icon.svg";
import bootstrapStiker from "../../image/bootstrap-5-1.svg";
import sassStiker from "../../image/sass-1.svg";
import nextStiker from "../../image/next-js.svg";
import grapgqlStiker from "../../image/graphql.svg";
import materialStiker from "../../image/material-ui-1.svg";
import vueStiker from "../../image/vue-js-1.svg";
import styles from "./Skills.module.css";



const Skills = () => {
    return (
        
      

        <section className={styles.contIconos}>
            
            
                <div className={styles.skillsIcons}>
                    
                    <Skill
                    skill="HTML"
                    src={htmlStiker}
                    title="HTML"
                    alt="html-logo"
                   />
                   <Skill 
                   skill="CSS" 
                   src={cssStiker} 
                   title="CSS" 
                   alt="css-logo" 
                   />
                   <Skill
                     skill="JavaScript"
                     src={javascriptStiker}
                     title="JavaScript"
                     alt="javascript-logo"
                   />
                   <Skill
                    skill="Figma"
                    src={figmaStiker}
                     title="Figma"
                     alt="figma-logo"
                    />
                    <Skill
                    skill="React"
                    src={reactStiker}
                    title="React Js - React Native"
                    alt="react-logo"
                   />
                   <Skill 
                   skill="Git" 
                   src={gitStiker} 
                    title="Git" 
                   alt="git-logo" 
                  />
                    <Skill
                    skill="Node"
                     src={nodeStiker}
                     title="Node Js"
                     alt="node-logo"
                   />
                   <Skill
                   skill="Express"
                   src={expressStiker}
                   title="Express Js"
                   alt="express-logo"
                  />
                  <Skill
                skill="TypeScript"
                src={typescriptStiker}
                title="TypeScript"
                alt="typescript-logo"
              />
              <Skill
                skill="MongoDB"
                src={mongodbtStiker}
                title="MongoDB"
                alt="mongodb-leaf-logo"
              />
               <Skill
                skill="Redux"
                src={reduxStiker}
                title="Redux"
                alt="rexu-logo"
              />
              {/* <Skill
                skill="Postgresql"
                src={psqlStiker}
                title="PostgreSQL"
                alt="psql-logo"
              />
              <Skill
                skill="Sequelize"
                src={sequelizeStiker}
                title="Sequelize"
                alt="sequelize-logo"
              /> */}
              <Skill
                skill="bootstrap"
                src={bootstrapStiker}
                title="Bootstrap"
                alt="bootstrap-logo"
              />
              <Skill
                skill="sass"
                src={sassStiker}
                title="Sass"
                alt="sass-logo"
              />
              <Skill
                skill="Next"
                src={nextStiker}
                title="Next Js"
                alt="next-logo"
              />
              <Skill
                skill="GraphQL"
                src={grapgqlStiker}
                title="GraphQL"
                alt="graphql-logo"
              />
              <Skill
                skill="MUI"
                src={materialStiker}
                title="Material-UI"
                alt="material-ui-logo"
              />
                <Skill
                skill="Vue"
                src={vueStiker}
                title="Vue Js"
                alt="vue-logo"
              />
                   
                    
                </div>
            
        </section>
    )
};

export default Skills;
