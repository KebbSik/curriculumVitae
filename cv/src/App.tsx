import { motion, useScroll, useTransform } from "motion/react";
import waterDrops from "../src/assets/water_drops.png";
import "../src/Components/Cave/Cave.css";
import "./App.css";
import About from "./Components/About/About";
import Cave from "./Components/Cave/Cave";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Last from "./Components/Last/Last";
import NavBar from "./Components/NavBar/NavBar";
import Paralax from "./Components/Paralax/Paralax";
import Skills from "./Components/Skills/Skills";

function App() {
  // const [count, setCount] = useState(0);

  const { scrollYProgress } = useScroll();
  const backGroundY = useTransform(scrollYProgress, [0, 1], ["10%", "30%"]);
  return (
    <>
      <motion.div
        className="drops_wrapper"
        style={{
          position: "absolute",
          height: "75%",
          width: "100%",
          y: backGroundY,
          backgroundImage: `url(${waterDrops})`,
          backgroundSize: "cover",
          opacity: 0.2,
          zIndex: -1,
          // overflow: "hidden",
        }}
      ></motion.div>
      <NavBar />
      <div id="home">
        <Paralax />
      </div>
      <div id="about">
        <div style={{ height: "1px" }} />{" "}
        {/* SmoothScroll 'catcher', this approach need some upgrade*/}
        <Hero />
      </div>
      <About />
      <div id="skills">
        <div style={{ height: "1px" }} />{" "}
        {/* SmoothScroll 'catcher', this approach need some upgrade*/}
        <Skills />
      </div>
      <div id="projects">
        <Cave />
      </div>
      <Last />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
