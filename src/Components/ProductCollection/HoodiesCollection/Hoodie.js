import React from 'react';
import './Hoodie.css'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Hoodie = (props) => {
  const { name, price, imagesUrl, _id} =props.hoodie;

  const history = useHistory()

  const handleHoodieDetails = id => {
    console.log("clicked", id);
    history.push(`/hoodieDetail/${id}`)

  }
  return (
    <div>
      <div className="hoodieDiv">
        <span onClick={() => handleHoodieDetails(_id)}>
          <div className="hoodieImg">
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
        <small className="hoodie-name">{name}</small>
        <br/>
        <small className="price">${price}</small>
      </div>
    </div>
  );
};

export default Hoodie;