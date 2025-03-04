import { useRef } from "react";
// import cave1 from "../../assets/cave1.png";
// import cave2 from "../../assets/cave2.jpg";
import caveFront from "../../assets/cave_back_2.jpeg";
import caveBack from "../../assets/cave_front_2.png";
import "./Cave.css";
const Cave = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    console.log("prev");
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    console.log("next");
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="whole_cave">
      <div className="absolute_gradient"></div>
      <div className="absolute_gradient reversed"></div>
      <img className="cave_img img_back" src={caveFront} alt="" />
      <img className="cave_img img_front" src={caveBack} alt="" />

      <section className="cave_section">
        <div className="cave_wrapper ">
          <div ref={containerRef} className="cave_container snap_scroller">
            <button className="cave_btn left" onClick={() => scrollPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="group">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="group">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="group">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="group">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <button className="cave_btn right" onClick={() => scrollNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cave;
