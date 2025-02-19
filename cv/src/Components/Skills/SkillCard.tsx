import { useRef, useEffect, useState } from "react";

interface Props {
  percent: number;
  skillName: string;
  color: string;
}

const SkillCard = ({ percent, skillName, color }: Props) => {
  const ratingRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [blocks, setBlocks] = useState<number[]>(Array.from({ length: 100 }));
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    blocks.forEach((_, i) => {
      if (blockRefs.current[i]) {
        blockRefs.current[i]!.style.transform = `rotate(${i * 3.6}deg)`;
      }
    });
    const nubmerCounter = () => {
      setCurrentPercent((prev) => {
        if (prev < percent) {
          setTimeout(nubmerCounter, 20);
          return prev + 1;
        }

        return prev;
      });
    };
    nubmerCounter();
  }, [percent]);

  return (
    <div className="skillCard_container">
      <div className="card">
        <div ref={ratingRef} className="rating">
          <h2>
            <span className="counter" data-target="90">
              {currentPercent}
            </span>
            <sup>%</sup>
            <br />
            {skillName}
          </h2>
          {blocks.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              // className="block"
              className={i > percent ? "block" : "block loadColor"}
              style={{
                background: i > percent ? `` : `${color}`,
                // boxShadow: `0 0 15px ${color}`,
                boxShadow: i > percent ? `` : `0 0 30px ${color}`,
                transform: `rotate(${i * 3.6}deg)`, // Rotates each block correctly
                animationDelay: `${i * 0.02}s`, // Adds a delay for staggered animation
              }}
            ></div>
          ))}

          {/* <div ref={blockRef} className="block"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

// animated skillCard
