import React from 'react';
import Swterimg from "../../assets/images/product-clothes-15_ccda53b5-213e-4168-82fd-6d02c77dac26.jpg";
import Braimg from "../../assets/images/sand-tell-me-when-underbust-knit-bralette-crop-top_adobespark.png";
import './NewArrivals.css'
import jacket from '../../assets/images/ash jacket.jpg'

const NewArrivals = () => {
  return (
    <>
      <div className="container newArrival-container">
        <h1 className="Arrival-heading">New Arrivals</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="ArrivalsDiv">
              <img src='https://cdn.shopify.com/s/files/1/0326/6517/4152/products/121_720x.jpg?v=1623831042' alt=""/>
              {/* <img src='https://cdn.shopify.com/s/files/1/0326/6517/4152/products/11_360x.jpg?v=1623831496' alt=""/> */}
              {/* <img src='https://cdn.shopify.com/s/files/1/0326/6517/4152/products/61002531_070_a_360x.jpg?v=1623832154' alt=""/> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className=" ArrivalsDiv2">
              <div className="arrival-Bra">
              <img src={Swterimg} alt=""/>
              {/* <img src='https://cdn.shopify.com/s/files/1/0270/2098/4401/files/02_13614218-9430-40e7-9ed4-c0532250d510_720x.jpg?v=1601431407' alt=""/> */}
              </div>
              <div className="arrival-shoes arrival-shoes2">
              <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/8827388-1-white_720x.jpeg?v=1582545982' alt=""/>
              {/* <img src='https://cdn.shopify.com/s/files/1/0270/2098/4401/files/04_6a3f1590-e9c4-42c1-99c6-6fe124e20bed_720x.jpg?v=1601431434' alt=""/> */}
              </div>
              {/* <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/SK2042988-5080-1_998x1498_bd6dbd5e-a89e-4b6d-88b5-3e71b00d2372_540x.jpg?v=1593585838" alt=""/> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="ArrivalsDiv ArrivalsDiv3">
            <img src={jacket} alt=""/>
            {/* <img src='https://cdn.shopify.com/s/files/1/0326/6517/4152/products/11_360x.jpg?v=1623831496' alt=""/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;