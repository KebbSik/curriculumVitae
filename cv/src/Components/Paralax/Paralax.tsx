import React, { useEffect, useRef } from "react";
import "./Paralax.css";
import image1 from "../../assets/Image1b.png";
import image2 from "../../assets/Image2c.png";
import { motion, useTransform, useScroll } from "framer-motion";
import skydive from "../../assets/stickers/skydive.png";
import hand_pointer from "../../assets/stickers/hand_pointer.png";
import { GiDuration } from "react-icons/gi";

const Paralax = () => {
  const { scrollYProgress } = useScroll();

  const image1Y = useTransform(scrollYProgress, [0, 2], [0, 1000]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const titleY = useTransform(scrollYProgress, [0, 1], [100, 3000]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  return (
    <div className="paralax_container">
      <motion.div className="paralax_content">
        <motion.img
          className="background"
          src={image1}
          alt="paralax"
          style={{ y: image1Y }}
          transition={{ ease: "easeIn" }}
        />
        <motion.div
          className="paralax_title_wrapper"
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
        >
          <motion.img
            src={skydive}
            className="sky_dive"
            style={{ scale: 0.3, y: -155, rotate: 20, zIndex: -5 }}
            animate={{ y: 400, opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          />
          <h1 className="tittle">Welcome</h1>
        </motion.div>
        <motion.img
          className="hand_pointer"
          src={hand_pointer}
          style={{
            right: 0,
            translateX: "30%",
            translateY: "30%",
          }}
          initial={{ x: "100%", rotate: 90 }}
          animate={{ x: 0, rotate: -20 }}
          transition={{ delay: 2.5, duration: 1 }}
        />
        <motion.img
          className="background"
          src={image2}
          alt="paralax front"
          // style={{ y: parallaxImage2 }}
        />
      </motion.div>
    </div>
  );
};

export default Paralax;
