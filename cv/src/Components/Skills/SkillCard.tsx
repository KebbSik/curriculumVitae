import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IconType } from "react-icons";
import { useMediaQuery } from "react-responsive";

interface Props {
  percent: number;
  skillName: string;
  color: string;
  icon: IconType;
}

// percent bar values
const percentSize = 400;
const barWidth = 20;

// transitions
const outterTransiton = 1;
const outterDelay = 0.5;

const SkillCard = ({ percent, skillName, color, icon: Icon }: Props) => {
  const max768 = useMediaQuery({ query: "(max-width: 768px)" });
  // const max480 = useMediaQuery({ query: "(max-width: 480px)" });

  const [percentVal, setPercentVal] = useState(0);

  // const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: " -150px 0px 0px 0px",
    once: true,
  });

  useEffect(() => {
    if (color) {
      console.log(color);
    }
    if (isInView) {
      let start: number | null = null;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const current = Math.min((progress / 20) * (percent / 100), percent);
        setPercentVal(current);
        if (current < percent) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [percent, isInView]);

  return (
    <div ref={ref} className="skillCard_container" style={{ width: "100%" }}>
      <div className="card">
        <motion.div
          initial={{ opacity: 0, x: -50, color: "#fff" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-150px 0px", once: true }}
          // whileHover={{ color: color, scale: 1.02 }}
          transition={{ duration: outterTransiton, delay: outterDelay }}
          className="skill_icon"
        >
          <Icon />
        </motion.div>
        <div className="percent">
          <svg
            width={max768 ? percentSize / 2 : percentSize}
            height={barWidth}
          ></svg>
          <div className="svg_lines_wrapper">
            <svg width={percentSize} height={barWidth * 2}>
              <rect
                x="5"
                y="1"
                height={max768 ? barWidth / 2 : barWidth}
                // width={}
                width={max768 ? (percentSize * 0.95) / 2 : percentSize * 0.95}
                fill="#fff"
                stroke="rgb(29, 128, 255)"
                strokeWidth={2}
                rx={max768 ? barWidth / 2 / 2 : barWidth / 2}
              />
            </svg>
            <motion.svg width={percentSize} height={barWidth * 2}>
              <motion.rect
                x="5"
                y="1"
                height={max768 ? barWidth / 2 : barWidth}
                width="0"
                fill="rgb(29, 128, 255)"
                strokeWidth={2}
                rx={max768 ? barWidth / 2 / 2 : barWidth / 2}
                whileInView={{
                  width: max768
                    ? (percentSize * percent) / 100 / 2
                    : (percentSize * percent) / 100,
                }} // Directly animate width
                transition={{
                  duration: 2.5,
                  ease: "easeOut",
                }}
              />
            </motion.svg>
          </div>

          <div className="percent_digit">
            {Math.round(percentVal)}
            <sup>%</sup>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50, color: "#fff" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-150px 0px", once: true }}
          transition={{ duration: outterTransiton, delay: outterDelay }}
          className="skill_name"
        >
          {skillName}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
