import React from "react";
import "./Showcase.css";
import dressImg from "../../assets/images/img_6_1.jpg";
import bra from "../../assets/images/shal.png";
import Shoes from "../../assets/images/shoes.png";
// import sharee from "../../assets/images/218922993_4123340901075918_4473417175879126911_n.jpg";
// import woman from "../../assets/images/img_2_2.jpg";

import bag from "../../assets/images/img_2_1.jpg";
import winterDress from "../../assets/images/winter dress.png";
import nacklace from "../../assets/images/necklace_PNG44.png";

const Showcase = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="sliderContainer">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row d-flex mt-5">
                      <div className="col-md-5 d-flex align-items-center">
                        <div className="sliderOne">
                          <h1>TREND DESIGN COLLECTION</h1>
                          <p>New Collection For Winter</p>
                          <button id="shopBtn">Shop Now</button>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img className="dressImg" src={dressImg} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row d-flex mt-5">
                      <div className="col-md-5 d-flex align-items-center">
                        <div className="sliderTwo">
                          <h1>TREND DESIGN COLLECTION</h1>
                          <p>New Collection For Winter</p>
                          <button id="shopBtn">Shop Now</button>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img className="bagImg" src={bag} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row d-flex mt-5">
                      <div className="col-md-5 d-flex align-items-center">
                        <div className="sliderThree mt-5">
                          <h1>TREND DESIGN COLLECTION</h1>
                          <p>New Collection For Winter</p>
                          <button id="shopBtn">Shop Now</button>
                        </div>
                      </div>
                      <div className="col-md-7 mt-5 ShoesDiv">
                        <img className="nacklaceImg mt-5" src={Shoes} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="braDiv">
              <a href="/women/hoodie">
                <img className="braImg" src={bra} alt="" />
              </a>
              <div className="mt-5">
                <h6>Spring <br/>Collection</h6>
              </div>
            </div>
            <div className="winterDressDiv">
              <a href="/women/sweater">
              <img className="winterDressImg" src={winterDress} alt="" />
              </a>
              <div className="mt-5">
                <h6>Winter <br/>Collection</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
