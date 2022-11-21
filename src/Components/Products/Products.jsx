import React from "react";
import "./Products.css";
import webChain from "../images/Products/web-chain.jpg";

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="text-container">
        <h2>What we have been upto.</h2>
        <h1>Our Products</h1>
      </div>
      <div className="product-container">
        <div className="product-description">
          <h1 className="product-heading">DAuth</h1>
          <div className="para-wrapper">
            <p className="product-para">
              A decentralized protocol to Authenticate WEB2 Ids on-chain.
            </p>
            <p className="product-para">
              No single point of failure - be secured yet free of keys baggage and frictionless.
            </p>
          </div>
          <a
            className="product-link"
            href="https://authxui.vercel.app/"
            target="_blank"
          >
            Visit
          </a>
        </div>
        <div className="product-demo">
          <img className="product-img" src={webChain} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Products;
