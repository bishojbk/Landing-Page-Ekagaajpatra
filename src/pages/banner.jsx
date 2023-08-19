import React from "react";

import Less from "../assets/left.png";
import Greater from "../assets/next.png";
import Sarkar from "../assets/Sarakarlogo.png";

const banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="banner_links">
                <nav>
                  <ul>
                    <li>
                      <div className="li-lists">
                        <a href="www.google.com">All Templates</a>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">Malpot Karyalaya</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">KJilla Bikas Karayala</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      {/* <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>

                      <div className="li-lists">
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div> */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-lg-10">
              <div className="banner_sarkar">
                <div>
                  <img src={Less} alt="greater" className="less"></img>
                </div>
                <img src={Sarkar} alt="sarkar" className="sarkar-logo"></img>
                <div>
                  <img src={Greater} alt="greater" className="greater"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <a href="www.google.com">Our Department Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default banner;
