import { section } from "motion/react-client";
import { delay, motion } from "framer-motion";

import bike from "../../assets/stickers/motorbike.png";
import thumbs from "../../assets/stickers/thumbs.png";
import hole from "../../assets/stickers/hole.png";

const Last = () => {
  return (
    <section className="last">
      <div className="last_container">
        <motion.div
          className="bikeElements"
          initial={{ x: -1500 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 2000px 0px 2000px" }}
        >
          <motion.a href="#" className=" big-btn">
            Download my CV
          </motion.a>
          <motion.img
            className="moto_bike"
            src={bike}
            alt="motobikeDriver"
            style={{ scale: 0.3, y: -280, x: 280 }}
            whileInView={{ x: 1500 }}
            transition={{ delay: 3.5, duration: 3 }}
            viewport={{ once: true }}
          />
          <motion.img
            style={{ scale: 0.15, x: -130, y: -345, zIndex: 1 }}
            className="thumbs"
            src={thumbs}
            alt="#"
            whileInView={{ y: -455 }}
            transition={{ duration: 0.3, delay: 5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Last;
