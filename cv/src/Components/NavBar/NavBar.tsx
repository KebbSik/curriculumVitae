import { useState } from "react";

import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const whileTapProp = { scale: 0.95, rotate: -2, transition: { duration: 0 } };
  const whileHoverProp = { scale: 1.2, transition: { duration: 0 } };

  return (
    <motion.header
      initial={{ y: -85 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="header"
    >
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <label htmlFor="" className="icons ">
        <div className={openedMenu ? "noDisplay" : ""}>
          <i
            onClick={() => setOpenedMenu(!openedMenu)}
            className="fa-solid fa-bars "
          ></i>
        </div>
        <div className={openedMenu ? "" : "noDisplay"}>
          <i
            onClick={() => setOpenedMenu(!openedMenu)}
            className="fa-solid fa-x "
          ></i>
        </div>
      </label>

      <nav className="navbar">
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Home
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          About
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Gallery
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Services
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Contact
        </motion.a>
      </nav>

      <nav
        className={
          openedMenu ? "navbarToggle displayToggleNav" : "navbarToggle"
        }
      >
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Home
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          About
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Gallery
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Services
        </motion.a>
        <motion.a whileTap={whileTapProp} whileHover={whileHoverProp} href="#">
          Contact
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default NavBar;
