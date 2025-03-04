import { useRef } from "react";
// import cave1 from "../../assets/cave1.png";
// import cave2 from "../../assets/cave2.jpg";
import caveFront from "../../assets/cave_back_2.jpeg";
import caveBack from "../../assets/cave_front_2.png";

import { motion, useTransform, useScroll } from "framer-motion";

import "./Cave.css";
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
      <div className="absolute_gradient"></div>
      <div className="absolute_gradient reversed"></div>

      <motion.img
        className="cave_img img_back"
        src={caveFront}
        alt=""
        style={{ y: parallaxEffect }}
      />
      <img className="cave_img img_front" src={caveBack} alt="" />

      <section className="cave_section">
        <div className="cave_wrapper ">
          <button className="cave_btn left" onClick={() => scrollPrev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div ref={containerRef} className="cave_container snap_scroller">
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">6</div>
            <div className="box">7</div>
            <div className="box">8</div>
            <div className="box">9</div>
            <div className="box">10</div>
            <div className="box">11</div>
            <div className="box">12</div>
            <div className="box">13</div>
            <div className="box">14</div>
            <div className="box">15</div>
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
