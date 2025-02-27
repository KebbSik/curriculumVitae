import React, { useEffect, useRef } from "react";
import "./Paralax.css";
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2c.png";

const speeds = [0, -0.2, 0.5];

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

        const titleElement = elementsRef.current[2];
        if (titleElement) {
          titleElement.style.opacity = `${1 - value * 0.0025}`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="paralax_container">
      <div className="paralax_content">
        <img
          ref={(el) => el && (elementsRef.current[0] = el)}
          src={image1}
          alt="paralax"
        />
        <div
          ref={(el) => el && (elementsRef.current[2] = el)}
          className="paralax_title"
        >
          <h1>Hello World !</h1>
        </div>
        <img
          ref={(el) => el && (elementsRef.current[1] = el)}
          src={image2}
          alt="paralax front"
        />
      </div>
    </div>
  );
};

export default Paralax;
