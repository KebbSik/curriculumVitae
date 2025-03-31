import "swiper/swiper-bundle.css";

import { motion } from "motion/react";
import { useRef } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillList = [
    { skillName: "HTML", percent: 77, color: "aqua" },
    { skillName: "CSS", percent: 68, color: "yellow" },
    { skillName: "JavaScript", percent: 83, color: "chartreuse" },
    { skillName: "Git", percent: 57, color: "crimson" },
    { skillName: "React", percent: 42, color: "dodgerBlue" },
    { skillName: "Java", percent: 60, color: "lime" },
    { skillName: "TypeScript", percent: 33, color: "orange" },
    { skillName: "Node", percent: 45, color: "pink" },
  ];

  const dragField = useRef(null);

  return (
    <section className="skills" ref={dragField}>
      <div className="wrapper">
        <h1>This is couple of my skills. Feel free to check them :)</h1>
        <div className="dragField">
          {skillList.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1, cursor: "grab", zIndex: 20 }}
              whileTap={{
                cursor: "grabbing",
                scale: 1.05,
                rotate: -3,
                filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.5))",
              }}
              animate={{
                filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0))",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag
              dragMomentum={false}
              dragConstraints={dragField}
              dragElastic={0.1}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <SkillCard
                  skillName={skill.skillName}
                  percent={skill.percent}
                  color={skill.color}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
