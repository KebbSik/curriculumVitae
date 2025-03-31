import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
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
  const backGroundY = useTransform(scrollYProgress, [0, 1], ["10%", "62%"]);
  return (
    <>
      <motion.div
        className="drops_wrapper"
        style={{
          position: "absolute",
          height: "60%",
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
