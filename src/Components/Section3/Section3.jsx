import React from "react";
import ethereum from "../images/Blockchains/ethereum.png";
import polygon from "../images/Blockchains/polygon.png";
import tron from "../images/Blockchains/tron.png";
import solana from "../images/Blockchains/solana.png";
import binance from "../images/Blockchains/binance.png";

import "./Section3.css";

export const Section3 = () => {
  return (
    <section className="section-3">
      <div className="headings">
        <h2>Your_id@ucpi or Your_id@brand_name</h2>
        <h1>Supported BlockChains</h1>
      </div>
      <div className="blockchain-container">
        <div className="blockchain">
          <img src={ethereum} alt="" />
          <p>Ethereum</p>
        </div>
        <div className="blockchain">
          <img src={polygon} alt="" />
          <p>Polygon</p>
        </div>
        <div className="blockchain">
          <img src={tron} alt="" />
          <p>Tron</p>
        </div>
        <div className="blockchain">
          <img src={solana} alt="" />
          <p>Solana</p>
        </div>
        <div className="blockchain">
          <img src={binance} alt="" />
          <p>Binance</p>
        </div>
      </div>
    </section>
  );
};
