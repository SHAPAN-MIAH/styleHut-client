import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SweaterDetails = (props) => {
  const {category, name, price, imagesUrl} =props.sweaterInfo;
  
  return (
    <>
      <h1>{category}</h1>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <Carousel  interval="1000" transitionTime="1000">
      <img src={imagesUrl.imageUrl1} alt=""/>
      <img src={imagesUrl.imageUrl2} alt=""/>
      <img src={imagesUrl.imageUrl3} alt=""/>
      </Carousel>
    </>
  );
};

export default SweaterDetails;