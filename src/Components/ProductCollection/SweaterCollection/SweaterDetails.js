import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./SweaterDetail.css";
import Zoom from 'react-img-zoom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { addToCart } from './../../Redux/Actions/CartAction';
import { useDispatch } from "react-redux";

const SweaterDetails = (props) => {
    const { category, name, price, imagesUrl } = props.sweaterDetailInfo;

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
          <div className = "col-sm-8 detail-content">
            <div div className='ditailsContent'>
              <h4 className='productName'> { name } </h4> 
              <h4 className='prices'> $ { price } </h4> 
              <div className='mb-3 rating'>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>
                <span><FontAwesomeIcon icon={faStar} /></span>

                <small>(146 Reviews)</small>
              </div>
      
              <div className='about-div' style={{margin: '10px 0px'}}>
                <h5>About this item</h5>
                {/* <p>{description1}</p> 
                <p>{description2}</p>  */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.</p> 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?</p> 
              </div>
              
              <div className='qbtn-div' style={{marginBottom: '20px'}}>
                <div className='quantity'>
                  <span onClick={()=> setQuantityCount(quantityCount > 1 ? quantityCount - 1 : quantityCount)} className='minus'>-</span>
                  <span className='count-number'>{quantityCount}</span>
                  <span onClick={()=> setQuantityCount(quantityCount + 1)} className='plus'>+</span>
                </div>
                <button onClick={() => dispatch(addToCart(props.sweaterDetailInfo))}><span><FontAwesomeIcon icon={faCartPlus} /></span> Add To Cart</button>
                
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

export default SweaterDetails;