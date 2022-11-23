import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import cryptoCurrency from "../../Lotties/cryptocurrency-lottie-animation.json";

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="text-container">
        <h1 className="heading">
          Making web3 easy for <span>Onboarding</span>
        </h1>
        <p className="paragraph">
          Web3 infra with mobile first UX.
        </p>
        <div className="btn-container">
          <button className="btn btn-1">Get Started</button>
          <button className="btn btn-2">Learn More</button>
        </div>
      </div>
    </section>
  );
};
