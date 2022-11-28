import React from "react";
import { Home } from "./Components/Home/Home";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Benefits } from "./Components/Benefits/Benefits";
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team";
import { KnowMore } from "./Components/KnowMore/KnowMore";
import BookADemo from "./Components/BookADemo/BookADemo";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Products />
      <Team />
      <Benefits />
      <KnowMore />
      <BookADemo />
      <Footer />
    </>
  );
}

export default App;
