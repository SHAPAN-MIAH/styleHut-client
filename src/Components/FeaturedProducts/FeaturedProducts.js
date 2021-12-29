import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
import ItemsCarousel from 'react-items-carousel';
import ProductsItem from "./ProductsItem";
import './FeaturedProducts.css'


const FeaturedProducts = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menJackets")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/sweaters")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/hoodies")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:5000/womenShoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container FeaturedSection">
        <div className="FeaturedHeading">
          <h1>Featured Products</h1>
        </div>
        <div className="row" style={{width: '95%', margin: 'auto'}}>
          <ItemsCarousel 
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<button className="leftArrowBtn">{'<'}</button>}
          rightChevron={<button className="RightArrowBtn">{'>'}</button>}
          autoplay={true}
        >
            {products.map(product =>
              <ProductsItem key={product.key} product={product}></ProductsItem>
            )}
          </ItemsCarousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
