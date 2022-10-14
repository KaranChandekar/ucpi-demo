import React from "react";
import bg1 from "../images/bg1.jpg";
import "./Section1.css";

export const Section1 = () => {
  return (
    <div className="section-1">
      <div className="text-container">
        <h1 className="heading">
          Universal <span>Crypto</span> Protocol Interface
        </h1>
        <p className="paragraph">
          Decentralised infra for Web3 UX and Payments
        </p>
        <div className="buttons-container">
          <button className="btn btn-1">Get Started</button>
          <button className="btn btn-2">Learn More</button>
        </div>
      </div>
      <img className="bg-img" src={bg1} alt="background img" />
    </div>
  );
};
