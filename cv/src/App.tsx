import { useState } from "react";
import "./App.css";
import "../src/Components/Cave/Cave.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Paralax from "./Components/Paralax/Paralax";
import Footer from "./Components/Footer/Footer";
import Last from "./Components/Last/Last";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Translator from "./Components/ColorTranslator/Translator";
import Cave from "./Components/Cave/Cave";
import Motion from "./Components/Motion/Motion";
import Gradient from "./Components/Cave/Gradient";
import { motion, useScroll, useTransform } from "motion/react";
import waterDrops from "../src/assets/water_drops.png";

function App() {
  const [count, setCount] = useState(0);

  const { scrollYProgress } = useScroll();
  const backGroundY = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  return (
    <>
      <motion.div
        className="drops_wrapper"
        style={{
          position: "absolute",
          height: "53%",
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
      <Paralax />
      <Hero />
      <About />
      <Skills />
      <Cave />
      <Last />
      <Footer />
    </>
  );
}

export default App;
