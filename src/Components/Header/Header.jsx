import React from "react";
import "./Header.css";
import { ScrollTo } from "react-scroll-to/dist";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo-heading">UCPI</p>
      </div>
      <div className="nav">
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 0, smooth: true })}
            >
              Home
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1000, smooth: true })}
            >
              About
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1700, smooth: true })}
            >
              Benefits
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 3500, smooth: true })}
            >
              Know More
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ x: 20, y: 500, smooth: true })}
            >
              Portfolio
            </a>
          )}
        </ScrollTo>

        <button className="nav-btn">Get in touch</button>
      </div>
    </div>
  );
};
