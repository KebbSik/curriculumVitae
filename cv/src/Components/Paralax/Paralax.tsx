import React, { useEffect, useRef } from "react";
import "./Paralax.css";

const speeds = [0.45, 0.65, 0.8];

const Paralax = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      requestAnimationFrame(() => {
        elementsRef.current.forEach((el, index) => {
          if (el) {
            el.style.transform = `translateY(${value * speeds[index]}px)`;
          }
        });
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="paralax_container">
      <div className="paralax_content">
        <div ref={(el) => el && (elementsRef.current[0] = el)}>
          This section is &ensp;
        </div>
        <div ref={(el) => el && (elementsRef.current[1] = el)}>
          {" "}
          going to be &ensp;
        </div>
        <div ref={(el) => el && (elementsRef.current[2] = el)}>
          my paralax set of images
        </div>
      </div>
    </div>
  );
};

export default Paralax;
