import React from "react";
import "./Products.css";
import webChain from "../images/Products/web-chain.jpg";

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="black">
        <div className="text-container">
          <p>What we have been upto.</p>
          <h1>Our Products</h1>
        </div>
        <div className="products-container">
          <div className="product">
            <img className="product-img" src={webChain} alt="" />
            <h1 className="product-heading">DAuth</h1>
            <p className="product-para">
              A decentralized protocol to Authenticate WEB2 Ids on-chain. No
              single point of failure - be secured yet free of keys baggage and
              frictionless.
            </p>
            <button className="product-btn">
              <a href="https://authxui.vercel.app/" target="_blank">
                Visit
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
