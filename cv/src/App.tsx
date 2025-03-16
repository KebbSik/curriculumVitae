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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <Paralax /> */}

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
