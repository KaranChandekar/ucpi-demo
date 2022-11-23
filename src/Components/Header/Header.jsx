import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import ucpiLogo from '../images/UCPI.jpg'

export const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={ucpiLogo} alt="" />
      </div>

      <div
        id="menu-bar"
        className="fas fa-bars"
        onClick={showAndHideHandler}
      ></div>

      <nav className={show ? "nav active" : "nav"} id="nav">
        <Link
          className="list-item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="list-item"
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Features
        </Link>
        <Link
          className="list-item"
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About Us
        </Link>
        <Link
          className="list-item"
          activeClass="active"
          to="benefits"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Benefits
        </Link>
        <Link
          className="list-item"
          activeClass="active"
          to="products"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Products
        </Link>
        <Link
          className="list-item"
          activeClass="active"
          to="know-more"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>

        <button className="nav-btn">Get in touch</button>
      </nav>
    </header>
  );
};
