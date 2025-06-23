import { motion } from "motion/react";
import "./Cave.css";

interface Props {
  name: string;
  backgroundImage: string;
  href: string;
  description: string;
}
const Box = ({ name, backgroundImage, href, description }: Props) => {
  return (
    <>
      <motion.div
        // whileTap={{ scale: 0.95 }}
        // transition={{ duration: 0.01 }}
        className="box"
        key={name}
        onClick={() => window.open(href, "_blank")}
        style={{ pointerEvents: name === "soon" ? "none" : "auto" }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          {/* <div> */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: name === "soon" ? "contain" : "cover",
              borderRadius: "15px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              opacity: name === "soon" ? 0.4 : 1,
              filter:
                name !== "soon"
                  ? "sepia(1) saturate(5) hue-rotate(90deg);"
                  : "",
            }}
          />
          <div
            style={{ zIndex: 1, position: "relative" }}
            className="project-content-container"
          >
            <p
              style={{ display: name === "soon" ? "none" : "" }}
              className="project-tittle"
            >
              {name}
            </p>
            <div
              style={{ display: name === "soon" ? "none" : "" }}
              className="project-description"
            >
              {description}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Box;
