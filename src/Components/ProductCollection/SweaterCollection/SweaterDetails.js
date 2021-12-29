import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./SweaterDetail.css";
import Zoom from 'react-img-zoom'

const SweaterDetails = (props) => {
    const { category, name, price, imagesUrl } = props.sweaterDetailInfo;

  return ( 
    <>
      <div className = "container">
        <div className = "row">
          <div className = "col-md-4" >
            <div className = "detailImgCarouselDiv" >
              <Carousel className = "imgCarousel"
                interval = "1000"
                transitionTime = "1000" >
                {/* <img src = { imagesUrl.imageUrl1 } alt = "" / >
                <img src = { imagesUrl.imageUrl2 } alt = "" / >
                <img src = { imagesUrl.imageUrl3 } alt = "" / > */}

                <Zoom
                  img={ imagesUrl.imageUrl1 }
                  zoomScale={2}
                  width={430}
                  height={600}
                />
                <Zoom
                  img={ imagesUrl.imageUrl2 }
                  zoomScale={2}
                  width={430}
                  height={600}
                />
                <Zoom
                  img={ imagesUrl.imageUrl3 }
                  zoomScale={2}
                  width={430}
                  height={600}
                />
                
              </Carousel> 
            </div> 
          </div> 
          <div className = "col-md-8 detail-content">
            <h3> { name } </h3> 
            <h3> $ { price } </h3> 
            
            <p>Regular fit, round neckline, long sleeves.100 % cotton, brushed inner side for extra comfort.</p> 
          </div> 
        </div> 
      </div> 
    </>
  );
};

export default SweaterDetails;