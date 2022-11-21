import React from "react";
import "./Features.css";
import upi1 from "../images/UPI/upi1.svg";
import upi2 from "../images/UPI/upi2.svg";
import upi3 from "../images/UPI/upi3.svg";
import upi4 from "../images/UPI/upi4.svg";

export const Features = () => {
  return (
    <>
      <section className="section-2">
        <h1>🇮🇳 UPI like system for 🌎 Crypto Payments</h1>
        <div className="feature-description-container">
          <div className="feature-description">
            <img src={upi1} alt="" />
            <p className="feature-description-para">Create your_id@ucpi and set 6 digit Pin</p>
          </div>
          <div className="feature-description">
            <img src={upi2} alt="" />
            <p className="feature-description-para">
              import your existing wallet or create a new one
            </p>
          </div>
          <div className="feature-description">
            <img src={upi3} alt="" />
            <p className="feature-description-para">Send crypto easily to anyone@ucpi</p>
          </div>
          <div className="feature-description">
            <img src={upi4} alt="" />
            <p className="feature-description-para">
              Receive crypto on your Id, whatsApp link or check-out Page
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
