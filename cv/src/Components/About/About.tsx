import React from "react";
import AboutCard from "./AboutCard";
import wallBurst from "../../assets/stickers/wall_burst.png";
import apple from "../../assets/stickers/apple.png";
import snakeHiss from "../../assets/stickers/snake_hiss.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <div className="about_wrapper">
        <div className="grid">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AboutCard image={wallBurst} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AboutCard image={apple} isReversed />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AboutCard image={snakeHiss} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
