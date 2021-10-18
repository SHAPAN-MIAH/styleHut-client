import React from 'react';
import img from "../../assets/images/img_2_2.jpg";
import './ProductCollection.css'

const ProductCollection = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <a href="">
            <div className="productCollectionDiv">
            <img src={img} alt=""/>
            </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
            <div className="productCollectionDiv">
            <img src={img} alt=""/>
            </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
            <div className="productCollectionDiv">
            <img src={img} alt=""/>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCollection;