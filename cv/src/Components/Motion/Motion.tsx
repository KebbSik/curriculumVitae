import React from "react";
import "./Motion.css";
import { motion } from "motion/react";

const Motion = () => {
  return (
    <>
      <div className="moitonWrapper">
        <div className="filler"></div>
        <motion.div
          className="motion_div"
          initial={{ backgroundColor: "rgb(0,255,0)", opacity: 0 }}
          whileInView={{ backgroundColor: "rgb(255,0,0)", opacity: 1 }}
          //   animate={{
          //     scale: 1.5,
          //     transition: {
          //       duration: 3,
          //     },
          //   }}
        >
          This is my first miton div
        </motion.div>
      </div>
    </>
  );
};

export default Motion;
