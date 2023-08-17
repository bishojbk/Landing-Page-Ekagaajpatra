import React from "react";

import Less from "../assets/less.png";
import Greater from "../assets/greater.png";
import Sarkar from "../assets/Sarakarlogo.png";

const banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="banner_links">
                <nav>
                  <ul>
                    <li>
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
                        <a href="www.google.com">OCR</a>
                        <img src={Greater} alt="greater"></img>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="banner_sarkar">
                <div>
                  <img src={Less} alt="greater" className="less"></img>
                </div>
                <img src={Sarkar} alt="sarkar"></img>
                <div>
                  <img src={Greater} alt="greater" className="greater"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default banner;
