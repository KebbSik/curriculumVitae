import "swiper/swiper-bundle.css";

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
    { skillName: "HTML", level: "junior", icon: FaHtml5 },
    { skillName: "CSS", level: "junior", icon: FaCss3 },
    {
      skillName: "JavaScript",
      level: "junior",

      icon: FaJs,
    },
    { skillName: "Git", level: "junior", icon: FaGitAlt },
    { skillName: "React", level: "junior", icon: FaReact },
    // { skillName: "Java", level: "junior", icon: FaJava },
    {
      skillName: "TypeScript",
      level: "junior",

      icon: SiTypescript,
    },
    { skillName: "Node", level: "begginer", icon: FaNode },
  ];

  return (
    <section className="skills">
      <div className="wrapper">
        <h1>This is couple of my skills. Feel free to check them :)</h1>
        {skillList.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            level={skill.level}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
