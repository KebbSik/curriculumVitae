import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import Paralax from "./Components/Paralax/Paralax";
import Footer from "./Components/Footer/Footer";
import Last from "./Components/Last/Last";
import Square from "./Components/Square/Square";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Paralax />
      <Hero />
      <Slider />
      <Square />
      <Last />
      <Footer />
    </>
  );
}

export default App;
