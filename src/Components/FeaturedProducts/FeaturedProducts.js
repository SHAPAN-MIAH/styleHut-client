import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
import ItemsCarousel from 'react-items-carousel';
import ProductsItem from "./ProductsItem";
import './FeaturedProducts.css'


const FeaturedProducts = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [sweaters, setSweaters] = useState([]);
  const [hoodies, setHoodies] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("https://protected-crag-98903.herokuapp.com/menJackets")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://protected-crag-98903.herokuapp.com/sweaters")
      .then((res) => res.json())
      .then((data) => setSweaters(data));
  }, []);

  useEffect(() => {
    fetch("https://protected-crag-98903.herokuapp.com/hoodies")
      .then((res) => res.json())
      .then((data) => setHoodies(data));
  }, []);
  
  useEffect(() => {
    fetch("https://protected-crag-98903.herokuapp.com/womenShoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);


  // const allProducts = jackets;
  // setProducts(jackets)

  // console.log(allProducts)

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
