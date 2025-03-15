import { useRef } from "react";
// import cave1 from "../../assets/cave1.png";
// import cave2 from "../../assets/cave2.jpg";
import caveFront from "../../assets/cave_back_2.jpeg";
import caveBack from "../../assets/cave_front_2.png";

import { motion, useTransform, useScroll } from "framer-motion";

import "./Cave.css";
import Gradient from "./Gradient";
const Cave = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [-1000, 100]);

  const scrollPrev = () => {
    console.log("prev");
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    console.log("next");
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
    }
  };

  return (
    <motion.div className="whole_cave">
      {/* <div className="absolute_gradient"></div> */}
      {/* <div className="absolute_gradient reversed"></div> */}

      <motion.img
        className="cave_img img_back"
        src={caveFront}
        alt=""
        style={{ y: parallaxEffect }}
      />
      <motion.img
        className="cave_img img_front"
        src={caveBack}
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />

      <section className="cave_section">
        <div className="cave_wrapper ">
          <button className="cave_btn left" onClick={() => scrollPrev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div ref={containerRef} className="cave_container snap_scroller">
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              1
            </motion.div>
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              2
            </motion.div>
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              3
            </motion.div>
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              4
            </motion.div>
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              5
            </motion.div>
            <motion.div
              className="box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              6
            </motion.div>
          </div>
          <button className="cave_btn right" onClick={() => scrollNext()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Cave;
