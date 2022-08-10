import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import "./ShoesDetails.css"
import Zoom from 'react-img-zoom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../Redux/Actions/CartAction';


const ShoesDetails = (props) => {
  const { category, name, price, imagesUrl, description1, description2 } = props.shoeDetailInfo;
  console.log(props)
  const [quantityCount, setQuantityCount] = useState(1);
  const dispatch = useDispatch()

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
            <div className='ditailsContent'>
              <h2 className='productName'> { name } </h2> 
              <h3 className='prices'> $ { price } </h3> 
              <div className='mb-3 rating'>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>

                <small>(146 Reviews)</small>
              </div>
      
              <div className='about-div'>
                <h4>About this item</h4>
                <p>{description1}</p> 
                <p>{description2}</p> 
              </div>
              <br/>
              <div className='qbtn-div'>
                <div className='quantity'>
                  <span onClick={()=> setQuantityCount(quantityCount > 1 ? quantityCount - 1 : quantityCount)} className='minus'>-</span>
                  <span className='count-number'>{quantityCount}</span>
                  <span onClick={()=> setQuantityCount(quantityCount + 1)} className='plus'>+</span>
                </div>
                <button onClick={() => dispatch(addToCart(props.shoeDetailInfo))}><span><FontAwesomeIcon icon={faCartPlus} /></span> Add To Cart</button>
                
              </div>
              <div className='share-addWishList d-flex'>
                <div className='share-div'>
                  
                  <span><FontAwesomeIcon icon={faFacebook} /></span>
                  <span><FontAwesomeIcon icon={faTwitter} /></span>
                  <span><FontAwesomeIcon icon={faInstagram} /></span>
                  <span><FontAwesomeIcon icon={faPinterest} /></span>
                </div>
                <div className='addwlt-c-shop-btn'>
                  <button><span><FontAwesomeIcon icon={faHeart} /></span> Add To Wishlist</button>
                  <button> <span><FontAwesomeIcon icon={faShoppingCart} /></span> Continue Shopping</button>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </div> 
    </>
  );
};

export default ShoesDetails;