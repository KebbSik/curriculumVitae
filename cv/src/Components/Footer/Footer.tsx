import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
  const whileHoverProp = {
    boxShadow: "0 0 25px 2px #fff",
    // scale: 1.1,
    transition: { duration: 0, ease: "anticipate" },
  };
  const whileTapProp = {
    boxShadow: "0 0 10px 5px #fff",
    scale: 0.9,
  };
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.footer>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: true }}
          className="footer_wrapper"
        >
          <motion.div className="footer_left">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
            </div>
          </motion.div>
          <motion.div className="footer_right">
            <span>Explore me</span>
            <ul className="footer_list">
              {/* <motion.a whileTap={whileTapProp} whileHover={whileHoverProp}>
                <i className="fa-brands fa-facebook"></i>
              </motion.a> */}
              {/* <motion.a whileTap={whileTapProp} whileHover={whileHoverProp}>
                <i className="fa-brands fa-instagram"></i>
              </motion.a> */}
              <motion.a
                href="https://github.com/KebbSik/"
                target="_blank"
                whileTap={whileTapProp}
                whileHover={whileHoverProp}
                transition={{ duration: 0.05 }}
              >
                <i className="fa-brands fa-github"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kevin-sarfo-197611255/"
                target="_blank"
                whileTap={whileTapProp}
                whileHover={whileHoverProp}
                transition={{ duration: 0.05 }}
              >
                <i className="fa-brands fa-linkedin"></i>
              </motion.a>
            </ul>
          </motion.div>
        </motion.div>
        <div
          className="overScroll"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            height: "50vh",
            width: "100%",
            zIndex: -3,
          }}
        />
      </motion.footer>
    </div>
  );
};

export default Footer;
