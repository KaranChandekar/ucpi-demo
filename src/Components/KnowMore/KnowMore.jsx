import React from "react";
import contactImg from "../images/contact.png";
import "./KnowMore.css";

export const KnowMore = () => {
  return (
    <section className="know-more-section" id="know-more">
      <img className="bg-img" src={contactImg} alt="background img" />
      <div className="text-container">
        <p className="sub-heading">UPI for crypto Payments.</p>
        <h1>Want to know more about UCPI?</h1>
        <p className="about-para">Talk directly with us on linkedin.</p>
        <div className="btn-container">
          <button className="btn btn-1">TALK TO DIGENDRA</button>
          <button className="btn btn-2">TALK TO PRANJAL</button>
        </div>
      </div>
    </section>
  );
};
