import React from "react";

const Skill = ({ skill, src, title, alt, porcent }) => {
  return (
    <div>
      <li>
        <strong>{skill}</strong>
        <img src={src} title={title} alt={alt} />
      </li>
      <br />
    </div>
  );
};

export default Skill;
