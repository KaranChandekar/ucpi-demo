import React from "react";
import "./Team.css";
import digendra from "../images/Team/digendra.jpg";
import adithya from "../images/Team/adithya.jpg";

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="black">
        <div className="text-container">
          <h1>The Team</h1>
          <p>
            We are team of UCPI, storytellers and developers on a mission to
            onboard 1 Billion users on Web3.
          </p>
        </div>
        <div className="member-container">
          <div className="member">
            <div className="img-wrapper">
              <img src={digendra} alt="" />
            </div>
            <h1>Digendra Singh Rathore</h1>
            <p>Co-Founder, CEO</p>
            <div className="links">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="member">
            <div className="img-wrapper">
              <img src={adithya} alt="" />
            </div>
            <h1>Adithya Singh Rathore</h1>
            <p>Co-Founder, CPO</p>
            <div className="links">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="member">
            <div className="img-wrapper"></div>
            <h1>Pranjal Maurya</h1>
            <p>Co-Founder, CTO</p>
            <div className="links">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
