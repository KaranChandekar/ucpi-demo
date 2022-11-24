import React from "react";
import ethereum from "../images/Blockchains/ethereum.png";
import polygon from "../images/Blockchains/polygon.png";
import tron from "../images/Blockchains/tron.png";
import solana from "../images/Blockchains/solana.png";
import binance from "../images/Blockchains/binance.png";

import "./SupportedBlockChains.css";

export const SupportedBlockChains = () => {
  return (
    <section className="supported-blockchains-section">
      <div className="container">
        <div className="headings">
          <p>Your_id@ucpi or Your_id@brand_name</p>
          <h1>Supported BlockChains</h1>
        </div>
        <div className="blockchain-container">
          <div className="blockchain">
            <img src={ethereum} alt="" />
          </div>
          <div className="blockchain">
            <img src={polygon} alt="" />
          </div>
          <div className="blockchain">
            <img src={tron} alt="" />
          </div>
          <div className="blockchain">
            <img src={solana} alt="" />
          </div>
          <div className="blockchain">
            <img src={binance} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
