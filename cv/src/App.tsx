import { useState } from "react";
import "./App.css";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Motion /> */}
      <NavBar />
      <Paralax />
      <Translator />
      <Hero />
      <About />
      <Skills />
      <Cave />

      {/* Last and Footer must stick together */}
      <Last />
      <Footer />
    </>
  );
}

export default App;
