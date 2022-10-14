import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo-heading">UCPI</p>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="list-item">Home</li>
          <li className="list-item"> About</li>
          <li className="list-item">Services</li>
          <li className="list-item">The team</li>
          <li className="list-item">Portfolio</li>
        </ul>
        <button className="nav-btn">Get in touch</button>
      </div>
    </div>
  );
};
