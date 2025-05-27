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
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.01 }}
        className="box"
        key={name}
        onClick={() => window.open(href, "_blank")}
      >
        <div style={{ height: "100%", width: "100%" }}>
          {/* <div> */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
              opacity: 0.4,
            }}
          />
          <div className="project-content-container">
            <p className="project-tittle">{name}</p>
            <div className="project-description">{description}</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Box;
