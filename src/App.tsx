import "./App.css";
import Home from "./components/Home/Home";
import AppBarLayout from "./components/AppBar/AppBar";
import About from "./components/About/About";
import { FloatButton } from "antd";
import TechnologiesPage from "./components/Technologies/Technologies";

function App() {
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
