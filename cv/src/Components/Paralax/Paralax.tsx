import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import image1 from "../../assets/Image1b.png";
import image2 from "../../assets/Image2c.png";
import hand_pointer from "../../assets/stickers/hand_pointer.png";
import skydive from "../../assets/stickers/skydive.png";
import "./Paralax.css";

const Paralax = () => {
  const { scrollYProgress } = useScroll();

  // Define transformations
  const image1Y = useTransform(scrollYProgress, [0, 2], [0, 1200]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 3000]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  // Media Queries for responsiveness
  const max1400 = useMediaQuery({ query: "(max-width: 1400px)" });
  const max1280 = useMediaQuery({ query: "(max-width: 1280px)" });
  const max992 = useMediaQuery({ query: "(max-width: 992px)" });
  const max768 = useMediaQuery({ query: "(max-width: 768px)" });
  const max480 = useMediaQuery({ query: "(max-width: 480px)" });

  const skyDiveStyle = {
    scale: max1280
      ? max992
        ? max768
          ? max480
            ? 0.15
            : 0.2
          : 0.2
        : 0.2
      : 0.28,
    y: max1280
      ? max992
        ? max768
          ? max480
            ? -310
            : -250
          : -190
        : -190
      : -140,
  };

  const tittleStyle = {
    fontSize: max1280
      ? max992
        ? max768
          ? max480
            ? "3rem"
            : "6rem"
          : "10rem"
        : "10rem"
      : "12rem",
  };
  const [firstLoad, setFirstLooad] = useState(true);

  useEffect(() => {
    setFirstLooad(false);
  }, []);

  return (
    <>
      <div className="paralax_container">
        <motion.div className="paralax_content">
          <motion.img
            className="background"
            src={image1}
            alt="parallax"
            style={{ y: image1Y }}
            transition={{ ease: "easeIn" }}
          />
          <motion.div
            className="paralax_title_wrapper"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
            }}
          >
            <motion.img
              src={skydive}
              className="sky_dive"
              style={{
                scale: skyDiveStyle.scale,
                y: skyDiveStyle.y,
                rotate: 20,
              }}
              animate={{ y: 400, opacity: [1, 1, 1, 0], rotate: -360 }}
              transition={{ delay: 2.5, duration: 1 }}
            />
            <h1 className="tittle" style={tittleStyle}>
              Welcome
            </h1>
          </motion.div>
          <motion.img
            className="hand_pointer"
            src={hand_pointer}
            style={{
              scale: max1280 ? (max992 ? (max768 ? 0.6 : 0.8) : 0.85) : 1,
              right: 0,
            }}
            initial={{ x: "100%", rotate: 90 }}
            animate={{
              x: max1400
                ? max1280
                  ? max992
                    ? "35%"
                    : max768
                    ? "30%"
                    : "32%"
                  : "31%"
                : "20%",
              y: max1280 ? (max992 ? "5%" : "0%") : 0,
              rotate: max992 ? 0 : -20,
            }}
            transition={{
              delay: firstLoad ? 3 : 0,
              duration: firstLoad ? 1 : 0.5,
            }}
          />
          <motion.img
            className="background"
            src={image2}
            alt="parallax front"
          />
        </motion.div>
      </div>
      <motion.svg
        width="100%"
        height="4"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <motion.line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          // stroke="#fff" // Change color as needed
          strokeWidth="4" // Line thickness
          initial={{
            pathLength: 0,
            pathOffset: 0.5,
            stroke: "rgb(3, 112, 194)",
          }}
          whileInView={{
            pathLength: 1,
            pathOffset: 0,
            stroke: "rgb(255, 255, 255)",
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
      </motion.svg>
      <motion.div
        style={{
          display: "block",
          position: "absolute",
          left: "50%",
          // x: "50vw",
          // y: "-50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center",
        }}
      >
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="16"
            fill="white"
            initial={{
              // pathOffset: 1,

              fill: "rgb(3, 112, 194)",
              scale: max1280 ? 2 : 3,
            }}
            whileInView={{ scale: 1, fill: "rgb(255, 255, 255)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          />
        </motion.svg>
        <motion.i
          className="fa-solid fa-chevron-down"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgb(3, 112, 194)",
            fontSize: 30,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        ></motion.i>
      </motion.div>
    </>
  );
};

export default Paralax;
