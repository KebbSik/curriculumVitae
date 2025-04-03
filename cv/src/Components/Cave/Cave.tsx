import { useRef } from "react";

import caveFront from "../../assets/cave_back_3.png";
// import caveFront from "../../assets/cave_back_3.svg";
import stones from "../../assets/stones.png";

import { motion, useScroll, useTransform } from "framer-motion";

import "./Cave.css";

const Cave = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [-1200, 100]);

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
    <div className="overWrapper">
      <motion.div className="whole_cave">
        <motion.img
          className="cave_img img_back"
          src={caveFront}
          alt=""
          style={{ y: parallaxEffect, position: "absolute" }}
        />

        <section className="cave_section">
          <div className="cave_wrapper ">
            <button className="cave_btn left" onClick={() => scrollPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div ref={containerRef} className="cave_container snap_scroller">
              <div
                style={{
                  zIndex: 1,
                  height: 100,
                  width: 300,
                  backgroundColor: "white",
                }}
              >
                soon!
              </div>
              <div
                style={{
                  zIndex: 1,
                  height: 100,
                  width: 300,
                  backgroundColor: "white",
                }}
              >
                soon!
              </div>
              <div
                style={{
                  zIndex: 1,
                  height: 100,
                  width: 300,
                  backgroundColor: "white",
                }}
              >
                soon!
              </div>
            </div>
            <button className="cave_btn right" onClick={() => scrollNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>
      </motion.div>
      <motion.img
        className="cave_img img_front"
        src={stones}
        alt=""
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      />
    </div>
  );
};

export default Cave;
