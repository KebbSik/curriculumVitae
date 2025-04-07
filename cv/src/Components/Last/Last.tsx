import { motion } from "framer-motion";

import bike from "../../assets/stickers/motorbike.png";
import thumbs from "../../assets/stickers/thumbs.png";

const Last = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = thumbs;
    link.download = "thumbs.png";
    link.click();
  };
  return (
    <section className="last">
      <div className="last_container">
        <motion.div
          className="bikeElements"
          // initial={{ x: -1500 }}
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 2000px 0px 2000px" }}
        >
          <motion.a
            // href=""
            className=" big-btn"
            whileHover={{ boxShadow: "0 0 50px #fff", scale: 1.05 }}
            whileTap={{ boxShadow: "0 0 25px #fff", rotate: 3, scale: 0.95 }}
            transition={{ duration: 0 }}
            onClick={downloadCV}
          >
            Download my CV
          </motion.a>
          <motion.img
            className="moto_bike"
            src={bike}
            alt="motobikeDriver"
            style={{ scale: 0.3, y: -260, x: 270 }}
            whileInView={{ x: 1500 }}
            // whileInView={{ x: [270, 280, 1500], zIndex: 10 }}
            transition={{ delay: 3.5, duration: 2, ease: "backIn" }}
            viewport={{ once: true, margin: "0px 2000px" }}
          />
          <motion.img
            style={{ scale: 0.15, x: -90, y: -345, zIndex: 1 }}
            className="thumbs"
            src={thumbs}
            alt="#"
            whileInView={{ y: -455 }}
            transition={{ duration: 0.4, delay: 5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Last;
