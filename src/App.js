import React from "react";
import { Home } from "./Components/Home/Home";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Benefits } from "./Components/Benefits/Benefits";
import Products from "./Components/Products/Products";
import { KnowMore } from "./Components/KnowMore/KnowMore";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Products />
      <Benefits />
      <KnowMore />
      <Footer />
    </>
  );
}

export default App;
