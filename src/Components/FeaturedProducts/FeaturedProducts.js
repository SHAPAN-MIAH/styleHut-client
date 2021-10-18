import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
import ItemsCarousel from 'react-items-carousel';
import ProductsItem from "./ProductsItem";
import './FeaturedProducts.css'

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 450, itemsToShow: 2 },
//   { width: 550, itemsToShow: 2 },
//   { width: 650, itemsToShow: 3 },
//   { width: 768, itemsToShow: 4 },
//   { width: 968, itemsToShow: 4 },
//   { width: 1200, itemsToShow: 4 },
// ];

const FeaturedProducts = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container FeaturedSection">
        <div className="FeaturedHeading">
          <h1>Featured Products</h1>
        </div>
        <div className="row" style={{width: '90%', margin: 'auto'}}>
          <ItemsCarousel 
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button className="leftArrowBtn">{'<'}</button>}
          rightChevron={<button className="RightArrowBtn">{'>'}</button>}
          autoplay={true}
        
        // breakPoints={breakPoints}
        >
            {products.map(product =>
              <ProductsItem key={product.key} product={product}></ProductsItem>
            )}
          </ItemsCarousel>
          {/* <Carousel breakPoints={breakPoints}>
            {products.map(product =>
              <ProductsItem key={product.key} product={product}></ProductsItem>
            )}
          </Carousel> */}

          
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
