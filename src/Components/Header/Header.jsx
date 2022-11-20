import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

export const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <p className="logo-heading">UCPI</p>
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
            to="section-1"
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
            to="section-2"
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
            to="section-4"
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
            to="section-5"
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
            to="section-6"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Know More
          </Link>

          <button className="nav-btn">Get in touch</button>
        </nav>
      </header>
    </>
  );
};
