import { useRef } from "react";
import cave1 from "../../assets/cave1.png";
import cave2 from "../../assets/cave2.jpg";

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
    <>
      {/* <img className="cave_img" src={cave2} alt="" /> */}

      <section className="cave_section">
        <button onClick={() => scrollPrev()}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="cave_wrapper ">
          <div ref={containerRef} className="cave_container snap_scroller">
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
          </div>
        </div>
        <button onClick={() => scrollNext()}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>
      {/* <img className="cave_img" src={cave1} alt="" /> */}
    </>
  );
};

export default Cave;
