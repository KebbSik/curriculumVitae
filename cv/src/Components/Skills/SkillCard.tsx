import { easeOut } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { IconType } from "react-icons";

interface Props {
  percent: number;
  skillName: string;
  color: string;
  // img?: string;
  icon: IconType;
}

const percentSize = 400;
const barWidth = 20;
const SkillCard = ({ percent, skillName, color, icon: Icon }: Props) => {
  return (
    <div
      className="skillCard_container"
      style={{
        width: "100%",
      }}
    >
      <div className="card">
        <motion.div
          whileHover={{ color: color, scale: 1.03 }}
          transition={{ duration: 2 }}
          className="skill_icon"
        >
          <Icon />
        </motion.div>
        <div className="percent">
          <svg width={percentSize} height={barWidth}></svg>
          <div className="svg_lines_wrapper">
            <svg width={percentSize} height={barWidth * 2}>
              <rect
                x="5"
                y="0"
                height={barWidth}
                width={percentSize * 0.95}
                fill="#fff"
                stroke="rgb(29, 128, 255)"
                strokeWidth={2}
                rx={barWidth / 2}
              />
            </svg>

            <motion.svg width={percentSize} height={barWidth * 2}>
              <motion.rect
                x="5"
                y="0"
                height={barWidth}
                width="0"
                fill="rgb(29, 128, 255)"
                strokeWidth={2}
                rx={barWidth / 2}
                animate={{
                  width: (percent * percentSize) / 100,
                }}
                transition={{
                  duration: (2.5 * percent) / 100,
                  delay: 0.5,
                  ease: easeOut,
                }}
              />
            </motion.svg>
          </div>
          <div className="percent_digit">
            {percent}
            <sup>%</sup>
          </div>
        </div>
        <div className="skill_name">{skillName}</div>
      </div>
    </div>
  );
};

export default SkillCard;
