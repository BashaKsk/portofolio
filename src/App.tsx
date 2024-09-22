import "./App.css";
import Home from "./components/Home/Home";
import AppBarLayout from "./components/AppBar/AppBar";
import About from "./components/About/About";
import { FloatButton } from "antd";
import TechnologiesPage from "./components/Technologies/Technologies";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing pattern
      //   once: false, // Whether animation should happen only once
      //   mirror: false, // Whether to reflect the animation in case of page flipping
    });
  }, []);

  return (
    <>
      <AppBarLayout>
        <Home />
        <About />
        <TechnologiesPage />
        <FloatButton.BackTop />
      </AppBarLayout>
    </>
  );
}

export default App;
