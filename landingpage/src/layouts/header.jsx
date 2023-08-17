import React from "react";

import Search from "../assets/search-icon.png";

const header = () => {
  return (
    <div>
      <section className="header">
        <div className="header-upper">
          <div className="container">
            <h3>E-Kagajpatra</h3>
            <div className="search-bar">
              <img src={Search} alt="search"></img>
              <input type="text" placeholder="Search Services"></input>
            </div>
            <span>
              <a href="www.google.com">Login</a> |{" "}
              <a href="www.google.com"> Register </a>
            </span>
          </div>

          <div className="header-lower">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <a href="www.google.com">About Us</a>
                    <a href="www.google.com">Contact Us</a>
                    <a href="www.google.com">Support</a>
                    <a href="www.google.com">Refund Policy</a>
                    <a href="www.google.com">Our Client Story</a>
                    <a href="www.google.com">Contribution & Earn</a>
                    <a href="www.google.com">Terms & Conditions</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default header;
