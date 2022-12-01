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
          <a href="https://twitter.com/ucpitech" target="_blank">
            <i className="fa-brands fa-twitter btn"></i>
          </a>
          <a href="https://www.linkedin.com/company/ucpi01/" target="_blank">
            <i className="fa-brands fa-linkedin btn"></i>
          </a>
          <a href="" target="_blank">
            <i className="fa-brands fa-discord btn"></i>
          </a>
          <a href="https://github.com/ucpi" target="_balnk">
            <i className="fa-brands fa-github btn"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
