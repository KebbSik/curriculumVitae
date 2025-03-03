import React from "react";
import AboutCard from "./AboutCard";
import wallBurst from "../../assets/stickers/wall_burst.png";
import apple from "../../assets/stickers/apple.png";
import snakeHiss from "../../assets/stickers/snake_hiss.png";

const About = () => {
  return (
    <section>
      <div className="about_wrapper">
        <div className="grid">
          <AboutCard image={wallBurst} />
          <AboutCard image={apple} isReversed />
          <AboutCard image={snakeHiss} />
        </div>
      </div>
    </section>
  );
};

export default About;
