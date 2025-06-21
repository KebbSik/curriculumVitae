import { useRef } from "react";

import caveFront from "../../assets/cave_back_3.png";
// import caveFront from "../../assets/cave_back_3.svg";
import stones from "../../assets/stones.png";
import projects from "../Cave/Projects";

import { motion, useScroll, useTransform } from "framer-motion";

import "./Cave.css";
import Box from "./Box";

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

  // const projects = [
  //   {
  //     name: "Fruits",
  //     href: "https://kebbsik.github.io/reactFruits/",
  //     image: testImage,
  //     description:
  //       "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae officia molestias sint cumque cupiditate itaque in rerum sit officiis minus autem placeat corporis recusandae, repudiandae quasi odit, id provident magni.",
  //   },
  //   {
  //     name: "name2",
  //     href: "href2",
  //     image: crossedFingers,
  //     description: "description",
  //   },
  //   {
  //     name: "name3",
  //     href: "href3",
  //     image: crossedFingers,
  //     description: "description",
  //   },
  //   {
  //     name: "name4",
  //     href: "href4",
  //     image: crossedFingers,
  //     description: "description",
  //   },
  //   {
  //     name: "name5",
  //     href: "href5",
  //     image: crossedFingers,
  //     description: "description",
  //   },
  // ];

  return (
    <div className="caveSection">
      <div className="caveTittle">
        <h1>
          Projects <span>Cave</span>
        </h1>
        <p>
          Let's <span>explore</span> my projects !
        </p>
      </div>
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
                {projects.map((project) => (
                  <Box
                    name={project.name}
                    backgroundImage={project.image}
                    href={project.href}
                    description={project.description}
                  ></Box>
                ))}
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
    </div>
  );
};

export default Cave;
