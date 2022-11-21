import React from "react";
import "./Benefits.css";

export const Benefits = () => {
  return (
    <section className="section-5">
      <div className="text-container">
        <h2>UCPI Benefits</h2>
        <h1>How can we help your business?</h1>
      </div>
      <div className="cards-container">
        <div className="card">
          <h2 className="card-heading">Universal Crypto Payment Address</h2>
          <p className="card-para">
            Your I'd can merge all your different public wallet addresses across
            multiple Blockchains, making it truly universal. Also you can make
            different ids for different use cases for same or different wallet
            addresses.
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Crypto Payments made simple</h2>
          <p className="card-para">
            No need to copy paste multiple wallet addresses or scan QR codes to
            make payments. Sending crypto becomes as easy as logging into your
            email with you UCPI id and a 6 digit PIN.
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Making wallets interoperable</h2>
          <p className="card-para">
            Wallets can integrate Ucpi to become interoperable and multi-chain.
            You can access all other wallets within your favourite wallet. Ex:
            you can Access your metamask addresses in your Phantom wallet and
            vice versa.
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Easy Crypto powered commerce</h2>
          <p className="card-para">
            With One simple integration, online stores get a Pay-via- Crypto
            option on their checkout page, and freelancers get a sharable link
            to accept crypto payments. Track all your payments against the
            customer and order ids on a single dashboard.
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Crypto balance stays private</h2>
          <p className="card-para">
            Just like your bank balance, keep your wallet balance and day to day
            transactions private
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Ucpi ids @your_brand_name</h2>
          <p className="card-para">
            Become a csp and enable ur users to create ucpi id on your own brand
            name (like .eth, .crypto, etc)
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">
            Non - Custodial , you own your crypto
          </h2>
          <p className="card-para">
            We don't take custody of your crypto, it always stays on your
            wallets - promise.
          </p>
        </div>
        <div className="card">
          <h2 className="card-heading">Instant crypto swap</h2>
          <p className="card-para">Swap your crypto anytime - that's it !</p>
        </div>
      </div>
    </section>
  );
};
