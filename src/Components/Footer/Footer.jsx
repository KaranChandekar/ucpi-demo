import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <p className="logo-heading">UCPI</p>
          <div className="subscribe-container">
            <h1>Join The Waitlist</h1>
            <p>We will keep you updated.</p>
            <div className="form">
              <input type="text" placeholder="Enter your email" />
              <a href="#">Subscribe</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="links">
            <p>Join Us</p>
            <a href="">Twitter</a>
            <a href="">Discord</a>
          </div>
          <p>Copyright 2022 @ucpi.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
