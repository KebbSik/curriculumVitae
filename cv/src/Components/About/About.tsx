import { motion } from "framer-motion";
import apple from "../../assets/stickers/apple.png";
import snakeHiss from "../../assets/stickers/snake_hiss.png";
import wallBurst from "../../assets/stickers/wall_burst.png";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section>
      <div className="about_wrapper">
        <div className="grid">
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            viewport={{ once: true }}
          >
            <AboutCard image={wallBurst} />
          </motion.div>
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <AboutCard image={apple} isReversed />
          </motion.div>
          <motion.div
            className="about_Card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
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
