import React from "react";
import bg2 from "../images/bg2.jpg";
import "./Section5.css";

export const Section5 = () => {
  return (
    <div className="section-5">
      <img className="bg-img" src={bg2} alt="background img" />
      <div className="text-container">
        <h2>UPI for crypto Payments.</h2>
        <h1>Want to know more about UCPI?</h1>
        <p>
          <span>Talk directly with us on linkedin.</span>
        </p>
        <div className="btn-container">
          <button className="btn btn-1">TALK TO DIGENDRA</button>
          <button className="btn btn-2">TALK TO PRANJAL</button>
        </div>
      </div>
    </div>
  );
};
