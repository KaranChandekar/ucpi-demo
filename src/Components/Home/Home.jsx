import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { Header } from "../Header/Header";

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <Header />
      <div className="text-container">
        <h1 className="heading">
          Making web3 easy for
          <span>
            <TypeAnimation
              sequence={[
                "Onboarding",
                5000,
                "Identity",
                5000,
                "Authenticity",
                5000,
                "Payments",
                5000,
              ]}
              cursor={true}
              repeat={Infinity}
              className="animation"
            />
          </span>
        </h1>
        <p className="paragraph">Web3 infra with mobile first UX.</p>
        <div className="btn-container">
          <button className="btn btn-1">Get Started</button>
          <button className="btn btn-2">Learn More</button>
        </div>
      </div>
    </section>
  );
};
