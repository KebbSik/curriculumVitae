import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IconType } from "react-icons";
import { useMediaQuery } from "react-responsive";

interface Props {
  level: string;
  skillName: string;

  icon: IconType;
}

// transitions
const outterTransiton = 1;
const outterDelay = 0.5;

const SkillCard = ({ level, skillName, icon: Icon }: Props) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="skillCard_container" style={{ width: "100%" }}>
      <div className="card">
        <motion.div
          initial={{ opacity: 0, x: -50, color: "#fff" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-150px 0px", once: true }}
          transition={{ duration: outterTransiton, delay: outterDelay }}
          className="skill_icon"
        >
          <Icon />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50, color: "#fff" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-150px 0px", once: true }}
          transition={{ duration: outterTransiton, delay: outterDelay }}
          className="skill_name"
        >
          {skillName}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50, color: "#fff" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-150px 0px", once: true }}
          transition={{ duration: outterTransiton, delay: outterDelay }}
          className="level"
        >
          {level}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
