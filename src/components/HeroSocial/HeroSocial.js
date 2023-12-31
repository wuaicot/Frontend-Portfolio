import React from "react";

const HeroSocial = ({ href, src, alt, title }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="hero--logo" src={src} alt={alt} title={title} />
    </a>
  );
};

export default HeroSocial;

