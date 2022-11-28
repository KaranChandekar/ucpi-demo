import React from "react";
import "./BookADemo.css";

const BookADemo = () => {
  return (
    <section className="book-demo">
      <div className="black">
        <div className="text-container">
          <p>Get Started</p>
          <h5>Book a demo with UCPI today and unlock your Web3 stack</h5>
        </div>
        <form className="form">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Company Name" />
            <button className="btn">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default BookADemo;
