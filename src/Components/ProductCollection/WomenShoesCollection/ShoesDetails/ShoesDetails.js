import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ShoesDetails = (props) => {
  const { category, name, price, imagesUrl, description1, description2 } = props.shoeDetailInfo;
  console.log(props)
  return (
    <>
      <div className = "container">
        <div className = "row">
          <div className = "col-md-4" >
            <div className = "detailImgCarouselDiv" >
              <Carousel className = "imgCarousel"
                interval = "1000"
                transitionTime = "1000" >
                <img src = { imagesUrl.imageUrl1 } alt = "" / >
                <img src = { imagesUrl.imageUrl2 } alt = "" / >
                <img src = { imagesUrl.imageUrl3 } alt = "" / >
                
              </Carousel> 
            </div> 
          </div> 
          <div className = "col-md-8 detail-content">
            <h3> { name } </h3> 
            <h3> $ { price } </h3> 
            <p>{description1}</p> 
          </div> 
        </div> 
      </div> 
    </>
  );
};

export default ShoesDetails;