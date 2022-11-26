import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { Header } from "../Header/Header";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <Header />
      <div className="text-container">
        <h1 className="heading">
          Making web3 easy for
          <span>
            <TypeAnimation
              sequence={[
                "Onboarding",
                3000,
                "Identity",
                3000,
                "Auth",
                3000,
                "Payments",
                3000,
              ]}
              cursor={true}
              repeat={Infinity}
              className="animation"
            />
          </span>
        </h1>
        <p className="paragraph">Web3 infra with mobile first UX.</p>
        <div className="btn-container">
          <button className="btn btn-1">Get Started</button>
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-2">About Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
