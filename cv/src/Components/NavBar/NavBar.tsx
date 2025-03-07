import { useState } from "react";

import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

// max height of navbar - 85px

const NavBar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      <nav
        className={
          openedMenu ? "navbarToggle displayToggleNav" : "navbarToggle"
        }
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </motion.header>
  );
};

export default NavBar;
