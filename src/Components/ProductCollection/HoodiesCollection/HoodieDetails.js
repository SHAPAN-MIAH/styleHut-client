import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './HoodieDetails.css'


const HoodieDetails = (props) => {
  console.log(props)
  const { category, name, price, imagesUrl } = props.hoodieDetailInfo;
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
                <img src = { imagesUrl.imageUrl4 } alt = "" / >
                
              </Carousel> 
            </div> 
          </div> 
          <div className = "col-md-8 detail-content">
            <h3> { name } </h3> 
            <h3> $ { price } </h3> 
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus. <br/> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?
            </p> 
          </div> 
        </div> 
      </div> 
    </>
  );
};

export default HoodieDetails;