import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section>
      <div className="about_wrapper">
        <div className="grid">
          <AboutCard />
          <AboutCard isReversed />
          <AboutCard />
        </div>
      </div>
    </section>
  );
};

export default About;
