import { section } from "motion/react-client";
import { motion } from "framer-motion";
4;
import bike from "../../assets/stickers/motorbike.png";
const Last = () => {
  return (
    <section className="last">
      <div className="last_container">
        <motion.div
          className="bikeElements"
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className=" big-btn"
            // initial={{ opacity: 0, rotate: 0, scale: 0 }}
            // whileInView={{ opacity: 1, rotate: 360, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Download my CV
          </motion.a>
          <motion.img
            className="moto_bike"
            src={bike}
            alt="motobikeDriver"
            style={{ scale: 0.3, y: -280, x: 95 }}
            // initial={{ y: -100 }}
            whileInView={{ x: 1000 }}
            transition={{ delay: 3.5, duration: 3 }}
            // initial={}
            layout
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Last;
