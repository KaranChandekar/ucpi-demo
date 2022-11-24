import React from "react";
import "./Footer.css";
import ucpiLogo from '../images/UCPI.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <img className="logo-img" src={ucpiLogo} alt="" />
        </div>
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
          <p>Join Us :</p>
          <a href="">Twitter</a>
          <a href="">Discord</a>
        </div>
        <p>© 2022 @ucpi. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
