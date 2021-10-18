import React, { useState, useEffect } from 'react';
import {Carousel} from '3d-react-carousal';
import ProductsItem from '../FeaturedProducts/ProductsItem';
import './WhatHot.css'
import lingerie from '../../assets/images/lingerie-category-image-01.jpg';
// import lingerie from '../../assets/images/86ba212a-de23-4c2c-bb64-b4e12dadd8d3.png';


const WhatHot = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return(

    <>
      <div className="saleOffSection">
        <div className="container">
          <div className='hotHeading'>
            <h1>Hot Sale</h1>
          </div>
          <div className="row">
        
            <div className="col-md-5 carouselDiv">
              <div className="carousel">
                <Carousel 
                  slides={products.map(product =>
                    <ProductsItem key={product.key} product={product}></ProductsItem>
                  )}
                  interval={2000}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="saleOff">
                <img src={lingerie} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatHot;