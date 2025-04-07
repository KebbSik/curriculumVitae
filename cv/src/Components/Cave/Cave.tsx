import { useRef } from "react";

import caveFront from "../../assets/cave_back_3.png";
// import caveFront from "../../assets/cave_back_3.svg";
import stones from "../../assets/stones.png";
import crossedFingers from "../../assets/stickers/fingers_crossed_soon.png";

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

        <div className="cave_section">
          <div className="cave_wrapper ">
            <button className="cave_btn left" onClick={() => scrollPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div ref={containerRef} className="cave_container snap_scroller">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (content) => (
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.01 }}
                    className="box"
                    key={content}
                  >
                    <div>
                      {/* bug 'catcher', this approach needed only when snapscroll has more than 1 element*/}
                      <div></div>
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${crossedFingers})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          zIndex: 1,
                          opacity: 0.4,
                        }}
                      />
                    </div>
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
