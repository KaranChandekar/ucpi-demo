import React from "react";
import "./Home.css";
import Lottie from "react-lottie";
import cryptoCurrency from "../../Lotties/cryptocurrency-lottie-animation.json";

export const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cryptoCurrency,
  };
  return (
    <section className="home-section" id="home">
      <div className="text-container">
        <h1 className="heading">
          Universal <span>Crypto</span> Protocol Interface
        </h1>
        <p className="paragraph">
          Decentralised infra for Web3 UX and Payments
        </p>
        <div className="btn-container">
          <button className="btn btn-1">Get Started</button>
          <button className="btn btn-2">Learn More</button>
        </div>
      </div>
      <div className="bg-img">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
};
