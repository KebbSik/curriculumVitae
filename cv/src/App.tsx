import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import Paralax from "./Components/Paralax/Paralax";
import Footer from "./Components/Footer/Footer";
import Last from "./Components/Last/Last";
import Skills from "./Components/Skills/Skills";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import About from "./Components/About/About";
import Translator from "./Components/ColorTranslator/Translator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Paralax />
      <Translator />
      <Hero />
      <About />
      <Skills />
      <Slider />

      {/* Last and Footer must stick together */}
      <Last />
      <Footer />
    </>
  );
}

export default App;
