import profilePhoto from "../../assets/profilePhoto.jpg";
import portrait from "../../assets/stickers/portrait.png";
import icon1 from "../../assets/backendIcon.png";
import icon2 from "../../assets/stepIcon.png";
import sticker2 from "../../assets/stickers/sticker2.png";
import { delay, easeIn, easeOut, motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

const Hero = () => {
  const whileTapProp = {
    scale: 0.95,
    rotate: -2,
    transition: { delay: 0, duration: 0 },
  };
  const whileHoverProp = { scale: 1.2, transition: { delay: 0, duration: 0 } };

  return (
    // <main>
    <section>
      <div className="hero_wrapper">
        <div className="hero">
          <div className="left">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "backInOut" }}
              viewport={{ once: true }}
              className="info"
            >
              <p className="message">Welcome to My portfolio</p>
              <p className="title">
                Hello my <br /> name is <span>Kevin.</span>{" "}
              </p>
              <p className="description">
                I'm FullStack Developer from Poland. <br /> Creating responsive,
                interactive websites <br /> and applications{" "}
              </p>
            </motion.div>
            <div className="btns">
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                // transition={}
                viewport={{ once: true }}
                // href="#"
                className="download-btn"
                whileTap={whileTapProp}
                whileHover={whileHoverProp}
              >
                Download CV
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.5, ease: "easeInOut" },
                }}
                // transition={}
                viewport={{ once: true }}
                // href=""
                className="see-work-btn"
                whileTap={whileTapProp}
                whileHover={whileHoverProp}
              >
                See My work
                <i className="fa-solid fa-arrow-right-long"></i>
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{ duration: 1.5, ease: "backOut" }}
            viewport={{ once: true }}
            className="right"
          >
            <div className="responsiveStickerWrapper">
              <img className="responsiveSticker" src={sticker2} alt="image" />
            </div>

            <div className="borders">
              <div className="img-wrapper">
                <img src={portrait} alt="image" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    // </main>
  );
};

export default Hero;
