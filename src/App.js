import React from "react";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Features } from "./Components/Features/Features";
import { SupportedBlockChains } from "./Components/SupportedBlockChains/SupportedBlockChains";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Benefits } from "./Components/Benefits/Benefits";
import Products from "./Components/Products/Products";
import { KnowMore } from "./Components/KnowMore/KnowMore";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <SupportedBlockChains />
      <AboutUs />
      <Benefits />
      <Products />
      <KnowMore />
      <Footer />
    </>
  );
}

export default App;
