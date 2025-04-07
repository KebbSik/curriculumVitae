import { useRef, useState } from "react";

import caveFront from "../../assets/cave_back_3.png";
// import caveFront from "../../assets/cave_back_3.svg";
import stones from "../../assets/stones.png";

import { motion, useScroll, useTransform } from "framer-motion";

import "./Cave.css";
import { div } from "motion/react-client";

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

        <div className="cave_section">
          <div className="cave_wrapper ">
            <button className="cave_btn left" onClick={() => scrollPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div ref={containerRef} className="cave_container snap_scroller">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (number) => (
                  <motion.div
                    // initial={{ opacity: 0, scale: 0.95 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 0.1, ease: "linear" }}

                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.01 }}
                    className="box"
                    key={number}
                  >
                    {number}
                  </motion.div>
                )
              )}
            </div>
            <button className="cave_btn right" onClick={() => scrollNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
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
