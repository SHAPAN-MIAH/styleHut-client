import { faCartPlus, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
// import Item from "./Item";
import './ProductsItem.css'


const ProductsItem = (props) => {
  console.log(props);
  const { name, imagesUrl, price, _id} = props.product;

  const history = useHistory()

  const handleHoodieDetails = id => {
    console.log("clicked", id);
    history.push(`/hoodieDetail/${id}`)

  }

  return (
    <>
    {/* <div className="product">
      <img src={imagesUrl.imageUrl1} alt=""/>
    </div>
    <div className='interactionDiv'>
      <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
      <div className='interaction-container d-flex'><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
      <div className='interaction-container d-flex'><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
    </div>      
    <p>{name}</p>
    <p>{price}</p> */}

    <div>
      <div className="jacketDiv">
        <span onClick={() => handleHoodieDetails(_id)}>
          <div className="productImg">
            <img  src={imagesUrl.imageUrl1} alt=""/>
          </div>
        </span>
        <div className='interactionDiv'>
          <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
          <div className='interaction-container d-flex'><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
          <div className='interaction-container d-flex'><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
        </div>
      </div>
      <div>
        <small className="jacket-name">{name}</small>
        <br/>
        <small className="price">${price}</small>
      </div>
    </div>
    </>
  );
};

export default ProductsItem;
