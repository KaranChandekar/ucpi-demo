import React from "react";
import bg2 from "../images/bg4.svg";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us">
      <img className="bg-img" src={bg2} alt="background img" />
      <div className="text-container">
        <h1>Who we are?</h1>
        <p>
          UCPI is a <span>UX focused infra solution</span> for Web3 Onboarding, Identitiy, Auth and Payments. We help onboarding folks on Web3 with our simple UX.
        </p>
        <p>
          Our protocols provide simple SDKs with plug-n-play. Dapps can improve user journey and bridge identity gap from Web2 to Web3.
        </p>
        <button className="btn btn-1">Get Started</button>
      </div>
    </section>
  );
};
