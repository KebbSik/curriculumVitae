import { useState } from "react";

import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const whileTapProp = { scale: 0.95, rotate: -2, transition: { duration: 0 } };
  const whileHoverProp = { scale: 1.15, transition: { duration: 0 } };

  const scroller = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenedMenu(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -85 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="header"
    >
      <a onClick={() => scroller("home")} className="logo">
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
        {/* <motion.a
          onClick={() => scroller("home")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Home
        </motion.a> */}
        <motion.a
          onClick={() => scroller("about")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          About
        </motion.a>
        <motion.a
          onClick={() => scroller("skills")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Skills
        </motion.a>
        <motion.a
          onClick={() => scroller("projects")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
          className="nav_project_btn"
        >
          Projects Cave
        </motion.a>

        <motion.a
          onClick={() => scroller("contact")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Contact
        </motion.a>
      </nav>

      <nav
        className={
          openedMenu ? "navbarToggle displayToggleNav" : "navbarToggle"
        }
      >
        {/* <motion.a
          onClick={() => scroller("home")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Home
        </motion.a> */}
        <motion.a
          onClick={() => scroller("about")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          About
        </motion.a>
        <motion.a
          onClick={() => scroller("skills")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Skills
        </motion.a>
        <motion.a
          onClick={() => scroller("projects")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          <div className="nav_project_btn_wrapper">
            <div className="nav_project_btn">Projects Cave</div>
          </div>
        </motion.a>

        <motion.a
          onClick={() => scroller("contact")}
          whileTap={whileTapProp}
          whileHover={whileHoverProp}
        >
          Contact
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default NavBar;
