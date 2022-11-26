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
        <p className="about-para">Connect with us.</p>
        <div className="btn-container">
          <i className="fa-brands fa-twitter btn"></i>
          <i className="fa-brands fa-linkedin btn"></i>
          <i className="fa-brands fa-discord btn"></i>
          <i className="fa-brands fa-github btn"></i>
        </div>
      </div>
    </section>
  );
};
