import "swiper/swiper-bundle.css";

import { motion } from "motion/react";
import { useRef } from "react";
import SkillCard from "./SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Skills = () => {
  const skillList = [
    { skillName: "HTML", percent: 77, color: "aqua", icon: FaHtml5 },
    { skillName: "CSS", percent: 68, color: "yellow", icon: FaCss3 },
    {
      skillName: "JavaScript",
      percent: 83,
      color: "chartreuse",
      icon: FaJs,
    },
    { skillName: "Git", percent: 57, color: "crimson", icon: FaGitAlt },
    { skillName: "React", percent: 42, color: "dodgerBlue", icon: FaReact },
    { skillName: "Java", percent: 60, color: "lime", icon: FaJava },
    {
      skillName: "TypeScript",
      percent: 33,
      color: "orange",
      icon: SiTypescript,
    },
    { skillName: "Node", percent: 45, color: "pink", icon: FaNode },
  ];

  return (
    <section className="skills">
      <div className="wrapper">
        <h1>This is couple of my skills. Feel free to check them :)</h1>
        {skillList.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            percent={skill.percent}
            color={skill.color}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
