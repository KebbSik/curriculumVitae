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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            y: titleY,
            opacity: titleOpacity,
            scale: titleScale,
          }}
        >
          <motion.img
            src={skydive}
            className="sky_dive"
            style={{ scale: skyDiveStyle.scale, y: skyDiveStyle.y, rotate: 20 }}
            animate={{ y: 400, opacity: [1, 1, 1, 0], rotate: -360 }}
            transition={{ delay: 2, duration: 1 }}
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
            delay: firstLoad ? 2.5 : 0,
            duration: firstLoad ? 1 : 0.5,
          }}
        />
        <motion.img className="background" src={image2} alt="parallax front" />
      </motion.div>
    </div>
  );
};

export default Paralax;
