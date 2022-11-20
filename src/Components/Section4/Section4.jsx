import React from "react";
import bg2 from "../images/bg4.svg";
import "./Section4.css";

export const Section4 = () => {
  return (
    <div className="section-4" id="section-4">
      <img className="bg-img" src={bg2} alt="background img" />
      <div className="text-container">
        <h2>About Us</h2>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          distinctio magni sequi perspiciatis, accusantium consequuntur nulla?
          Nulla, obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero
          quasi accusantium unde dolores? Dolore ipsa quia quasi eos maxime
        </p>
        <p>
          <span>Join and entrust your financial development to us.</span>
        </p>
        <button className="btn btn-1">Get Started</button>
      </div>
    </div>
  );
};
