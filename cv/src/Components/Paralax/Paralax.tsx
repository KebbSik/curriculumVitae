import React, { useEffect, useRef } from "react";
import "./Paralax.css";
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2c.png";
import { motion, useTransform, useScroll } from "framer-motion";

const Paralax = () => {
  const { scrollYProgress } = useScroll();
  const parallaxImage1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const parallaxImage2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const parallaxTitle = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <div className="paralax_container">
      <motion.div className="paralax_content">
        <motion.img src={image1} alt="paralax" style={{ y: parallaxImage1 }} />
        <motion.div className="paralax_title" style={{ y: parallaxTitle }}>
          <h1>Hello World !</h1>
        </motion.div>
        <motion.img
          src={image2}
          alt="paralax front"
          style={{ y: parallaxImage2 }}
        />
      </motion.div>
    </div>
  );
};

export default Paralax;
